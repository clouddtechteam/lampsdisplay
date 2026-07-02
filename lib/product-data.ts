export interface ProductDetail {
  id: string;
  name: string;
  title: string;
  description: string[];
  features: string[];
  specifications: {
    category: string;
    specs: { label: string; value: string }[];
  }[];
  comparisonTable?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
  };
}

export const productDetails: Record<string, ProductDetail> = {
  "LP-RIA1.95-RE": {
    id: "LP-RIA1.95-RE",
    name: "LP-RIA1.95-RE",
    title: "General Indoor Rental LED",
    description: [
      "The module adopts GOB technology to effectively prevent collision.7680Hz high refresh rate,16 bits high grayscale.",
      "The module supports front and rear maintenance, more convenient operation.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA1.95-RE" },
          { label: "Pixel Pitch", value: "1.953mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "262,144 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "128×128 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "256×256 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "7680 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "600 W/m²" },
          { label: "Input Power (Avg)", value: "180 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Front & Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.61-RE": {
    id: "LP-RIA2.61-RE",
    name: "LP-RIA2.61-RE",
    title: "General Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design, flexibly adapt to multiple scenarios.",
      "The module supports front and rear maintenance, more convenient operation.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.61-RE" },
          { label: "Pixel Pitch", value: "2.604mm" },
          { label: "Pixel Type", value: "1R1G1B" },
          { label: "Pixel Configuration", value: "SMD1515" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "147,456 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "96×96 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "192×192 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Front & Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.97-RE": {
    id: "LP-RIA2.97-RE",
    name: "LP-RIA2.97-RE",
    title: "General Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design, flexibly adapt to multiple scenarios.",
      "The module supports front and rear maintenance, more convenient operation.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.97-RE" },
          { label: "Pixel Pitch", value: "2.976mm" },
          { label: "Pixel Type", value: "1R1G1B" },
          { label: "Pixel Configuration", value: "SMD2020" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "168×168 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Front & Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA3.91-RE": {
    id: "LP-RIA3.91-RE",
    name: "LP-RIA3.91-RE",
    title: "General Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design, flexibly adapt to multiple scenarios.",
      "The module supports front and rear maintenance, more convenient operation.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA3.91-RE" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Type", value: "1R1G1B" },
          { label: "Pixel Configuration", value: "SMD2020" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "128×128 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Front & Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-ROA3.91-REL": {
    id: "LP-ROA3.91-REL",
    name: "LP-ROA3.91-REL",
    title: "General Outdoor Rental LED",
    description: [
      "500x1000 mm and 500x500mm cabinet size design, flexibly adapt to multiple scenarios.",
      "High protection level, front IP65 and rear IP65.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA3.91-REL" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Type", value: "1R1G1B" },
          { label: "Pixel Configuration", value: "SMD1921" },
          { label: "Brightness (Max)", value: "4000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H140° / V140°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D83mm" },
          { label: "Cabinet Resolution", value: "128×256 dots" },
          { label: "Cabinet Weight", value: "13kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:2" },
          { label: "IP Rating", value: "Front IP65/Rear IP65" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~90%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~90%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "650 W/m²" },
          { label: "Input Power (Avg)", value: "220 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.97-RC": {
    id: "LP-RIA2.97-RC",
    name: "LP-RIA2.97-RC",
    title: "General Indoor Rental LED",
    description: [
      "Quick lock design, easier and faster installation and construction.",
      "The cabinet adopts a golden aspect ratio of 1:1.",
      "Lightweight and cost-effective."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.97-RC" },
          { label: "Pixel Pitch", value: "2.976mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2121" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "3000K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D84mm" },
          { label: "Cabinet Resolution", value: "168×168 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP30" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "4000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC220~240V (+/-10%)" },
          { label: "Input Power (Max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-ROA4.81-REL": {
    id: "LP-ROA4.81-REL",
    name: "LP-ROA4.81-REL",
    title: "General Outdoor Rental LED",
    description: [
      "500x1000 mm and 500x500mm cabinet size design, flexibly adapt to multiple scenarios.",
      "High protection level, front IP65 and rear IP65.",
      "Quick lock design, Special buckles structural connection between the cabinets. Radians support -10° ~ +10°.",
      "Support the interconnection of different forms of cabinets and 90° splicing."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA4.81-REL" },
          { label: "Pixel Pitch", value: "4.81mm" },
          { label: "Pixel Type", value: "1R1G1B" },
          { label: "Pixel Configuration", value: "SMD1921" },
          { label: "Brightness (Max)", value: "4000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H140° / V140°" },
          { label: "Pixel Density", value: "43,264 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "52×52 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D83mm" },
          { label: "Cabinet Resolution", value: "104×208 dots" },
          { label: "Cabinet Weight", value: "13kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:2" },
          { label: "IP Rating", value: "Front IP65/Rear IP65" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~90%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~90%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "650 W/m²" },
          { label: "Input Power (Avg)", value: "220 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA1.95-RC": {
    id: "LP-RIA1.95-RC",
    name: "LP-RIA1.95-RC",
    title: "General Indoor Rental LED",
    description: [
      "Quick lock design, easier and faster installation and construction.",
      "The cabinet adopts a golden aspect ratio of 1:1.",
      "Lightweight and cost-effective."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA1.95-RC" },
          { label: "Pixel Pitch", value: "1.953mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "3000K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "262,144 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "128×128 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D84mm" },
          { label: "Cabinet Resolution", value: "256×256 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP30" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "4000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC220~240V (+/-10%)" },
          { label: "Input Power (Max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.61-RC": {
    id: "LP-RIA2.61-RC",
    name: "LP-RIA2.61-RC",
    title: "General Indoor Rental LED",
    description: [
      "Quick lock design, easier and faster installation and construction.",
      "The cabinet adopts a golden aspect ratio of 1:1.",
      "Lightweight and cost-effective."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.61-RC" },
          { label: "Pixel Pitch", value: "2.604mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "3000K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "147,456 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "96×96 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D84mm" },
          { label: "Cabinet Resolution", value: "192×192 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP30" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "4000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC220~240V (+/-10%)" },
          { label: "Input Power (Max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA3.91-RC": {
    id: "LP-RIA3.91-RC",
    name: "LP-RIA3.91-RC",
    title: "General Indoor Rental LED",
    description: [
      "Stable Performance, high precision Die-cast aluminum cabinet design.",
      "Indoor HD rental screen with high refresh frequency 3840Hz.",
      "Ergonomically designed handle easy to grasp and carry.",
      "Anti-scratch mask: The salient point design of the mask enhances the crashworthiness of the module surface."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA3.91-RC" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2121" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "3000K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D84mm" },
          { label: "Cabinet Resolution", value: "128×128 dots" },
          { label: "Cabinet Weight", value: "8kg ± 0.5kg" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "Cabinet Aspect Ratio", value: "1:1" },
          { label: "IP Rating", value: "Front IP30/Rear IP30" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "4000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input power frequency", value: "50/60 Hz" },
          { label: "Input Voltage", value: "AC220~240V (+/-10%)" },
          { label: "Input Power (Max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Floor Mounted,Hanging" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; multi-mode fiber ( L≤300 m ); single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA1.95-RE-G-V2": {
    id: "LP-RIA1.95-RE-G-V2",
    name: "LP-RIA1.95-RE-G-V2",
    title: "Ultimate Convenience Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA1.95-RE-G-V2" },
          { label: "Pixel Pitch", value: "1.953mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1415 (GOB)" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "262,144 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "128×128 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "256×256 dots" },
          { label: "Cabinet Weight", value: "7.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP20/Rear IP20" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "510 W/m²" },
          { label: "Input Power (Avg)", value: "210 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Front/Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.61-RE-V2": {
    id: "LP-RIA2.61-RE-V2",
    name: "LP-RIA2.61-RE-V2",
    title: "Ultimate Convenience Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.61-RE-V2" },
          { label: "Pixel Pitch", value: "2.604mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1415" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "147,456 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "96×96 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "192×192 dots" },
          { label: "Cabinet Weight", value: "7.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP20/Rear IP20" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "510 W/m²" },
          { label: "Input Power (Avg)", value: "210 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Front/Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA2.97-RE-V2": {
    id: "LP-RIA2.97-RE-V2",
    name: "LP-RIA2.97-RE-V2",
    title: "Ultimate Convenience Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.97-RE-V2" },
          { label: "Pixel Pitch", value: "2.976mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "168×168 dots" },
          { label: "Cabinet Weight", value: "7.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP20/Rear IP20" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "510 W/m²" },
          { label: "Input Power (Avg)", value: "210 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Front/Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA3.91-RE-V2": {
    id: "LP-RIA3.91-RE-V2",
    name: "LP-RIA3.91-RE-V2",
    title: "Ultimate Convenience Indoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA3.91-RE-V2" },
          { label: "Pixel Pitch", value: "3.906mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D83mm" },
          { label: "Cabinet Resolution", value: "128×128 dots" },
          { label: "Cabinet Weight", value: "7.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP20/Rear IP20" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "510 W/m²" },
          { label: "Input Power (Avg)", value: "210 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Front/Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-ROA2.97-REL-V2": {
    id: "LP-ROA2.97-REL-V2",
    name: "LP-ROA2.97-REL-V2",
    title: "Ultimate Convenience Outdoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA2.97-REL-V2" },
          { label: "Pixel Pitch", value: "2.976mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "4500 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D83mm" },
          { label: "Cabinet Resolution", value: "168×336 dots" },
          { label: "Cabinet Weight", value: "13.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP65/Rear IP65" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "600 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-ROA3.91-REL-V2": {
    id: "LP-ROA3.91-REL-V2",
    name: "LP-ROA3.91-REL-V2",
    title: "Ultimate Convenience Outdoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design.",
      "Optional Arc-shaped lock design enable -10° ~ +10° at every 2.5° step, support ±10°, ±7.5°, ±5°, ±2.5°, 0°.",
      "Handle type quick lock design of self-locking.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA3.91-REL-V2" },
          { label: "Pixel Pitch", value: "3.906mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1921" },
          { label: "Brightness (Max)", value: "4500 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "W250mm×H250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D83mm" },
          { label: "Cabinet Resolution", value: "128×256 dots" },
          { label: "Cabinet Weight", value: "13.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP65/Rear IP65" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "600 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤300 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-RIA1.95-RF": {
    id: "LP-RIA1.95-RF",
    name: "LP-RIA1.95-RF",
    title: "Creative Flexible Indoor Rental LED",
    description: [
      "Perfect \"S\" shape of single cabinet, enable -45° ~ +45° at every 2.5° step, support ±22.5°, ±20°, ±17.5°, ±15°, ±12.5°, ±10°, ±7.5°, ±5°, ±2.5°, 0°",
      "Eight cabinets can form a circle with a diameter of only 1.27 meters",
      "Flexible cabinet can be splicing with straight cabinet, curve cabinet and corner cabinet"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA1.95-RF" },
          { label: "Pixel Pitch", value: "1.953mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1415" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "6500K-9300K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "262,144 dots/m²" },
          { label: "Module Size", value: "W500mm×H125mm" },
          { label: "Module Resolution", value: "256×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D82mm" },
          { label: "Cabinet Resolution", value: "256×256 dots" },
          { label: "Cabinet Weight", value: "6.6 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Magnesium" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "IP Rating", value: "Front IP20/Rear IP20" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate", value: "7680Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "570 W/m²" },
          { label: "Input Power (Avg)", value: "240 W/m²" },
          { label: "Installation Mode", value: "Hanging, Stacking" },
          { label: "Module Maintenance", value: "Rear Maintenance" },
          { label: "PSU & Others Maintenance", value: "Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable ( L≤100 m ) ; Multi-mode fiber ( L≤500 m ); Single-mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-EIA1.5S-C": {
    id: "LP-EIA1.5S-C",
    name: "LP-EIA1.5S-C",
    title: "LED Module",
    description: [
      "3840 refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EIA1.5S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "1.538mm" },
          { label: "Pixel Density", value: "422500dots/m²" },
          { label: "LED specification", value: "SMD 1212" },
          { label: "Pixel resolution", value: "208dots(W)*104dots(H)" },
          { label: "Weight", value: "0.5kg/pcs" },
          { label: "Viewing angle", value: "140°(H)/130°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "550 nits" },
          { label: "Working Voltage", value: "DC 4.2~5V" },
          { label: "Max Power consumption", value: "22.4W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Working Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" }
        ]
      }
    ]
  },
  "LP-EIA1.2S-C": {
    id: "LP-EIA1.2S-C",
    name: "LP-EIA1.2S-C",
    title: "LED Module",
    description: [
      "3840 refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EIA1.2S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "1.25mm" },
          { label: "Pixel Density", value: "640000dots/m²" },
          { label: "LED specification", value: "SMD 1010" },
          { label: "Pixel resolution", value: "256dots(W)*128dots(H)" },
          { label: "Weight", value: "0.5kg/pcs" },
          { label: "Viewing angle", value: "140°(H)/130°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "550 nits" },
          { label: "Working Voltage", value: "DC 4.2~5V" },
          { label: "Max Power consumption", value: "25W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Working Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" }
        ]
      }
    ]
  },
  "LP-EIA1.8S-C": {
    id: "LP-EIA1.8S-C",
    name: "LP-EIA1.8S-C",
    title: "LED Module",
    description: [
      "3840 refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EIA1.8S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "1.86mm" },
          { label: "Pixel Density", value: "288906dots/m²" },
          { label: "LED specification", value: "SMD 1515" },
          { label: "Pixel resolution", value: "172dots(W)*86dots(H)" },
          { label: "Weight", value: "0.42kg/pcs" },
          { label: "Viewing angle", value: "140°(H)/130°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "550 nits" },
          { label: "Working Voltage", value: "DC 4.2~5V" },
          { label: "Max Power consumption", value: "25W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Working Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" }
        ]
      }
    ]
  },
  "LP-EIA2S-C": {
    id: "LP-EIA2S-C",
    name: "LP-EIA2S-C",
    title: "LED Module",
    description: [
      "3840 refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EIA2S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "2mm" },
          { label: "Pixel Density", value: "250000dots/m²" },
          { label: "LED specification", value: "SMD 1515" },
          { label: "Pixel resolution", value: "160dots(W)*80dots(H)" },
          { label: "Weight", value: "0.42kg/pcs" },
          { label: "Viewing angle", value: "140°(H)/130°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "550 nits" },
          { label: "Working Voltage", value: "DC 4.2~5V" },
          { label: "Max Power consumption", value: "25W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Working Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" }
        ]
      }
    ]
  },
  "LP-EIA2.5S-C": {
    id: "LP-EIA2.5S-C",
    name: "LP-EIA2.5S-C",
    title: "LED Module",
    description: [
      "3840 refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EIA2.5S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "2.5mm" },
          { label: "Pixel Density", value: "160000dots/m²" },
          { label: "LED specification", value: "SMD 2121" },
          { label: "Pixel resolution", value: "128dots(W)*64dots(H)" },
          { label: "Weight", value: "0.42kg/pcs" },
          { label: "Viewing angle", value: "140°(H)/130°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "550 nits" },
          { label: "Working Voltage", value: "DC 4.2~5V" },
          { label: "Max Power consumption", value: "25W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Indoor" },
          { label: "Working Temperature/Humidity", value: "-10℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" }
        ]
      }
    ]
  },
  "LP-EOA2.5S-C": {
    id: "LP-EOA2.5S-C",
    name: "LP-EOA2.5S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA2.5S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "2.5mm" },
          { label: "Pixel Density", value: "160000dots/m²" },
          { label: "LED specification", value: "SMD 1515" },
          { label: "Pixel resolution", value: "128dots(W)*64dots(H)" },
          { label: "Weight", value: "0.40kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "5000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA3S-C": {
    id: "LP-EOA3S-C",
    name: "LP-EOA3S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA3S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "3.076mm" },
          { label: "Pixel Density", value: "105625dots/m²" },
          { label: "LED specification", value: "SMD 1515" },
          { label: "Pixel resolution", value: "104dots(W)*52dots(H)" },
          { label: "Weight", value: "0.40kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "5000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA4S-C": {
    id: "LP-EOA4S-C",
    name: "LP-EOA4S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA4S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "4mm" },
          { label: "Pixel Density", value: "62500dots/m²" },
          { label: "LED specification", value: "SMD 1921" },
          { label: "Pixel resolution", value: "80dots(W)*40dots(H)" },
          { label: "Weight", value: "0.44kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "5000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA5S-C": {
    id: "LP-EOA5S-C",
    name: "LP-EOA5S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA5S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "5mm" },
          { label: "Pixel Density", value: "40000dots/m²" },
          { label: "LED specification", value: "SMD 1921" },
          { label: "Pixel resolution", value: "64dots(W)*32dots(H)" },
          { label: "Weight", value: "0.44kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "5000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA6S-C": {
    id: "LP-EOA6S-C",
    name: "LP-EOA6S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA6S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "6.67mm" },
          { label: "Pixel Density", value: "22500dots/m²" },
          { label: "LED specification", value: "SMD 2727" },
          { label: "Pixel resolution", value: "48dots(W)*24dots(H)" },
          { label: "Weight", value: "0.46kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "4000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA8S-C": {
    id: "LP-EOA8S-C",
    name: "LP-EOA8S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA8S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "8mm" },
          { label: "Pixel Density", value: "15625dots/m²" },
          { label: "LED specification", value: "SMD 3535" },
          { label: "Pixel resolution", value: "40dots(W)*20dots(H)" },
          { label: "Weight", value: "0.47kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "4000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-EOA10S-C": {
    id: "LP-EOA10S-C",
    name: "LP-EOA10S-C",
    title: "LED Module",
    description: [
      "High refresh rate to meet a wide range of application scenarios",
      "Brand lamp beads, the picture consistency is high",
      "Flame-retardant materials offer safety and reliability",
      "Support point-by-point correction, uniform brightness and color"
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Product Mode", value: "IFS-EOA10S-C" },
          { label: "Module size", value: "320mm(W)×160mm(H)" },
          { label: "Pixel pitch", value: "10mm" },
          { label: "Pixel Density", value: "10000dots/m²" },
          { label: "LED specification", value: "SMD 3535" },
          { label: "Pixel resolution", value: "32dots(W)*16dots(H)" },
          { label: "Weight", value: "0.44kg/pcs" },
          { label: "Viewing angle", value: "120°(H)/120°(V)" },
          { label: "Pixel configuration", value: "1R1G1B" },
          { label: "Max Brightness", value: "5000 nits" },
          { label: "Working Voltage", value: "DC 5V" },
          { label: "Max Power consumption", value: "40W" },
          { label: "Refresh Frequency", value: "3840Hz" },
          { label: "Operating Environment", value: "Outdoor" },
          { label: "Working Temperature/Humidity", value: "-20℃~+50℃/10~85%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~85%RH" }
        ]
      }
    ]
  },
  "LP-MIA108-EH": {
    id: "LP-MIA108-EH",
    name: "LP-MIA108-EH",
    title: "Indoor ALL-In-One LED",
    description: [
      "Global ultra-thin design (35mm), color saturation more than 97%.",
      "Support wireless projection, multi-screen networking interaction, one screen and multiple display.",
      "User-level installation and maintenance, no need for secondary renovation, no need for rear maintenance access.",
      "Rich interface compatibility: USB interface, HDMI input and output, RJ45 network port, infrared remote control, etc., support WIFI, Bluetooth, Ethernet multiple network transmission methods."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA108-EH" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Operating system", value: "Android 8.0" },
          { label: "Core configuration", value: "Quad-core CPU/Mali Y811 (GPU) / 4G memory / 32G storage (expandable)" },
          { label: "Display size", value: "108 inch" },
          { label: "Resolution", value: "1920×1080P" },
          { label: "Brightness", value: "100-600cd/m²(8 levels adjustable)" },
          { label: "Display size", value: "2400mm x 1350mm" },
          { label: "Contrast", value: "6000:1" },
          { label: "Viewing angle", value: "160°(H)/160°(V)" },
          { label: "Response time", value: "<0.5ms(Typ)" },
          { label: "Video interface", value: "HDMI(x2 in 1 out) ,USB 2.0x1, USB 3.0x2" },
          { label: "Audio interface", value: "Built-in 2x5W speakers,external Audio x 1 interface" },
          { label: "Control interface", value: "RJ45x1,USB Bx1, Bluetooth, WIFI, Bluetooth remote control" },
          { label: "Input voltage", value: "100-240V~50/60Hz" },
          { label: "Gray level", value: "14 bits" },
          { label: "Refresh frequency", value: "3840Hz" },
          { label: "Overall size", value: "2420mm x 1468 mm x 35mm (Without base)" },
          { label: "Net weight", value: "88kg" },
          { label: "Power consumption", value: "≤ 480W(Average) / ≤1600W(Max)" },
          { label: "Storage temperature", value: "-20℃~+60℃" },
          { label: "Working temperature", value: "-10℃~+40℃" },
          { label: "Work Humidity", value: "10%RH~80%RH" },
          { label: "Installation method", value: "Wall-mounted(standard)/ movable base(Optional )" },
          { label: "Lifespan", value: "100,000 hours" },
          { label: "Accessories", value: "Wall-mount structure, remote controller, magnetic tool, spare parts, HDMI cable" }
        ]
      }
    ]
  },
  "LP-MIA135-EH": {
    id: "LP-MIA135-EH",
    name: "LP-MIA135-EH",
    title: "Indoor ALL-In-One LED",
    description: [
      "Global ultra-thin design (35mm), color saturation more than 97%.",
      "Support wireless projection, multi-screen networking interaction, one screen and multiple display.",
      "User-level installation and maintenance, no need for secondary renovation, no need for rear maintenance access.",
      "Rich interface compatibility: USB interface, HDMI input and output, RJ45 network port, infrared remote control, etc., support WIFI, Bluetooth, Ethernet multiple network transmission methods."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA135-EH" },
          { label: "Pixel Pitch", value: "1.5625mm" },
          { label: "Operating system", value: "Android 8.0" },
          { label: "Core configuration", value: "Quad-core CPU/Mali Y811 (GPU) / 4G memory / 32G storage (expandable)" },
          { label: "Display size", value: "135 inch" },
          { label: "Resolution", value: "1920×1080P" },
          { label: "Brightness", value: "100-600cd/m²(8 levels adjustable)" },
          { label: "Display size", value: "3000mm x 1687.5mm" },
          { label: "Contrast", value: "6000:1" },
          { label: "Viewing angle", value: "160°(H)/160°(V)" },
          { label: "Response time", value: "<0.5ms(Typ)" },
          { label: "Video interface", value: "HDMI(x2 in 1 out) ,USB 2.0x1, USB 3.0x2" },
          { label: "Audio interface", value: "Built-in 2x5W speakers,external Audio x 1 interface" },
          { label: "Control interface", value: "RJ45x1,USB Bx1, Bluetooth, WIFI, Bluetooth remote control" },
          { label: "Input voltage", value: "100-240V~50/60Hz" },
          { label: "Gray level", value: "14 bits" },
          { label: "Refresh frequency", value: "3840Hz" },
          { label: "Overall size", value: "3020mm x 1805.5 mm x 35mm (Without base)" },
          { label: "Net weight", value: "108kg" },
          { label: "Power consumption", value: "≤ 640W(Average) / ≤2600W(Max)" },
          { label: "Storage temperature", value: "-20℃~+60℃" },
          { label: "Working temperature", value: "-10℃~+40℃" },
          { label: "Work Humidity", value: "10%RH~80%RH" },
          { label: "Installation method", value: "Wall-mounted(standard)/ movable base(Optional )" },
          { label: "Lifespan", value: "100,000 hours" },
          { label: "Accessories", value: "Wall-mount structure, remote controller, magnetic tool, spare parts, HDMI cable" }
        ]
      }
    ]
  },
  "LP-MIA163-EH": {
    id: "LP-MIA163-EH",
    name: "LP-MIA163-EH",
    title: "Indoor ALL-In-One LED",
    description: [
      "Global ultra-thin design (35mm), color saturation more than 97%.",
      "Support wireless projection, multi-screen networking interaction, one screen and multiple display.",
      "User-level installation and maintenance, no need for secondary renovation, no need for rear maintenance access.",
      "Rich interface compatibility: USB interface, HDMI input and output, RJ45 network port, infrared remote control, etc., support WIFI, Bluetooth, Ethernet multiple network transmission methods."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA163-EH" },
          { label: "Pixel Pitch", value: "1.875mm" },
          { label: "Operating system", value: "Android 8.0" },
          { label: "Core configuration", value: "Quad-core CPU/Mali Y811 (GPU) / 4G memory / 32G storage (expandable)" },
          { label: "Display size", value: "163 inch" },
          { label: "Resolution", value: "1920×1080P" },
          { label: "Brightness", value: "100-600cd/m²(8 levels adjustable)" },
          { label: "Display size", value: "3600mm x 2025mm" },
          { label: "Contrast", value: "6000:1" },
          { label: "Viewing angle", value: "160°(H)/160°(V)" },
          { label: "Response time", value: "<0.5ms(Typ)" },
          { label: "Video interface", value: "HDMI(x2 in 1 out) ,USB 2.0x1, USB 3.0x2" },
          { label: "Audio interface", value: "Built-in 2x5W speakers,external Audio x 1 interface" },
          { label: "Control interface", value: "RJ45x1,USB Bx1, Bluetooth, WIFI, Bluetooth remote control" },
          { label: "Input voltage", value: "100-240V~50/60Hz" },
          { label: "Gray level", value: "14 bits" },
          { label: "Refresh frequency", value: "3840Hz" },
          { label: "Overall size", value: "3620mm x 2143mm x 35mm (Without base)" },
          { label: "Net weight", value: "132kg" },
          { label: "Power consumption", value: "≤ 810W(Average) / ≤2700W(Max)" },
          { label: "Storage temperature", value: "-20℃~+60℃" },
          { label: "Working temperature", value: "-10℃~+40℃" },
          { label: "Work Humidity", value: "10%RH~80%RH" },
          { label: "Installation method", value: "Wall-mounted(standard)/ movable base(Optional )" },
          { label: "Lifespan", value: "100,000 hours" },
          { label: "Accessories", value: "Wall-mount structure, remote controller, magnetic tool, spare parts, HDMI cable" }
        ]
      }
    ]
  },
  "LP-MIA216-EH": {
    id: "LP-MIA216-EH",
    name: "LP-MIA216-EH",
    title: "Indoor ALL-In-One LED",
    description: [
      "Global ultra-thin design (35mm), color saturation more than 97%.",
      "Support wireless projection, multi-screen networking interaction, one screen and multiple display.",
      "User-level installation and maintenance, no need for secondary renovation, no need for rear maintenance access.",
      "Rich interface compatibility: USB interface, HDMI input and output, RJ45 network port, infrared remote control, etc., support WIFI, Bluetooth, Ethernet multiple network transmission methods."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA216-EH" },
          { label: "Pixel Pitch", value: "2.5mm" },
          { label: "Operating system", value: "Android 8.0" },
          { label: "Core configuration", value: "Quad-core CPU/Mali Y811 (GPU) / 4G memory / 32G storage (expandable)" },
          { label: "Display size", value: "216 inch" },
          { label: "Resolution", value: "1920×1080P" },
          { label: "Brightness", value: "100-600cd/m²(8 levels adjustable)" },
          { label: "Display size", value: "4800mm x 2700mm" },
          { label: "Contrast", value: "6000:1" },
          { label: "Viewing angle", value: "160°(H)/160°(V)" },
          { label: "Response time", value: "<0.5ms(Typ)" },
          { label: "Video interface", value: "HDMI(x2 in 1 out) ,USB 2.0x1, USB 3.0x2" },
          { label: "Audio interface", value: "Built-in 2x5W speakers,external Audio x 1 interface" },
          { label: "Control interface", value: "RJ45x1,USB Bx1, Bluetooth, WIFI, Bluetooth remote control" },
          { label: "Input voltage", value: "100-240V~40/60Hz" },
          { label: "Gray level", value: "14 bits" },
          { label: "Refresh frequency", value: "3840Hz" },
          { label: "Overall size", value: "4820mm x 2818mm x 35mm (Without base)" },
          { label: "Net weight", value: "240kg" },
          { label: "Power consumption", value: "< 1200W(Average) / <4200W(Max)" },
          { label: "Storage temperature", value: "-20℃~+60℃" },
          { label: "Working temperature", value: "-10℃~+40℃" },
          { label: "Work Humidity", value: "10%RH~80%RH" },
          { label: "Installation method", value: "Wall-mounted(standard)/ movable base(No Support)" },
          { label: "Lifespan", value: "100,000 hours" },
          { label: "Accessories", value: "Wall-mount structure, remote controller, magnetic tool, spare parts, HDMI cable" }
        ]
      }
    ]
  },
  "LP-MIA135-AC": {
    id: "LP-MIA135-AC",
    name: "LP-MIA135-AC",
    title: "Commercial All-In-One LED",
    description: [
      "Ultra-light & Ultra-thin: Border thickness less than 19mm.",
      "Wide-angle Camera: 93° diagonal, 87° horizontal, 48° vertical.",
      "Supports Wi-Fi 6 for high-speed operation (2.4G and 5G bands).",
      "Supports meeting check-in through personnel identification technology."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA135-AC" },
          { label: "Pixel Pitch", value: "1.56mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 3 IN 1" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Viewing Angle (H/V)", value: "160°/140°" },
          { label: "Pixel Density", value: "409,600 dots/m2" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Display Resolution(W×H)", value: "1920×1080" },
          { label: "Visible Area (H x V)", value: "3000mm×1687.5mm" },
          { label: "Overall Size (W×H×D)", value: "3013.5mm ×1623.7mm × 18.8mm" },
          { label: "Weight", value: "120kg±0.5" },
          { label: "Display Size", value: "135 inch" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10℃~+40℃/10%~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10%~80%RH" },
          { label: "Gray Scale", value: "14bits" },
          { label: "Contrast Ratio", value: "4000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC110~220V (+/- 10%)" },
          { label: "Input Power (Max)", value: "2400W" },
          { label: "Input Power (Avg)", value: "1000W" },
          { label: "Installation Mode", value: "Movable base/Wall mounted(customizable)" },
          { label: "Maintenance Mode", value: "Front Maintenance" },
          { label: "System/Storage Memory", value: "8G/64G" },
          { label: "Control Interface", value: "RJ45×1,USB 3.0×4,Bluetooth×1,Wi-Fi×1, Light perception×1, Infrared remote control×1" },
          { label: "Video Interface", value: "HDMI×2 (1 In 1 out),TYPE-C×1" },
          { label: "Audio Interface", value: "Built-in 4x15W speakers, 3.5mm Line Out ×1" },
          { label: "System", value: "Android 11/Windows 11 (Optional)" },
          { label: "Standard Accessories", value: "Wireless Projector, Remote Control, Vacuum Front Maintenance Tool" }
        ]
      }
    ]
  },
  "LP-VOA10-EH": {
    id: "LP-VOA10-EH",
    name: "LP-VOA10-EH",
    title: "Outdoor Stadium LED",
    description: [
      "Meet a variety of high protection demand: waterproof.",
      "High refresh, high gray scale, high contrast, good consistency, high quality fine picture effect.",
      "Adjustable screen angle to ensure the best view of the audience.",
      "Unique soft mask and soft protective pad to ensure security personnel safety."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHVOA10-EH" },
          { label: "Pixel Pitch", value: "10mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD3535" },
          { label: "Brightness", value: "≥ 6000 cd/㎡" },
          { label: "Viewing Angle", value: "H170°/V110°" },
          { label: "Pixel Density", value: "10,000 dots/m2" },
          { label: "Module Size", value: "400×300 mm" },
          { label: "Cabinet Size", value: "W1600mm×H900mm×D131mm" },
          { label: "Cabinet Weight", value: "30kg/㎡" },
          { label: "Gray Level", value: "16384" },
          { label: "Area", value: "1.44m2" },
          { label: "Material", value: "Aluminum" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Ingress Protection", value: "Front IP65 / Rear IP55" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~90%RH" },
          { label: "Pixels per Cabinet", value: "160×90 pixels" },
          { label: "Processing Depth", value: "14 bits" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Frame Rate", value: "50/60 Hz" },
          { label: "Refresh Rate", value: "≥3840 Hz" },
          { label: "Input Voltage", value: "110~240VAC" },
          { label: "Input Power (max)", value: "550W/m2" },
          { label: "Input Power (typical)", value: "200W/m2" },
          { label: "Installation", value: "Fixed" },
          { label: "Maintenance Mode", value: "Front&Rear Maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); single mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-ROA3.91-MH": {
    id: "LP-ROA3.91-MH",
    name: "LP-ROA3.91-MH",
    title: "Outdoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design support splicing installation with up and down.",
      "Radian lock support installed with internal and external radian.",
      "Good gray scale even at low brightness, brings profound layers and abundant colors."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA3.91-MH" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1921" },
          { label: "Brightness", value: "≥ 5000 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V120°" },
          { label: "Pixel Density", value: "65,536 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D75mm" },
          { label: "Weight", value: "12 kg/panel" },
          { label: "Area", value: "0.5 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Ingress Protection", value: "IP65/IP54" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+45℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "128×256 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Video Frame Rate", value: "60 Hz" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Input Power Frequency", value: "50~60 Hz" },
          { label: "Input Power (max)", value: "700 W/m²" },
          { label: "Input Power (typical)", value: "210 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤15km )" }
        ]
      }
    ]
  },
  "LP-ROA4.81-MH": {
    id: "LP-ROA4.81-MH",
    name: "LP-ROA4.81-MH",
    title: "Outdoor Rental LED",
    description: [
      "500x500mm and 500x1000mm cabinet size design support splicing installation with up and down.",
      "Radian lock support installed with internal and external radian.",
      "Good gray scale even at low brightness, brings profound layers and abundant colors."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHROA4.81-MH" },
          { label: "Pixel Pitch", value: "4.81mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1921" },
          { label: "Brightness", value: "≥ 5000 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V120°" },
          { label: "Pixel Density", value: "43,264 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D75mm" },
          { label: "Weight", value: "12 kg/panel" },
          { label: "Area", value: "0.5 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Ingress Protection", value: "IP65/IP54" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+45℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "104×208 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Video Frame Rate", value: "60 Hz" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Input Power Frequency", value: "50~60 Hz" },
          { label: "Input Power (max)", value: "700 W/m²" },
          { label: "Input Power (typical)", value: "210 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤15km )" }
        ]
      }
    ]
  },
  "LP-RIA2.97-SH": {
    id: "LP-RIA2.97-SH",
    name: "LP-RIA2.97-SH",
    title: "Indoor Rental LED",
    description: [
      "Straight screen, an outer arc and an inner arc, and a total of five angles can be switched to achieve seamless splicing.",
      "Quick locking, cabinet splicing can be realized with in 10s, saving manpower and time.",
      "The modular design of cabinet, and the modules with any spacing can be interchanged, so that one box can be used for multiple purposes.",
      "Climbing, hoisting and fixed installation. It can directly climb on the box for maintenance to meet various on-site installation requirements."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.97-SH" },
          { label: "Pixel Pitch", value: "2.976mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020" },
          { label: "Brightness", value: "1000 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V140°" },
          { label: "Pixel Density", value: "112,896 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D71mm" },
          { label: "Weight", value: "8.2 kg/panel" },
          { label: "Area", value: "0.25 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Ingress Protection", value: "IP20/IP20" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "168×168 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Frame Rate", value: "50/60 Hz" },
          { label: "Input Power (max)", value: "440 W/m²" },
          { label: "Input Power (typical)", value: "135 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Front/Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤15km )" }
        ]
      }
    ]
  },
  "LP-RIA3.91-SH": {
    id: "LP-RIA3.91-SH",
    name: "LP-RIA3.91-SH",
    title: "Indoor Rental LED",
    description: [
      "Straight screen, an outer arc and an inner arc, and a total of five angles can be switched to achieve seamless splicing.",
      "Quick locking, cabinet splicing can be realized with in 10s, saving manpower and time.",
      "The modular design of cabinet, and the modules with any spacing can be interchanged, so that one box can be used for multiple purposes.",
      "Climbing, hoisting and fixed installation. It can directly climb on the box for maintenance to meet various on-site installation requirements."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA3.91-SH" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020" },
          { label: "Brightness", value: "1000 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V140°" },
          { label: "Pixel Density", value: "65,536 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D71mm" },
          { label: "Weight", value: "8.2 kg/panel" },
          { label: "Area", value: "0.25 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Ingress Protection", value: "IP20/IP20" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+40℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "128×128 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Frame Rate", value: "50/60 Hz" },
          { label: "Input Power (max)", value: "450 W/m²" },
          { label: "Input Power (typical)", value: "150 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Front/Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤15km )" }
        ]
      }
    ]
  },
  "LP-RIA1.95-SH": {
    id: "LP-RIA1.95-SH",
    name: "LP-RIA1.95-SH",
    title: "Indoor Rental LED",
    description: [
      "Straight screen, an outer arc and an inner arc, and a total of five angles can be switched to achieve seamless splicing.",
      "Quick locking, cabinet splicing can be realized with in 10s, saving manpower and time.",
      "The modular design of cabinet, and the modules with any spacing can be interchanged, so that one box can be used for multiple purposes.",
      "Climbing, hoisting and fixed installation. It can directly climb on the box for maintenance to meet various on-site installation requirements."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA1.95-SH" },
          { label: "Pixel Pitch", value: "1.953mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Mini 4 IN 1" },
          { label: "Brightness", value: "800 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V140°" },
          { label: "Pixel Density", value: "262,144 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D71mm" },
          { label: "Weight", value: "8.2 kg/panel" },
          { label: "Area", value: "0.25 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Ingress Protection", value: "IP20/IP20" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "256×256 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Frame Rate", value: "50/60 Hz" },
          { label: "Input Power (max)", value: "500 W/m²" },
          { label: "Input Power (typical)", value: "170 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Front/Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤15km )" }
        ]
      }
    ]
  },
  "LP-RIA2.61-SH": {
    id: "LP-RIA2.61-SH",
    name: "LP-RIA2.61-SH",
    title: "Indoor Rental LED",
    description: [
      "Straight screen, an outer arc and an inner arc, and a total of five angles can be switched to achieve seamless splicing.",
      "Quick locking, cabinet splicing can be realized with in 10s, saving manpower and time.",
      "The modular design of cabinet, and the modules with any spacing can be interchanged, so that one box can be used for multiple purposes.",
      "Climbing, hoisting and fixed installation. It can directly climb on the box for maintenance to meet various on-site installation requirements."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHRIA2.61-SH" },
          { label: "Pixel Pitch", value: "2.604mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020" },
          { label: "Brightness", value: "1000 cd/㎡" },
          { label: "Viewing Angle", value: "H160°; V140°" },
          { label: "Pixel Density", value: "147,456 pixels/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Cabinet Size", value: "W500mm×H500mm×D71mm" },
          { label: "Weight", value: "8.2 kg/panel" },
          { label: "Area", value: "0.25 ㎡" },
          { label: "Material", value: "Die-casting Aluminum" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Ingress Protection", value: "IP20/IP20" },
          { label: "Operating Temperature/Humidity", value: "-20℃~+50℃/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20℃~+60℃/10~80%RH" },
          { label: "Pixels per Cabinet", value: "192×192 pixels" },
          { label: "Brightness Control", value: "Manual/Automatic" },
          { label: "Contrast Ratio", value: "8000:1" },
          { label: "Processing Depth", value: "12-14 bits" },
          { label: "Rate Refresh", value: "3840 Hz" },
          { label: "Input Voltage", value: "110~220VAC" },
          { label: "Frame Rate", value: "50/60 Hz" },
          { label: "Input Power (max)", value: "440 W/m²" },
          { label: "Input Power (typical)", value: "150 W/m²" },
          { label: "Lifespan", value: "≥100,000 H" },
          { label: "Maintenance Mode", value: "Front/Rear maintenance" },
          { label: "Data Interconnection", value: "CAT5 Cable ( L≤100m ); multi-mode fiber ( L≤300m ); single mode fiber ( L≤10km )" }
        ]
      }
    ]
  },
  "LP-GOA2.97-PH": {
    id: "LP-GOA2.97-PH",
    name: "LP-GOA2.97-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 77mm and 36kg/㎡.",
      "Support front&rear installation and maintenance.",
      "Support 90° right angle splicing.",
      "Aluminum module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA2.97-PH" },
          { label: "Pixel Pitch", value: "2.97mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "4500 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D77mm" },
          { label: "Cabinet Resolution (W×H)", value: "168×336 dots" },
          { label: "Cabinet Weight", value: "18.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA3.91-PH": {
    id: "LP-GOA3.91-PH",
    name: "LP-GOA3.91-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 77mm and 34kg/㎡.",
      "Support front&rear installation and maintenance.",
      "90°/VR curved splicing or 90° right angle splicing. Two kinds of right angle splicing solutions.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA3.91-PH" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1921" },
          { label: "Brightness (Max)", value: "5000 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "500mm×250 mm" },
          { label: "Module Resolution", value: "128×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D77mm" },
          { label: "Cabinet Resolution (W×H)", value: "128×256 dots" },
          { label: "Cabinet Weight", value: "17 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "680 W/m²" },
          { label: "Input Power (Avg)", value: "180 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA4.81-PH": {
    id: "LP-GOA4.81-PH",
    name: "LP-GOA4.81-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 77mm and 34kg/㎡.",
      "Support front&rear installation and maintenance.",
      "90°/VR curved splicing or 90° right angle splicing. Two kinds of right angle splicing solutions.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA4.81-PH" },
          { label: "Pixel Pitch", value: "4.81mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1921" },
          { label: "Brightness (Max)", value: "5000 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "43,264 dots/m²" },
          { label: "Module Size", value: "500mm×250 mm" },
          { label: "Module Resolution", value: "104×52 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D77mm" },
          { label: "Cabinet Resolution (W×H)", value: "104×208 dots" },
          { label: "Cabinet Weight", value: "17 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "650 W/m²" },
          { label: "Input Power (Avg)", value: "180 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA5-PH": {
    id: "LP-GOA5-PH",
    name: "LP-GOA5-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 85mm and 30kg/㎡.",
      "Support front&rear installation and maintenance.",
      "Al-shell electric distribution for RGB LED chips to save energy and lower the power consumption by more than 30%.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA5-PH" },
          { label: "Pixel Pitch", value: "5.71mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2727" },
          { label: "Brightness (Max)", value: "6500 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "30,625 dots/m²" },
          { label: "Module Size", value: "480mm×320 mm" },
          { label: "Module Resolution", value: "84×56 dots" },
          { label: "Cabinet Size", value: "W960mm×H960mm×D85mm" },
          { label: "Cabinet Resolution (W×H)", value: "168×168 dots" },
          { label: "Cabinet Weight", value: "28 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "550 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA6-PH": {
    id: "LP-GOA6-PH",
    name: "LP-GOA6-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 85mm and 30kg/㎡.",
      "Support front&rear installation and maintenance.",
      "Al-shell electric distribution for RGB LED chips to save energy and lower the power consumption by more than 30%.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA6-PH" },
          { label: "Pixel Pitch", value: "6.67mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2727" },
          { label: "Brightness (Max)", value: "6500 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "22,500 dots/m²" },
          { label: "Module Size", value: "480mm×320 mm" },
          { label: "Module Resolution", value: "72×48 dots" },
          { label: "Cabinet Size", value: "W960mm×H960mm×D85mm" },
          { label: "Cabinet Resolution (W×H)", value: "144×144 dots" },
          { label: "Cabinet Weight", value: "28 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "550 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA8-PH": {
    id: "LP-GOA8-PH",
    name: "LP-GOA8-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 85mm and 30kg/㎡.",
      "Support front&rear installation and maintenance.",
      "Al-shell electric distribution for RGB LED chips to save energy and lower the power consumption by more than 30%.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA8-PH" },
          { label: "Pixel Pitch", value: "8mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD3535" },
          { label: "Brightness (Max)", value: "6500 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "15,625 dots/m²" },
          { label: "Module Size", value: "480mm×320 mm" },
          { label: "Module Resolution", value: "60×40 dots" },
          { label: "Cabinet Size", value: "W960mm×H960mm×D85mm" },
          { label: "Cabinet Resolution (W×H)", value: "120×120 dots" },
          { label: "Cabinet Weight", value: "28 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-40°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "550 W/m²" },
          { label: "Input Power (Avg)", value: "160 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GOA10-PH": {
    id: "LP-GOA10-PH",
    name: "LP-GOA10-PH",
    title: "General Outdoor Fixed LED",
    description: [
      "Super thin and light design, 85mm and 30kg/㎡.",
      "Support front&rear installation and maintenance.",
      "Al-shell electric distribution for RGB LED chips to save energy and lower the power consumption by more than 30%.",
      "Aluminum Module chassis and panel frame accelerates heat dissipation.",
      "High protection grade, IP66 on front and IP65 on rear.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGOA10-PH" },
          { label: "Pixel Pitch", value: "10mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD3535" },
          { label: "Brightness (Max)", value: "6500 nit" },
          { label: "Color Temperature", value: "3500K-10000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V90°" },
          { label: "Pixel Density", value: "10,000 dots/m²" },
          { label: "Module Size", value: "480mm×320 mm" },
          { label: "Module Resolution", value: "48×32 dots" },
          { label: "Cabinet Size", value: "W960mm×H960mm×D85mm" },
          { label: "Cabinet Resolution (W×H)", value: "96×96 dots" },
          { label: "Cabinet Weight", value: "28 kg ± 0.5" },
          { label: "Cabinet Material", value: "Aluminum Alloy" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-10°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP66/Rear IP66" },
          { label: "Aspect Ratio", value: "1:1" },
          { label: "Gray Scale (Max)", value: "14 bits" },
          { label: "Contrast Ratio", value: "6000:1" },
          { label: "Refresh Rate (Max)", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted" },
          { label: "Maintenance", value: "Front&Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA1.95-SH": {
    id: "LP-GIA1.95-SH",
    name: "LP-GIA1.95-SH",
    title: "General Indoor Fixed LED",
    description: [
      "500x1000mm, 500x750mm and 500x500mm panel to match your design.",
      "Support hanging, stacked, wall-mounted, adapting to diverse environments.",
      "Front and rear service, modules and PSU can be taken from the front totally.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGIA1.95-SH" },
          { label: "Pixel Pitch", value: "1.95mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 1212" },
          { label: "Brightness (Max)", value: "800 nit" },
          { label: "Color Temperature", value: "3500K-9000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "262,144 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "128×128 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D61.3mm" },
          { label: "Cabinet Resolution", value: "256×512 dots" },
          { label: "Cabinet Weight", value: "11.45 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "400 W/m²" },
          { label: "Input Power (Avg)", value: "125 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted/ Hanging" },
          { label: "Maintenance", value: "Front / Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA2.61-SH": {
    id: "LP-GIA2.61-SH",
    name: "LP-GIA2.61-SH",
    title: "General Indoor Fixed LED",
    description: [
      "500x1000mm, 500x750mm and 500x500mm panel to match your design.",
      "Support hanging, stacked, wall-mounted, adapting to diverse environments.",
      "Front and rear service, modules and PSU can be taken from the front totally.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGIA2.61-SH" },
          { label: "Pixel Pitch", value: "2.61mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 1515" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "3500K-9000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "147,456 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "96×96 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D61.3mm" },
          { label: "Cabinet Resolution", value: "192×384 dots" },
          { label: "Cabinet Weight", value: "11.45 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "440 W/m²" },
          { label: "Input Power (Avg)", value: "150 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted/ Hanging" },
          { label: "Maintenance", value: "Front / Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA2.97-SH": {
    id: "LP-GIA2.97-SH",
    name: "LP-GIA2.97-SH",
    title: "General Indoor Fixed LED",
    description: [
      "500x1000mm, 500x750mm and 500x500mm panel to match your design.",
      "Support hanging, stacked, wall-mounted, adapting to diverse environments.",
      "Front and rear service, modules and PSU can be taken from the front totally.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGIA2.97-SH" },
          { label: "Pixel Pitch", value: "2.97mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 2121" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "3500K-9000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "112,896 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "84×84 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D61.3mm" },
          { label: "Cabinet Resolution", value: "168×336 dots" },
          { label: "Cabinet Weight", value: "11.45 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "420 W/m²" },
          { label: "Input Power (Avg)", value: "130 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted/ Hanging" },
          { label: "Maintenance", value: "Front / Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA3.91-SH": {
    id: "LP-GIA3.91-SH",
    name: "LP-GIA3.91-SH",
    title: "General Indoor Fixed LED",
    description: [
      "500x1000mm, 500x750mm and 500x500mm panel to match your design.",
      "Support hanging, stacked, wall-mounted, adapting to diverse environments.",
      "Front and rear service, modules and PSU can be taken from the front totally.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGIA3.91-SH" },
          { label: "Pixel Pitch", value: "3.91mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 2121" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "3500K-9000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "64×64 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D61.3mm" },
          { label: "Cabinet Resolution", value: "128×256 dots" },
          { label: "Cabinet Weight", value: "11.45 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "620 W/m²" },
          { label: "Input Power (Avg)", value: "190 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted/ Hanging" },
          { label: "Maintenance", value: "Front / Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA4.81-SH": {
    id: "LP-GIA4.81-SH",
    name: "LP-GIA4.81-SH",
    title: "General Indoor Fixed LED",
    description: [
      "500x1000mm, 500x750mm and 500x500mm panel to match your design.",
      "Support hanging, stacked, wall-mounted, adapting to diverse environments.",
      "Front and rear service, modules and PSU can be taken from the front totally.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHGIA4.81-SH" },
          { label: "Pixel Pitch", value: "4.81mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 2121" },
          { label: "Brightness (Max)", value: "1000 nit" },
          { label: "Color Temperature", value: "3500K-9000K (adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "43,264 dots/m²" },
          { label: "Module Size", value: "250mm×250mm" },
          { label: "Module Resolution", value: "52×52 dots" },
          { label: "Cabinet Size", value: "W500mm×H1000mm×D61.3mm" },
          { label: "Cabinet Resolution", value: "104×208 dots" },
          { label: "Cabinet Weight", value: "11.45 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30/Rear IP20" },
          { label: "Aspect Ratio", value: "1:2" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "620 W/m²" },
          { label: "Input Power (Avg)", value: "190 W/m²" },
          { label: "Installation", value: "Wall Mounted/ Floor Mounted/ Hanging" },
          { label: "Maintenance", value: "Front / Rear Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-MIA135-CF": {
    id: "LP-MIA135-CF",
    name: "LP-MIA135-CF",
    title: "COB Foldable All-In-One LED",
    description: [
      "Fully flip COB module, bumping and moisture-proof.",
      "Folded inward screen, and the collision sensing system is built into.",
      "Ready to use without installation.",
      "Wireless screen projection, file push, reverse control screen, code.",
      "Flip camera and fingerprint unlock to ensure security and privacy."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA135-CF" },
          { label: "Pixel Pitch", value: "1.56mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB 3 in 1" },
          { label: "Brightness (Max)", value: "≥500 nit" },
          { label: "Viewing Angle (H/V)", value: "160°/160°" },
          { label: "Pixel Density", value: "409,600 dots/m2" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Display Resolution(W×H)", value: "1920×1080" },
          { label: "Visible Area (H×V)", value: "3000mm×1687.5mm" },
          { label: "Overall Size (W×H×D)", value: "3014mm×2630mm×770mm(Rise to the top); 1604mm×1560mm×770mm(Folding down)" },
          { label: "Weight", value: "310kg(Include flight case)" },
          { label: "Display Size", value: "135-inch" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "IP Rating", value: "Front IP65/Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C/10%~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-10°C~+60°C/10%~80%RH" },
          { label: "Gray Scale", value: "13bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC100~240V" },
          { label: "Input Power (Max)", value: "2400W" },
          { label: "Input Power (Avg)", value: "800W" },
          { label: "Installation Mode", value: "Free installation with lifting and moving bracket" },
          { label: "Maintenance Mode", value: "Front Maintenance" },
          { label: "System / Storage / Memory", value: "8G / 64G" },
          { label: "Control Interface", value: "RJ45x1,USB 3.0x4,Bluetoothx1,WIFIx1,Light perceptionx1,Infrared remote controlx1" },
          { label: "Video Interface", value: "HDMIx2 (1 In 1 Out),TYPE-C x1" },
          { label: "Audio Interface", value: "Built-in 4x15W speakers,3.5mm Line Out x1" },
          { label: "System", value: "Android 11/ Windows 11 (Optional)" },
          { label: "Standard Accessories", value: "Remote Control; Vacuum Front Maintenance Tool" },
          { label: "WiFi Standard", value: "WIFI STATION: 802.11b/g/n/ac/ax; WIFI AP: 802.11b/g/n/ac" },
          { label: "WiFi Frequency Range", value: "WIFI STATION: 2400-2483.5MHz, 5150-5250MHz, 5250-5350MHz, 5470-5725MHz, 5725-5850MHz; WIFI AP: 2400-2483.5MHz, 5150-5250MHz" },
          { label: "WiFi MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz,≤23dBm@5150-5250MHz, ≤23dBm@5250-5350MHz,≤23dBm@5470-5725MHz, ≤14dBm@5725-5850MHz" },
          { label: "Bluetooth Standard", value: "BR/EDR/BLE(Bluetooth model), BT5.0(Bluetooth version)" },
          { label: "Bluetooth Frequency Range", value: "2400-2483.5MHz" },
          { label: "Bluetooth MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz" }
        ]
      }
    ]
  },
  "LP-MIA135-CC": {
    id: "LP-MIA135-CC",
    name: "LP-MIA135-CC",
    title: "Commercial All-In-One LED",
    description: [
      "Compatible with video conferencing software such as Teams and Zoom.",
      "Wide-angle Camera: 99° diagonal, 87° horizontal, 40° vertical.",
      "Supports Wi-Fi 6 for high-speed operation (2.4G and 5G bands).",
      "Supports meeting check-in through personnel identification technology."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA135-CC" },
          { label: "Pixel Pitch", value: "1.56mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB 3 in 1" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Viewing Angle (H/V)", value: "160° / 160°" },
          { label: "Pixel Density", value: "409,600 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Display Resolution (W×H)", value: "1920×1080" },
          { label: "Visible Area (W×H)", value: "3000mm×1687.5mm" },
          { label: "Overall Size (W×H×D)", value: "3014mm×1804.5mm×34.5mm" },
          { label: "Weight", value: "150kg±0.5" },
          { label: "Display Size", value: "135-inch" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "IP Rating", value: "Front IP20 / Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "2400W" },
          { label: "Input Power (Avg)", value: "1000W" },
          { label: "Installation Mode", value: "Movable base/Wall mounted (customizable)" },
          { label: "Maintenance Mode", value: "Front Maintenance" },
          { label: "System / Storage / Memory", value: "8G / 64G" },
          { label: "Control Interface", value: "RJ45x1, USB 3.0x4, Bluetoothx1, IR INx1, Light perceptionx1, Infrared remote controlx1" },
          { label: "Video Interface", value: "HDMIx2 in / 1 out; TYPE-C x1" },
          { label: "Audio Interface", value: "Built-in 4x15W speakers, 3.5mm Line Out x1" },
          { label: "System", value: "Android 11 / Windows 11" },
          { label: "Standard Accessories", value: "Remote Control, Vacuum Front Maintenance Tool" },
          { label: "WiFi Standard", value: "Wi-Fi STATION: 802.11b/g/n/ac/ax, Wi-Fi AP: 802.11b/g/n/a/ac" },
          { label: "WiFi Frequency Range", value: "Wi-Fi STATION: 2400-2483.5MHz, 5150-5250MHz, 5250-5350MHz, 5470-5725MHz, 5725-5850MHz; Wi-Fi AP: 2400-2483.5MHz, 5150-5250MHz" },
          { label: "WiFi MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz, ≤23dBm@5150-5250MHz, ≤23dBm@5250-5350MHz, ≤23dBm@5470-5725MHz, ≤14dBm@5725-5850MHz" },
          { label: "Bluetooth Standard", value: "BR/EDR/BLE (Bluetooth model), BT5.0 (Bluetooth version)" },
          { label: "Bluetooth Frequency Range", value: "2400-2483.5MHz" },
          { label: "Bluetooth MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz" }
        ]
      }
    ]
  },
  "LP-MIA163-CC": {
    id: "LP-MIA163-CC",
    name: "LP-MIA163-CC",
    title: "Commercial All-In-One LED",
    description: [
      "Compatible with video conferencing software such as Teams and Zoom.",
      "Wide-angle Camera: 99° diagonal, 87° horizontal, 40° vertical.",
      "Supports Wi-Fi 6 for high-speed operation (2.4G and 5G bands).",
      "Supports meeting check-in through personnel identification technology."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA163-CC" },
          { label: "Pixel Pitch", value: "0.9375mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB 3 in 1" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Viewing Angle (H/V)", value: "160° / 160°" },
          { label: "Pixel Density", value: "1,137,777 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Display Resolution (W×H)", value: "3840×2160" },
          { label: "Visible Area (W×H)", value: "3600mm×2025mm" },
          { label: "Overall Size (W×H×D)", value: "3614mm×2172mm×34.5mm" },
          { label: "Weight", value: "230kg±0.5" },
          { label: "Display Size", value: "163-inch" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "IP Rating", value: "Front IP20 / Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "3000W" },
          { label: "Input Power (Avg)", value: "1200W" },
          { label: "Installation Mode", value: "Movable base/Wall mounted (customizable)" },
          { label: "Maintenance Mode", value: "Front Maintenance" },
          { label: "System / Storage / Memory", value: "8G / 64G" },
          { label: "Control Interface", value: "RJ45x1, USB 3.0x4, RS232x1, IR INx1, Light perceptionx1, Infrared remote controlx1" },
          { label: "Video Interface", value: "HDMIx2 in / 1 out; TYPE-C x1" },
          { label: "Audio Interface", value: "Built-in 4x15W speakers, 3.5mm Line Out x1" },
          { label: "System", value: "Android 11 / Windows 11" },
          { label: "Standard Accessories", value: "Remote Control, Vacuum Front Maintenance Tool" },
          { label: "WiFi Standard", value: "Wi-Fi STATION: 802.11b/g/n/ac/ax, Wi-Fi AP: 802.11b/g/n/a/ac" },
          { label: "WiFi Frequency Range", value: "Wi-Fi STATION: 2400-2483.5MHz, 5150-5250MHz, 5250-5350MHz, 5470-5725MHz, 5725-5850MHz; Wi-Fi AP: 2400-2483.5MHz, 5150-5250MHz" },
          { label: "WiFi MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz, ≤23dBm@5150-5250MHz, ≤23dBm@5250-5350MHz, ≤23dBm@5470-5725MHz, ≤14dBm@5725-5850MHz" },
          { label: "Bluetooth Standard", value: "BR/EDR/BLE (Bluetooth model), BT5.0 (Bluetooth version)" },
          { label: "Bluetooth Frequency Range", value: "2400-2483.5MHz" },
          { label: "Bluetooth MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz" }
        ]
      }
    ]
  },
  "LP-MIA108-CC": {
    id: "LP-MIA108-CC",
    name: "LP-MIA108-CC",
    title: "Commercial All-In-One LED",
    description: [
      "Compatible with video conferencing software such as Teams and Zoom.",
      "Wide-angle Camera: 99° diagonal, 87° horizontal, 40° vertical.",
      "Supports Wi-Fi 6 for high-speed operation (2.4G and 5G bands).",
      "Supports meeting check-in through personnel identification technology."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHMIA108-CC" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB 3 in 1" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Viewing Angle (H/V)", value: "160° / 160°" },
          { label: "Pixel Density", value: "640,000 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Display Resolution (W×H)", value: "1920×1080" },
          { label: "Visible Area (W×H)", value: "2400mm×1350mm" },
          { label: "Overall Size (W×H×D)", value: "2414mm×1467mm×34.5mm" },
          { label: "Weight", value: "120kg±0.5" },
          { label: "Display Size", value: "108-inch" },
          { label: "Cabinet Material", value: "Die-cast aluminum" },
          { label: "IP Rating", value: "Front IP20 / Rear IP20" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "Gray Scale", value: "16 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (Max)", value: "1500W" },
          { label: "Input Power (Avg)", value: "600W" },
          { label: "Installation Mode", value: "Movable base/Wall mounted (customizable)" },
          { label: "Maintenance Mode", value: "Front Maintenance" },
          { label: "System / Storage / Memory", value: "8G / 64G" },
          { label: "Control Interface", value: "RJ45x1, USB 3.0x4, RS232x1, IR INx1, Light perceptionx1, Infrared remote controlx1" },
          { label: "Video Interface", value: "HDMIx2 in / 1 out; TYPE-C x1" },
          { label: "Audio Interface", value: "Built-in 4x15W speakers, 3.5mm Line Out x1" },
          { label: "System", value: "Android 11 / Windows 11" },
          { label: "Standard Accessories", value: "Remote Control, Vacuum Front Maintenance Tool" },
          { label: "WiFi Standard", value: "Wi-Fi STATION: 802.11b/g/n/ac/ax, Wi-Fi AP: 802.11b/g/n/a/ac" },
          { label: "WiFi Frequency Range", value: "Wi-Fi STATION: 2400-2483.5MHz, 5150-5250MHz, 5250-5350MHz, 5470-5725MHz, 5725-5850MHz; Wi-Fi AP: 2400-2483.5MHz, 5150-5250MHz" },
          { label: "WiFi MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz, ≤23dBm@5150-5250MHz, ≤23dBm@5250-5350MHz, ≤23dBm@5470-5725MHz, ≤14dBm@5725-5850MHz" },
          { label: "Bluetooth Standard", value: "BR/EDR/BLE (Bluetooth model), BT5.0 (Bluetooth version)" },
          { label: "Bluetooth Frequency Range", value: "2400-2483.5MHz" },
          { label: "Bluetooth MAX Transmission Power", value: "≤20dBm@2400-2483.5MHz" }
        ]
      }
    ]
  },
  "LP-SIA1.2-LS": {
    id: "LP-SIA1.2-LS",
    name: "LP-SIA1.2-LS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Light and Ultra-thin, 45mm cabinet thickness.",
      "Quickly adjusting the flatness of the back without disassembling the screen.",
      "Magnetic front maintenance module for quick disassembly.",
      "Optional installation methods including wall mount, arc mount and floor-standing mount."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.2-LS" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1010" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "4000K~9000K(adjustable)" },
          { label: "Viewing Angle", value: "H140° / V130°" },
          { label: "Pixel Density", value: "640,000 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "240×135 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D45mm" },
          { label: "Cabinet Resolution (W×H)", value: "480×270 dots" },
          { label: "Cabinet Weight", value: "5.35 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+45°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.5-LS": {
    id: "LP-SIA1.5-LS",
    name: "LP-SIA1.5-LS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Light and Ultra-thin, 45mm cabinet thickness.",
      "Quickly adjusting the flatness of the back without disassembling the screen.",
      "Magnetic front maintenance module for quick disassembly.",
      "Optional installation methods including wall mount, arc mount and floor-standing mount."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.5-LS" },
          { label: "Pixel Pitch", value: "1.5625mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD 1212" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "4000K~9000K(adjustable)" },
          { label: "Viewing Angle", value: "H140° / V130°" },
          { label: "Pixel Density", value: "409,600 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "192×108 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D45mm" },
          { label: "Cabinet Resolution (W×H)", value: "384×216 dots" },
          { label: "Cabinet Weight", value: "5.35 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+45°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "3000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "500 W/m²" },
          { label: "Input Power (Avg)", value: "200 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA0.9-SS": {
    id: "LP-SIA0.9-SS",
    name: "LP-SIA0.9-SS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Ultra-thin 28mm and super-light 5.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "Supports dual backup of power supply and signals (customizable).",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA0.9-SS" },
          { label: "Pixel Pitch", value: "0.9375mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "IMD 4in1" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "2000K~9500K(adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "1,137,777 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "320×180 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D28mm" },
          { label: "Cabinet Resolution (W×H)", value: "640×360 dots" },
          { label: "Cabinet Weight", value: "4.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20°C~+50°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "470 W/m²" },
          { label: "Input Power (Avg)", value: "160 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.2-SS": {
    id: "LP-SIA1.2-SS",
    name: "LP-SIA1.2-SS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Ultra-thin 28mm and super-light 5.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "Supports dual backup of power supply and signals (customizable).",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.2-SS" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1010" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "2000K~9500K(adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "640,000 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "240×135 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D28mm" },
          { label: "Cabinet Resolution (W×H)", value: "480×270 dots" },
          { label: "Cabinet Weight", value: "4.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20°C~+50°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "480 W/m²" },
          { label: "Input Power (Avg)", value: "160 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.5-SS": {
    id: "LP-SIA1.5-SS",
    name: "LP-SIA1.5-SS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Ultra-thin 28mm and super-light 5.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "Supports dual backup of power supply and signals (customizable).",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.5-SS" },
          { label: "Pixel Pitch", value: "1.5625mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1010/SMD1212" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "2000K~9500K(adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "409,600 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "192×108 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D28mm" },
          { label: "Cabinet Resolution (W×H)", value: "384×216 dots" },
          { label: "Cabinet Weight", value: "4.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20°C~+50°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "350 W/m²" },
          { label: "Input Power (Avg)", value: "110 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.8-SS": {
    id: "LP-SIA1.8-SS",
    name: "LP-SIA1.8-SS",
    title: "Indoor Fine Pixel Pitch LED",
    description: [
      "Ultra-thin 28mm and super-light 5.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "Supports dual backup of power supply and signals (customizable).",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.8-SS" },
          { label: "Pixel Pitch", value: "1.875mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "2000K~9500K(adjustable)" },
          { label: "Viewing Angle", value: "H160° / V140°" },
          { label: "Pixel Density", value: "284,444 dots/m²" },
          { label: "Module Size", value: "300mm×168.75mm" },
          { label: "Module Resolution", value: "160×90 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D28mm" },
          { label: "Cabinet Resolution (W×H)", value: "320×180 dots" },
          { label: "Cabinet Weight", value: "4.5 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-20°C~+50°C/10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C/10~80%RH" },
          { label: "IP Rating", value: "Front IP30 / Rear IP30" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "400 W/m²" },
          { label: "Input Power (Avg)", value: "135 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA0.9-CH": {
    id: "LP-SIA0.9-CH",
    name: "LP-SIA0.9-CH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 40mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA0.9-CH" },
          { label: "Pixel Pitch", value: "0.9375mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "1,137,777 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "160×180 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D39.75mm" },
          { label: "Cabinet Resolution (W×H)", value: "640×360 dots" },
          { label: "Cabinet Weight", value: "4.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "370 W/m²" },
          { label: "Input Power (Avg)", value: "125 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.2-CH": {
    id: "LP-SIA1.2-CH",
    name: "LP-SIA1.2-CH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 40mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.2-CH" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "640,000 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "120×135 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D39.75mm" },
          { label: "Cabinet Resolution (W×H)", value: "480×270 dots" },
          { label: "Cabinet Weight", value: "4.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "350 W/m²" },
          { label: "Input Power (Avg)", value: "120 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.5-CH": {
    id: "LP-SIA1.5-CH",
    name: "LP-SIA1.5-CH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 40mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.5-CH" },
          { label: "Pixel Pitch", value: "1.5625mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "409,600 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "96×108 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D39.75mm" },
          { label: "Cabinet Resolution (W×H)", value: "384×216 dots" },
          { label: "Cabinet Weight", value: "4.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "350 W/m²" },
          { label: "Input Power (Avg)", value: "120 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA0.9-AH": {
    id: "LP-SIA0.9-AH",
    name: "LP-SIA0.9-AH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 34.3 mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA0.9-AH" },
          { label: "Pixel Pitch", value: "0.9375mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "1,137,777 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "160×180 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D34.3mm" },
          { label: "Cabinet Resolution (W×H)", value: "640×360 dots" },
          { label: "Cabinet Weight", value: "4.0 kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "370 W/m²" },
          { label: "Input Power (Avg)", value: "125 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.2-AH": {
    id: "LP-SIA1.2-AH",
    name: "LP-SIA1.2-AH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 34.3 mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.2-AH" },
          { label: "Pixel Pitch", value: "1.25mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "640,000 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "120×135 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D34.3mm" },
          { label: "Cabinet Resolution (W×H)", value: "480×270" },
          { label: "Cabinet Weight", value: "4.0kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "350 W/m²" },
          { label: "Input Power (Avg)", value: "120 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-SIA1.5-AH": {
    id: "LP-SIA1.5-AH",
    name: "LP-SIA1.5-AH",
    title: "Flip COB Indoor Fine Pixel Pitch LED",
    description: [
      "Mini Flip COB (Chips on Board) technology.",
      "Ultra-thin 34.3 mm and super-light 4.0kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet, splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: [
      {
        category: "Parameters",
        specs: [
          { label: "Model", value: "DHI-PHSIA1.5-AH" },
          { label: "Pixel Pitch", value: "1.5625mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "Flip COB Chip" },
          { label: "Brightness (Max)", value: "600 nit" },
          { label: "Color Temperature", value: "5000K ± 200K" },
          { label: "Viewing Angle", value: "H160° / V160°" },
          { label: "Pixel Density", value: "409,600 dots/m²" },
          { label: "Module Size", value: "150mm×168.75mm" },
          { label: "Module Resolution", value: "96×108 dots" },
          { label: "Cabinet Size", value: "W600mm×H337.5mm×D34.3mm" },
          { label: "Cabinet Resolution (W×H)", value: "384×216" },
          { label: "Cabinet Weight", value: "4.0kg ± 0.5" },
          { label: "Cabinet Material", value: "Die-cast Aluminum" },
          { label: "Operating Temperature/Humidity", value: "-10°C~+40°C / 10~80%RH" },
          { label: "Storage Temperature/Humidity", value: "-20°C~+60°C / 10~80%RH" },
          { label: "IP Rating", value: "Front: IP65 / Rear: IP43" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Gray Scale", value: "13 bits" },
          { label: "Contrast Ratio", value: "10000:1" },
          { label: "Refresh Rate", value: "3840 Hz" },
          { label: "Input Voltage", value: "AC 110~220V (+/-10%)" },
          { label: "Input Power (max)", value: "350 W/m²" },
          { label: "Input Power (Avg)", value: "120 W/m²" },
          { label: "Installation", value: "Wall Mounted/Floor Mounted" },
          { label: "Maintenance", value: "Front Maintenance" },
          { label: "Lamp Lifespan", value: "≥100,000 H" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      }
    ]
  },
  "LP-GIA3.91-SE": {
    id: "LP-GIA3.91-SE",
    name: "LP-GIA3.91-SE",
    title: "Overseas Dahua indoor Front Maintenance fixed screen LED_P3.91_DHI-PHGIA3.91-SE",
    description: [
      "Offers a diversity of installation methods, such as it can be used as a canopy screen. It supports floor to ceiling, and wall to wall installation, as well as right angle assembly to meet the needs of various environments.",
      "Ultra-light and ultra-thin, saving you transportation costs and installation space.",
      "Installation does not require steel structures, cutting down installation costs.",
      "The design is simple and exquisite.",
      "The module includes hard links, making it stable and reliable. No messy wires."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "3.91 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2020 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "800 cd/m²" },
          { label: "Max. Brightness", value: "1,000 cd/m²" },
          { label: "Color Temperature", value: "6500K-9500K (adjustable)" },
          { label: "Viewing Angle", value: "160° (H) / 140° (V)" },
          { label: "Pixel Density", value: "65,536 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "Front IP30, Rear IP20" },
          { label: "Operating Temperature", value: "-10 °C to +40 °C (+14 °F to +104 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "160 W/m² (avg); 500 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/16 Scanning" },
          { label: "Module Resolution", value: "64 (H) × 64 (V)" },
          { label: "Module Size", value: "250 mm × 250 mm (9.84\" × 9.84\") (W × H)" },
          { label: "Box Resolution", value: "256 (H) × 128 (V)" },
          { label: "Product Dimensions", value: "1000 mm × 500 mm × 27 mm (39.37\" × 19.69\" × 1.06\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "2:1" },
          { label: "Box Material", value: "Die-cast aluminum" },
          { label: "Box Weight", value: "9.6 kg ± 0.5 kg (21.16 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA1.5-SC": {
    id: "LP-SIA1.5-SC",
    name: "LP-SIA1.5-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P1.5_DHI-PHSIA1.5-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "1.538 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1212 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "500 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "422,500 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 460 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/104 Scanning" },
          { label: "Module Resolution", value: "208 (H) × 104 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "416 (H) × 312 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA1.8-SC": {
    id: "LP-SIA1.8-SC",
    name: "LP-SIA1.8-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P1.8_DHI-PHSIA1.8-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "1.86 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "600 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "288,906 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 400 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/86 Scanning" },
          { label: "Module Resolution", value: "172 (H) × 86 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "344 (H) × 258 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA2-SC": {
    id: "LP-SIA2-SC",
    name: "LP-SIA2-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P2_DHI-PHSIA2-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "2 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD1515 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "600 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "250,000 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC(±10%),50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 400 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/80 Scanning" },
          { label: "Module Resolution", value: "160 (H) × 80 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "320 (H) × 240 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA2.5-SC": {
    id: "LP-SIA2.5-SC",
    name: "LP-SIA2.5-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P2.5_DHI-PHSIA2.5-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "2.5 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2121 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "600 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "160,000 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 400 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/64 Scanning" },
          { label: "Module Resolution", value: "128 (H) × 64 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "256 (H) × 192 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA3-SC": {
    id: "LP-SIA3-SC",
    name: "LP-SIA3-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P3_DHI-PHSIA3-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "3.076 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2121 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "600 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "105,625 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 400 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/52 Scanning" },
          { label: "Module Resolution", value: "104 (H) × 52 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "208 (H) × 156 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA4-SC": {
    id: "LP-SIA4-SC",
    name: "LP-SIA4-SC",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P4_DHI-PHSIA4-SC",
    description: [
      "Power system integrated circuit board (power HUB all in one design), with wireless hard connection.",
      "Module with no plastic bottom shell, ultra-light and ultra-thin, mounted in the enclosure.",
      "Soft connections compatible with HUB75 and HUB320 interfaces.",
      "Parallel input power supply through the power bus for increased reliability.",
      "The N+1 redundancy of the display prevents black screen faults.",
      "Shared front and back connectors ensure high screen flatness."
    ],
    features: [],
    specifications: [
      {
        category: "Environment",
        specs: [
          { label: "Application Scenarios", value: "Indoor" }
        ]
      },
      {
        category: "LED Display",
        specs: [
          { label: "Pixel Pitch", value: "4 mm" },
          { label: "Pixel Configuration", value: "1R1G1B" },
          { label: "LED Type", value: "SMD2121 (RGB 3-in-1)" },
          { label: "Brightness (White Balance)", value: "400–500 cd/m²" },
          { label: "Max. Brightness", value: "600 cd/m²" },
          { label: "Color Temperature", value: "2000K - 9500K (adjustable)" },
          { label: "Viewing Angle", value: "140° (H) / 140° (V)" },
          { label: "Pixel Density", value: "62,500 dots/m²" },
          { label: "Grayscale", value: "14 bits" },
          { label: "Contrast Ratio", value: "5000:1" },
          { label: "Image Refresh Rate", value: "3840 Hz" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Packaging Types for LED Lamp Beads", value: "SMD" },
          { label: "Protection", value: "IP30 (Front) / IP30 (Rear)" },
          { label: "Operating Temperature", value: "-10 °C to +45 °C (+14 °F to +113 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +55 °C (-4 °F to +131 °F)" },
          { label: "Storage Humidity", value: "10%–80% (RH)" },
          { label: "Power Supply", value: "100-240 VAC@50/60Hz" },
          { label: "Power Consumption", value: "135 W/m² (avg); 400 W/m² (max)" },
          { label: "Drive", value: "Constant Current, 1/40 Scanning" },
          { label: "Module Resolution", value: "80 (H) × 40 (V)" },
          { label: "Module Size", value: "320 mm × 160 mm (12.60\" × 6.30\") (W × H)" },
          { label: "Box Resolution", value: "160 (H) × 120 (V)" },
          { label: "Product Dimensions", value: "640 mm × 480 mm × 42 mm (25.20\" × 18.90\" × 1.65\") (W × H × D)" },
          { label: "Box Length-Width Ratio", value: "4:3" },
          { label: "Box Material", value: "Plastic (Back Cover) / Die-Cast Aluminum (Structure)" },
          { label: "Box Weight", value: "6.5 kg ± 0.5 kg (14.33 lb ± 1.10 lb)" },
          { label: "Installation", value: "Floor mounted, Hanging" },
          { label: "Maintenance", value: "Front maintenance" },
          { label: "Signal Transmission Distance", value: "CAT5 Cable L≤100 m; multi-mode fiber L≤300 m; single mode fiber L≤10 km" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-SIA1.2-CK": {
    id: "LP-SIA1.2-CK",
    name: "LP-SIA1.2-CK",
    title: "Overseas Dahua indoor 640 x 480 Front Maintenance fixed screen LED_P1.2_DHI-PHSIA1.2-CK",
    description: [
      "Mini Flip COB(Chips on Board) technology.",
      "Ultra-thin 20mm and super-light 4.5kg design.",
      "16:9 Golden aspect ratio, can easily achieve pixel to pixel 2K/4K/8K/16K resolution.",
      "CNC die-casting aluminum cabinet,splicing tolerance is controlled within ±0.1mm.",
      "All parts support front maintenance.",
      "Dot by dot calibration ensures color richness and brightness uniformity."
    ],
    features: [],
    specifications: []
  },
  "LP-VM10-SAI100": {
    id: "LP-VM10-SAI100",
    name: "LP-VM10-SAI100",
    title: "Dahua 10.1\" Wall-mounted Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Linux operating system, more stable and cost-effective.",
      "Support POE and DC input, wide power supply design.",
      "Support Chrome, Firefox, Edge browser playback; Web upload ads for playback.",
      "Built-in HD(1080P) camera, high-quality image display.",
      "IP camera video output, H.264/H.265 encoding type selection output.",
      "Support CVR storage (up to 1TB TF card)."
    ],
    features: [],
    specifications: [
      {
        category: "Display",
        specs: [
          { label: "Panel Dimensions", value: "10.1 inch" },
          { label: "Backlight", value: "LED" },
          { label: "Resolution", value: "1280 (H) × 800 (V)" },
          { label: "Viewable Size", value: "216.96mm × 135.6mm" },
          { label: "Aspect Ratio", value: "16:10" },
          { label: "Brightness", value: "250 cd/m² (typ.)" },
          { label: "Contrast", value: "1000:1" },
          { label: "Display Colors", value: "16.7 Million colors" },
          { label: "Viewing Angle", value: "170° (H) / 170° (V)" },
          { label: "Response Time", value: "30ms(typ.)" },
          { label: "Display Mode", value: "Landscape/Portrait" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Processor", value: "RV1126 Quad-core Cortex-A7" },
          { label: "Operating System", value: "Linux" },
          { label: "RAM", value: "1 GB" },
          { label: "ROM", value: "8 GB" }
        ]
      },
      {
        category: "Connectivity",
        specs: [
          { label: "Interface", value: "Micro USB×1; TF card slot×1; LAN In×1" },
          { label: "Network Port", value: "RJ45×1 10M/100M" },
          { label: "Wi-Fi", value: "No (Can be customized)" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 2 W" }
        ]
      },
      {
        category: "Camera",
        specs: [
          { label: "Sensor", value: "1/2.9\", 2MP CMOS" },
          { label: "Encoding Format", value: "H.264 / H.265" },
          { label: "Effective Pixels", value: "1920×1080" },
          { label: "Lens", value: "3.3mm Fixed Lens" },
          { label: "Field of View", value: "H: 79°, V: 43°, D: 93°" },
          { label: "Integration Protocol", value: "ONVIF" },
          { label: "Recording Resolution", value: "1920×1080@25FPS" },
          { label: "Motion Detection", value: "Support" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "DC12V±10% / POE 48V-56V±10%" },
          { label: "Consumption (Typical)", value: "10W" },
          { label: "Operating Temperature", value: "0°C to +40°C(32°F to +104°F)(avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20°C to +60°C(-4°F to +140°F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "252mm × 200mm × 26mm" },
          { label: "Packaging Dimensions", value: "355mm × 240mm × 75mm" },
          { label: "Net Weight", value: "1.3kg" },
          { label: "Gross Weight", value: "2.3kg" },
          { label: "VESA", value: "75mm×75mm" },
          { label: "Accessory", value: "Mount bracket, User's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Image Settings", value: "Chroma, contrast, brightness, sharpness, saturation, wide dynamics, backlight compensation, strong light suppression, 3D noise reduction" },
          { label: "Video", value: "You can choose to record normally and trigger motion detection/face detection/alarm input to record" },
          { label: "Advertising", value: "Support full-screen or half-screen image or video ads less than 1GB in size" },
          { label: "Warning Information and Logo", value: "The warning information supports warning pictures and warning voices, and the logo picture can set the size and position of the picture" }
        ]
      },
      {
        category: "External Ports",
        specs: [
          { label: "ADB/USB", value: "It is used to download the firmware" },
          { label: "TF", value: "TF Card slot (max 1TB)" },
          { label: "LAN", value: "RJ45, 100MB" },
          { label: "ALARM OUT", value: "Alarm output interface. The default state is low level; high level is the trigger state." },
          { label: "ALARM IN", value: "Alarm input interface, two modes of open circuit or short circuit are optional." },
          { label: "GND", value: "GND" },
          { label: "NO", value: "Normal open contact point of the relay" },
          { label: "COM", value: "Common contact point of the relay" },
          { label: "NC", value: "Normal close contact point of the relay" },
          { label: "EMERGENCY", value: "Emergency mode trigger interface, external trigger level DC 3-40V" },
          { label: "FACE OUT", value: "Face detection alarm output, the default state is low level; high level is the trigger state." },
          { label: "MOTION OUT", value: "Motion detection alarm output, the default state is low level; high level is the trigger state." },
          { label: "12V", value: "DC power 12V+" }
        ]
      }
    ]
  },
  "LP-AI-W": {
    id: "LP-AI-W",
    name: "LP-AI-W",
    title: "USB Wi-Fi dongle",
    description: [
      "The USB Wi-Fi dongle supports dual frequency band of 2.4 GHz and 5 GHz. It is widely used for intelligent cloud display terminals without Wi-Fi function. As an external Wi-Fi dongle, it can be easily connected to devices through the USB port for receiving Wi-Fi signals."
    ],
    features: [],
    specifications: [
      {
        category: "Device Ports",
        specs: [
          { label: "Wi-Fi", value: "Yes" },
          { label: "Wi-Fi Standard", value: "802.11b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz; 5150-5250 MHz; 5470-5725 MHz; 5725-5850 MHz" },
          { label: "USB", value: "USB 2.0, Type-A" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "USB" },
          { label: "Power Consumption", value: "1.5W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Case: SPCC" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "173.5 mm × 117.8 mm × 14 mm (6.83\" × 4.64\" × 0.55\") (The antenna is folded)" },
          { label: "Packaging Dimensions", value: "250 mm × 144 mm × 67 mm (9.84\" × 5.67\" × 2.64\")" },
          { label: "Net Weight", value: "130 g (0.29 lb)" },
          { label: "Gross Weight", value: "260 g (0.57 lb)" },
          { label: "Holes Distance", value: "51 mm (2.01\")" }
        ]
      }
    ]
  },
  "LP-DS04-AI400": {
    id: "LP-DS04-AI400",
    name: "LP-DS04-AI400",
    title: "Dahua Media Player Box",
    description: [
      "It works up to 24 hours a day.",
      "Industrial design, small and portable, matching monitor, video wall, LED screen for advertising.",
      "4 function modules include network release, local release, app manager and system settings.",
      "Supports video, picture, audio, txt, PDF, IPC stream, time, weather and other multimedia information released, made for advertising industry.",
      "Support the program material off the network or outage resume function, greatly save bandwidth and network flux.",
      "Dahua MPS platform provides unified remote management for system integrators and media operators."
    ],
    features: [],
    specifications: [
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 8.1" },
          { label: "CPU", value: "4 cores A17, 1.6 GHz" },
          { label: "RAM", value: "2 GB" },
          { label: "ROM", value: "16 GB" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Information Release Platform", value: "Supports multi-level management and media publishing systems with B/S architecture" },
          { label: "Information Release", value: "Releases information in real-time such as images, text, rich text, and videos" },
          { label: "Rolling Titles", value: "Displays rolling titles over the image" },
          { label: "Play Mode", value: "Supports inter-cut play, specified time play, periodic play and gasket play" },
          { label: "Play Plan", value: "Play periods can be customized by day, week, or month" },
          { label: "Smart Screen Split", value: "Displays images, text and videos at the same time; The screen can be split into 5 windows." },
          { label: "Real-time Monitoring", value: "Yes" },
          { label: "Wireless Frequency Range", value: "2400 MHz–2483.5 MHz" },
          { label: "Wireless Transmission Rate", value: "MAX: 2.4 GHz: 50 Mbps" },
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, asf, mkv, wmv" },
          { label: "Time/Weather", value: "Updates clock and weather information in real-time" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Yes. Supports 2.4 GHz." },
          { label: "4G", value: "No (Connect with external 4G modules)" },
          { label: "Bluetooth", value: "No" },
          { label: "Data Transmission Ports", value: "1 × TF card slot, up to 128 GB; 2 × USB 2.0 ports (type A)" },
          { label: "Video Input", value: "No" },
          { label: "Video Output", value: "1 × HDMI Out (480p, 720p, 1080p, 4K @60Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack Mic" },
          { label: "External Control", value: "1 × RS-232; 1 × RJ-45" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "12 VDC" },
          { label: "Power Consumption", value: "2W (typ.); 4W (max.)" },
          { label: "Standby Power Consumption", value: "< 0.5 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–95% (RH), non-condensing" },
          { label: "Protection", value: "IP20" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color", value: "Black" },
          { label: "Product Dimensions", value: "184.5 mm × 105 mm × 30 mm (7.26\" × 4.13\" × 1.18\") (with Wi-Fi antenna)" },
          { label: "Packaging Dimensions", value: "266 mm × 220 mm × 77 mm (10.47\" × 8.41\" × 3.03\")" },
          { label: "Net Weight", value: "405 g (0.89 lb)" },
          { label: "Gross Weight", value: "870 g (1.92 lb)" },
          { label: "Installation", value: "Wall mount; desk mount" },
          { label: "Display Mode", value: "External display" },
          { label: "Accessory", value: "Power adapter, Wi-Fi antenna, remote control, quick start guide, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, FCC, CE RED, FCC ID" }
        ]
      }
    ]
  },
  "LP-DV43-EAO400L": {
    id: "LP-DV43-EAO400L",
    name: "LP-DV43-EAO400L",
    title: "Dahua 43 inch Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤400 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1900 × 750 × 150mm" },
          { label: "Packaging Dimensions", value: "2110 × 920 × 540mm" },
          { label: "Net Weight", value: "112kg (246.9lb)" },
          { label: "Gross Weight", value: "130kg (286.6lb)" },
          { label: "Installation", value: "Vertical" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "User's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DV55-EAO400L": {
    id: "LP-DV55-EAO400L",
    name: "LP-DV55-EAO400L",
    title: "Dahua 55 inch Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤500 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "2100 × 900 × 150mm" },
          { label: "Packaging Dimensions", value: "2200 × 1000 × 550mm" },
          { label: "Net Weight", value: "168kg (370.4lb)" },
          { label: "Gross Weight", value: "195kg (429.9lb)" },
          { label: "Installation", value: "Vertical" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "User's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DV65-EAO400L": {
    id: "LP-DV65-EAO400L",
    name: "LP-DV65-EAO400L",
    title: "Dahua 65 inch Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 10 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤700 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "2150 × 1024 × 220mm" },
          { label: "Packaging Dimensions", value: "2340 × 1155 × 380mm" },
          { label: "Net Weight", value: "186kg (410.1lb)" },
          { label: "Gross Weight", value: "230kg (507.1lb)" },
          { label: "Installation", value: "Vertical" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "User's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH43-EAO400L": {
    id: "LP-DH43-EAO400L",
    name: "LP-DH43-EAO400L",
    title: "Dahua 43 inch Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤210 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1182 × 770 × 150mm (without wall mount bracket)" },
          { label: "Packaging Dimensions", value: "1350 × 1040 × 350mm" },
          { label: "Net Weight", value: "85kg (187.4lb)" },
          { label: "Gross Weight", value: "95kg (209.4lb)" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape only" },
          { label: "Accessory", value: "Wall-mount bracket, user's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH55-EAO400L": {
    id: "LP-DH55-EAO400L",
    name: "LP-DH55-EAO400L",
    title: "Dahua 55 inch Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤450 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1450 × 920 × 150mm(without wall mount bracket)" },
          { label: "Packaging Dimensions", value: "1620 × 1150 × 400mm" },
          { label: "Net Weight", value: "115kg(253.5lb)" },
          { label: "Gross Weight", value: "130kg(286.6lb)" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape only" },
          { label: "Accessory", value: "Wall-mount bracket, user's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH65-EAO400L": {
    id: "LP-DH65-EAO400L",
    name: "LP-DH65-EAO400L",
    title: "Dahua 65 inch Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "2500 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Reflectance", value: "≤3%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "No (Can be customized)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "220 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤500 W" },
          { label: "Operating Temperature", value: "-20 °C to +45 °C (-4 °F to +113 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Storage Humidity", value: "5%–90% (RH), non-condensing" },
          { label: "Protection Level", value: "IP55" },
          { label: "Cooling Method", value: "Fan cooling" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1530 × 1060 × 165mm(without wall mount bracket)" },
          { label: "Packaging Dimensions", value: "1840 × 1275 × 410mm" },
          { label: "Net Weight", value: "154kg (341.7lb)" },
          { label: "Gross Weight", value: "189kg (416.7lb)" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape only" },
          { label: "Accessory", value: "Wall-mount bracket, user's manual, legal and regulatory information" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH43-HAI400L": {
    id: "LP-DH43-HAI400L",
    name: "LP-DH43-HAI400L",
    title: "Dahua 43 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "700 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5250 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz;\n≤23 dBm@5150-5250 MHz;\n≤20 dBm@5250-5350 MHz;\n≤27 dBm@5470-5725 MHz;\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "100 W (typ.), 125 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "964.6 mm × 552.5 mm × 25.0 mm (37.98\" × 21.77\" × 0.98\") (L × W × H) (without bracket)\n964.6 mm × 552.5 mm × 27.5 mm (37.98\" × 21.77\" × 1.08\") (L × W × H) (with bracket)" },
          { label: "Frame Size", value: "10.3 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1056 mm × 150 mm × 652 mm (41.57\" × 5.9\" × 25.67\") (L × W × H)" },
          { label: "Net Weight", value: "13.0 kg (28.66 lb)" },
          { label: "Gross Weight", value: "16.5 kg (36.38 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH55-HAI400L": {
    id: "LP-DH55-HAI400L",
    name: "LP-DH55-HAI400L",
    title: "Dahua 55 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "700 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5250 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz;\n≤23 dBm@5150-5250 MHz;\n≤20 dBm@5250-5350 MHz;\n≤27 dBm@5470-5725 MHz;\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "123 W (typ.), 152 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1232.6 mm × 703.4 mm × 25.0 mm (48.53\" × 27.69\" × 0.98\") (L × W × H) (without bracket)\n1232.6 mm × 703.4 mm × 27.5 mm (48.53\" × 27.69\" × 1.08\") (L × W × H) (with bracket)" },
          { label: "Frame Size", value: "10.3 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1324 mm × 150 mm × 835 mm (52.1\" × 5.9\" × 32.8\") (L × W × H)" },
          { label: "Net Weight", value: "20.5 kg (45.19 lb)" },
          { label: "Gross Weight", value: "25.3 kg (55.78 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH65-HAI400L": {
    id: "LP-DH65-HAI400L",
    name: "LP-DH65-HAI400L",
    title: "Dahua 65 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "700 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5250 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz;\n≤25 dBm@5150-5250 MHz;\n≤20 dBm@5250-5350 MHz;\n≤27 dBm@5470-5725 MHz;\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "141 W (typ.), 172 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1451.8 mm × 826.7 mm × 25.0 mm (57.16\" × 32.55\" × 0.98\") (L × W × H) (without bracket)\n1451.8 mm × 826.7 mm × 27.5 mm (57.16\" × 32.55\" × 1.08\") (L × W × H) (with bracket)" },
          { label: "Frame Size", value: "10.5 mm/11.4 mm" },
          { label: "Packaging Dimensions", value: "1642 mm × 150 mm × 985 mm (64.6\" × 5.9\" × 38.8\") (L × W × H)" },
          { label: "Net Weight", value: "26.5 kg (58.42 lb)" },
          { label: "Gross Weight", value: "35.4 kg (78.04 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH32-WAI200L": {
    id: "LP-DH32-WAI200L",
    name: "LP-DH32-WAI200L",
    title: "Dahua 32 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "32 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2000 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1080 (H) × 1920 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "6 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤125 W" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH)" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "433 mm × 739 mm × 85.5 mm (17.05\" × 29.09\" × 3.37\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1070 mm × 670 mm × 235 mm (42.13\" × 26.38\" × 9.25\")" },
          { label: "Net Weight", value: "19 kg (41.89 lb)" },
          { label: "Gross Weight", value: "22 kg (48.50 lb)" },
          { label: "Installation", value: "Ceiling mount (default), Wall mount/floor stand (extra bracket required)" },
          { label: "Display Mode", value: "Portrait (default), landscape" },
          { label: "Wall-mounting Hole Position", value: "200mm × 200mm" },
          { label: "Accessory", value: "Ceiling mount bracket, power cord, legal and regulatory information, remote control, screw" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-DH43-WAI200L": {
    id: "LP-DH43-WAI200L",
    name: "LP-DH43-WAI200L",
    title: "Dahua 43 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2000 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1080 (H) × 1920 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240V, 50/60Hz" },
          { label: "Power Consumption", value: "≤270 W" },
          { label: "Standby Power Consumption", value: "≤15 W with fan" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F)" },
          { label: "Storage Temperature", value: "-10 °C to +60 °C (14 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH)" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "568 mm × 980 mm × 85.5 mm" },
          { label: "Packaging Dimensions", value: "1120 mm × 266 mm × 835 mm" },
          { label: "Net Weight", value: "32kg" },
          { label: "Gross Weight", value: "40kg" },
          { label: "Installation", value: "Ceiling mount (default), Wall mount/floor stand (extra bracket required)" },
          { label: "Display Mode", value: "Portrait (default), landscape" },
          { label: "Wall Mount VESA", value: "400 mm × 200mm" },
          { label: "Accessory", value: "Ceiling mount bracket, power cord, legal and regulatory information, remote control, screw" }
        ]
      }
    ]
  },
  "LP-DH55-WAI200L": {
    id: "LP-DH55-WAI200L",
    name: "LP-DH55-WAI200L",
    title: "Dahua 55 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2000 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1080 (H) × 1920 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "14 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤ 300 W" },
          { label: "Standby Power Consumption", value: "≤ 0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH)" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "721 mm × 1250 mm × 100 mm (28.39\" × 49.21\" × 3.94\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1400 mm × 955 mm × 310 mm (55.12\" × 37.60\" × 12.20\")" },
          { label: "Net Weight", value: "43 kg (94.80 lb)" },
          { label: "Gross Weight", value: "48 kg (105.82 lb)" },
          { label: "Installation", value: "Ceiling mount (default), Wall mount/floor stand (extra bracket required)" },
          { label: "Display Mode", value: "Portrait (default), landscape" },
          { label: "Wall Mount VESA", value: "400 mm × 400mm" },
          { label: "Accessory", value: "Ceiling mount bracket, power cord, legal and regulatory information, remote control, screw" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH65-WAI200L": {
    id: "LP-DH65-WAI200L",
    name: "LP-DH65-WAI200L",
    title: "Dahua 65 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "2000 cd/m² (typ.)" },
          { label: "Contrast", value: "1200:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1080 (H) × 1920 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240V, 50/60Hz" },
          { label: "Power Consumption", value: "≤ 400 W" },
          { label: "Standby Power Consumption", value: "≤ 0.5 W (with fan)" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F)" },
          { label: "Storage Temperature", value: "-10 °C to +60 °C (14 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "843.0 mm × 1468.6 mm × 85.5 mm" },
          { label: "Packaging Dimensions", value: "1620 mm × 266 mm × 1075 mm" },
          { label: "Net Weight", value: "52kg" },
          { label: "Gross Weight", value: "73kg" },
          { label: "Installation", value: "Ceiling mount (default), Wall mount/floor stand (extra bracket required)" },
          { label: "Display Mode", value: "Portrait (default), landscape" },
          { label: "Wall Mount VESA", value: "400 mm × 400mm" },
          { label: "Accessory", value: "Ceiling mount bracket, power cord, legal and regulatory information, remote control, screw" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE" }
        ]
      }
    ]
  },
  "LP-DV43-SAI400L": {
    id: "LP-DV43-SAI400L",
    name: "LP-DV43-SAI400L",
    title: "Dahua 43 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "ELED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "300 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "75 W (typ.), 80 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1740.4 mm × 600.4 mm × 52.3 mm (68.52\" × 23.64\" × 2.06\") (without bracket)\n1800.0 mm × 600.0 mm × 460.0 mm (70.87\" × 23.62\" × 18.11\") (with bracket)" },
          { label: "Frame Size", value: "40.2 mm/37.2 mm/37.2 mm/158.7 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1920 mm × 200 mm × 782 mm (75.59\" × 7.87\" × 30.79\") (L × W × H)" },
          { label: "Net Weight", value: "41 kg (90.39 lb)" },
          { label: "Gross Weight", value: "51 kg (112.44 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV43-SAI400K": {
    id: "LP-DV43-SAI400K",
    name: "LP-DV43-SAI400K",
    title: "Dahua 43 inch Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 16 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "43 inch" },
          { label: "Backlight", value: "ELED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "300 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 8.1" },
          { label: "CPU", value: "4 cores A17, 1.6 GHz" },
          { label: "RAM", value: "2 GB" },
          { label: "ROM", value: "16 GB" },
          { label: "Video Decoding", value: "1-ch H.265 1080p@25 fps, 4-ch H.265 1080p@25 fps\n4-ch H.265 1080p@30 fps, 2-ch H.264 1080p@25 fps\n2-ch H.265 1080p@30 fps, 2-ch H.264 4K@25 fps/2-ch\nH.265 4K@30 fps; 1-ch H.265 4K@60 fps; The decoding capacity statistics are based on tests with a single video file." }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × TF card slot, up to 128 GB (the back cover needs to be open)\n2 × USB 2.0 ports (type A)" },
          { label: "Video Input", value: "1 × HDMI 1.4 (1080p @60Hz) (the back cover needs to be open)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack in (the back cover needs to be open)" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤ 60 W" },
          { label: "Standby Power Consumption", value: "≤ 0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1800 mm × 600 mm × 460 mm (70.87\" × 23.62\" × 18.11\")" },
          { label: "Packaging Dimensions", value: "1920 mm × 762 mm × 200 mm (75.59\" × 30.00\" × 7.87\")" },
          { label: "Net Weight", value: "41 kg (90.39 lb)" },
          { label: "Gross Weight", value: "51 kg (112.44 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Base, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE ERP" }
        ]
      }
    ]
  },
  "LP-DV43-SAI400": {
    id: "LP-DV43-SAI400",
    name: "LP-DV43-SAI400",
    title: "Dahua 43 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "75 W (typ.), 80 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1740.4 mm × 600.4 mm × 67.0 mm (68.52\" × 23.64\" × 2.64\") (without bracket)\n1800.0 mm × 600.0 mm × 460.0 mm (70.87\" × 23.62\" × 18.11\") (with bracket)" },
          { label: "Frame Size", value: "40.2 mm/37.2 mm/37.2 mm/158.7 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1930 mm × 200 mm × 782 mm (75.98\" × 7.87\" × 30.79\") (L × W × H)" },
          { label: "Net Weight", value: "41 kg (90.39 lb)" },
          { label: "Gross Weight", value: "51 kg (112.44 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV55-SAI400L": {
    id: "LP-DV55-SAI400L",
    name: "LP-DV55-SAI400L",
    title: "Dahua 55 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "80 W (typ.), 120 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1850.0 mm × 743.6 mm × 67.2 mm (72.83\" × 29.28\" × 2.65\") (without bracket)\n1900.0 mm × 750.0 mm × 460.0 mm (74.80\" × 29.53\" × 18.11\") (with bracket)" },
          { label: "Frame Size", value: "40.5 mm/37.1 mm/37.1 mm/116.5 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "2020 mm × 200 mm × 915 mm (79.53\" × 7.87\" × 36.02\") (L × W × H)" },
          { label: "Net Weight", value: "66 kg (145.51 lb)" },
          { label: "Gross Weight", value: "73 kg (160.94 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV65-SAI400L": {
    id: "LP-DV65-SAI400L",
    name: "LP-DV65-SAI400L",
    title: "Dahua 65 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "150 W (typ.), 180 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1956.0 mm × 829.0 mm × 88.9 mm (76.97\" × 32.63\" × 3.50\") (without bracket)\n2000.0 mm × 882.0 mm × 471.5 mm (78.74\" × 34.72\" × 18.56\") (with bracket)" },
          { label: "Frame Size", value: "26.6 mm/28.4 mm/28.4 mm/147.1 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "2135 mm × 200 mm × 1050 mm (83.7\" × 7.9\" × 41.3\") (L × W × H)" },
          { label: "Net Weight", value: "65 kg (143.30 lb)" },
          { label: "Gross Weight", value: "78 kg (171.96 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV75-SAI400L": {
    id: "LP-DV75-SAI400L",
    name: "LP-DV75-SAI400L",
    title: "Dahua 75 Inch Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "75 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤ 200 W" },
          { label: "Standby Power Consumption", value: "≤ 0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "2028 mm × 1028 mm × 520 mm (79.84\" × 40.47\" × 20.47\")" },
          { label: "Packaging Dimensions", value: "2204 mm × 234 mm × 1194 mm (86.77\" × 9.21\" × 47.01\")" },
          { label: "Net Weight", value: "80 kg (176.37 lb)" },
          { label: "Gross Weight", value: "99 kg (218.26 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Base, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE ERP" }
        ]
      }
    ]
  },
  "LP-DV43-SAI400TL": {
    id: "LP-DV43-SAI400TL",
    name: "LP-DV43-SAI400TL",
    title: "Dahua 43 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "Touchscreen",
        specs: [
          { label: "Touch Technology", value: "Capacitive" },
          { label: "Response Time", value: "≤8 ms" },
          { label: "Touch Points", value: "10 points" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "75 W (typ.), 80 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1740.4 mm × 600.4 mm × 67.0 mm (68.52\" × 23.64\" × 2.64\") (without bracket)\n1800.0 mm × 600.0 mm × 460.0 mm (70.87\" × 23.62\" × 18.11\") (with bracket)" },
          { label: "Frame Size", value: "40.2 mm/37.2 mm/37.2 mm/158.7 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1930 mm × 200 mm × 782 mm (75.98\" × 7.87\" × 30.79\") (L × W × H)" },
          { label: "Net Weight", value: "41 kg (90.39 lb)" },
          { label: "Gross Weight", value: "51 kg (112.44 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV55-SAI400TL": {
    id: "LP-DV55-SAI400TL",
    name: "LP-DV55-SAI400TL",
    title: "Dahua 55 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "Touchscreen",
        specs: [
          { label: "Touch Technology", value: "Capacitive" },
          { label: "Response Time", value: "≤8 ms" },
          { label: "Touch Points", value: "10 points" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "80 W (typ.), 120 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1850.0 mm × 743.6 mm × 67.2 mm (72.83\" × 29.28\" × 2.65\") (without bracket)\n1900.0 mm × 750.0 mm × 460.0 mm (74.80\" × 29.53\" × 18.11\") (with bracket)" },
          { label: "Frame Size", value: "40.5 mm/37.1 mm/37.1 mm/116.5 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "2020 mm × 200 mm × 915 mm (79.53\" × 7.87\" × 36.02\") (L × W × H)" },
          { label: "Net Weight", value: "66 kg (145.51 lb)" },
          { label: "Gross Weight", value: "73 kg (160.94 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DV65-SAI400TL": {
    id: "LP-DV65-SAI400TL",
    name: "LP-DV65-SAI400TL",
    title: "Dahua 65 inch Indoor Vertical LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "9:16" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "2160 (H) × 3840 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (3840 × 2160@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "Touchscreen",
        specs: [
          { label: "Touch Technology", value: "Capacitive" },
          { label: "Response Time", value: "≤8 ms" },
          { label: "Touch Points", value: "10 points" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "150 W (typ.), 180 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1956.0 mm × 829.0 mm × 88.9 mm (76.97\" × 32.63\" × 3.50\") (without bracket)\n2000.0 mm × 882.0 mm × 471.5 mm (78.74\" × 34.72\" × 18.56\") (with bracket)" },
          { label: "Frame Size", value: "26.6 mm/28.4 mm/28.4 mm/147.1 mm (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "2135 mm × 200 mm × 1050 mm (83.7\" × 7.9\" × 41.3\") (L × W × H)" },
          { label: "Net Weight", value: "65 kg (143.30 lb)" },
          { label: "Gross Weight", value: "78 kg (171.96 lb)" },
          { label: "Installation", value: "Vertical mount" },
          { label: "Display Mode", value: "Portrait" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP" }
        ]
      }
    ]
  },
  "LP-DH22-SAI200L": {
    id: "LP-DH22-SAI200L",
    name: "LP-DH22-SAI200L",
    title: "Dahua 21.5 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "21.5 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "250 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "1000:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1920 (H) × 1080 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "14 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps (ISO-13818)\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 2 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "23 W (typ.), 25 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "519.14 mm × 310.6 mm × 48.1 mm (20.44\" × 12.23\" × 1.89\") (without bracket)" },
          { label: "Packaging Dimensions", value: "625 mm × 140 mm × 415 mm (24.61\" × 5.51\" × 16.34\")" },
          { label: "Net Weight", value: "5.1 kg (11.24 lb)" },
          { label: "Gross Weight", value: "6.2 kg (13.67 lb)" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall Mount VESA", value: "100 mm × 100 mm" },
          { label: "Accessory", value: "Wall-mount bracket, power cord, legal and regulatory information, user's manual, remote control" }
        ]
      }
    ]
  },
  "LP-DH32-SAI200L": {
    id: "LP-DH32-SAI200L",
    name: "LP-DH32-SAI200L",
    title: "Dahua 32 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial grade panel. It works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU and Android system.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "31.5 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "300 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "1000:1 (typ.)" },
          { label: "Display Colors", value: "8 bit, 16.7M colors" },
          { label: "Resolution", value: "1920 (H) × 1080 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 1%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@60 fps\nWMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (Internal Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (1080P@60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "31 W (typ.), 37 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "749.8 mm × 444.8 mm × 53.3 mm (29.52\" × 17.51\" × 2.10\") (without bracket)" },
          { label: "Packaging Dimensions", value: "852 mm × 140 mm × 548 mm (33.54\" × 5.51\" × 21.57\")" },
          { label: "Net Weight", value: "10.2 kg (22.49 lb)" },
          { label: "Gross Weight", value: "12.8 kg (28.22 lb)" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall Mount VESA", value: "400 mm × 200 mm" },
          { label: "Accessory", value: "Wall-mount bracket, power cord, legal and regulatory information, user's manual, remote control" }
        ]
      }
    ]
  },
  "LP-DH43-SWI200": {
    id: "LP-DH43-SWI200",
    name: "LP-DH43-SWI200",
    title: "43\" Wall-mounted Digital Signage",
    description: [
      "High quality panels, industrial-grade design, full metal housing, 3mm toughened protective glass.",
      "High physical resolution, more exquisite picture quality.",
      "Ultra-high contrast, more vivid picture display, more outstanding color performance.",
      "LCD back light display design, wide viewing angle display.",
      "The angle of view can reach 178°, approaching the level.",
      "Built-in speaker and power amplifier."
    ],
    features: [],
    specifications: [
      {
        category: "Display",
        specs: [
          { label: "Model", value: "DHI-LDH43-SWI200" },
          { label: "Backlight", value: "LED" },
          { label: "Screen Size", value: "43\"" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Resolution", value: "1920×1080" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Brightness", value: "500 cd/m²(max.)" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Viewing Angle(H×V)", value: "178°/178°" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Response Time", value: "8ms" },
          { label: "Lifespan", value: "30,000h" }
        ]
      },
      {
        category: "Connectivity",
        specs: [
          { label: "Input", value: "RJ45 ×1, USB ×4, HDMI out×1, Audio In/out×1, VGA×1" },
          { label: "Output", value: "Earphone ×1" },
          { label: "External Control", value: "IR, RJ45(LAN), USB" },
          { label: "Wi-Fi", value: "Optional, YES(customization)" },
          { label: "Speaker", value: "5W×2" }
        ]
      },
      {
        category: "Power & Environmental Conditions",
        specs: [
          { label: "Power Supply", value: "AC100-240V, 50/60Hz" },
          { label: "Type", value: "Internal" },
          { label: "Consumption(Typical)", value: "100W" },
          { label: "Consumption(Standby)", value: "Less than 0.5W" },
          { label: "Operating Temperature", value: "0℃~+40℃ (32°F~104°F)" },
          { label: "Operating Humidity", value: "10%~85%" }
        ]
      },
      {
        category: "Mechanical Specification",
        specs: [
          { label: "Dimensions", value: "986.4mm×584.9mm×54.2mm" },
          { label: "Net Weight", value: "17kg" },
          { label: "Gross Weight", value: "20kg" }
        ]
      },
      {
        category: "Accessory",
        specs: [
          { label: "Included in Box", value: "Power cord, bracket" },
          { label: "Optional Wall Mount Kit", value: "YES" }
        ]
      },
      {
        category: "Internal Player",
        specs: [
          { label: "Processor", value: "J4125 CPU" },
          { label: "Operating System", value: "Win 10 or 11" },
          { label: "RAM", value: "DDR4 8GB" },
          { label: "Storage", value: "256GB SSD" }
        ]
      }
    ]
  },
  "LP-DH43-SAI400L": {
    id: "LP-DH43-SAI400L",
    name: "LP-DH43-SAI400L",
    title: "Dahua 43 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5350 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz\n≤23 dBm@5150-5350 MHz\n≤20 dBm@5250-5350 MHz\n≤27 dBm@5470-5725 MHz\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "100 W (typ.), 125 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "964.6 mm × 552.9 mm × 25.0 mm (37.98\" × 21.77\" × 0.98\") (L × H × W) (without bracket)\n964.6 mm × 552.9 mm × 27.5 mm (37.98\" × 21.77\" × 1.08\") (L × H × W) (with bracket)" },
          { label: "Frame Size", value: "10.3 mm (0.41\") (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1056 mm × 130 mm × 652 mm (41.57\" × 5.12\" × 25.67\") (L × W × H)" },
          { label: "Net Weight", value: "13.0 kg (28.66 lb)" },
          { label: "Gross Weight", value: "16.5 kg (36.38 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH65-SAI400L": {
    id: "LP-DH65-SAI400L",
    name: "LP-DH65-SAI400L",
    title: "Dahua 65 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5350 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz\n≤23 dBm@5150-5350 MHz\n≤20 dBm@5250-5350 MHz\n≤27 dBm@5470-5725 MHz\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "141 W (typ.), 172 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1461.6 mm × 826.7 mm × 25.0 mm (57.10\" × 32.55\" × 0.98\") (L × H × W) (without bracket)\n1461.6 mm × 826.7 mm × 27.5 mm (57.10\" × 32.55\" × 1.08\") (L × H × W) (with bracket)" },
          { label: "Frame Size", value: "10.3 mm (0.41\") (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1542 mm × 150 mm × 925 mm (64.1\" × 10.0\" × 29.3\") (L × W × H)" },
          { label: "Net Weight", value: "26.5 kg (58.42 lb)" },
          { label: "Gross Weight", value: "35.4 kg (78.04 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH55-SAI400L": {
    id: "LP-DH55-SAI400L",
    name: "LP-DH55-SAI400L",
    title: "Dahua 55 Inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5350 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz\n≤23 dBm@5150-5350 MHz\n≤20 dBm@5250-5350 MHz\n≤27 dBm@5470-5725 MHz\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "120 W (typ.), 152 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1232.6 mm × 703.4 mm × 25.0 mm (48.53\" × 27.69\" × 0.98\") (L × H × W) (without bracket)\n1232.6 mm × 703.4 mm × 27.5 mm (48.53\" × 27.69\" × 1.08\") (L × H × W) (with bracket)" },
          { label: "Frame Size", value: "10.3 mm (0.41\") (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1324 mm × 150 mm × 806 mm (52.4\" × 5.9\" × 31.7\") (L × W × H)" },
          { label: "Net Weight", value: "20.5 kg (45.19 lb)" },
          { label: "Gross Weight", value: "25.3 kg (55.78 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH43-SAI400TL": {
    id: "LP-DH43-SAI400TL",
    name: "LP-DH43-SAI400TL",
    title: "Dahua 43 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25% (OC panel)" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5350 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz\n≤23 dBm@5150-5350 MHz\n≤20 dBm@5250-5350 MHz\n≤27 dBm@5470-5725 MHz\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "Touchscreen",
        specs: [
          { label: "Response Time", value: "≤8 ms" },
          { label: "Touch Technology", value: "Capacitive" },
          { label: "Touch Points", value: "10 points" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "100 W (typ.), 125 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "967.0 mm × 556.0 mm × 28.8 mm (38.07\" × 21.89\" × 1.13\") (L × H × W) (without bracket)\n967.0 mm × 556.0 mm × 31.1 mm (38.07\" × 21.89\" × 1.22\") (L × H × W) (with bracket)" },
          { label: "Frame Size", value: "13.5 mm (0.53\") (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1056 mm × 130 mm × 652 mm (41.57\" × 5.12\" × 25.67\") (L × W × H)" },
          { label: "Net Weight", value: "17.5 kg (38.58 lb)" },
          { label: "Gross Weight", value: "22.8 kg (50.27 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall-mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH55-SAI400TL": {
    id: "LP-DH55-SAI400TL",
    name: "LP-DH55-SAI400TL",
    title: "Dahua 55 inch Indoor Wall-mounted LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Screen Size", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast Ratio", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "Response Time", value: "8 ms" },
          { label: "Surface Treatment", value: "Haze 25% (OC panel)" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\nH.264 AVC HP@L5.1 up to 2160p@30 fps\nVP9 Profile 2 up to 2160p@60 fps\nH.264 MVC up to 1080p@60 fps\nMPEG-4 ASP@L5 up to 1080p@30 fps\nWMV/VC-1 SP/MP/AP up to 1080p@30 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi Standard", value: "802.11 b/g/n/ac/ax" },
          { label: "Wi-Fi Frequency Range", value: "2400-2483.5 MHz, 5150-5350 MHz, 5470-5725 MHz, 5725-5850 MHz" },
          { label: "MAX Power Transmission (Wi-Fi)", value: "≤20 dBm@2400-2483.5 MHz\n≤23 dBm@5150-5350 MHz\n≤20 dBm@5250-5350 MHz\n≤27 dBm@5470-5725 MHz\n≤14 dBm@5725-5850 MHz" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 (type A), 1 × USB 3.0 (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K@60 Hz)" },
          { label: "Audio Port", value: "1 × 3.5 mm jack output" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 5 W" }
        ]
      },
      {
        category: "Touchscreen",
        specs: [
          { label: "Response Time", value: "≤8 ms" },
          { label: "Touch Technology", value: "Capacitive" },
          { label: "Touch Points", value: "10 points" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100-240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "120 W (typ.), 152 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–85% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Metal casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1237.3 mm × 708.0 mm × 28.8 mm (48.71\" × 27.87\" × 1.13\") (L × H × W) (without bracket)\n1237.3 mm × 708.0 mm × 31.1 mm (48.71\" × 27.87\" × 1.22\") (L × H × W) (with bracket)" },
          { label: "Frame Size", value: "14.2 mm (0.56\") (T/L/R/B)" },
          { label: "Packaging Dimensions", value: "1354 mm × 150 mm × 806 mm (53.31\" × 5.91\" × 31.73\") (L × W × H)" },
          { label: "Net Weight", value: "26.7 kg (58.86 lb)" },
          { label: "Gross Weight", value: "31.5 kg (69.45 lb)" },
          { label: "Wall Mount VESA", value: "400 mm × 400 mm (15.75\" × 15.75\")" },
          { label: "Installation", value: "Wall mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Accessory", value: "Wall mount bracket, user manual, legal and regulatory information, energy label, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, EMC, CE LVD, CE ERP, RED" }
        ]
      }
    ]
  },
  "LP-DH43-LAI400L": {
    id: "LP-DH43-LAI400L",
    name: "LP-DH43-LAI400L",
    title: "Dahua 43 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel, it works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "43 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H), 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "1-ch H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\n1-ch H.264 AVC HP@L5.1 up to 2160p@30 fps\n1-ch VP9 Profile 2 up to 2160p@60 fps\n4-ch MVC up to 1080p@60 fps\n4-ch MPEG-4 ASP@L5 up to 1080p@60 fps\n4-ch WMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack Mic" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 10 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "65 W (typ), 100 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Plastic casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "972.5 mm × 572 mm × 82.5 mm (38.29\" × 22.52\" × 3.25\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1030 mm × 115 mm × 650 mm (40.55\" × 4.53\" × 25.59\")" },
          { label: "Net Weight", value: "6.5 kg (14.33 lb)" },
          { label: "Gross Weight", value: "9 kg (19.84 lb)" },
          { label: "Installation", value: "Horizontal/Vertical mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall Mount VESA", value: "200 mm × 200 mm" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH50-LAI400L": {
    id: "LP-DH50-LAI400L",
    name: "LP-DH50-LAI400L",
    title: "Dahua 50 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel, it works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "50 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H), 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "1-ch H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\n1-ch H.264 AVC HP@L5.1 up to 2160p@30 fps\n1-ch VP9 Profile 2 up to 2160p@60 fps\n4-ch MVC up to 1080p@60 fps\n4-ch MPEG-4 ASP@L5 up to 1080p@60 fps\n4-ch WMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack Mic" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 10 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "65 W (typ), 120 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Plastic casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1131.1 mm × 655.8 mm × 78.7 mm (44.53\" × 25.82\" × 3.10\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1230 mm × 112 mm × 748 mm (48.43\" × 4.41\" × 29.45\")" },
          { label: "Net Weight", value: "10 kg (22.05 lb)" },
          { label: "Gross Weight", value: "13 kg (28.66 lb)" },
          { label: "Installation", value: "Horizontal/Vertical mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall Mount VESA", value: "200 mm × 200 mm" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH55-LAI400L": {
    id: "LP-DH55-LAI400L",
    name: "LP-DH55-LAI400L",
    title: "Dahua 55 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel, it works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "55 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H), 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "1-ch H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\n1-ch H.264 AVC HP@L5.1 up to 2160p@30 fps\n1-ch VP9 Profile 2 up to 2160p@60 fps\n4-ch MVC up to 1080p@60 fps\n4-ch MPEG-4 ASP@L5 up to 1080p@60 fps\n4-ch WMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack Mic" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 10 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "90 W (typ), 140 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Plastic casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1243.7 mm × 728.7 mm × 79.3 mm (48.96\" × 28.69\" × 3.12\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1320 mm × 117 mm × 800 mm (51.97\" × 4.61\" × 31.50\")" },
          { label: "Net Weight", value: "11.7 kg" },
          { label: "Gross Weight", value: "15.3 kg" },
          { label: "Installation", value: "Horizontal/Vertical mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall Mount VESA", value: "200 mm × 200 mm" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-DH65-LAI400L": {
    id: "LP-DH65-LAI400L",
    name: "LP-DH65-LAI400L",
    title: "Dahua 65 inch LCD Digital Signage",
    description: [
      "Designed with an industrial-grade panel, it works up to 24 hours a day.",
      "Includes a mainstream quad-core CPU, Android system, and decodes up to 4K resolution.",
      "Plays and releases programs in multiple modes.",
      "With intelligent split screen, its page layout can be freely adjusted, making it suitable for a variety of scenes.",
      "Designed with B/S architecture, the device manages programs by time and location, and generates operation reports.",
      "Supports encrypting platform data transmission, multi-level permission review for program release and terminal password protection.",
      "The device offers unified platform management, and can be remotely controlled by the platform."
    ],
    features: [],
    specifications: [
      {
        category: "LCD Panel",
        specs: [
          { label: "Panel Dimensions", value: "65 inch" },
          { label: "Backlight", value: "DLED" },
          { label: "LCD Technology", value: "IPS/VA" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Brightness", value: "500 cd/m² (typ.)" },
          { label: "Contrast", value: "IPS 1200:1 (typ.) / VA 4000:1 (typ.)" },
          { label: "Display Colors", value: "10 bit (8 bit + FRC), 1.07B colors" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Viewing Angle", value: "178° (H), 178° (V)" },
          { label: "Response Time", value: "8 ms (typ.)" },
          { label: "Surface Treatment", value: "Haze 25%" }
        ]
      },
      {
        category: "Built-in System",
        specs: [
          { label: "Operating System", value: "Android 11.0" },
          { label: "CPU", value: "4 cores A55, 1.92 GHz" },
          { label: "RAM", value: "4 GB" },
          { label: "ROM", value: "32 GB" },
          { label: "Video Decoding", value: "1-ch H.265 HEVC MP-10@L5.1 up to 2160p@60 fps\n1-ch H.264 AVC HP@L5.1 up to 2160p@30 fps\n1-ch VP9 Profile 2 up to 2160p@60 fps\n4-ch MVC up to 1080p@60 fps\n4-ch MPEG-4 ASP@L5 up to 1080p@60 fps\n4-ch WMV/VC-1 SP/MP/AP up to 1080p@60 fps" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Audio Compression", value: "MPEG-2, WMA, WAV" },
          { label: "Video Compression", value: "MPEG-4, H.264 AVC/MVC, H.265 HEVC" },
          { label: "Video Format", value: "mp4, avi, mov, mkv, wmv" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Network Port", value: "1 × RJ-45 10/100/1000 Mbps self-adaptive Ethernet port" },
          { label: "Wi-Fi", value: "Optional (External Wi-Fi module)" },
          { label: "Bluetooth", value: "NO" },
          { label: "Data Transmission Ports", value: "1 × USB 2.0 ports (type A)\n1 × USB 3.0 ports (type A)\n1 × TF card slot, up to 128 GB" },
          { label: "Video Input", value: "1 × HDMI 2.1 (4K @60Hz)" },
          { label: "Video Output", value: "NO" },
          { label: "Audio Port", value: "1 × 3.5 mm jack Mic" },
          { label: "IR Receiver", value: "Yes" }
        ]
      },
      {
        category: "Speaker",
        specs: [
          { label: "Built-in Speaker", value: "2 × 10 W" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "115 W (typ), 180 W (max)" },
          { label: "Standby Power Consumption", value: "≤0.5 W" },
          { label: "Operating Temperature", value: "0 °C to +40 °C (+32 °F to +104 °F) (avoid direct sunlight)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH), non-condensing" },
          { label: "Storage Humidity", value: "10%–90% (RH), non-condensing" },
          { label: "Product Material", value: "Plastic casing" },
          { label: "Casing Color (Frame/Rear)", value: "Black" },
          { label: "Product Dimensions", value: "1471.7 mm × 857.4 mm × 85.8 mm (57.94\" × 33.76\" × 3.38\") (without bracket)" },
          { label: "Packaging Dimensions", value: "1641 mm × 182 mm × 960 mm (64.61\" × 7.17\" × 37.80\")" },
          { label: "Net Weight", value: "15.6 kg (34.39 lb)" },
          { label: "Gross Weight", value: "23.3 kg (51.37 lb)" },
          { label: "Installation", value: "Horizontal/Vertical mount" },
          { label: "Display Mode", value: "Landscape/Portrait" },
          { label: "Wall-mounting Hole Position", value: "400 mm × 246 mm" },
          { label: "Accessory", value: "Bracket, user's manual, power cord, legal and regulatory information, remote control" }
        ]
      },
      {
        category: "Certification",
        specs: [
          { label: "Certifications", value: "CE, ERP" }
        ]
      }
    ]
  },
  "LP-LS490UCM-UF": {
    id: "LP-LS490UCM-UF",
    name: "LP-LS490UCM-UF",
    title: "49\" FHD Video Wall Display Unit (Ultra Narrow Bezel 3.5mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 3.5mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS490UCM-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "49\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "2.3mm (T/L), 1.2mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "45dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "<0.5W" },
          { label: "Power Consumption (Typical)", value: "120W" },
          { label: "Power Consumption (Max.)", value: "155W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "28.6kg (63.1lb)" },
          { label: "Net Weight", value: "19.5kg (43.0lb)" },
          { label: "Product Dimension (W×H×D)", value: "1078.4mm×608.5mm×121.4mm (42.5\"×24.0\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1220mm×800mm×270mm (48.0\"×31.5\"×10.6\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UCM-UF": {
    id: "LP-LS550UCM-UF",
    name: "LP-LS550UCM-UF",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 3.5mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 3.5mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UCM-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "2.3mm (T/L), 1.2mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "<0.5W" },
          { label: "Power Consumption (Typical)", value: "140W" },
          { label: "Power Consumption (Max.)", value: "180W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "Wall Mount VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "31.1kg (68.5lb)" },
          { label: "Net Weight", value: "21.3kg (47.0lb)" },
          { label: "Product Dimension (W×H×D)", value: "1213.5mm×684.3mm×120.0mm (47.8\"×26.9\"×4.7\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×940mm×280mm (53.5\"×37.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "20%RH~90%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UEH-UG": {
    id: "LP-LS550UEH-UG",
    name: "LP-LS550UEH-UG",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 0.88mm)",
    description: [
      "Industrial level IPS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 0.88 mm bezel-to-bezel design",
      "Anti-glare and high brightness panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UEH-UG" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "0.44mm (T/L/B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "700 cd/m²" },
          { label: "Contrast Ratio", value: "1100:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "10bit (1.07G)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 28%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "<0.5W" },
          { label: "Power Consumption (Typical)", value: "150W" },
          { label: "Power Consumption (Max.)", value: "200W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Net Weight", value: "24.5kg (54.01lb)" },
          { label: "Gross Weight", value: "33kg (72.75lb)" },
          { label: "Product Dimension (W×H×D)", value: "1210.5mm×681.2mm×117.4mm (47.7\"×26.8\"×4.6\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×940mm×280mm (53.5\"×37.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UDM-UF": {
    id: "LP-LS550UDM-UF",
    name: "LP-LS550UDM-UF",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 1.7mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 1.7mm Bezel-to-Panel (Bezel to Bezel) design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UDM-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "B2B: 1.7mm (Panel Bezel to Panel Bezel), 0.9mm (T/L), 0.8mm (B/R)\nA2A: 2.45mm (Active area to Active area), 1.5mm (T/L), 0.95mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "10 bit (1.07G)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 28%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "130W" },
          { label: "Power Consumption (Max.)", value: "155W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "33kg (72.7lb)" },
          { label: "Net Weight", value: "26kg (57.3lb)" },
          { label: "Product Dimension (W×H×D)", value: "1213.7mm×684.5mm×121.7mm (47.8\"×26.9\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×940mm×280mm (53.5\"×37.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS460UDM-UF": {
    id: "LP-LS460UDM-UF",
    name: "LP-LS460UDM-UF",
    title: "46\" FHD Video Wall Display Unit (Ultra Narrow Bezel 1.7mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 1.7mm Bezel-to-Panel (Bezel to Bezel) design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS460UDM-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "46\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "B2B: 1.7mm (Panel Bezel to Panel Bezel), 0.9mm (T/L), 0.8mm (B/R)\nA2A: 2.45mm (Active area to Active area), 1.5mm (T/L), 0.95mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "48dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "120W" },
          { label: "Power Consumption (Max.)", value: "140W" },
          { label: "Energy Efficiency Class (EU)", value: "C" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "25.1kg (55.3lb)" },
          { label: "Net Weight", value: "17.5kg (38.6lb)" },
          { label: "Product Dimension (W×H×D)", value: "1021.2mm×575.8mm×122.7mm (40.2\"×22.7\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1200mm×815mm×265mm (47.2\"×32.1\"×10.4\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550KDH-UF": {
    id: "LP-LS550KDH-UF",
    name: "LP-LS550KDH-UF",
    title: "55\" UHD Video Wall Display Unit (Ultra Narrow Bezel 1.7mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 1.7mm Bezel-to-Panel (Bezel to Bezel) design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550KDH-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "3840×2160 (UHD)" },
          { label: "Bezel Width", value: "B2B: 1.7mm (Panel Bezel to Panel Bezel), 0.9mm (T/L), 0.8mm (B/R)\nA2A: 2.45mm (Active area to Active area), 1.5mm (T/L), 0.95mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "700 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "80dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "1.07G (8bits+FRC)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "150W" },
          { label: "Power Consumption (Max.)", value: "200W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "34.3kg (75.6lb)" },
          { label: "Net Weight", value: "24.5kg (54.0lb)" },
          { label: "Product Dimension (W×H×D)", value: "1211.2mm×682.1mm×121.7mm (47.7\"×26.9\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×940mm×280mm (53.5\"×37.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550KDM-UF": {
    id: "LP-LS550KDM-UF",
    name: "LP-LS550KDM-UF",
    title: "55\" UHD Video Wall Display Unit (Ultra Narrow Bezel 1.7mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 1.7mm Bezel-to-Panel (Bezel to Bezel) design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550KDM-UF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "3840×2160 (UHD)" },
          { label: "Bezel Width", value: "B2B: 1.7mm (Panel Bezel to Panel Bezel), 0.9mm (T/L), 0.8mm (B/R)\nA2A: 2.45mm (Active area to Active area), 1.5mm (T/L), 0.95mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "80dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "1.07G (8bits+FRC)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "VGA(D-Sub)×1, DVI-D×1, HDMI×2, DP×1, RS232×1, Audio×1, IR×1" },
          { label: "Output", value: "DP×1, RS232×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "140W" },
          { label: "Power Consumption (Max.)", value: "200W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "34.3kg (75.6lb)" },
          { label: "Net Weight", value: "24.5kg (54.0lb)" },
          { label: "Product Dimension (W×H×D)", value: "1211.2mm×682.1mm×121.7mm (47.7\"×26.9\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×940mm×280mm (53.5\"×37.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UEH-UF": {
    id: "LP-LS550UEH-UF",
    name: "LP-LS550UEH-UF",
    title: "55 inch 0.88mm LCD Display Wall Unit (LCD DISPLAY)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 0.88 mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface.",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Display",
        specs: [
          { label: "Model", value: "DHI-LS550UEH-UF" },
          { label: "Screen Size", value: "55 inch" },
          { label: "Viewing Size", value: "1210.48 (H) × 681.28 (V) mm" },
          { label: "Lifespan", value: "50,000 hrs" },
          { label: "Backlight", value: "DLED" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Color Temperature", value: "10000 K ± 1000 K" },
          { label: "Brightness", value: "700 cd/m²" },
          { label: "Static Contrast Ratio", value: "1200:1" },
          { label: "Dynamic Contrast Ratio", value: "45,000:1" },
          { label: "H-Scanning Frequency", value: "52.8 kHz~70 kHz" },
          { label: "V-Scanning Frequency", value: "47 Hz~63 Hz" },
          { label: "Maximum Pixel Frequency", value: "75 MHz" },
          { label: "Pixel Pitch", value: "0.21 mm × 0.63 mm (0.01\" × 0.02\")" },
          { label: "Resolution", value: "1920 (H) × 1080 (V)" },
          { label: "Refresh Rate", value: "60 Hz" },
          { label: "Response Time", value: "8 ms" },
          { label: "Display Color", value: "8 Bit" },
          { label: "Color Gamut", value: "72% NTSC (typ.)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "LCD Technology", value: "ADS" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Input Port", value: "1 × HDMI 2.0 (HDMI 1: 3840 × 2160@60 Hz, HDCP 1.4), 1 × HDMI 2.0 (HDMI 2: 1920 × 1080@60 Hz, HDCP 1.4), 1 × DP 1.4 (3840 × 2160@60 Hz), 1 × VGA (1920 × 1080@60 Hz), 1 × DVI (3840 × 2160@30 Hz), 1 × RS-232 In, 1 × IR, 1 × Audio In" },
          { label: "Output Port", value: "1 × RS-232 Out, 1 × DP out (3840 × 2160@30 Hz), 1 × Audio Out" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC (±10%), 50/60 Hz" },
          { label: "Power Consumption", value: "212.5 W (basic), 214 W (typ.), 215.1 W (max.)" },
          { label: "Standby Power Consumption", value: "<0.5 W" },
          { label: "Control Mode", value: "Supports being controlled through the RS-232 serial port and infrared remote control." },
          { label: "Operating Temperature", value: "0 °C to +50 °C (+32 °F to +122 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Storage Humidity", value: "5%–90% (RH)" },
          { label: "Operation Hours", value: "7 × 24 hrs" },
          { label: "Product Dimensions", value: "1,210.5 mm × 681.2 mm × 116.7 mm (47.66\" × 26.82\" × 4.59\") (L × H × W)" },
          { label: "Packaging Dimensions", value: "1,360 mm × 940 mm × 280 mm (53.54\" × 37.01\" × 11.02\") (L × H × W)" },
          { label: "Bezel Width", value: "0.44 mm (T/L), 0.44 mm (B/R)" },
          { label: "Net Weight", value: "23.1 kg (50.93 lb)" },
          { label: "Gross Weight", value: "34.1 kg (75.18 lb)" },
          { label: "Wall Mount VESA", value: "600 mm × 400 mm (23.62\" × 15.75\")" }
        ]
      }
    ]
  },
  "LP-LS550UEM-UF": {
    id: "LP-LS550UEM-UF",
    name: "LP-LS550UEM-UF",
    title: "55 inch 0.88mm LCD Display Wall Unit (LCD DISPLAY)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 0.88 mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface.",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Display",
        specs: [
          { label: "Model", value: "DHI-LS550UEM-UF" },
          { label: "Screen Size", value: "55 inch" },
          { label: "Viewing Size", value: "1210.48 (H) × 681.28 (V) mm" },
          { label: "Lifespan", value: "50,000 hrs" },
          { label: "Backlight", value: "DLED" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Color Temperature", value: "10000 K ± 1000 K" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Static Contrast Ratio", value: "1200:1" },
          { label: "Dynamic Contrast Ratio", value: "45,000:1" },
          { label: "H-Scanning Frequency", value: "56 kHz~78 kHz" },
          { label: "V-Scanning Frequency", value: "47 Hz~63 Hz" },
          { label: "Maximum Pixel Frequency", value: "75 MHz" },
          { label: "Pixel Pitch", value: "0.21 mm × 0.63 mm (0.01\" × 0.02\")" },
          { label: "Resolution", value: "1920 (H) × 1080 (V)" },
          { label: "Refresh Rate", value: "60 Hz" },
          { label: "Response Time", value: "8 ms" },
          { label: "Display Color", value: "8 Bit" },
          { label: "Color Gamut", value: "72% NTSC (typ.)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "LCD Technology", value: "ADS" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Input Port", value: "1 × HDMI 2.0 (HDMI 1: 3840 × 2160@60 Hz, HDCP 1.4), 1 × HDMI 2.0 (HDMI 2: 1920 × 1080@60 Hz, HDCP 1.4), 1 × DP 1.4 (3840 × 2160@60 Hz), 1 × VGA (1920 × 1080@60 Hz), 1 × DVI (3840 × 2160@30 Hz), 1 × RS-232 In, 1 × IR, 1 × Audio In" },
          { label: "Output Port", value: "1 × RS-232 Out, 1 × DP out (3840 × 2160@30 Hz), 1 × Audio Out" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC (±10%), 50/60 Hz" },
          { label: "Power Consumption", value: "155 W (basic), 160.5 W (typ.), 180.5 W (max.)" },
          { label: "Standby Power Consumption", value: "<0.5 W" },
          { label: "Control Mode", value: "Supports being controlled through the RS-232 serial port and infrared remote control." },
          { label: "Operating Temperature", value: "0 °C to +50 °C (+32 °F to +122 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Storage Humidity", value: "5%–90% (RH)" },
          { label: "Operation Hours", value: "7 × 24 hrs" },
          { label: "Product Dimensions", value: "1,210.5 mm × 681.2 mm × 116.7 mm (47.66\" × 26.82\" × 4.59\") (L × H × W)" },
          { label: "Packaging Dimensions", value: "1,360 mm × 940 mm × 280 mm (53.54\" × 37.01\" × 11.02\") (L × H × W)" },
          { label: "Bezel Width", value: "0.44 mm (T/L), 0.44 mm (B/R)" },
          { label: "Net Weight", value: "23.1 kg (50.93 lb)" },
          { label: "Gross Weight", value: "34.1 kg (75.18 lb)" },
          { label: "Wall Mount VESA", value: "600 mm × 400 mm (23.62\" × 15.75\")" }
        ]
      }
    ]
  },
  "LP-LS650KCM-UF": {
    id: "LP-LS650KCM-UF",
    name: "LP-LS650KCM-UF",
    title: "65 inch 3.5mm LCD Display Wall Unit (LCD DISPLAY)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 3.5 mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, DP, RJ45 daisy chain, RS-232, Audio",
      "Up to 4K@60 Hz signal input by DP IN or HDMI1 interface, up to 4K@60 Hz signal output by DP OUT interface.",
      "Infrared, RS-232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Display",
        specs: [
          { label: "Model", value: "DHI-LS650KCM-UF" },
          { label: "Screen Size", value: "65 inch" },
          { label: "Viewing Size", value: "1428.48 (H) × 803.52 (V) mm" },
          { label: "Lifespan", value: "50,000 hrs" },
          { label: "Backlight", value: "DLED" },
          { label: "Aspect Ratio", value: "16:9" },
          { label: "Color Temperature", value: "10000 K ± 1000 K" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Static Contrast Ratio", value: "1200:1" },
          { label: "Dynamic Contrast Ratio", value: "45,000:1" },
          { label: "H-Scanning Frequency", value: "120.0 kHz~142.1 kHz" },
          { label: "V-Scanning Frequency", value: "59 Hz~61 Hz" },
          { label: "Maximum Pixel Frequency", value: "77 MHz" },
          { label: "Pixel Pitch", value: "0.372 mm × 0.372 mm (0.01\" × 0.01\")" },
          { label: "Resolution", value: "3840 (H) × 2160 (V)" },
          { label: "Refresh Rate", value: "60 Hz" },
          { label: "Response Time", value: "8 ms" },
          { label: "Display Color", value: "8 Bit" },
          { label: "Color Gamut", value: "72% NTSC (typ.)" },
          { label: "Viewing Angle", value: "178° (H) / 178° (V)" },
          { label: "LCD Technology", value: "ADS" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" }
        ]
      },
      {
        category: "Device Ports",
        specs: [
          { label: "Input Port", value: "1 × HDMI 2.0 (HDMI 1: 3840 × 2160@60 Hz, HDCP 1.4), 1 × HDMI 2.0 (HDMI 2: 1920 × 1080@60 Hz, HDCP 1.4), 1 × DP 1.4 (3840 × 2160@60 Hz), 1 × VGA (1920 × 1080@60 Hz), 1 × DVI (3840 × 2160@30 Hz), 1 × RS-232 In, 1 × IR, 1 × Audio In" },
          { label: "Output Port", value: "1 × RS-232 Out, 1 × DP out (3840 × 2160@30 Hz), 1 × Audio Out" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC (±10%), 50/60 Hz" },
          { label: "Power Consumption", value: "131.5 W (basic), 217 W (typ.), 255 W (max.)" },
          { label: "Standby Power Consumption", value: "<0.5 W" },
          { label: "Control Mode", value: "Supports being controlled through the RS-232 serial port and infrared remote control." },
          { label: "Operating Temperature", value: "0 °C to +50 °C (+32 °F to +122 °F)" },
          { label: "Operating Humidity", value: "10%–80% (RH)" },
          { label: "Storage Temperature", value: "-20 °C to +60 °C (-4 °F to +140 °F)" },
          { label: "Storage Humidity", value: "5%–90% (RH)" },
          { label: "Operation Hours", value: "7 × 24 hrs" },
          { label: "Product Dimensions", value: "1,432.6 mm × 807.6 mm × 128.3 mm (56.40\" × 31.80\" × 5.05\") (L × H × W)" },
          { label: "Packaging Dimensions", value: "1,725 mm × 1,048 mm × 295 mm (67.91\" × 41.26\" × 11.61\") (L × H × W)" },
          { label: "Bezel Width", value: "2.3 mm (T/L), 1.2 mm (B/R)" },
          { label: "Net Weight", value: "37.1 kg (81.79 lb)" },
          { label: "Gross Weight", value: "52.8 kg (116.4 lb)" },
          { label: "Wall Mount VESA", value: "600 mm × 400 mm (23.62\" × 15.75\")" }
        ]
      }
    ]
  },
  "LP-LS550UCM-EF": {
    id: "LP-LS550UCM-EF",
    name: "LP-LS550UCM-EF",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 3.5mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 3.5mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, BNC, USB, supporting HDMI daisy chain",
      "Infrared, RS232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UCM-EF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "2.3mm (T/L), 1.2mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "CVBS(BNC)×1, VGA(D-Sub)×1, DVI-D×1, HDMI×1, RS232×1, USB×2, Audio×1, IR×1" },
          { label: "Output", value: "CVBS(BNC)×1, RS232×1, HDMI×2, VGA×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "175W" },
          { label: "Power Consumption (Max.)", value: "190W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "Wall Mount VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "31.1kg (68.6lb)" },
          { label: "Net Weight", value: "21.4kg (47.2lb)" },
          { label: "Product Dimension (W×H×D)", value: "1213.5mm×684.3mm×120.0mm (47.8\"×26.9\"×4.7\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×945mm×280mm (53.5\"×37.2\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "20%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UEH-EF": {
    id: "LP-LS550UEH-EF",
    name: "LP-LS550UEH-EF",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 0.88mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 0.88mm bezel-to-bezel design",
      "Anti-glare and high brightness panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, BNC, USB, supporting HDMI daisy chain",
      "Infrared, RS232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UEH-EF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "0.44mm (T/L), 0.44mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "700 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "CVBS(BNC)×1, VGA(D-Sub)×1, DVI-D×1, HDMI×1, RS232×1, USB×2, Audio×1, IR×1" },
          { label: "Output", value: "CVBS(BNC)×1, RS232×1, HDMI×2, VGA×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "215W" },
          { label: "Power Consumption (Max.)", value: "230W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "Wall Mount VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Net Weight", value: "24.3kg (53.6lb)" },
          { label: "Gross Weight", value: "34.1kg (75.2lb)" },
          { label: "Product Dimension (W×H×D)", value: "1210.5mm×681.2mm×115.8mm (47.7\"×26.8\"×4.6\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×945mm×280mm (53.5\"×37.2\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "20%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS550UEM-EF": {
    id: "LP-LS550UEM-EF",
    name: "LP-LS550UEM-EF",
    title: "55\" FHD Video Wall Display Unit (Ultra Narrow Bezel 0.88mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 0.88mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, BNC, USB, supporting HDMI daisy chain",
      "Infrared, RS232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS550UEM-EF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "55\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "0.44mm (T/L), 0.44mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "40dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "CVBS(BNC)×1, VGA(D-Sub)×1, DVI-D×1, HDMI×1, RS232×1, USB×2, Audio×1, IR×1" },
          { label: "Output", value: "CVBS(BNC)×1, RS232×1, HDMI×2, VGA×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "166W" },
          { label: "Power Consumption (Max.)", value: "180W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Wall Mount VESA", value: "600×400mm, M6" },
          { label: "Net Weight", value: "24.1kg (53.1lb)" },
          { label: "Gross Weight", value: "33.9kg (74.7lb)" },
          { label: "Product Dimension (W×H×D)", value: "1210.5mm×681.2mm×115.8mm (47.7\"×26.8\"×4.6\")" },
          { label: "Package Dimension (W×H×D)", value: "1360mm×915mm×280mm (53.5\"×36.0\"×11.0\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "20%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-LS490UCM-EF": {
    id: "LP-LS490UCM-EF",
    name: "LP-LS490UCM-EF",
    title: "49\" FHD Video Wall Display Unit (Ultra Narrow Bezel 3.5mm)",
    description: [
      "Industrial level ADS LCD panel, suitable for continuous 24/7 operation",
      "Ultra-narrow 3.5mm bezel-to-bezel design",
      "Anti-glare panel, vivid and memorable image quality",
      "Factory calibration technology for high color uniformity",
      "Built-in 3D noise reduction system and picture splicing function",
      "Abundant interfaces HDMI, DVI, VGA, BNC, USB, supporting HDMI daisy chain",
      "Infrared, RS232 dual mode, supporting remote control by computer",
      "Professional thermal design to extend device lifespan",
      "Built-in power, low energy consumption, ultra-quiet",
      "Modular structure design, multiple installation modes",
      "Widely used in surveillance center, command center, meeting room, commercial display scenes, etc."
    ],
    features: [],
    specifications: [
      {
        category: "Model",
        specs: [
          { label: "Model", value: "DHI-LS490UCM-EF" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Diagonal Size", value: "49\"(16:9)" },
          { label: "Panel Type", value: "ADS" },
          { label: "Resolution", value: "1920×1080 (FHD)" },
          { label: "Bezel Width", value: "2.3mm (T/L), 1.2mm (B/R)" },
          { label: "Backlight", value: "Direct LED" },
          { label: "Brightness", value: "500 cd/m²" },
          { label: "Contrast Ratio", value: "1200:1" },
          { label: "Pixel Density", value: "45dpi" },
          { label: "Viewing Angle", value: "H178°, V178°" },
          { label: "Response Time (G-to-G)", value: "8ms" },
          { label: "Color Depth", value: "8bit (16.7M)" },
          { label: "Color Temperature", value: "10,000K" },
          { label: "Surface Treatment", value: "Haze 25%, 3H" },
          { label: "MTBF", value: "50,000h" }
        ]
      },
      {
        category: "Signals",
        specs: [
          { label: "Input", value: "CVBS(BNC)×1, VGA(D-Sub)×1, DVI-D×1, HDMI×1, RS232×1, USB×2, Audio×1, IR×1" },
          { label: "Output", value: "CVBS(BNC)×1, RS232×1, HDMI×2, VGA×1, Audio×1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "AC100V ~ AC240V, 50/60 Hz" },
          { label: "Power Consumption (Standby)", value: "≤0.5W" },
          { label: "Power Consumption (Typical)", value: "135W" },
          { label: "Power Consumption (Max.)", value: "150W" },
          { label: "Energy Efficiency Class (EU)", value: "G" },
          { label: "Installation Mode", value: "Floor-standing, wall-mounted" },
          { label: "VESA", value: "600×400mm, M6" },
          { label: "Control Mode", value: "Infrared, RS232 dual mode, supporting remote control by computer" },
          { label: "Gross Weight", value: "23.1kg (51.0lb)" },
          { label: "Net Weight", value: "18.5kg (40.8lb)" },
          { label: "Product Dimension (W×H×D)", value: "1078.4mm×608.4mm×120.0mm (42.5\"×24\"×4.8\")" },
          { label: "Package Dimension (W×H×D)", value: "1265mm×850mm×270mm (49.8\"×33.5\"×10.6\")" },
          { label: "Temperature", value: "0℃~+50℃" },
          { label: "Humidity", value: "10%RH~80%RH (non-condensing)" }
        ]
      }
    ]
  },
  "LP-CON2100-0416H": {
    id: "LP-CON2100-0416H",
    name: "LP-CON2100-0416H",
    title: "Lamps Plus 1.5U EMBEDDED MULTI-SCREEN CONTROLLER",
    description: [
      "16-ch HDMI signal output, and up to 1920×1080@60 Hz is supported.",
      "Supports 4 channel HDMI acquisition, with a maximum resolution of 4K@60 Hz. You can switch between the 3 modes: 1-channel 4K@60 Hz, 2-channel 4K@30 Hz, and 4 channel 1080p@60 Hz.",
      "Decodes 1 channel at 32 MP@30 fps, or 2 channels at 8 MP@60 fps, or 4 channels at 8 MP@30 fps, and is backward compatible.",
      "Outputs in ultra high and wide resolution, with a maximum of 3840×524@60 Hz or 524×3840@60 Hz.",
      "Includes a front panel LCD knob and shortcut keys for you to quickly change IP addresses, preset switches and tour, turn on and off the screen, switch between content, and display statuses such as the input status.",
      "Splits up to 9 windows for each screen, and supports M×N custom split.",
      "Opens up to 9 windows for each screen, and supports roaming.",
      "Supports configuring schemes, tour, scheduled schemes and setting the tour interval.",
      "Displays high-definition background images, and supports setting the default background color for the video wall.",
      "Supports customized EDID settings for the input port."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "16-ch HDMI" },
          { label: "Interoperability", value: "ONVIF;Hikvision Private;Dahua Private" },
          { label: "Audio Compression", value: "PCM;G.711" },
          { label: "Decoding Capability", value: "H.264 shares the same decoding with H.265. Decodes up to 1-ch 32 MP@30 fps; 2-ch 12 MP@30 fps; 4-ch 8 MP@30 fps; 5-ch 6 MP@30 fps; 8-ch 4 MP@30 fps; 16-ch 2 MP@30 fps, and is backward compatible" },
          { label: "Decoding Pixel", value: "QCIF;CIF;2CIF;HD1;D1;960H;720p;1080p;3 MP;4 MP;5 MP;6 MP;8 MP;12 MP;32 MP" },
          { label: "Output Resolution", value: "The default resolution is 1920 × 1080@60 Hz. Supports 1024 × 768@60 Hz, 1280 × 720@60 Hz, 1280 × 1024@60 Hz, 1366 × 768@60 Hz, 1400 × 1050@60 Hz, 1600 × 900@60 Hz, and 1920 × 1080@60 Hz. It also supports custom resolution output. The width can range from 128 to 3,840, and the height from 128 to 3,840. For custom resolution, it supports up to 3840 × 524@60 Hz or 524 × 3840@60 Hz." },
          { label: "Bit Rate Type", value: "Composite stream;video stream" },
          { label: "Video Input", value: "Supports 2-ch HDMI 2.0, 2-ch HDMI 1.3, and has 3 input modes. It also supports 1-ch 3840 × 2160@60 Hz or 2-ch 3840 × 2160@30 Hz or 4-ch 1920 × 1080@60 Hz. Supports the custom EDID" },
          { label: "Multi-screen Display", value: "Supports 1, 4, 6, 8, and 9 split, and M × N custom split, M × N ≤9." },
          { label: "Splicing", value: "Up to 16 screens can be spliced together." },
          { label: "Screen Splicing", value: "Up to 16 screens can be spliced together." },
          { label: "Window & Roam", value: "Opens up to 144 windows and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Fine Pixel Pitch LED", value: "The video output resolution can be customized and its fine pixel pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Virtual LED", value: "Displays customized OSD text, such as the location, font size, and scrolling direction." },
          { label: "Input Resolution", value: "The HDMI 2.0 port supports the following resolutions: 3840 × 2160@60 Hz, 3840 × 2160@30 Hz, 2560 × 1440@60 Hz, 1920 × 1080@60 Hz, 1600×900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports the following resolutions: 1920 × 1080@60 Hz, 1600 × 900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports custom resolutions. The width can be 600–2,560, and the height from 400–2,560." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "16-ch HDMI 1.3" },
          { label: "Audio Output", value: "1-ch 3.5 mm plug" },
          { label: "Alarm Input", value: "1 channel" },
          { label: "Alarm Output", value: "1 channel" },
          { label: "Network Port", value: "1 × RJ-45 10/100/1,000 Mbps self-adaptive Ethernet port" },
          { label: "RS-232", value: "2 × RJ-45 port" },
          { label: "USB", value: "3 × USB port" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤60 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing, 86 kPa–106 kPa" },
          { label: "Product Dimensions", value: "66 mm × 440 mm × 321 mm (2.60\" × 17.32\" × 12.64\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "572 mm × 482 mm × 192 mm (22.52\" × 18.98\" × 7.56\") (L × W × H)" },
          { label: "Gross Weight", value: "7.36 kg (16.23 lb)" },
          { label: "Net Weight", value: "4.64 kg (10.23 lb)" }
        ]
      }
    ]
  },
  "LP-CON2100-0412H": {
    id: "LP-CON2100-0412H",
    name: "LP-CON2100-0412H",
    title: "Lamps Plus 1.5U EMBEDDED MULTI-SCREEN CONTROLLER",
    description: [
      "12-ch HDMI signal output, and up to 1920×1080@60 Hz is supported.",
      "Supports 4 channel HDMI acquisition, with a maximum resolution of 4K@60 Hz. You can switch between the 3 modes: 1-channel 4K@60 Hz, 2-channel 4K@30 Hz, and 4 channel 1080p@60 Hz.",
      "Decodes 1 channel at 32 MP@30 fps, or 2 channels at 8 MP@60 fps, or 4 channels at 8 MP@30 fps, and is backward compatible.",
      "Outputs in ultra high and wide resolution, with a maximum of 3840×524@60 Hz or 524×3840@60 Hz.",
      "Includes a front panel LCD knob and shortcut keys for you to quickly change IP addresses, preset switches and tour, turn on and off the screen, switch between content, and display statuses such as the input status.",
      "Splits up to 9 windows for each screen, and supports M×N custom split.",
      "Opens up to 9 windows for each screen, and supports roaming.",
      "Supports configuring schemes, tour, scheduled schemes and setting the tour interval.",
      "Displays high-definition background images, and supports setting the default background color for the video wall.",
      "Supports customized EDID settings for the input port."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "12-ch HDMI" },
          { label: "Interoperability", value: "ONVIF;Hikvision Private;Dahua Private" },
          { label: "Audio Compression", value: "PCM;G.711" },
          { label: "Decoding Capability", value: "H.264 shares the same decoding with H.265. Decodes up to 1-ch 32 MP@30 fps; 2-ch 12 MP@30 fps; 4-ch 8 MP@30 fps; 5-ch 6 MP@30 fps; 8-ch 4 MP@30 fps; 16-ch 2 MP@30 fps, and is backward compatible" },
          { label: "Decoding Pixel", value: "QCIF;CIF;2CIF;HD1;D1;960H;720p;1080p;3 MP;4 MP;5 MP;6 MP;8 MP;12 MP;32 MP" },
          { label: "Output Resolution", value: "The default resolution is 1920 × 1080@60 Hz. Supports 1024 × 768@60 Hz, 1280 × 720@60 Hz, 1280 × 1024@60 Hz, 1366 × 768@60 Hz, 1400 × 1050@60 Hz, 1600 × 900@60 Hz, and 1920 × 1080@60 Hz. It also supports custom resolution output. The width can range from 128 to 3,840, and the height from 128 to 3,840. For custom resolution, it supports up to 3840 × 524@60 Hz or 524 × 3840@60 Hz." },
          { label: "Bit Rate Type", value: "Composite stream;video stream" },
          { label: "Video Input", value: "Supports 2-ch HDMI 2.0, 2-ch HDMI 1.3, and has 3 input modes. It also supports 1-ch 3840 × 2160@60 Hz or 2-ch 3840 × 2160@30 Hz or 4-ch 1920 × 1080@60 Hz. Supports the custom EDID" },
          { label: "Multi-screen Display", value: "Supports 1, 4, 6, 8, and 9 split, and M × N custom split, M × N ≤9." },
          { label: "Splicing", value: "Up to 12 screens can be spliced together." },
          { label: "Screen Splicing", value: "Up to 12 screens can be spliced together." },
          { label: "Window & Roam", value: "Opens up to 108 windows and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Fine Pixel Pitch LED", value: "The video output resolution can be customized and its fine pixel pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Virtual LED", value: "Displays customized OSD text, such as the location, font size, and scrolling direction." },
          { label: "Input Resolution", value: "The HDMI 2.0 port supports the following resolutions: 3840 × 2160@60 Hz, 3840 × 2160@30 Hz, 2560 × 1440@60 Hz, 1920 × 1080@60 Hz, 1600×900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports the following resolutions: 1920 × 1080@60 Hz, 1600 × 900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports custom resolutions. The width can be 600–2,560, and the height from 400–2,560." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "12-ch HDMI 1.3" },
          { label: "Audio Output", value: "1-ch 3.5 mm plug" },
          { label: "Alarm Input", value: "1 channel" },
          { label: "Alarm Output", value: "1 channel" },
          { label: "Network Port", value: "1 × RJ-45 10/100/1,000 Mbps self-adaptive Ethernet port" },
          { label: "RS-232", value: "2 × RJ-45 port" },
          { label: "USB", value: "3 × USB port" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤60 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing, 86 kPa–106 kPa" },
          { label: "Product Dimensions", value: "66 mm × 440 mm × 321 mm (2.60\" × 17.32\" × 12.64\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "572 mm × 482 mm × 192 mm (22.52\" × 18.98\" × 7.56\") (L × W × H)" },
          { label: "Gross Weight", value: "7.36 kg (16.23 lb)" },
          { label: "Net Weight", value: "4.64 kg (10.23 lb)" }
        ]
      }
    ]
  },
  "LP-CON2100-0410H": {
    id: "LP-CON2100-0410H",
    name: "LP-CON2100-0410H",
    title: "Lamps Plus 1.5U EMBEDDED MULTI-SCREEN CONTROLLER",
    description: [
      "10-ch HDMI signal output, and up to 1920×1080@60 Hz is supported.",
      "Supports 4 channel HDMI acquisition, with a maximum resolution of 4K@60 Hz. You can switch between the 3 modes: 1-channel 4K@60 Hz, 2-channel 4K@30 Hz, and 4 channel 1080p@60 Hz.",
      "Decodes 1 channel at 32 MP@30 fps, or 2 channels at 8 MP@60 fps, or 4 channels at 8 MP@30 fps, and is backward compatible.",
      "Outputs in ultra high and wide resolution, with a maximum of 3840 × 240 @60 Hz or 240 × 3840 @60 Hz.",
      "Includes a front panel LCD knob and shortcut keys for you to quickly change IP addresses, preset switches and tour, turn on and off the screen, switch between content, and display statuses such as the input status.",
      "Splits up to 9 windows for each screen, and supports M × N custom split.",
      "Opens up to 90 windows for each screen, and supports roaming.",
      "Supports configuring schemes, tour, scheduled schemes and setting the tour interval.",
      "Displays high-definition background images, and supports setting the default background color for the video wall.",
      "Supports customized EDID settings for the input port."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "10-ch HDMI" },
          { label: "Interoperability", value: "ONVIF;Hikvision Private;Dahua Private" },
          { label: "Audio Compression", value: "PCM;G.711" },
          { label: "Decoding Capability", value: "H.264 shares the same decoding with H.265. Decodes up to 1-ch 32 MP@30 fps; 2-ch 12 MP@30 fps; 4-ch 8 MP@30 fps; 5-ch 6 MP@30 fps; 8-ch 4 MP@30 fps; 16-ch 2 MP@30 fps, and is backward compatible" },
          { label: "Decoding Pixel", value: "QCIF;CIF;2CIF;HD1;D1;960H;720p;1080p;3 MP;4 MP;5 MP;6 MP;8 MP;12 MP;32 MP" },
          { label: "Output Resolution", value: "The default resolution is 1920 × 1080@60 Hz. Supports 1024 × 768@60 Hz, 1280 × 720@60 Hz, 1280 × 1024@60 Hz, 1366 × 768@60 Hz, 1400 × 1050@60 Hz, 1600 × 900@60 Hz, and 1920 × 1080@60 Hz. It also supports custom resolution output. The width can range from 128 to 3,840, and the height from 128 to 3,840. For custom resolution, it supports up to 3840 × 524@60 Hz or 524 × 3840@60 Hz." },
          { label: "Bit Rate Type", value: "Composite stream;video stream" },
          { label: "Video Input", value: "Supports 2-ch HDMI 2.0, 2-ch HDMI 1.3, and has 3 input modes. It also supports 1-ch 3840 × 2160@60 Hz or 2-ch 3840 × 2160@30 Hz or 4-ch 1920 × 1080@60 Hz. Supports the custom EDID" },
          { label: "Multi-screen Display", value: "Supports 1, 4, 6, 8, and 9 split, and M × N custom split, M × N ≤9." },
          { label: "Splicing", value: "Up to 10 screens can be spliced together." },
          { label: "Screen Splicing", value: "Up to 10 screens can be spliced together." },
          { label: "Window & Roam", value: "Opens up to 90 windows and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Fine Pixel Pitch LED", value: "The video output resolution can be customized and its fine pixel pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Virtual LED", value: "Displays customized OSD text, such as the location, font size, and scrolling direction." },
          { label: "Input Resolution", value: "The HDMI 2.0 port supports the following resolutions: 3840 × 2160@60 Hz, 3840 × 2160@30 Hz, 2560 × 1440@60 Hz, 1920 × 1080@60 Hz, 1600×900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports the following resolutions: 1920 × 1080@60 Hz, 1600 × 900@60 Hz, 1366 × 768@60 Hz, 1024 × 768@60 Hz, and 800 × 600@60 Hz. The HDMI 1.3 port supports custom resolutions. The width can be 600–2,560, and the height from 400–2,560." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "10-ch HDMI 1.3" },
          { label: "Audio Output", value: "1-ch 3.5 mm plug" },
          { label: "Alarm Input", value: "1 channel" },
          { label: "Alarm Output", value: "1 channel" },
          { label: "Network Port", value: "1 × RJ-45 10/100/1,000 Mbps self-adaptive Ethernet port" },
          { label: "RS-232", value: "2 × RJ-45 port" },
          { label: "USB", value: "3 × USB port" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤60 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing, 86 kPa–106 kPa" },
          { label: "Product Dimensions", value: "66 mm × 440 mm × 321 mm (2.60\" × 17.32\" × 12.64\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "572 mm × 482 mm × 192 mm (22.52\" × 18.98\" × 7.56\") (L × W × H)" },
          { label: "Gross Weight", value: "7.36 kg (16.23 lb)" },
          { label: "Net Weight", value: "4.64 kg (10.23 lb)" }
        ]
      }
    ]
  },
  "LP-CON3000-7U": {
    id: "LP-CON3000-7U",
    name: "LP-CON3000-7U",
    title: "Multi-screen Controller",
    description: [
      "19\" standard 7U ATCA industry box",
      "Easy and flexible configuration with pluggable card module design",
      "High speed passive rear panel design, reliable and stable",
      "FPGA array framework, built in ultrahigh bandwidth switch matrix, high image processing capacity, flexible data exchange",
      "PCI E bus, high system bandwidth",
      "Support analog/digital video signals input and matrix output",
      "Support non-compressed digital signal encoding output",
      "Support 4K/30fps video inputs and 4K/30fps outputs",
      "Maximum 320ch@1080P or 1280ch@D1 signal decoding (full configured)",
      "Remote cast analog/digital video onto the video-wall",
      "Redundant power optional and smart temperature controlled fan",
      "Remote reboot/upgrade/default setting and other operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "Intel X86 Baytrail microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI E" },
          { label: "Slot", value: "22 (2 Main Control Board Slot, 20 Video Function Board)" },
          { label: "Mainframe", value: "Power module (redundant power optional), main control board, control board, PCI E bus rear panel, smart temperature controlled fan" },
          { label: "Video Input Card", value: "Max. 20" },
          { label: "Video Output Card", value: "Max. 20" }
        ]
      },
      {
        category: "Video Input",
        specs: [
          { label: "VI0201UH-DC3000(HDMI) - Interface", value: "2ch HDMI1.4 support HDCP" },
          { label: "VI0201UH-DC3000(HDMI) - Access Capability", value: "2ch@4K, downward compatibility" },
          { label: "VI0401HH-DC3000(HDMI) - Interface", value: "4ch HDMI1.3 support HDCP" },
          { label: "VI0401HH-DC3000(HDMI) - Access Capability", value: "4ch@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0801HH-DC3000(HDMI) - Interface", value: "8ch HDMI1.4 support HDCP and I-SYSTEM" },
          { label: "VI0801HH-DC3000(HDMI) - Access Capability", value: "8ch 1080P@60Hz(30fps effective), support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HD-DC3000 (DVI-I) - Interface", value: "4ch DVI-I (support VGA/HDMI1.3 with convertor)" },
          { label: "VI0401HD-DC3000 (DVI-I) - Access Capability", value: "4ch@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VI0401HS-DC3000(3G-SDI) - Signal Format", value: "3G-SDI, 2.97Gbps" },
          { label: "VI0401HS-DC3000(3G-SDI) - Access Capability", value: "4ch@1080P, downward compatibility" },
          { label: "VI3201FB-DC3000 (CVBS) - Interface", value: "2ch DVI-D, 2 BNC interface braided lines which is 16 in 1" },
          { label: "VI3201FB-DC3000 (CVBS) - Signal Format", value: "PAL" },
          { label: "VI3201FB-DC3000 (CVBS) - Access Capability", value: "32ch@960H or D1" },
          { label: "Network Video - Transfer Protocol", value: "TCP/UDP/RTP/RTSP/RTCP" },
          { label: "Network Video - Support Device", value: "IPC, NVR, EVS and etc." },
          { label: "Network Video - Video Resolution", value: "4K/1080P/UXGA/720P/D1/HD1/2CIF/CIF/QCIF" }
        ]
      },
      {
        category: "Video Output (Without decoding)",
        specs: [
          { label: "VO0801HH-DC3000 (HDMI) - Interface", value: "8ch HDMI1.3" },
          { label: "VO0801HH-DC3000 (HDMI) - Split", value: "Max 32 layers" },
          { label: "VO0801HH-DC3000 (HDMI) - Resolution", value: "1920×1080@60Hz/30fps effective/720P/UXGA/1400×1050/SXGA+/1366*768/60Hz/1280*720/60Hz/1280*1024/60Hz/1024*768/60Hz" },
          { label: "VO0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VO0401HS-DC3000(3G-SDI) - Split", value: "Max 32 layers" },
          { label: "VO0801HS-DC3000(HD-SDI) - Interface", value: "8ch BNC" },
          { label: "VO0801HS-DC3000(HD-SDI) - Split", value: "Max 32 layers" }
        ]
      },
      {
        category: "Video Decoding Output",
        specs: [
          { label: "VO0405UH-DC3000(HDMI) - Interface", value: "4ch HDMI1.4" },
          { label: "VO0405UH-DC3000(HDMI) - Split", value: "1/4/9/16/32, free split" },
          { label: "VO0405UH-DC3000(HDMI) - Decoding Capability", value: "2ch@12Mof15fps/4ch@4K30fps/16ch@1080P30fps/32ch@720P30fps/64ch@D130fps; supporting H.265" },
          { label: "VO0405UH-DC3000(HDMI) - Resolution", value: "3840*2160@30fps(HDMI 2, 3)/1920*1080@60fps/1600*1200@60fps/1400*1050@60fps/1366*768@60fps/1280*1024@60fps/1280*720@60fps/1024*768@60fps" }
        ]
      },
      {
        category: "Matrix Switch",
        specs: [
          { label: "Video Input", value: "Analog Camera, Digital Camera, IPC, NVR, EVS and etc." },
          { label: "IP HD Matrix Switch", value: "1024 IP Input, 160ch@1080p, 320ch@720p, 640ch@D1" }
        ]
      },
      {
        category: "Video-Wall",
        specs: [
          { label: "Splicing", value: "Support videowall splicing (max 160 LCD display units)" },
          { label: "Video-Wall", value: "Support Splicing/Zoom/Merge/Roam/Overlay" },
          { label: "Input Source", value: "HD/SD, Digital/Analog (support hybrid input)" },
          { label: "Output Port", value: "HDMI" },
          { label: "Control Mode", value: "PC client/Local GUI/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Network",
        specs: [
          { label: "Interface", value: "2 RJ-45 ports (10/100/1000 M)" },
          { label: "Serial Port", value: "4 RS232 ports (1 DB9, 3 RJ45), for console and control; 1 RS485 port" },
          { label: "USB", value: "3 USB2.0, 1 USB3.0" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "100~120V AC, 200~240V AC (Redundant power optional)" },
          { label: "Power Consumption", value: "600W (minimum system)/900W(full configuration)" },
          { label: "Working Environment", value: "-10°C ~ +55°C (14 °F to 131 °F) / 10~90%RH / 86~106kpa" },
          { label: "Dimension", value: "7U, 482.6 × 434 × 310 mm (19 × 17.1 × 12.2 inch) (W*D*H)" },
          { label: "Weight", value: "≤35kg (77.16 lb) (full configured)" }
        ]
      }
    ]
  },
  "LP-CON3000-4U": {
    id: "LP-CON3000-4U",
    name: "LP-CON3000-4U",
    title: "Multi-screen Controller",
    description: [
      "19\" standard 4U ATCA industry box",
      "High speed passive rear panel design, reliable and stable",
      "Easy and flexible configuration with pluggable card module design",
      "160ch@1080P or 640ch@D1 signal decoding (full configured)",
      "Redundant power optional and smart temperature controlled fan",
      "FPGA array framework, built in ultrahigh bandwidth switch matrix, high image processing capacity, flexible data exchange",
      "Powerful main control chip inside, ultrahigh data processing capacity and good extensibility",
      "PCI-E bus, high system bandwidth",
      "Support analog/digital video signals input and matrix output",
      "Support non-compressed digital signal encoding output",
      "2 RJ-45 gigabit network ports for matrix control, preview",
      "Remote cast analog/digital video onto the video-wall",
      "Remote reboot/upgrade/default setting and etc operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "Powerful microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI-E" },
          { label: "Slot", value: "12 (2 Main Control Board Slot, 10 Video Function Board Slot)" },
          { label: "Mainframe", value: "Power module (redundant power optional), main control board, control board, PCI-E bus rear panel, smart temperature controlled fan" },
          { label: "Video Input Card", value: "Max. 10" },
          { label: "Video Output Card", value: "Max. 10" }
        ]
      },
      {
        category: "Video Input",
        specs: [
          { label: "VI0201UH-DC3000(HDMI) - Interface", value: "2ch HDMI1.4 support HDCP" },
          { label: "VI0201UH-DC3000(HDMI) - Access Capability", value: "2ch@4K, downward compatibility" },
          { label: "VI0401HH-DC3000(HDMI) - Interface", value: "4ch HDMI1.3 support HDCP" },
          { label: "VI0401HH-DC3000(HDMI) - Access Capability", value: "4ch@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0801HH-DC3000(HDMI) - Interface", value: "8ch HDMI1.4 support HDCP and I-SYSTEM" },
          { label: "VI0801HH-DC3000(HDMI) - Access Capability", value: "8ch 1080P@60Hz(30fps effective), support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HD DC3000 (DVI-I) - Interface", value: "4ch DVI-I (support VGA/HDMI1.3 with convertor)" },
          { label: "VI0401HD DC3000 (DVI-I) - Access Capability", value: "4ch@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VI0401HS-DC3000(3G-SDI) - Signal Format", value: "3G-SDI, 2.97Gbps" },
          { label: "VI0401HS-DC3000(3G-SDI) - Access Capability", value: "4ch@1080P, downward compatibility" },
          { label: "VI3201FB-DC3000 (CVBS) - Interface", value: "2ch DVI-D, 2 BNC interface braided lines which is 16 in 1" },
          { label: "VI3201FB-DC3000 (CVBS) - Signal Format", value: "PAL" },
          { label: "VI3201FB-DC3000 (CVBS) - Access Capability", value: "32ch@960H or D1" },
          { label: "Network Video - Transfer Protocol", value: "TCP/UDP/RTP/RTSP/RTCP" },
          { label: "Network Video - Support Device", value: "IPC, NVR, EVS and etc." },
          { label: "Network Video - Video Resolution", value: "4K/1080P/UXGA/720P/D1/HD1/2CIF/CIF/QCIF" }
        ]
      },
      {
        category: "Video Output (Without decoding)",
        specs: [
          { label: "VO0801HH-DC3000 (HDMI) - Interface", value: "8ch HDMI1.3" },
          { label: "VO0801HH-DC3000 (HDMI) - Split", value: "Max 32 layers" },
          { label: "VO0801HH-DC3000 (HDMI) - Resolution", value: "1920×1080@60Hz/30fps effective/1600×1200@60fps/1400×1050@60fps/1366*768@60fps/1280*720@60fps/1280*1024@60fps/1024*768@60fps" },
          { label: "VO0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VO0401HS-DC3000(3G-SDI) - Split", value: "Max 32 layers" },
          { label: "VO0801HS-DC3000(HD-SDI) - Interface", value: "8ch BNC" },
          { label: "VO0801HS-DC3000(HD-SDI) - Split", value: "Max 32 layers" }
        ]
      },
      {
        category: "Video Decoding Output",
        specs: [
          { label: "VO0405UH-DC3000(HDMI) - Interface", value: "4ch HDMI1.4" },
          { label: "VO0405UH-DC3000(HDMI) - Split", value: "1/4/9/16/32, free split" },
          { label: "VO0405UH-DC3000(HDMI) - Decoding Capability", value: "2ch@12Mp(15fps)/4ch@4K(25fps)/16ch@1080P(25fps)/32ch@720P(25fps)/64ch@D1(25fps), supporting H.265" },
          { label: "VO0405UH-DC3000(HDMI) - Resolution", value: "3840*2160@30fps (HDMI 2, 3)/1920*1080@60fps/1600*1200@60fps/1400*1050@60fps/1366*768@60fps/1280*1024@60fps/1280*720@60fps/1024*768@60fps" }
        ]
      },
      {
        category: "Matrix Switch",
        specs: [
          { label: "Video Input", value: "Analog Camera, Digital Camera, IPC, NVR, EVS and etc." },
          { label: "IP HD Matrix Switch", value: "1024 IP Input, 160ch@1080p, 320ch@720p, 640ch@D1" }
        ]
      },
      {
        category: "Video-Wall",
        specs: [
          { label: "Splicing", value: "Support videowall splicing (max 80 LCD display units)" },
          { label: "Video-Wall", value: "Support Splicing/Zoom/Merge/Roam/Overlay" },
          { label: "Input Source", value: "HD/SD, Digital/Analog (support hybrid input)" },
          { label: "Output Port", value: "HDMI" },
          { label: "Control Mode", value: "PC client/Local GUI/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Network",
        specs: [
          { label: "Interface", value: "2 RJ-45 ports (10/100/1000M)" },
          { label: "Serial Port", value: "4 RS232 ports (1 DB9, 3 RJ45), for console and control; 1 RS485 port" },
          { label: "USB", value: "3 USB2.0, 1 USB3.0" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "115V~230V, 47Hz~63Hz(Redundant power optional)" },
          { label: "Power Consumption", value: "90W(Minimum system)/360W(Full configuration)" },
          { label: "Working Environment", value: "-10°C ~ +55°C (14 °F to 131 °F) / 10~90%RH / 86~106kpa" },
          { label: "Dimension", value: "4U, 482.6 × 437 × 177 mm (19 × 17.2 × 6.97 inch) (W*D*H)" },
          { label: "Weight", value: "≤20kg (44.09 lb) (full configured)" }
        ]
      }
    ]
  },
  "LP-M70-D-0205HO(-H)": {
    id: "LP-M70-D-0205HO(-H)",
    name: "LP-M70-D-0205HO(-H)",
    title: "2 Channel HDMI Distributed Decoding Box",
    description: [
      "Support 4K output, maximum 12MP decoding",
      "Support the following 30-screen large-screen any size splicing",
      "Single-screen and combination screen all support 1/4/6/8/9/16/25/36 screen split display",
      "Support for point-to-point HD base map display",
      "Arbitrarily increase the decoding box and change the box distribution according to the needs of the project",
      "Single point of maintenance, support hot standby"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "System Composition", value: "Central decoding box, decoding box, encoding box" },
          { label: "System Processor", value: "Linux\nModule design, powerful processor" },
          { label: "Transmission", value: "TCP/IP" }
        ]
      },
      {
        category: "Interface",
        specs: [
          { label: "Video Output", value: "2 HDMI1.4" },
          { label: "Format", value: "H.265/H.264/MPEG4/MJPEG/SVAC" },
          { label: "Audio Output", value: "2 HDMI (embedded)" },
          { label: "Intercom", value: "RCA(2Vrms, 10k ohms, reserved)" },
          { label: "Alarm In/Out", value: "4/4(30VDC 1A, 125VAC 0.5A linkage output)" },
          { label: "Network Port", value: "2 RJ45 10/100/1000M self-adaption ethernet interface" },
          { label: "RS232", value: "1 RS232(DB9)" },
          { label: "USB", value: "1 USB 2.0, 1 USB 3.0" },
          { label: "RS485", value: "1 RS485" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Decoding Capacity - Decoding capacity", value: "4CH@4K\n16CH@1080P\n32CH@720P\n64CH@D1\n40CH@960H" },
          { label: "Decoding Capacity - Format", value: "H.265/H.264/MPEG4/MJPEG/SVAC" },
          { label: "Splicing Function - Quantity of screens", value: "Less than 30 screens" },
          { label: "Splicing Function - Function", value: "Zoom/Merge/Roam/Overlay" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Working Environment - Operating temperature", value: "-10°C~+55°C(14 °F to 131 °F)" },
          { label: "Working Environment - Humidity", value: "10%~90%RH, 86kpa~106kpa" },
          { label: "Consumption", value: "≤15W" },
          { label: "Dimension", value: "290.0 x 182.3 x 41.0mm (11.4 x 7.2 x 1.6 inch) (W*D*H)" },
          { label: "Power", value: "DC12V, 4A" },
          { label: "Weight", value: "1.5kg (3.3 lb) (Including adapter)" }
        ]
      }
    ]
  },
  "LP-CON3000-M": {
    id: "LP-CON3000-M",
    name: "LP-CON3000-M",
    title: "Multi-screen Controller",
    description: [
      "19\" standard 2.5U ATCA industry box",
      "High speed passive rear panel design, reliable and stable",
      "Easy and flexible configuration with pluggable card module design",
      "Support max 32 screens splicing and 3 additional outputs",
      "16ch 1080P@25fps or 64ch D1@25fps signal decoding in main control board and 5ch 1080P@25fps or 16ch D1@25fps signal decoding for all output cards added (using the decoding capability of main control board)",
      "Provide low latency solution and excellent performance of synchronization",
      "Redundant power optional and smart temperature controlled fan",
      "Powerful main control chip inside, ultrahigh data processing capacity and good extensibility",
      "Support analog/digital video signals input and matrix output",
      "Support collection of 4K local signal via HDMI interface to achieve the high-definition display",
      "2 RJ-45 gigabit network ports for matrix control, preview",
      "Remote reboot/upgrade/default setting and etc operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "Powerful microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI-E" },
          { label: "Slot", value: "5 (1 Main Control Board Slot, 4 Video Function Board Slot)" },
          { label: "Mainframe", value: "Power module (redundant power optional), main control board, PCI-E bus rear panel, smart temperature controlled fan" },
          { label: "Video Input Card", value: "Max. 4" },
          { label: "Video Output Card", value: "Max. 4" }
        ]
      },
      {
        category: "Video Input",
        specs: [
          { label: "VI0201UH-DC3000(HDMI) - Interface", value: "2ch HDMI1.4 support HDCP" },
          { label: "VI0201UH-DC3000(HDMI) - Access Capability", value: "2ch@4K, downward compatibility" },
          { label: "VI0801HH-DC3000(HDMI) - Interface", value: "8ch HDMI1.4 support HDCP and I-SYSTEM" },
          { label: "VI0801HH-DC3000(HDMI) - Access Capability", value: "8ch 1080P@60Hz(30fps effective), support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HD-DC3000 (DVI-I) - Interface", value: "4ch DVI-I (support VGA/HDMI1.3 with converter)" },
          { label: "VI0401HD-DC3000 (DVI-I) - Access Capability", value: "4ch@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VI0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VI0401HS-DC3000(3G-SDI) - Signal Format", value: "3G SDI, 2.97Gbps" },
          { label: "VI0401HS-DC3000(3G-SDI) - Access Capability", value: "4ch@1080P, downward compatibility" },
          { label: "VI3201FB-DC3000 (CVBS) - Interface", value: "2ch DVI-D, 2 BNC interface braided lines which is 16 in 1" },
          { label: "VI3201FB-DC3000 (CVBS) - Signal Format", value: "PAL" },
          { label: "VI3201FB-DC3000 (CVBS) - Access Capability", value: "32ch@960H or D1" }
        ]
      },
      {
        category: "Video Output",
        specs: [
          { label: "VO0801HH-DC3000 (HDMI) - Interface", value: "8ch HDMI1.3" },
          { label: "VO0801HH-DC3000 (HDMI) - Split", value: "Max 32 layers" },
          { label: "VO0801HH-DC3000 (HDMI) - Resolution", value: "1920*1080@60Hz/30fps effective/1600*1200@60fps/1400*1050@60fps/1366*768@60fps/1280*720@60fps/1280*1024@60fps/1024*768@60fps" },
          { label: "VO0401HS-DC3000(3G-SDI) - Interface", value: "4ch BNC" },
          { label: "VO0401HS-DC3000(3G-SDI) - Split", value: "Max 32 layers" },
          { label: "VO0401HS-DC3000(3G-SDI) - Resolution", value: "1920*1080@60fps/1920*1080@50fps/1920*1080@30fps/1280*720@60fps" }
        ]
      },
      {
        category: "Main Control Board",
        specs: [
          { label: "Interface", value: "3ch HDMI1.3" },
          { label: "Split", value: "Max 32 layers without merging" },
          { label: "Decoding Capability", value: "2ch@12Mp(15fps)/4ch@4K(25fps)/16ch@1080P(25fps)32ch@720P(25fps)/64ch@D1(25fps), supporting H.265" },
          { label: "Resolution", value: "3840*2160@30fps(max 2ch)/1920*1080@60fps/1280*720@60fps/1280*1024@60fps/1024*768@60fps" }
        ]
      },
      {
        category: "Video-Wall",
        specs: [
          { label: "Splicing", value: "Support videowall splicing (max 32 LCD screens splicing and 3 additional outputs)" },
          { label: "Video-Wall", value: "Support Splicing/Zoom/Merge/Roam/Overlay" },
          { label: "Input Source", value: "HDMI, DVI-I, CVBS, 3G-SDI" },
          { label: "Output Port", value: "HDMI, 3G-SDI" },
          { label: "Control Mode", value: "PC client/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Network",
        specs: [
          { label: "Interface", value: "2 RJ-45 ports (10/100/1000M)" },
          { label: "Serial Port", value: "3 RS232 ports (RJ45), for console and control; 1 RS485 port" },
          { label: "USB", value: "1 USB2.0, 2 USB3.0" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "115V~230V, 47Hz~63Hz(Redundant power optional)" },
          { label: "Power Consumption", value: "90W(Minimum system)/360W(Full configuration)" },
          { label: "Working Environment", value: "-10°C ~ +55°C (14 °F to 131 °F) / 10~90%RH / 86~106kpa" },
          { label: "Dimension", value: "2.5U, 482.6 × 436.8 × 111.0 mm (19 × 17.20 × 4.41 inch), (W*D*H)" },
          { label: "Weight", value: "≤12.5kg (27.56 lb) (full configured)" }
        ]
      }
    ]
  },
  "LP-M60-7U": {
    id: "LP-M60-7U",
    name: "LP-M60-7U",
    title: "Multi-service Video Management Platform",
    description: [
      "19\" standard 7U ATCA industry box",
      "Easy and flexible configuration with pluggable card module design",
      "Function card supports hot-swap",
      "40ch@1080P signal encoding (full configured)",
      "30ch@32MP(25fps) or 120ch@8MP(25fps) or 480ch@1080P or 1920ch@D1 signal decoding (full configured)",
      "Support analog/digital video signals input and matrix output",
      "Support SD/HD video signal matrix switch and output",
      "Support non-compressed digital signal encoding output",
      "Support switch via network keyboard, client-end and etc.",
      "8 RJ-45 ports and 8 optical ports (can't be used simultaneously) for matrix control, preview and online central storage.",
      "Support TCP/IP/RTP/RTSP/RTCP/TCP/UDP/DHCP and etc. network protocols",
      "Support network extended alarm signal input and output",
      "Remote cast analog/digital video onto the video-wall",
      "Remote reboot/upgrade/default setting and etc operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "64-bit Quad-core Embedded Microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI-E, LAN" },
          { label: "Slot", value: "6(1 Main Control Board Slot, 5 Video and Audio Function Board)" }
        ]
      },
      {
        category: "System Configuration",
        specs: [
          { label: "Mainframe", value: "Redundant Power, Main Control Board, PCI-E Bus Rear Panel, Smart Temperature Controlled Fan" },
          { label: "Video Input Card", value: "Max. 5" },
          { label: "Video Output Card", value: "Max. 5" },
          { label: "Cascaded Fiber Link Card", value: "Optional" }
        ]
      },
      {
        category: "Network Access Capacity",
        specs: [
          { label: "Network Access", value: "8 RJ-45 ports(10/100/1000M)\nOptical ports Optional\n8Gbps Network Interface Bandwidth\n5000 Cameras Access\nMax.320 1080P@8M Forward capability" }
        ]
      },
      {
        category: "Matrix Exchange and Splicing Control Capacity",
        specs: [
          { label: "Splicing", value: "Max 90 splicing screens" },
          { label: "Video Wall", value: "Support Splicing Zoom/Merge/Roam/Overlay" },
          { label: "Input Source", value: "Digital/Network (support mix Input)" },
          { label: "Output Source", value: "HDMI/BNC" },
          { label: "Control Mode", value: "WEB/Local GUI/Video Platform/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Video Encoding Input",
        specs: [
          { label: "Video Input", value: "DVI-I, standard configuration support VGA, DVI, HDMI via adapter" },
          { label: "Encoding Format", value: "H.264/MPEG4" },
          { label: "VEC0804HU-M60 (DVI/VGA/HDMI)", value: "Encoding Capacity: 8CH@1080P (1920×1080), DVI-I interface(2 DVI-I, Impedance(1KΩ)\nAudio Input: -\nLow-speed data interface: 2 RS485, Support current speed dome protocol" }
        ]
      },
      {
        category: "Video Decoding Output",
        specs: [
          { label: "VDC0905H-M60 (HDMI)", value: "Decoding Capacity: 3CH@32MP(25fps)/12CH@8MP/48CH@1080p/96CH@720p/192CH@D1\nVideo Output: 9CH HDMI\nAudio Output: 9CH, HDMI embedded audio and 1 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1205H-M60 (HDMI)", value: "Decoding Capacity: 4CH@32MP(25fps)/16CH@8MP/64CH@1080p/128CH@720p/256CH@D1\nVideo Output: 12CH HDMI\nAudio Output: 12CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1505H-M60 (HDMI)", value: "Decoding Capacity: 5CH@32MP(25fps)/20CH@8MP/80CH@1080p/160CH@720p/320CH@D1\nVideo Output: 15CH HDMI\nAudio Output: 15CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1805H-M60 (HDMI)", value: "Decoding Capacity: 6CH@32MP(25fps)/24CH@8MP/96CH@1080p/192CH@720p/384CH@D1\nVideo Output: 18CH HDMI\nAudio Output: 18CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1204B-M60 (CVBS)", value: "Decoding Capacity: 32CH@1080P/128CH@D1\nVideo Output: 12CH BNC\nAudio Output: 12CH line out, DB15(reserved)\nDivision: 1/4/9/16\nLow-speed data interface: 2 RS485, Support current speed dome protocol" }
        ]
      },
      {
        category: "System Cascade",
        specs: [
          { label: "VIC0804JC-M60", value: "Optical Module: 8, SFP internal\nInterface: FC, (2 in single board)\nCascade Capacity: 16CH@1080P(30fps) or 64CH@D1, Support Ethernet and direct transmission via RS485" }
        ]
      },
      {
        category: "Main Control Interface",
        specs: [
          { label: "Output Interface", value: "1, VGA and DVI" },
          { label: "Communication Interface", value: "8, RJ45(1000M) or 8, SFP(Alternative)" },
          { label: "Serial Interface", value: "1, RS-232, For the parameter configuration, device maintain, transparent channel" },
          { label: "USB", value: "4, USB2.0, 2 in each side of front and after" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power", value: "100~240V AC, 50/60Hz" },
          { label: "Power Consumption", value: "≤800W" },
          { label: "Operating Temperature", value: "0°C ~ +50°C (32 °F to 122 °F)" },
          { label: "Operating Humidity", value: "10~90%RH / 86~106kpa" },
          { label: "Dimension(mm)", value: "7U, 482.6×432.7×309.0mm(19 × 18.2 × 12.2 inch) (W*D*H)" },
          { label: "Weight", value: "≤25kg(55.12 lb) (full configured)" }
        ]
      }
    ]
  },
  "LP-M70-4U-E": {
    id: "LP-M70-4U-E",
    name: "LP-M70-4U-E",
    title: "Multi-service Video Management Platform",
    description: [
      "19\" standard 4U ATCA industry box",
      "Easy and flexible configuration with pluggable card module design",
      "40ch@1080P signal encoding (full configured)",
      "20ch@32MP or 80ch@8MP or 320ch@1080P or 720ch@720P or 1280ch@D1 signal decoding (full configured)",
      "Support 240@D1 non-standard stream signal decoding(full configured)",
      "Support max 60 screens splicing",
      "Support analog/digital video signals input and matrix output",
      "Support SD/HD video signal matrix switch and output",
      "Support non-compressed digital signal encoding output",
      "6 RJ-45 gigabit network ports for matrix control, preview and online central storage",
      "Support TCP/IP/RTP/RTSP/RTCP/TCP/UDP/DHCP/PPPoE and etc. network protocols",
      "Remote cast analog/digital video onto the video-wall",
      "Remote reboot/upgrade/default setting and etc operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "Quad-core embedded microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI-E" },
          { label: "Slot", value: "12(2 Main Control Board Slot, 10 Video and Audio Function Board)" },
          { label: "Mainframe", value: "Power module (redundant power optional), main control board, control board, PCI-E bus rear panel, smart temperature controlled fan" },
          { label: "Video Input Card", value: "Max. 10" },
          { label: "Video Output Card", value: "Max. 10" }
        ]
      },
      {
        category: "Video Input",
        specs: [
          { label: "VIC0201UH-M70 (HDMI) - Interface", value: "2ch HDMI1.4 support HDCP" },
          { label: "VIC0201UH-M70 (HDMI) - Access Capability", value: "2ch@4K, downward compatibility" },
          { label: "VEC0404HH-M70 (HDMI) - Interface", value: "4ch HDMI" },
          { label: "VEC0404HH-M70 (HDMI) - Encoding Format", value: "H.264/MPEG4" },
          { label: "VEC0404HH-M70 (HDMI) - Encoding Capability", value: "4CH@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" },
          { label: "VEC0404HD-M70 (DVI) - Interface", value: "4ch DVI-I (HDMI & VGA with convertor)" },
          { label: "VEC0404HD-M70 (DVI) - Encoding Format", value: "H.264/MPEG4" },
          { label: "VEC0404HD-M70 (DVI) - Encoding Capability", value: "4CH@1080P, support resolution: 1080P/720P/UXGA/SXGA+/SXGA/XGA/SVGA/VGA" }
        ]
      },
      {
        category: "Video Output",
        specs: [
          { label: "VDC0605H-M70(HDMI) - Decoding Capability", value: "2CH@32MP(25fps)/8CH@8MP(25fps)/32CH@1080P(25fps)/72CH@720P(25fps)/128CH@D1" },
          { label: "VDC0605H-M70(HDMI) - Interface", value: "6ch HDMI (Interface 2/3/5/6 support 4K resolution, others support 1080P)" },
          { label: "VDC0605H-M70(HDMI) - Output Resolution", value: "4096*2160@24fps, 3840*2160@30fps, 1920*1080@60fps, 1280*1024@60fps, 1280*720@60fps, 1024*768@60fps" },
          { label: "VDC0605H-M70(HDMI) - Split", value: "1/4/6/8/9/16/25/36, free split" }
        ]
      },
      {
        category: "Video-Wall",
        specs: [
          { label: "Splicing", value: "Support video-wall splicing (max 60 LCD display units)" },
          { label: "Video-Wall", value: "Support Splicing/Zoom/Merge/Roam/Overlay" },
          { label: "Video Input", value: "HDMI/DVI" },
          { label: "Video Output", value: "HDMI" },
          { label: "Audio Output", value: "HDMI(embedded)" },
          { label: "Control Mode", value: "WEB/Local GUI/Video Platform/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Network",
        specs: [
          { label: "Interface", value: "6 RJ-45 ports (10/100/1000M), 2 in mainboard and 4 in control board" },
          { label: "Serial Port", value: "4 RS232 ports (4 RJ45), for console and control; 1 RS485 port" },
          { label: "USB", value: "3 USB2.0, 1 USB3.0" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "100~240V AC, 50/60Hz" },
          { label: "Power Consumption", value: "≤400W" },
          { label: "Working Environment", value: "-10°C ~ +50°C / 10~90%RH / 86~106kpa" },
          { label: "Dimension", value: "4U, 482.6 × 437.0 × 177.0mm(19.0 × 17.2 × 7.0 inch), (W*D*H)" },
          { label: "Weight", value: "≤25kg (full configured)" }
        ]
      }
    ]
  },
  "LP-M60-12U": {
    id: "LP-M60-12U",
    name: "LP-M60-12U",
    title: "Multi-service Video Management Platform",
    description: [
      "19\" standard 12U ATCA industry box",
      "Easy and flexible configuration with pluggable card module design",
      "Function card supports hot-swap",
      "80ch@1080P signal encoding (full configured)",
      "60ch@32MP(25fps) or 240ch@8MP(25fps) or 960ch@1080P or 3840ch@D1 signal decoding (full configured)",
      "Support analog/digital video signals input and matrix output",
      "Support HD video signal matrix switch and output",
      "Support non-compressed digital signal encoding output",
      "Support switch via network keyboard, client-end and etc.",
      "8 RJ-45 ports and 8 optical ports (can't be used simultaneously) for matrix control, preview and online central storage",
      "Support TCP/IP/RTP/RTSP/RTCP/TCP/UDP/DHCP and etc. network protocols",
      "Remote cast analog/digital video onto the video-wall",
      "Remote reboot/upgrade/default setting and etc operations"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "Main Processor", value: "64-bit Quad-core Embedded Microprocessor" },
          { label: "Operating System", value: "Embedded LINUX" },
          { label: "Bus", value: "PCI-E, LAN" },
          { label: "Slot", value: "11(1 Main Control Board Slot, 10 Video and Audio Function Board)" }
        ]
      },
      {
        category: "System Configuration",
        specs: [
          { label: "Mainframe", value: "Redundant Power, Main Control Board, PCI-E Bus Rear Panel, Smart Temperature Controlled Fan" },
          { label: "Video Input Card", value: "Max. 10" },
          { label: "Video Output Card", value: "Max. 10" },
          { label: "Cascaded Fiber Link Card", value: "Optional" }
        ]
      },
      {
        category: "Network Access Capacity",
        specs: [
          { label: "Network Access", value: "8 RJ-45 ports(10/100/1000M)\nOptical ports Optional\n8Gbps Network Interface Bandwidth\n5000 Cameras Access\nMax.320 1080P@8M Forward capability" }
        ]
      },
      {
        category: "Matrix Exchange and Splicing Control Capacity",
        specs: [
          { label: "Splicing", value: "Max 180 splicing screens" },
          { label: "Video Wall", value: "Support Splicing Zoom/Merge/Roam/Overlay" },
          { label: "Input Source", value: "Digital/Network (support mix Input)" },
          { label: "Output Source", value: "HDMI/BNC" },
          { label: "Control Mode", value: "WEB/Local GUI/Video Platform/Network Keyboard/iPad" }
        ]
      },
      {
        category: "Video Encoding Input",
        specs: [
          { label: "Video Input", value: "DVI-I, standard configuration support VGA, DVI, HDMI via adapter" },
          { label: "Encoding Format", value: "H.264/MPEG4" },
          { label: "VEC0804HU-M60 (DVI/VGA/HDMI)", value: "Encoding Capacity: 8CH@1080P\nAudio Input: 8(reserved), DB15 Interface(2.0Vp-p, Impedance(1KΩ)\nLow-speed data interface: 2 RS485, Support current speed dome protocol" }
        ]
      },
      {
        category: "Video Decoding Output",
        specs: [
          { label: "VDC0905H-M60 (HDMI)", value: "Decoding Capacity: 3CH@32MP(25fps)/12CH@8MP/48CH@1080p/96CH@720p/192CH@D1\nVideo Output: 9CH HDMI\nAudio Output: 9CH, HDMI embedded audio and 1 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1205H-M60 (HDMI)", value: "Decoding Capacity: 4CH@32MP(25fps)/16CH@8MP/64CH@1080p/128CH@720p/256CH@D1\nVideo Output: 12CH HDMI\nAudio Output: 12CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1505H-M60 (HDMI)", value: "Decoding Capacity: 5CH@32MP(25fps)/20CH@8MP/80CH@1080p/160CH@720p/320CH@D1\nVideo Output: 15CH HDMI\nAudio Output: 15CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1805H-M60 (HDMI)", value: "Decoding Capacity: 6CH@32MP(25fps)/24CH@8MP/96CH@1080p/192CH@720p/384CH@D1\nVideo Output: 18CH HDMI\nAudio Output: 18CH, HDMI embedded audio and 2 DB15(reserved)\nDivision: 1/4/6/8/9/16/25/36, custom\nLow-speed data interface: 2 RS285, 4/2 Alarm in/out" },
          { label: "VDC1204B-M60 (CVBS)", value: "Decoding Capacity: 32CH@1080P/128CH@D1\nVideo Output: 12CH BNC\nAudio Output: 12CH line out, DB15(reserved)\nDivision: 1/4/9/16\nLow-speed data interface: 2 RS485, Support current speed dome protocol" }
        ]
      },
      {
        category: "System Cascade",
        specs: [
          { label: "VIC0804JC-M60", value: "Optical Module: 8, SFP internal\nInterface: FC, (2 in single board)\nCascade Capacity: 16CH@1080P(30fps) or 64CH@D1, Support Ethernet and direct transmission via RS485" }
        ]
      },
      {
        category: "Main Control Interface",
        specs: [
          { label: "Output Interface", value: "1, VGA and DVI" },
          { label: "Communication Interface", value: "8, RJ45(1000M) or 8, SFP(Alternative)" },
          { label: "Serial Interface", value: "1, RS-232, For the parameter configuration, device maintain, transparent channel" },
          { label: "USB", value: "4, USB2.0, 2 in each side of front and after" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power", value: "100~127V AC and 200~240V AC, 50/60Hz" },
          { label: "Power Consumption", value: "≤800W" },
          { label: "Operating Temperature", value: "0°C ~ +50°C (32 °F to 122 °F)" },
          { label: "Operating Humidity", value: "10~90%RH / 86~106kpa" },
          { label: "Dimension(mm)", value: "12U, 482.6×481.6×533mm(19 × 18.96 × 20.98 inch) (W*D*H)" },
          { label: "Weight", value: "≤40kg(88.18 lb) (full configured)" }
        ]
      }
    ]
  },
  "LP-KB5200(-F)": {
    id: "LP-KB5200(-F)",
    name: "LP-KB5200(-F)",
    title: "Android Network Control Keyboard",
    description: [
      "Touchscreen keyboard with the Android system.",
      "10.1-inch capacitive touch screen, support local screen preview",
      "Four dimensional joystick control of PTZ functions",
      "Support H.265, H.264 codes decoding, max 1ch 4K@30fps or 4ch 1080P@30fps",
      "Compatible with Dahua cameras, storage devices, display control devices, and works with DSS Pro",
      "Support snapshot and recording to U-disk",
      "Support video-wall display control and schemes switches",
      "The buttons on the keyboard can be used to perform operations such as zoom, focus and tour, and can use the iris, wiper and presets.",
      "NKB5200-F model includes an extension keypad module (It cannot be called in platform TV wall mode)"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "Embedded Processor" },
          { label: "Operation System", value: "ANDROID 7.1" }
        ]
      },
      {
        category: "Display",
        specs: [
          { label: "Video Output", value: "1-ch VGA or 1-ch HDMI(extension on decoding display 720P resolution)" },
          { label: "Stream Type", value: "H.265, H.264" },
          { label: "Decoding Capability", value: "1CH@4K(30fps)/4CH@1080P(30fps)/9CH@720P(30fps)" },
          { label: "Joystick", value: "4D joystick" },
          { label: "Display split", value: "1/4/9 splits, Multi splits" },
          { label: "Screen", value: "10.1\" TFT LCD touch screen (1280*800)" }
        ]
      },
      {
        category: "Audio & Alarm",
        specs: [
          { label: "Audio controller", value: "1 × volume button, 1 × mute button and touchscreen control" },
          { label: "Loudspeaker", value: "1 loudspeaker to play audio" },
          { label: "Audio Input", value: "1 ch 3.5 mm" },
          { label: "Audio Output", value: "1 ch 3.5 mm" },
          { label: "Speaker", value: "1 for audio play" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Network Interface", value: "1 RJ-45 port (10/100/1000M), WLAN" },
          { label: "USB Interface", value: "1 USB3.0, 2 USB2.0" },
          { label: "RS485", value: "1 for ptz control support PELCO" },
          { label: "Maximum Number of Users", value: "32 (including \"admin\")" },
          { label: "Max RS485 Addresses (Each User)", value: "0" },
          { label: "Max Number of PTZ (IPC) That Can Be Added over Network (Each User)", value: "10000" },
          { label: "Access Protocol", value: "Dahua Private Protocol" }
        ]
      },
      {
        category: "Wifi",
        specs: [
          { label: "Wireless frequency range", value: "2.4Ghz, 5Ghz" },
          { label: "Wireless transmission rate", value: "150Mbps" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "12 VAC 4A max adapter, POE" },
          { label: "Power Consumption", value: "< 48 W" },
          { label: "Working Temperature", value: "-10°C ~ +55°C" },
          { label: "Working Humidity", value: "10%~95%" },
          { label: "Dimension", value: "Host: 425mmx194mmx59mm (WxDxH) (include joystick); Mini Keypad: 421mmx105mmx26mm (W×D×H)" },
          { label: "Gross weight", value: "3.85kg(NKB5200 exclude package), 4.32kg(NKB5200-F exclude package)" },
          { label: "Net weight", value: "1.30kg(NKB5200 exclude package), 2.30kg(NKB5200-F exclude package)" }
        ]
      }
    ]
  },
  "LP-KB1000-E": {
    id: "LP-KB1000-E",
    name: "LP-KB1000-E",
    title: "Network Keyboard",
    description: [
      "Keyboard to Control",
      "Dahua High Speed Dome",
      "Dahua Standalone DVR",
      "Network Video Server",
      "Connection",
      "RS485, RS422 (reserved), USB, RS232 & Network",
      "Functions",
      "Three Dimensional Joystick Control of PTZ Functions",
      "Preset Position, Auto Scan, Auto Pan, Auto Tour & Pattern Auxiliary Functions",
      "Auxiliary Functions",
      "On-Screen Menu & User Operation Procedure Tips",
      "Connect to SmartPSS or DSS platform via USB"
    ],
    features: [],
    specifications: [
      {
        category: "General",
        specs: [
          { label: "Keyboard Key panel", value: "Electromechanical" },
          { label: "Joystick", value: "3-axis, vector-solving, with twisting, return to-center head" },
          { label: "Keyboard Connector", value: "RJ-45, RS232, RS485, RS422 (reserved), USB" },
          { label: "Keyboard Communication", value: "Direct Mode, Network Mode" },
          { label: "Direct Mode - Interface", value: "1 RS232/2 RS485" },
          { label: "Direct Mode - DVR Protocol", value: "DH-2" },
          { label: "Direct Mode - Dome Protocol", value: "DH-SD1/PELCO-D/PELCO-P, etc" },
          { label: "Network Mode - Interface", value: "RJ45" },
          { label: "Network Mode - DVR/Network Dome", value: "IP Address/Port/Protocol" },
          { label: "Display", value: "LCD, 75.2mmx33.85mm" },
          { label: "Maximum Number of Users", value: "64 (including \"admin\")" },
          { label: "Max RS485 Addresses (Each User)", value: "256" },
          { label: "Max Number of PTZ (IPC) That Can Be Added over Network (Each User)", value: "2048" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "Power adapter, input 100V~240V 50Hz/60Hz, output DC12V/2A" },
          { label: "Power Consumption", value: "5W" },
          { label: "Working Temperature", value: "-10°C~+55°C" },
          { label: "Working Humidity", value: "10% ~ 90%" },
          { label: "Atmosphere Pressure", value: "86kpa~106kpa" },
          { label: "Dimension", value: "330mmx160mmx53mm (W×D×H) (height: 106mm including joystick)" },
          { label: "Weight", value: "1.3kg (including package)" }
        ]
      }
    ]
  },
  "LP-KB1000": {
    id: "LP-KB1000",
    name: "LP-KB1000",
    title: "Network Keyboard",
    description: [
      "Keyboard to Control",
      "Dahua High Speed Dome",
      "Dahua Standalone DVR",
      "Network Video Server",
      "Connection",
      "RS485, RS422 (reserved), USB, RS232 & Network",
      "Functions",
      "Three Dimensional Joystick Control of PTZ Functions",
      "Preset Position, Auto Scan, Auto Pan, Auto Tour & Pattern Auxiliary Functions",
      "On-Screen Menu & User Operation Procedure Tips",
      "Connect to SmartPSS or DSS platform via USB"
    ],
    features: [],
    specifications: [
      {
        category: "General",
        specs: [
          { label: "Keyboard Key panel", value: "Electromechanical" },
          { label: "Joystick", value: "3-axis, vector-solving, with twisting, return to-center head" },
          { label: "Keyboard Connector", value: "RJ-45, RS232, RS485, RS422 (reserved), USB" },
          { label: "Keyboard Communication", value: "Direct Mode, Network Mode" },
          { label: "Direct Mode - Interface", value: "1 RS232/2 RS485" },
          { label: "Direct Mode - DVR Protocol", value: "DH-2" },
          { label: "Direct Mode - Dome Protocol", value: "DH-SD1/PELCO-D/PELCO-P, etc" },
          { label: "Network Mode - Interface", value: "RJ45" },
          { label: "Network Mode - DVR/Network Dome", value: "IP Address/Port/Protocol" },
          { label: "Display", value: "LCD, 75.2mmx33.85mm" },
          { label: "Maximum Number of Users", value: "64 (including \"admin\")" },
          { label: "Max RS485 Addresses (Each User)", value: "256" },
          { label: "Max Number of PTZ (IPC) That Can Be Added over Network (Each User)", value: "2048" }
        ]
      },
      {
        category: "Environmental",
        specs: [
          { label: "Power Supply", value: "Power adapter, input 100V~240V 50Hz/60Hz, output DC12V/2A" },
          { label: "Power Consumption", value: "5W" },
          { label: "Working Temperature", value: "-10°C~+55°C" },
          { label: "Working Humidity", value: "10% ~ 90%" },
          { label: "Atmosphere Pressure", value: "86kpa~106kpa" },
          { label: "Dimension", value: "330mmx160mmx53mm (W×D×H) (height: 106mm including joystick)" },
          { label: "Weight", value: "1.3kg (including package)" }
        ]
      }
    ]
  },
  "LP-VD0200FX-A01": {
    id: "LP-VD0200FX-A01",
    name: "LP-VD0200FX-A01",
    title: "Dahua 2CH UHD NETWORK VIDEO DECODER",
    description: [
      "Decoding Capability: Supports H.264 and H.265 standard network video stream decoding.",
      "Video decoding: QCIF, CIF, 2CIF, HD1, D1, 720p, 1080p, 3MP, 5MP, 8MP and 8MP.",
      "Decodes maximum 2-ch 8MP@25 fps videos, 3-ch 8MP@25 fps videos, 5-ch 5MP@25 fps videos, 5-ch 4MP@25 fps videos, 7-ch 3MP@25 fps videos, 10-ch 1080p@30 fps videos and 32-ch D1@30 fps at the same time.",
      "Output Capability: 2-ch HDMI signal output ports.",
      "HDMI output port supports 1920 × 1080@60, 1280 × 1024@60, 1280 × 720@60 and 1024 × 768@60.",
      "HDMI output port supports custom resolution output below 1920 × 1080@60.",
      "1-ch 3.5 mm port and 2-ch HDMI ports for audio output.",
      "Supports PCM for audio compression.",
      "Features: Splits to 1, 4, 6, 8, 9, 16, 25 and 36 windows, and supports M × N custom split.",
      "Supports customized windowing and roaming. Up to 25 channels with windowing.",
      "Displays HD background images, and supports configuring the default background color for the video wall.",
      "Scheme tour.",
      "Splits and synchronizes screens within milliseconds.",
      "Displays customized OSD text, such as the location and font size.",
      "Access Capability: ONVIF, RTSP, Hikvision and Dahua private protocols.",
      "Platform Compatibility: Compatible with DSS PRO."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "2 × HDMI" },
          { label: "Interoperability", value: "ONVIF; General; Dahua Private; Hikvision Private" },
          { label: "Video Compression", value: "H.265; H.264" },
          { label: "Audio Compression", value: "PCM" },
          { label: "Decoding Capability", value: "Decodes maximum 2-ch 8MP@25 fps videos, 3-ch 8MP@25 fps videos, 5-ch 5MP@25 fps videos, 5-ch 4MP@25 fps videos, 7-ch 3MP@25 fps videos, 10-ch 1080p@30 fps videos and 32-ch D1@30 fps at the same time." },
          { label: "Decoding Pixel", value: "QCIF; CIF; 2CIF; HD1; D1; 720p; 1080p; 3 MP; 4 MP; 5 MP; 6 MP; 8 MP" },
          { label: "Output Resolution", value: "1024 × 768@60 Hz; 1280 × 720@60 Hz; 1280 × 1024@60 Hz; and 1920 × 1080@60 Hz. It is 1920 × 1080 by default." },
          { label: "Bit Rate Type", value: "Composite stream; video stream" },
          { label: "Multi-screen Display", value: "1/4/6/8/9/16/25 split. Supports M × N custom split, and M × N ≤ 25" },
          { label: "Screen Splicing", value: "Up to 20 screens can be spliced together." },
          { label: "Windowing & Roam", value: "Supports customized windowing and roaming. Up to 25 channels with windowing." },
          { label: "Scheme Tour", value: "Supports saving schemes, scheme tour, scheduled scheme, and customizing tour intervals." },
          { label: "Fine Pixel Pitch LED", value: "Supports customized resolutions and connecting to small-pitch LEDs." },
          { label: "Background Image Color", value: "Displays HD background images, and supports configuring the default background color for the video wall." },
          { label: "Virtual LED", value: "Displays customized OSD text, such as the location and font size." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "2 × HDMI" },
          { label: "Audio Output", value: "2 × HDMI; 1 × 3.5 mm" },
          { label: "Network Port", value: "1 × RJ-45 10 M/100 M/1000 M self-adaptive Ethernet port" },
          { label: "RS-232", value: "1 × RJ-45" },
          { label: "USB", value: "2 × USB" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤24 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing (86 kPa–106 kPa)" },
          { label: "Product Dimensions", value: "150.0 mm × 92.0 mm × 32.8 mm (5.91\" × 3.62\" × 1.29\") (L × W × H)" },
          { label: "Packaging Dimensions", value: "297.0 mm × 163.0 mm × 71.0 mm (11.69\" × 6.42\" × 2.80\") (L × W × H)" },
          { label: "Gross Weight", value: "0.5 kg (1.10 lb)" },
          { label: "Net Weight", value: "0.3 kg (0.66 lb)" }
        ]
      }
    ]
  },
  "LP-VD1605DU-4I-8K-2U2H": {
    id: "LP-VD1605DU-4I-8K-2U2H",
    name: "LP-VD1605DU-4I-8K-2U2H",
    title: "Dahua 16CH UHD NETWORK VIDEO DECODER",
    description: [
      "16-ch HDMI signal output port.",
      "12-ch HDMI audio output.",
      "Decodes videos to multiple video stream decoding standards, such as MPEG2, MPEG4, H.264, H.265, SVAC and MJPEG.",
      "Decodes video streams to multiple resolutions, including QCIF, CIF, 2CIF, HD1, D1, 720p, 1080p, 3 MP, 4 MP, 5 MP, 8 MP, 12 MP and 32 MP.",
      "There are 4 ports in each group, and each group supports an equal portion of the device's decoding and video capabilities. It decodes to 8-ch 32MP@25 fps (this is only supported by H.265), 28-ch 12MP@25 fps, 40-ch 8MP@25 fps, 56-ch 6MP@25 fps, 72-ch 5MP@25 fps, 72-ch 4MP@30 fps, 112-ch 3MP@25 fps, 144-ch 1080p@30 fps, 400-ch D1@30 fps videos.",
      "Supports the following resolutions through the HDMI output port: 3840 × 2160, 1920 × 1080, 1280 × 1024, 1280 × 720 and 1024 × 768.",
      "Up to 3840 × 2160 is supported for the DP and HDMI input ports."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "16-ch HDMI" },
          { label: "Interoperability", value: "ONVIF; General; Dahua Private; Hikvision Private" },
          { label: "Video Compression", value: "H.265; H.264; MPEG4; SVAC; MPEG2" },
          { label: "Audio Compression", value: "PCM; G.711" },
          { label: "Decoding Capability", value: "There are 4 ports in each group, and each group supports an equal portion of the device's decoding and video capabilities. It decodes to 8-ch 32MP@25 fps (this is only supported by H.265), 28-ch 12MP@25 fps, 40-ch 8MP@25 fps, 56-ch 6MP@25 fps, 72-ch 5MP@25 fps, 72-ch 4MP@30 fps, 112-ch 3MP@25 fps, 144-ch 1080p@30 fps, 400-ch D1@30 fps videos." },
          { label: "Decoding Pixel", value: "QCIF; CIF; 2CIF; HD1; D1; 960H; 720p; 1080p; 3 MP; 4 MP; 5 MP; 6 MP; 8 MP; 12 MP; 32 MP" },
          { label: "Output Resolution", value: "1024 × 768@60 Hz; 1280 × 720@60 Hz; 1280 × 1024@60 Hz; 1920 × 1080@60 Hz; 1920 × 1200@60 Hz; 2048 × 1152@60 Hz; 3840 × 2160@30 Hz; 3840 × 2160@60 Hz" },
          { label: "Bit Rate Type", value: "Composite stream; video stream" },
          { label: "Video Input", value: "2-ch DP; 2-ch HDMI" },
          { label: "Multi-screen Display", value: "1/4/6/8/9/16/25/36 window splits. Supports M × N custom split; M × N ≤ 36." },
          { label: "Screen Splicing", value: "Up to 16 screens can be spliced together." },
          { label: "Windowing & Roam", value: "Opens up to 36 windows, and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Fine Pixel Pitch LED", value: "The video output resolution can be customized and fine pixel pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Enable AI Function", value: "Displays people, their faces, motor and non-motor vehicles, crowd density and AI rules on a large screen." },
          { label: "Virtual LED", value: "Supports OSD and configuring the position and font size of its content." },
          { label: "Input Resolution", value: "800 × 600@60 Hz; 1024 × 768@60 Hz; 1152 × 864@60 Hz; 1280 × 720@60 Hz; 1280 × 800@60 Hz; 1280 × 960@60 Hz; 1280 × 1024@60 Hz; 1360 × 768@60 Hz; 1440 × 900@60 Hz; 1680 × 1050@60 Hz; 1920 × 1080@60 Hz; 3840x2160@30 Hz (HDMI); 3840x2160@60 Hz (DP); 4096×2160@60 Hz (DP)" },
          { label: "Local Input Latency", value: "Supports 1080p 60 Hz image input. The delay from when the device receives the data to when it outputs it to the display does not exceed 150 ms when the output is 1080p@60 fps." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "16-ch HDMI" },
          { label: "Audio Output", value: "3.5 mm port; 12-ch HDMI" },
          { label: "Alarm Input", value: "4-ch" },
          { label: "Alarm Output", value: "4-ch" },
          { label: "Network Port", value: "2 × gigabit optical ports; 2 × gigabit electrical ports" },
          { label: "RS-232", value: "3 (1 × DB9, 2 × RJ-45)" },
          { label: "USB", value: "4 (2 × USB 3.0, 2 × USB 2.0)" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50–60 Hz" },
          { label: "Power Consumption", value: "≤130 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing" },
          { label: "Product Dimensions", value: "70 mm × 400 mm × 440 mm (2.76\" × 15.75\" × 17.32\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "220 mm × 530 mm × 557 mm (8.66\" × 20.87\" × 21.93\") (H × W × D)" },
          { label: "Gross Weight", value: "8.7 kg–9.1 kg (19.18 lb–20.06 lb)" },
          { label: "Net Weight", value: "5.7 kg–6.0 kg (12.57 lb–13.23 lb)" }
        ]
      }
    ]
  },
  "LP-VD2005DU-4I-8K-4H": {
    id: "LP-VD2005DU-4I-8K-4H",
    name: "LP-VD2005DU-4I-8K-4H",
    title: "Dahua 20CH UHD NETWORK VIDEO DECODER",
    description: [
      "20-ch HDMI signal output port.",
      "12-ch HDMI audio output.",
      "Decodes videos to multiple video stream decoding standards, such as MPEG2, MPEG4, H.264, H.265, SVAC and MJPEG.",
      "Decodes video streams to multiple resolutions, including QCIF, CIF, 2CIF, HD1, D1, 960H, 720p, 1080p, 3 MP, 4 MP, 5 MP, 8 MP, 12 MP and 32 MP.",
      "There are 4 ports in each group, and each group supports an equal portion of the device's decoding and video capabilities. It decodes to 10-ch 32MP@25 fps (this is only supported by H.265), 35-ch 12MP@25 fps, 50-ch 8MP@25 fps, 70-ch 6MP@25 fps, 90-ch 5MP@25 fps, 90-ch 4MP@30 fps, 140-ch 3MP@25 fps, 180-ch 1080p@30 fps, 500-ch D1@30 fps videos.",
      "Supports the following resolutions through the HDMI output port: 3840 × 2160, 1920 × 1080, 1280 × 1024, 1280 × 720 and 1024 × 768.",
      "Up to 3840 × 2160 is supported for the DP and HDMI input ports."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded Linux" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "20-ch HDMI" },
          { label: "Interoperability", value: "ONVIF; General; Dahua Private; Hikvision Private" },
          { label: "Video Compression", value: "H.265; H.264; MPEG4; SVAC; MPEG2" },
          { label: "Audio Compression", value: "PCM; G.711" },
          { label: "Decoding Capability", value: "There are 4 ports in each group, and each group supports an equal portion of the device's decoding and video capabilities. It decodes to 10-ch 32MP@25 fps (this is only supported by H.265), 35-ch 12MP@25 fps, 50-ch 8MP@25 fps, 70-ch 6MP@25 fps, 90-ch 5MP@25 fps, 90-ch 4MP@30 fps, 140-ch 3MP@25 fps, 180-ch 1080p@30 fps, 500-ch D1@30 fps videos." },
          { label: "Decoding Pixel", value: "QCIF; CIF; 2CIF; HD1; D1; 960H; 720p; 1080p; 3 MP; 4 MP; 5 MP; 6 MP; 8 MP; 12 MP; 32 MP" },
          { label: "Output Resolution", value: "1024 × 768@60 Hz; 1280 × 720@60 Hz; 1280 × 1024@60 Hz; 1920 × 1080@60 Hz; 1920 × 1200@60 Hz; 2048 × 1152@60 Hz; 3840 × 2160@30 Hz; 3840 × 2160@60 Hz" },
          { label: "Bit Rate Type", value: "Composite stream; video stream" },
          { label: "Video Input", value: "2-ch DP; 2-ch HDMI" },
          { label: "Multi-screen Display", value: "1/4/6/8/9/16/25/36 window splits. Supports M × N custom split; M × N ≤ 36." },
          { label: "Screen Splicing", value: "Up to 20 screens can be spliced together." },
          { label: "Windowing & Roam", value: "Opens up to 36 windows, and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Fine Pixel Pitch LED", value: "The video output resolution can be customized and fine pixel pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Enable AI Function", value: "Displays people, their faces, motor and non-motor vehicles, crowd density and AI rules on a large screen." },
          { label: "Virtual LED", value: "Supports OSD and configuring the position and font size of its content." },
          { label: "Input Resolution", value: "800 × 600@60 Hz; 1024 × 768@60 Hz; 1152 × 864@60 Hz; 1280 × 720@60 Hz; 1280 × 800@60 Hz; 1280 × 960@60 Hz; 1280 × 1024@60 Hz; 1360 × 768@60 Hz; 1440 × 900@60 Hz; 1680 × 1050@60 Hz; 1920 × 1080@60 Hz; 3840x2160@30 Hz (HDMI); 3840x2160@60 Hz (DP); 4096×2160@60 Hz (DP)" },
          { label: "Local Input Latency", value: "Supports 1080p 60 Hz image input. The delay from when the device receives the data to when it outputs it to the display does not exceed 150 ms when the output is 1080p@60 fps." }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "20-ch HDMI" },
          { label: "Audio Output", value: "3.5 mm port; 12-ch HDMI" },
          { label: "Alarm Input", value: "4-ch" },
          { label: "Alarm Output", value: "4-ch" },
          { label: "Network Port", value: "2 × gigabit optical ports; 2 × gigabit electrical ports" },
          { label: "RS-232", value: "3 (1 × DB9, 2 × RJ-45)" },
          { label: "USB", value: "4 (2 × USB 3.0, 2 × USB 2.0)" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50–60 Hz" },
          { label: "Power Consumption", value: "≤160 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), non-condensing" },
          { label: "Product Dimensions", value: "70 mm × 400 mm × 440 mm (2.76\" × 15.75\" × 17.32\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "220 mm × 530 mm × 557 mm (8.66\" × 20.87\" × 21.93\") (H × W × D)" },
          { label: "Gross Weight", value: "8.7 kg–9.1 kg (19.18 lb–20.06 lb)" },
          { label: "Net Weight", value: "5.7 kg–6.0 kg (12.57 lb–13.23 lb)" }
        ]
      }
    ]
  },
  "LP-VD1205DU-4I-8K": {
    id: "LP-VD1205DU-4I-8K",
    name: "LP-VD1205DU-4I-8K",
    title: "Dahua 12CH UHD NETWORK VIDEO DECODER",
    description: [
      "12-channel HDMI video output.",
      "8-channel HDMI audio output.",
      "Decodes videos to multiple video stream decoding standards, such as MPEG2, MPEG4, H.264, H.265, SVAC and MJPEG.",
      "Decodes video streams to multiple resolutions, including QCIF, CIF, 2CIF, HD1, D1, 720p, 1080p, 3 MP, 5 MP, 8 MP, 12 MP and 32 MP.",
      "Synchronously decodes to 3-channel 8K@60 fps, 27-channel 4K@30 fps, 108-channel 1080p@30 fps or 432-channel D1@30 fps videos.",
      "Splits to 1, 4, 6, 8, 9, 16, 25 and 36 windows, and supports M × N custom split.",
      "The following resolutions are supported through the HDMI output port: 3840 × 2160, 1920 × 1080, 1280 × 1024, 1280 × 720 and 1024 × 768.",
      "Up to 3840 × 2160 is supported for the DP and HDMI input ports."
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Main Processor", value: "High-performance embedded processor" },
          { label: "Operating System", value: "Embedded LINUX" }
        ]
      },
      {
        category: "Function",
        specs: [
          { label: "Number of Video Output Channels", value: "12 × HDMI" },
          { label: "Video Compression", value: "SVAC; H.264; H.265; MJPEG; MPEG4; MPEG2" },
          { label: "Audio Compression", value: "PCM; G711; AAC" },
          { label: "Decoding Capability", value: "Performs H.264 and H.265 decoding (1080p@60 fps by default for output ports). Synchronously decodes to 3-channel 8K@60 fps, 27-channel 4K@30 fps, 108-channel 1080p@30 fps or 432-channel D1@30 fps videos." },
          { label: "Decoding Pixel", value: "QCIF; CIF; 2CIF; HD1; D1; 960H; 720p; 1080p; 3 MP; 4 MP; 5 MP; 6 MP; 8 MP; 12 MP; 32 MP" },
          { label: "Output Resolution", value: "1024 × 768@60 fps; 1280 × 720@60 fps; 1280 × 1024@60 fps; 1920 × 1080@60 fps; 1920 × 1200@60 fps; 2048 × 1152@60 fps; 3840 × 2160@30 fps; 3840 × 2160@60 fps" },
          { label: "Bit Rate Type", value: "Composite stream; video stream" },
          { label: "Video Input", value: "2 × DP; 2 × HDMI" },
          { label: "Multi-screen Display", value: "1/4/6/8/9/16/25/36 window splits per screen. Supports M × N custom split; M × N ≤ 36." },
          { label: "Screen Splicing", value: "Splices together up to 12 screens." },
          { label: "Window & Roam", value: "Opens up to 36 windows, and supports roaming." },
          { label: "Scheme Tour", value: "Supports configuring schemes, tour, scheduled schemes and setting the tour interval." },
          { label: "Small-pitch LED", value: "The video output resolution can be customized and small-pitch LEDs can be accessed." },
          { label: "Background Image Color", value: "Displays high-definition background images, and supports setting the default background color for the video wall." },
          { label: "Enable AI Function", value: "Displays people, their faces, motor and non-motor vehicles, crowd density and AI rules on a large screen." },
          { label: "Virtual LED", value: "Supports OSD and configuring the position and font size of its content." },
          { label: "Input Resolution", value: "800 × 600@60 fps; 1024 × 768@60 fps; 1152 × 864@60 fps; 1280 × 720@60 fps; 1280 × 800@60 fps; 1280 × 960@60 fps; 1280 × 1024@60 fps; 1360 × 768@60 fps; 1440 × 900@60 fps; 1680 × 1050@60 fps; 1920 × 1080@60 fps; 3840 × 2160@30 fps (supported only by HDMI); 3840 × 2160@60 fps (supported only by DP2); 4096 × 2160@60 fps (supported only by DP2)" }
        ]
      },
      {
        category: "Port",
        specs: [
          { label: "Video Output", value: "12 × HDMI" },
          { label: "Audio Output", value: "3.5 mm port; 8 × HDMI" },
          { label: "Alarm Input", value: "4 (5V TTL signal input)" },
          { label: "Alarm Output", value: "4 relay output (Linked output of 30 VDC 1A and 125 VAC 0.5A)" },
          { label: "Network Port", value: "2 × gigabit optical, 2 × gigabit electrical" },
          { label: "RS-232", value: "3 (1 × DB9, 2 × RJ-45)" },
          { label: "USB", value: "4 (2 × USB 3.0, 2 × USB 2.0)" },
          { label: "RS-485", value: "1" }
        ]
      },
      {
        category: "General",
        specs: [
          { label: "Power Supply", value: "100–240 VAC, 50/60 Hz" },
          { label: "Power Consumption", value: "≤100 W" },
          { label: "Operating Temperature", value: "-10 °C to +55 °C (+14 °F to +131 °F)" },
          { label: "Operating Humidity", value: "10%–95% (RH), (106 kPa)" },
          { label: "Product Dimensions", value: "70 mm × 400 mm × 440 mm (2.76\" × 15.75\" × 17.32\") (H × W × D)" },
          { label: "Packaging Dimensions", value: "220 mm × 530 mm × 557 mm (8.66\" × 20.87\" × 21.93\") (H × W × D)" },
          { label: "Gross Weight", value: "7.5 kg–7.8 kg (16.53 lb–17.20 lb)" },
          { label: "Net Weight", value: "5.5 kg–5.8 kg (12.13 lb–12.79 lb)" }
        ]
      }
    ]
  },
  "LP-VD0405DU-2I-8K": {
    id: "LP-VD0405DU-2I-8K",
    name: "LP-VD0405DU-2I-8K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "2CH@8K/10CH@4K/36CH@1080P/144CH@D1 real-time decoding ability",
      "HDMI input max support 1 channel 4K@60fps collection",
      "4ch HDMI output max support 4K@60fps output",
      "Up to 8K image splicing display",
      "Supports up to 4 video-wall display units or monitors",
      "Splicing screens control for zoom/merge/roam/overlay",
      "Supports 1/4/6/8/9/16/25/36 and free split",
      "Fisheye dewarp function, supports multi-video split display in ceiling mount, wall mount, ground mount installation mode",
      "Supports alarm, RS232, RS485"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "LINUX" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MJPEG/MPEG2/MPEG4" },
          { label: "Audio Format", value: "PCM/G711/AAC" },
          { label: "Total Video Decoding", value: "2CH@32MP@25/7CH 12MP@25/10CH 8MP@25/14CH 6MP@25/36CH 1080P@30/144CH D1@30" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/3MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Frame Rate", value: "PAL:1-25fps, NTSC:1-30fps" },
          { label: "Video Input", value: "1ch@HDMI 2.0, 1ch@HDMI 1.4" },
          { label: "Video Output", value: "4ch@HDMI 2.0" },
          { label: "Collection Resolution", value: "3840×2160@60fps/3840×2160@30/1920×1080@60fps/1680×1050/1440×900/1280×1024/1280×800/1280×720/1024×768/800×600" },
          { label: "Display Resolution", value: "4096×2160@24/3840×2160@60fps/3840×2160@30/1920×1080@60fps/1280×1024/1280×720/1024×768" },
          { label: "Bi-directional Talk", value: "1 Pair 3.5mm jack (reserved) (2.0V Line in/50mV Mic in/10KΩ, 2.0V/16Ω out)" },
          { label: "Audio Output", value: "1 3.5mm jack" },
          { label: "Alarm Input", value: "8ch" },
          { label: "Alarm Output", value: "8ch" },
          { label: "Communication Interface", value: "1 RJ45 network port (10M/100M/1000M); 2 RS232; 1 RS485" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "DC12V, 5A" },
          { label: "Power Consumption", value: "≤50W" },
          { label: "Working Temperature", value: "-10 °C to +55 °C (14 °F to 131 °F)" },
          { label: "Working Humidity", value: "10%–95%, 86Kpa-106Kpa" },
          { label: "Unit Dimension", value: "1U, 440X322.25X44mm(17.32×12.69×1.73 inch), (W*D*H)" },
          { label: "Weight", value: "3.2Kg/3.5kg" }
        ]
      }
    ]
  },
  "LP-VD0105DH-4K": {
    id: "LP-VD0105DH-4K",
    name: "LP-VD0105DH-4K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "Designed for standalone operator viewers",
      "H.265+/H.265/H.264/MPEG4/MJPEG video decoding",
      "1ch@32MP(25fps)/3ch@12MP(15fps)/4ch@8MP/16ch@1080P/36ch@720P/64ch@D1 decoding ability",
      "Supports multiple resolution decoding: up to 32Mp network video",
      "1ch HDMI/VGA output, HDMI support Ultra HD 4K output",
      "Support 1/4/9/16/25/36/64 display split",
      "Supports alarm, RS232, RS485",
      "Local GUI support mouse operation directly",
      "Support the display of intelligent regular line"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "Embedded LINUX" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG" },
          { label: "Audio Format", value: "PCM/G.711" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/4MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Output", value: "HDMI/VGA" },
          { label: "Display Resolution", value: "3840×2160/3840×2160/1920×1080/1280×1024/1280×720/1024×768" },
          { label: "Audio Output", value: "HDMI embedded" },
          { label: "Communication Interface", value: "1 RJ45 network port (10M/100M/1000M, Self-adaptive); 1 RS232(DB9); 1 RS485" },
          { label: "Bi-directional Talk", value: "1 channel (reserved), RCA in / RCA out (2Vrms, 10K ohms)" },
          { label: "Alarm Input", value: "4ch" },
          { label: "Alarm Output", value: "4ch relay out (30VDC 1A, 125VAC, 0.5A)" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "DC12V, 3.3A" },
          { label: "Power Consumption", value: "≤20W" },
          { label: "Working Temperature", value: "-10 °C to +55 °C (14 °F to 131 °F)" },
          { label: "Working Humidity", value: "10~95%RH / 86~106kpa" },
          { label: "Unit Dimension", value: "1U, 440×322.8×44mm(17.32 × 12.71 × 1.73 inch), (W*D*H)" },
          { label: "Weight", value: "3.2Kg/7.05 lb" }
        ]
      }
    ]
  },
  "LP-VD2105DH-4I-4K": {
    id: "LP-VD2105DH-4I-4K",
    name: "LP-VD2105DH-4I-4K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "Standard 2.5U case, elegant appearance",
      "Plug-in board design, easy to use and maintain",
      "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG video decoding",
      "Ultra-high decoding ability, up to 32 Megapixels",
      "2ch HDMI and 2ch DVI-I input, supports 4K collection",
      "Supports 1/4/6/8/9/16/25/36 and free split",
      "Supports alarm, RS232, RS485",
      "Splicing screens control for zoom/merge/roam/overlay",
      "Supports redundant power, stable and reliable"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "LINUX" },
          { label: "Slot", value: "1 Main board, 3 Decoding board(6CH), 1 Collection board, 1 Blank panel" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG" },
          { label: "Audio Format", value: "PCM/G711/AAC" },
          { label: "Decoding Capacity Separately", value: "Port 1,2,3 / Port 4,5,6 / Port 7,8,9 / Port 10,11,12 / Port 13,14,15 / Port 16,17,18 / Port 19,20,21: 1CH@32MP(25fps)/3CH@12MP(15fps)/4CH@8MP/16CH@1080P/64CH@D1" },
          { label: "Total Video Decoding", value: "7CH@32MP(25fps)/21CH@12MP(15fps)/28CH@8MP/56CH@6MP/70CH@5MP/112CH@1080P/252CH@720P/448CH@D1" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/4MP/3MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Output", value: "21ch HDMI" },
          { label: "Display Resolution", value: "3840×2160/3840×2160/1920×1080/1280×1024/1280×720/1024×768" },
          { label: "Video Input", value: "2 HDMI, 2 DVI-I" },
          { label: "Collection Resolution", value: "3840×2160@30fps/3840×2160/1920×1080/1680×1050/1440×900/1400×1050/1360×768/1280×1024/1280×800/1280×720/1152×864/1024×768/800×600" },
          { label: "Audio Output", value: "21ch HDMI(embedded)" },
          { label: "Bi-directional Talk", value: "1 Pair 3.5mm jack (reserved) (2.0V Line in/50mV Mic in/10KΩ, 2.0V/16Ω out)" },
          { label: "Alarm Input/Output", value: "2CH/1CH(30V DC 1A, 125V AC, 0.5A)" },
          { label: "Communication Interface", value: "2 RJ45 network port (10M/100M/1000M)" },
          { label: "RS232", value: "3 (1 DB9, 2 RJ45)" },
          { label: "USB", value: "3 (2 USB2.0, 1 USB3.0)" },
          { label: "RS485", value: "1" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "AC100-127V, 200-240V, 47Hz-63Hz" },
          { label: "Power Consumption", value: "≤100W" },
          { label: "Working Temperature", value: "-10 °C to +55 °C" },
          { label: "Working Humidity", value: "10% ~ 95%, 86Kpa-106Kpa" },
          { label: "Unit Dimension", value: "2.5U, 440x436.6x110mm(17.32 × 17.19 × 4.33 inch), (W*D*H)" },
          { label: "Weight", value: "12.02Kg(26.50 lb)" }
        ]
      }
    ]
  },
  "LP-VD1805DH-4I-4K": {
    id: "LP-VD1805DH-4I-4K",
    name: "LP-VD1805DH-4I-4K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "Standard 2.5U case, elegant appearance",
      "Plug-in board design, easy to use and maintain",
      "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG video decoding",
      "Ultra-high decoding ability, up to 32 Megapixels",
      "2ch HDMI and 2ch DVI-I input, supports 4K collection",
      "Supports 1/4/6/8/9/16/25/36 and free split",
      "Supports alarm, RS232, RS485",
      "Splicing screens control for zoom/merge/roam/overlay",
      "Supports redundant power, stable and reliable"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "LINUX" },
          { label: "Slot", value: "1 Main board, 2 Decoding board(6CH), 1 Decoding board(2CH), 1 Collection board, 1 Blank panel" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG" },
          { label: "Audio Format", value: "PCM/G711/AAC" },
          { label: "Decoding Capacity Separately", value: "Port 1,2,3 / Port 4,5,6 / Port 7,8,9 / Port 10,11,12 / Port 13,14,15 / Port 16,17,18: 1CH@32MP(25fps)/3CH@12MP(15fps)/4CH@8MP/16CH@1080P/64CH@D1" },
          { label: "Total Video Decoding", value: "6CH@32MP(25fps)/18CH@12MP(15fps)/24CH@8MP/48CH@6MP/60CH@5MP/96CH@1080P/216CH@720P/384CH@D1" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/4MP/3MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Output", value: "18ch HDMI" },
          { label: "Display Resolution", value: "3840×2160/3840×2160/1920×1080/1280×1024/1280×720/1024×768" },
          { label: "Video Input", value: "2 HDMI, 2 DVI-I" },
          { label: "Collection Resolution", value: "3840×2160@30fps/3840×2160/1920×1080/1680×1050/1440×900/1400×1050/1360×768/1280×1024/1280×800/1280×720/1152×864/1024×768/800×600, etc." },
          { label: "Audio Output", value: "18ch HDMI(embedded)" },
          { label: "Bi-directional Talk", value: "1 Pair 3.5mm jack (reserved) (2.0V Line in/50mV Mic in/10KΩ, 2.0V/16Ω out)" },
          { label: "Alarm Input/Output", value: "2CH/1CH(30V DC 1A, 125V AC, 0.5A)" },
          { label: "Communication Interface", value: "2 RJ45 network port (10M/100M/1000M)" },
          { label: "RS232", value: "3 (1 DB9, 2 RJ45)" },
          { label: "USB", value: "3 (2 USB2.0, 1 USB3.0)" },
          { label: "RS485", value: "1" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "AC100-127V, 200-240V, 47Hz-63Hz" },
          { label: "Power Consumption", value: "≤150W" },
          { label: "Working Temperature", value: "-10°C~+55°C" },
          { label: "Working Humidity", value: "10% ~ 95%, 86Kpa-106Kpa" },
          { label: "Unit Dimension", value: "2.5U, 440x436.6x110mm(17.32 × 17.19 × 4.33 inch), (W*D*H)" },
          { label: "Weight", value: "11.94Kg(26.32 lb)" }
        ]
      }
    ]
  },
  "LP-VD1505DH-4I-4K": {
    id: "LP-VD1505DH-4I-4K",
    name: "LP-VD1505DH-4I-4K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "Standard 2.5U case, elegant appearance",
      "Plug-in board design, easy to use and maintain",
      "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG video decoding",
      "Ultra-high decoding ability, up to 32 Megapixels",
      "2ch HDMI and 2ch DVI-I input, supports 4K collection",
      "Supports 1/4/6/8/9/16/25/36 and free split",
      "Supports alarm, RS232, RS485",
      "Splicing screens control for zoom/merge/roam/overlay",
      "Support redundant power, stable and reliable"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "LINUX" },
          { label: "Slot", value: "1 Main board, 2 Decoding board(6CH), 1 Collection board, 2 Blank panel" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG" },
          { label: "Audio Format", value: "PCM/G711/AAC" },
          { label: "Decoding Capacity Separately", value: "Port 1,2,3 / Port 4,5,6 / Port 7,8,9 / Port 10,11,12 / Port 13,14,15: 1CH@32MP(25fps)/3CH@12MP(15fps)/4CH@8MP/16CH@1080P/64CH@D1" },
          { label: "Total Video Decoding", value: "5CH@32MP(25fps)/15CH@12MP(15fps)/20CH@8MP/40CH@6MP/50CH@5MP/80CH@1080P/180CH@720P/320CH@D1" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/4MP/3MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Output", value: "15ch HDMI" },
          { label: "Display Resolution", value: "3840×2160/3840×2160/1920×1080/1280×1024/1280×720/1024×768" },
          { label: "Video Input", value: "2 HDMI, 2 DVI-I" },
          { label: "Collection Resolution", value: "3840×2160@30fps/3840×2160/1920×1080/1680×1050/1440×900/1400×1050/1360×768/1280×1024/1280×800/1280×720/1152×864/1024×768/800×600, etc." },
          { label: "Audio Output", value: "15ch HDMI(embedded)" },
          { label: "Bi-directional Talk", value: "1 Pair 3.5mm jack (reserved) (2.0V Line in/50mV Mic in/10KΩ, 2.0V/16Ω out)" },
          { label: "Alarm Input/Output", value: "2CH/1CH(30V DC 1A, 125V AC, 0.5A)" },
          { label: "Communication Interface", value: "2 RJ45 network port (10M/100M/1000M)" },
          { label: "RS232", value: "3 (1 DB9, 2 RJ45)" },
          { label: "USB", value: "3 (2 USB2.0, 1 USB3.0)" },
          { label: "RS485", value: "1" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "AC100-127V, 200-240V, 47Hz-63Hz" },
          { label: "Power Consumption", value: "≤150W" },
          { label: "Working Temperature", value: "-10°C~+55°C" },
          { label: "Working Humidity", value: "10% ~ 95%, 86Kpa-106Kpa" },
          { label: "Unit Dimension", value: "2.5U, 440x436.6x110mm(17.32 × 17.19 × 4.33 inch), (W*D*H)" },
          { label: "Weight", value: "11.83Kg(26.08 lb)" }
        ]
      }
    ]
  },
  "LP-VD1205DH-4I-4K": {
    id: "LP-VD1205DH-4I-4K",
    name: "LP-VD1205DH-4I-4K",
    title: "Ultra-HD Network Video Decoder",
    description: [
      "Standard 2.5U case, elegant appearance",
      "Plug-in board design, easy to use and maintain",
      "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG video decoding",
      "Ultra-high decoding ability, up to 32 Megapixels",
      "2ch HDMI and 2ch DVI-I input, supports 4K collection",
      "Supports 1/4/6/8/9/16/25/36 and free split",
      "Supports alarm, RS232, RS485",
      "Splicing screens control for zoom/merge/roam/overlay",
      "Supports redundant power, stable and reliable"
    ],
    features: [],
    specifications: [
      {
        category: "System",
        specs: [
          { label: "Processor", value: "Embedded processor" },
          { label: "Operating System", value: "LINUX" },
          { label: "Slot", value: "1 Main board, 1 Decoding board(6CH), 1 Decoding board(2CH), 1 Collection board, 2 Blank panel" }
        ]
      },
      {
        category: "Performance",
        specs: [
          { label: "Video Format", value: "H.265+/H.265/H.264/MPEG4/MPEG2/MJPEG" },
          { label: "Audio Format", value: "PCM/G711/AAC" },
          { label: "Decoding Capacity Separately", value: "Port 1,2,3 / Port 4,5,6 / Port 7,8,9 / Port 10,11,12: 1CH@32MP(25fps)/3CH@12MP(15fps)/4CH@8MP/16CH@1080P/64CH@D1" },
          { label: "Total Video Decoding", value: "4CH@32MP(25fps)/12CH@12MP(15fps)/16CH@8MP/32CH@6MP/40CH@5MP/64CH@1080P/144CH@720P/256CH@D1" },
          { label: "Decoding Resolution", value: "32MP/12MP/8MP/6MP/5MP/4MP/3MP/1080P/720P/960H/D1/HD1/2CIF/CIF/QCIF" },
          { label: "Video Output", value: "12ch HDMI" },
          { label: "Display Resolution", value: "3840×2160/3840×2160/1920×1080/1280×1024/1280×720/1024×768" },
          { label: "Video Input", value: "2 HDMI, 2 DVI-I" },
          { label: "Collection Resolution", value: "3840×2160@30fps/3840×2160/1920×1080/1680×1050/1440×900/1400×1050/1360×768/1280×1024/1280×800/1280×720/1152×864/1024×768/800×600, etc." },
          { label: "Audio Output", value: "12ch HDMI(embedded)" },
          { label: "Bi-directional Talk", value: "1 Pair 3.5mm jack (reserved) (2.0V Line in/50mV Mic in/10KΩ, 2.0V/16Ω out)" },
          { label: "Alarm Input/Output", value: "2CH/1CH(30V DC 1A, 125V AC, 0.5A)" },
          { label: "Communication Interface", value: "2 RJ45 network port (10M/100M/1000M)" },
          { label: "RS232", value: "3 (1 DB9, 2 RJ45)" },
          { label: "USB", value: "3 (2 USB2.0, 1 USB3.0)" },
          { label: "RS485", value: "1" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Power Supply", value: "AC100-127V, 200-240V, 47Hz-63Hz" },
          { label: "Power Consumption", value: "≤100W" },
          { label: "Working Temperature", value: "-10°C~+55°C" },
          { label: "Working Humidity", value: "10% ~ 95%, 86Kpa-106Kpa" },
          { label: "Unit Dimension", value: "2.5U, 440x436.6x110mm(17.32 × 17.19 × 4.33 inch), (W*D*H)" },
          { label: "Weight", value: "11.22Kg(24.80 lb)" }
        ]
      }
    ]
  },
  "LP-EB0105HI-4K": {
    id: "LP-EB0105HI-4K",
    name: "LP-EB0105HI-4K",
    title: "1 Channel Distributed Encoding Box",
    description: [
      "Support 1ch DP, 1ch HDMI independent collection interfaces.Support 4K and H.265 real-time encoding",
      "Powerful 10M/100M/1000M self-adaptive Ethernet interface",
      "Support TCP/IP,HTTP,DHCP,DNS,DDNS,RTP/RTSP,SMTP,NTP and etc. network protocols",
      "Remote reboot/upgrade/default setting and etc. operations",
      "Provides SDK, demo software and development manual",
      "Supports 1-channel HDMI loop output and 1-channel HDMI output",
      "Supports redundant power input of two channels: PoE and 12 VDC"
    ],
    features: [],
    specifications: [
      {
        category: "System Parameter",
        specs: [
          { label: "System Processor", value: "High-performance industrial embedded micro processor" },
          { label: "Operating System", value: "Embedded LINUX" }
        ]
      },
      {
        category: "Interface",
        specs: [
          { label: "Video Input", value: "1 HDMI1.4 (support DVI with convertor); 1 DP" },
          { label: "Video Output", value: "1 HDMI2.0 and 1 HDMI loop output" },
          { label: "Audio Input", value: "1 HDMI and DP (embedded), 1 3.5 mm jack" },
          { label: "Intercom", value: "1 3.5mm jack earphone (reserved) / 1 3.5mm jack microphone (reserved)" },
          { label: "Alarm In/Out", value: "2 / 2 (30VDC 1A,125VAC 0.5A linkage out)" },
          { label: "Network Port", value: "1 RJ45 10/100/1000M self-adaptive ethernet interface" },
          { label: "RS232", value: "1 RS232(DB9)" },
          { label: "USB", value: "1 USB 2.0, 1 USB… (reserved)" },
          { label: "RS485", value: "1 RS485" }
        ]
      },
      {
        category: "Performance (Encoding Capacity)",
        specs: [
          { label: "Access Resolution", value: "HDMI/DP: 4096x2160,3840x2160,2560x1440,1920x1080,1280x1024, 1280x960,1280x720,1024x768" },
          { label: "Video Frame Rate", value: "1-60fps, 4096×2160 max supports 24fps, 3840×2160 max supports 30fps" },
          { label: "Encoding Capacity", value: "4096×2160@24fps,3840×2160@30fps,2560×1440@60fps,1920x1080@60fps,1280x1024@60fps,1280x960@60fps,1280x720@60fps,1024x768@60fps" },
          { label: "Video Encoding Format", value: "H.265/H.264 (default H.264)" },
          { label: "Audio Encoding Format", value: "G.711a" },
          { label: "Stream Type", value: "Composite stream, video stream" },
          { label: "Protocol", value: "RTSP Protocol" }
        ]
      },
      {
        category: "Others",
        specs: [
          { label: "Working Environment", value: "Operating temperature: -10°C~+55°C / Humidity: 10%~95%, 86Kpa~106Kpa" },
          { label: "Consumption", value: "≤10W" },
          { label: "Dimension", value: "45mm×153.6mm×100mm (1.77× 6.08× 3.93 inch), (H×D×W)" },
          { label: "Power", value: "DC12V,2.0A/POE" },
          { label: "Weight", value: "0.65Kg (1.43 lb)" }
        ]
      }
    ]
  },
  "H Series": {
    id: "H Series",
    name: "H Series",
    title: "Flagship Video Splicing Processor",
    description: [
      "The H Series Super Video Wall Controller Solution simplifies system architecture and reduces complexity, supporting up to 520 million pixels.",
      "Traditional solutions require numerous LED control units and video wall splicing processors. The NovaStar H Series solution integrates these functions into a single system.",
      "Rich Input/Output Cards On Demand:",
      "Dual 4K Inputs for Ultimate Flexibility (H_2xHDMI2.0, H_2xDP1.2)",
      "8K Ultra HD for a Visual Revolution (H_1xHDMI2.1+1xDP1.4)",
      "4K@120Hz for Buttery-smooth Performance",
      "ST 2110 & NDI Ready for Ultimate Flexibility",
      "Professional Input Cards (H_1xST2110, H_1xNDI, H_4xfiber)",
      "Enhanced Output Card (H_4xfiber sending card)"
    ],
    features: [],
    specifications: [
      {
        category: "Max Loading Capacity",
        specs: [
          { label: "H2 (2U)", value: "26 million pixels (H_20xRJ45) / 52 million pixels (H_4 OPT Enhanced)" },
          { label: "H5 (5U)", value: "39 million pixels (H_20xRJ45) / 78 million pixels (H_4 OPT Enhanced)" },
          { label: "H9 (9U)", value: "65 million pixels (H_20xRJ45) / 130 million pixels (H9) / 260 million pixels (H9 Enhanced)" },
          { label: "H15 (15U)", value: "130 million pixels (H15) / 208 million pixels (H15 Enhanced) / 260 million pixels (H15) / 416 million pixels (H15 Enhanced)" },
          { label: "H20 (20U)", value: "260 million pixels (H_20xRJ45) / 520 million pixels (H_4 OPT Enhanced)" }
        ]
      },
      {
        category: "Input & Output Configuration",
        specs: [
          { label: "Max Output Dimensions", value: "Width: 2560px, Height: 2560px (Single video connector) / Width: 10752px, Height: 10752px (Single Ethernet port) / Width: 16384px, Height: 16384px (Single OPT port)" },
          { label: "Max Input Cards", value: "H2: 4 / H5: 10 / H9: 15 / H15: 30 / H20: 40" },
          { label: "Max Output Cards", value: "H2: 2 / H5: 3 / H9: 5 (10 Enhanced) / H15: 10 (16 Enhanced) / H20: 20" }
        ]
      },
      {
        category: "Processing Features",
        specs: [
          { label: "Irregular Mosaic", value: "Supported" },
          { label: "Max Layers", value: "H2: 32 / H5: 48 / H9: 80 (160 Enhanced) / H15: 160 (160 Enhanced) / H20: 320" },
          { label: "Max Presets", value: "2000 (Preset playlist playback supported)" },
          { label: "Permission Management", value: "Supported" },
          { label: "10bit and HDR", value: "Supported" },
          { label: "Input/Output Monitoring", value: "Supported" }
        ]
      }
    ],
    comparisonTable: {
      headers: ["Model", "H2", "H5", "H9", "H15", "H20"],
      rows: [
        { label: "Rack Unit", values: ["2U", "5U", "9U", "15U", "20U"] },
        { label: "Max Loading Capacity (H_20xRJ45 sending card)", values: ["26 million pixels", "39 million pixels", "65 million pixels", "130 million pixels (H15)\n208 million pixels (H15 Enhanced)", "260 million pixels"] },
        { label: "Max Loading Capacity (H_4 OPT Output Card Enhanced)", values: ["52 million pixels", "78 million pixels", "130 million pixels (H9)\n260 million pixels (H9 Enhanced)", "260 million pixels (H15)\n416 million pixels (H15 Enhanced)", "520 million pixels"] },
        { label: "Max. Output", values: ["Max. width: 2560 pixels, Max. Height: 2560 pixels (Single video connector)\nMax. width: 10752 pixels, Max. Height: 10752 pixels (Single Ethernet port)\nMax. width: 16384 pixels, Max. Height: 16384 pixels (Single OPT port)", "-", "-", "-", "-"] },
        { label: "Max. Input Cards", values: ["4", "10", "15", "30", "40"] },
        { label: "Max. Output Cards", values: ["2", "3", "5 (H9)\n10 (H9 Enhanced)", "10 (H15)\n16 (H15 Enhanced)", "20"] },
        { label: "Irregular Mosaic", values: ["√", "√", "√", "√", "√"] },
        { label: "Max Layers", values: ["32 Layers", "48 Layers", "80 Layers(H9)\n160 Layers(H9 Enhanced)", "160 Layers(H15)\n160 Layers(H15 Enhanced)", "320 Layers"] },
        { label: "Max. Presets", values: ["2000 (Preset playlist playback supported)", "-", "-", "-", "-"] },
        { label: "Permission Management", values: ["√", "√", "√", "√", "√"] },
        { label: "10bit and HDR", values: ["√", "√", "√", "√", "√"] },
        { label: "Input and Output Monitoring (H_2xRJ45+1xHDMI1.3 preview card required)", values: ["√", "√", "√", "√", "√"] },
        { label: "Optional Power Supply", values: ["-", "√", "√", "√", "√"] }
      ]
    }
  },
  "VX Pro Series": {
    id: "VX Pro Series",
    name: "VX Pro Series",
    title: "LED Display Video Controller",
    description: [
      "The NovaStar VX Pro series provides a comprehensive set of powerful video processing and control capabilities.",
      "Multiple Layers and Presets:",
      "• VX2000 Pro supports 12 x 2K, 6 x DL, or 3 x 4K layers.",
      "• VX400 Pro, VX600 Pro, VX1000 Pro supports 6 x 2K, or 1 x 4K + 2 x 2K layers.",
      "• Entire series supports 256 presets.",
      "More Advantages:",
      "• Remote Control",
      "• Independent Audio Connector",
      "• Multi-language Menu Support (English, Español, Français)"
    ],
    features: [],
    specifications: [
      {
        category: "General",
        specs: [
          { label: "Series Models", value: "VX400 Pro, VX600 Pro, VX1000 Pro, VX2000 Pro" },
          { label: "Type", value: "All-in-One Controller" }
        ]
      }
    ],
    comparisonTable: {
      headers: ["Device Model", "VX400 Pro", "VX600 Pro", "VX1000 Pro", "VX2000 Pro"],
      rows: [
        { label: "Loading Capacity", values: ["2.6 million pixels", "3.9 million pixels", "6.5 million pixels", "13 million pixels"] },
        { label: "Max Width (pixels)", values: ["10240", "10240", "10240", "16384"] },
        { label: "Max Height (pixels)", values: ["8192", "8192", "8192", "8192"] },
        { label: "Layers", values: ["6 *2K×1K", "6 *2K×1K", "6 *2K×1K", "12 *2K×1K"] },
        { label: "Input Connectors", values: [
          "1x HDMI 2.0 (IN&LOOP)\n2x HDMI 1.3\n1x 3G-SDI (IN&LOOP)\n1x 10G OPT Port (OPT1)\n1x USB3.0",
          "1x HDMI 2.0 (IN&LOOP)\n2x HDMI 1.3\n1x 3G-SDI (IN&LOOP)\n1x 10G OPT Port (OPT1)\n1x USB3.0",
          "1x HDMI 2.0 (IN&LOOP)\n2x HDMI 1.3\n1x 3G-SDI (IN&LOOP)\n1x 10G OPT Port (OPT1)\n1x USB3.0",
          "1x 12G-SDI(IN&LOOP)\n1x DP 1.2\n2x HDMI 2.0\n4x HDMI 1.3\n2x OPT\n1x USB3.0"
        ] },
        { label: "Output Connectors", values: [
          "4x Ethernet Ports\n1x HDMI1.3\n1x HDMI 2.0 LOOP\n1x 3G-SDI LOOP\n2x OPT",
          "6x Ethernet Ports\n1x HDMI1.3\n1x HDMI 2.0 LOOP\n1x 3G-SDI LOOP\n2x OPT",
          "10x Ethernet Ports\n1x HDMI1.3\n1x HDMI 2.0 LOOP\n1x 3G-SDI LOOP\n2x OPT",
          "20x Ethernet Ports\n1x HDMI1.3\n4x OPT\n1x 12G-SDI LOOP\n4x OPT"
        ] },
        { label: "Presets", values: ["256", "256", "256", "256"] },
        { label: "Control Connectors", values: [
          "2x Ethernet Port\n1x USB",
          "2x Ethernet Port\n1x USB",
          "2x Ethernet Port\n1x USB",
          "2x Ethernet Port\n1x USB"
        ] }
      ]
    }
  },
  "TB Series": {
    id: "TB Series",
    name: "TB Series",
    title: "Taurus Series Multimedia Player",
    description: [
      "An upgraded multimedia player for full-color LED screens. Integrating playback and sending functions, it can be used for program release and LED screen control through various user terminals such as PC, mobile phone and Pad.",
      "It supports connection to features such as safety and stability, simplicity and ease of use, and intelligent control, it can be widely applied in the fields of LED commercial display and smart cities, such as fixed screens, lamp post screens, chain store screens, digital signage, retail store screens, storefront screens, and shelf screens. cloud publishing and cloud O&M platforms, making it easy to achieve cross-regional cluster management of LED screens.",
      "Supports USB drive plug and play, meeting various playback needs, and ensures playback security through multiple protection measures such as terminal authentication and playback verification.",
      "Hardware Upgrade, Doubled Performance:",
      "• Industrial-grade SoC Chip: Quad-core ARM processor, delivering high performance and low power consumption.",
      "Powerful Control, Robust Decoding:",
      "• Resolution Upgrade: Drives up to 2.3 million pixels (TB60) for high-quality displays.",
      "• Frame-level Sync: Maintains frame-level synchronization even during complex playback."
    ],
    features: [],
    specifications: [
      {
        category: "General",
        specs: [
          { label: "Series Models", value: "TB10 Plus, TB20 Plus, TB30, TB50, TB60" },
          { label: "Type", value: "Multimedia Player" }
        ]
      }
    ],
    comparisonTable: {
      headers: ["Model", "TB10 Plus", "TB20 Plus", "TB30", "TB50", "TB60"],
      rows: [
        { label: "Max. Loading Capacity", values: ["0.65 Million Pixels", "0.65 Million Pixels", "0.65 Million Pixels", "1.3 Million Pixels", "2.3 Million Pixels"] },
        { label: "Max. Width & Height", values: [
          "Normal Scenario: Max. Width 2048 or Max Height 2048\nUltra-wide screen: Max. Width 8192 or Max. Height 2048",
          "Normal Scenario: Max. Width 2048 or Max Height 2048\nUltra-wide screen: Max. Width 8192 or Max. Height 2048",
          "Max Width 4096 or Max Height 4096",
          "Max Width 4096 or Max Height 4096",
          "Max Width 4096 or Max Height 4096"
        ] },
        { label: "CPU", values: ["Quad-core A53@1.4GHz", "Quad-core A53@1.4GHz", "Quad-core A55@1.8GHz", "Quad-core A55@1.8GHz", "Quad-core A55@1.8GHz"] },
        { label: "RAM+ROM", values: ["2GB+32GB", "2GB+32GB", "1GB+32GB", "1GB+32GB", "1GB+32GB"] },
        { label: "Storage Expansion", values: ["USB Driver, can be expanded up to 128G", "USB Driver, can be expanded up to 128G", "USB Driver, can be expanded up to 128G", "USB Driver, can be expanded up to 128G", "USB Driver, can be expanded up to 128G"] },
        { label: "Video Decoding", values: ["4K@60Hz", "4K@60Hz", "4K@60Hz", "4K@60Hz", "4K@60Hz"] },
        { label: "OS", values: ["Android 10.0", "Android 10.0", "Android 11.0", "Android 11.0", "Android 11.0"] },
        { label: "Playback", values: [
          "1x 4K\nor 2x 1080p\nor 4x 720p\nor 4x 480p\nor 20x 360p",
          "1x 4K\nor 2x 1080p\nor 4x 720p\nor 4x 480p\nor 20x 360p",
          "1x 4K\nor 2x 1080p\nor 5x 720p\nor 6x 480p\nor 6x 360p",
          "1x 4K\nor 2x 1080p\nor 5x 720p\nor 6x 480p\nor 6x 360p",
          "1x 4K\nor 2x 1080p\nor 5x 720p\nor 6x 480p\nor 6x 360p"
        ] },
        { label: "Multi-device Synchronous Playback", values: ["√", "√", "√", "√", "√"] },
        { label: "Synchronous and Asynchronous Switching", values: ["x", "√", "x", "√", "√"] },
        { label: "HDMI Cascading Playback", values: ["x", "x", "x", "√(1080P, Max. up to 10 devices)", "√(1080P, Max. up to 10 devices)"] },
        { label: "Sensor Access", values: ["○", "○", "○", "○", "○"] },
        { label: "Audio Output", values: ["√", "√", "√", "√", "√"] },
        { label: "USB Driver Display", values: ["√(USB2.0)", "√(USB2.0)", "√(USB3.0)", "√(USB3.0)", "√(USB3.0)"] },
        { label: "Wired Network", values: ["100 Mbps", "100 Mbps", "1 Gbps", "1 Gbps", "1 Gbps"] },
        { label: "WI-FI", values: ["2.4GHz Wi-Fi, AP+STA Dual Mode", "2.4GHz Wi-Fi, AP+STA Dual Mode", "2.4GHz Wi-Fi, AP+STA Dual Mode", "2.4GHz Wi-Fi, AP+STA Dual Mode", "2.4GHz Wi-Fi, AP+STA Dual Mode"] },
        { label: "4G Network", values: ["○", "○", "○", "○", "○"] },
        { label: "Certifications", values: ["√", "√", "√", "√", "√"] },
        { label: "VNNOX Care / VNNOX Media", values: ["√", "√", "√", "√", "√"] },
        { label: "NovaStar SDK", values: ["√", "√", "√", "√", "√"] },
        { label: "Bare Product", values: ["x", "x", "√(T30)", "√(T50)", "x"] }
      ]
    }
  },
  "TU Series": {
    id: "TU Series",
    name: "TU Series",
    title: "Intelligent Control Solution",
    description: [
      "The NovaStar TU Series is an Intelligent Control Solution that brings Smart TV Simplicity to LED Display Solutions.",
      "Intelligent Configuration, Quick and Effective:",
      "• 1 Mobile Phone, 1 APP, 10 Minutes to quickly complete configuration.",
      "• Scan the Code with Your Phone to Receive the Configuration File.",
      "• 5 Seconds: Screen Connection via Photo Capture using NovaStar's self-developed algorithm.",
      "• Eliminates Bright & Darkness Lines with Full-screen Accurate Calibration via phone camera."
    ],
    features: [],
    specifications: [
      {
        category: "General",
        specs: [
          { label: "Series Models", value: "TU15 Pro, TU20 Pro, TU4K Pro" },
          { label: "Type", value: "Intelligent Control Solution" }
        ]
      }
    ],
    comparisonTable: {
      headers: ["Product Model", "TU15 Pro", "TU20 Pro", "TU4K Pro"],
      rows: [
        { label: "Dimensions", values: ["211.7mm x 185.0mm x 50.6mm", "211.7mm x 185.0mm x 50.6mm", "445.0mm x 383.0mm x 49.9mm"] },
        { label: "Input Voltage", values: ["100-240V~, 50/60Hz, 3A Max", "100-240V~, 50/60Hz, 3A Max", "100-240V~, 50/60Hz, 2.5A Max"] },
        { label: "Standby Power Consumption", values: ["Overall power consumption ≤0.5W", "Overall power consumption ≤0.5W", "Overall power consumption ≤0.5W"] },
        { label: "Loading Capacity", values: ["2.6 Million", "3.9 Million", "13 Million"] },
        { label: "Max. Width & Height", values: [
          "Max. Width 4096 pixels\nMax. Height 1920 pixels",
          "Max. Width 4096 pixels\nMax. Height 1920 pixels",
          "Max. Width 16384 pixels\nMax. Height 8192 pixels"
        ] },
        { label: "Android", values: ["Android 11", "Android 11", "Android 13"] },
        { label: "Wi-Fi", values: ["Wi-Fi 6 (AP); Wi-Fi 5 (Station)", "Wi-Fi 6 (AP); Wi-Fi 5 (Station)", "Wi-Fi 6 (AP); Wi-Fi 5 (Station)"] },
        { label: "Memory Space", values: ["4GB/32GB", "4GB/32GB", "8GB/128GB"] },
        { label: "Input Ports", values: ["2xHDMI1.3; 3xUSB2.0", "2xHDMI1.3; 3xUSB2.0", "2xHDMI2.0; 1xHDMI1.3; 2xUSB2.0; 1xUSB3.0"] },
        { label: "Output Ports", values: [
          "4xRJ45; 1xHDMI1.3;\n1x3.5mm Audio Output; 1xSPDIF",
          "6xRJ45; 1xHDMI1.3;\n1x3.5mm Audio Output; 1xSPDIF",
          "20xRJ45; 2x10G OPT; 1xHDMI1.3;\n1x3.5mm Audio Output; 1xSPDIF;\n1x Phoenix Contact Audio Output"
        ] },
        { label: "Control Ports", values: ["1xRJ45; 1xRS232; 1xSensor", "1xRJ45; 1xRS232; 1xSensor", "1xRJ45; 1xRS232; 2xSensor"] },
        { label: "Intelligent Playback Control", values: ["Remote, APP, USB Drive", "Remote, APP, USB Drive", "Remote, APP, USB Drive"] },
        { label: "Wireless Mirroring", values: [
          "Support Type-C/ wireless USB adaptor,\nSupport Windows / iOS / Android multiple platform mirroring",
          "Support Type-C/ wireless USB adaptor,\nSupport Windows / iOS / Android multiple platform mirroring",
          "Support Type-C/ wireless USB adaptor,\nSupport Windows / iOS / Android multiple platform mirroring"
        ] },
        { label: "Whiteboard", values: ["Support (combined with infrared frame)", "Support (combined with infrared frame)", "Support (combined with infrared frame)"] },
        { label: "Intelligent Voice Control", values: ["Support", "Support", "Support"] },
        { label: "Free Scaling", values: ["Support", "Support", "Support"] },
        { label: "Effect Adjusting", values: [
          "Support (Standard, Soft, Theater, Meeting)",
          "Support (Standard, Soft, Theater, Meeting)",
          "Support (Standard, Meeting, Vivid, Skin)"
        ] },
        { label: "One-click Eye Protection", values: ["Support", "Support", "Support"] },
        { label: "Launcher Customization", values: ["Support", "Support", "Support"] },
        { label: "Boot Animation Customization", values: ["Support", "Support", "Support"] },
        { label: "Screen Mirroring Activation", values: ["Default to activate full screen", "Default to activate full screen", "Default to activate 9 split screen"] }
      ]
    }
  }
};
