"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { ProductDetail } from "@/lib/product-data";
import { useEffect, useState } from "react";

interface ProductModalProps {
  product: ProductDetail | null;
  fallbackName?: string;
  fallbackSubtitle?: string;
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, fallbackName, fallbackSubtitle, imageSrc, isOpen, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<'specifications' | 'comparison'>('specifications');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const displayName = product?.name || fallbackName;
  const displaySubtitle = product?.title || fallbackSubtitle;

  if (!displayName && !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none"
          >
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl relative">
              
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-white/5 bg-[#111111]">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-serif text-white">{displayName}</h2>
                  {displaySubtitle && (
                    <p className="text-sm text-white/50 mt-1 uppercase tracking-wider">{displaySubtitle}</p>
                  )}
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111111] border border-white/5 flex items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={displayName || "Product"}
                      width={600}
                      height={400}
                      className="object-contain w-full h-full p-4"
                    />
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white border-b border-white/10 pb-2 mb-4">Overview</h3>
                    {product && product.description.length > 0 ? (
                      <ul className="space-y-3">
                        {product.description.map((desc, idx) => (
                          <li key={idx} className="text-sm text-white/70 leading-relaxed flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E60000] mt-1.5 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-white/50 italic">Detailed overview is not yet available for this product.</p>
                    )}
                  </div>
                </div>

                {/* Tabs */}
                {(product?.specifications || product?.comparisonTable) && (
                  <div className="mt-12">
                    <div className="flex items-center gap-8 border-b border-white/10 mb-8">
                      {product?.specifications && product.specifications.length > 0 && (
                        <button 
                          onClick={() => setActiveTab('specifications')}
                          className={`pb-4 text-xl font-serif transition-colors relative ${activeTab === 'specifications' ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                        >
                          Specifications
                          {activeTab === 'specifications' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60000]" />
                          )}
                        </button>
                      )}
                      {product?.comparisonTable && (
                        <button 
                          onClick={() => setActiveTab('comparison')}
                          className={`pb-4 text-xl font-serif transition-colors relative ${activeTab === 'comparison' ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                        >
                          Comparison
                          {activeTab === 'comparison' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60000]" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                      {activeTab === 'specifications' && product?.specifications && product.specifications.length > 0 && (
                        <motion.div
                          key="specifications"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-8"
                        >
                          {product.specifications.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-lg font-medium text-[#E60000] mb-4 bg-[#E60000]/10 inline-block px-3 py-1 rounded">{section.category}</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {section.specs.map((spec, specIdx) => (
                                  <div key={specIdx} className="border-b border-white/5 pb-3">
                                    <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">{spec.label}</span>
                                    <span className="block text-sm text-white/90 leading-relaxed">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {activeTab === 'comparison' && product?.comparisonTable && (
                        <motion.div
                          key="comparison"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-x-auto custom-scrollbar rounded-lg border border-white/10"
                        >
                          <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                              <tr className="border-b border-white/10 bg-[#1A1A1A]">
                                {product.comparisonTable.headers.map((header, idx) => (
                                  <th key={idx} className="py-2.5 px-3 font-medium text-[#E60000] align-middle">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-[#111111]">
                              {product.comparisonTable.rows.map((row, rowIdx) => (
                                <tr key={rowIdx} className="hover:bg-white/[0.02] transition-colors">
                                  <td className="py-2.5 px-3 text-white/80 font-medium whitespace-normal border-r border-white/5 min-w-[120px]">{row.label}</td>
                                  {row.values.map((val, colIdx) => (
                                    <td key={colIdx} className="py-2.5 px-3 text-white/60 whitespace-normal align-top leading-relaxed min-w-[100px]">
                                      {val}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
