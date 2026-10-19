export const productCategories = [
  { id: "laptops", name: "Laptops" },
  { id: "business-laptops", name: "Business laptops" },
  { id: "everyday-laptops", name: "Everyday laptops" },
  { id: "desktops", name: "Desktop PCs" },
  { id: "gaming", name: "Gaming systems" },
  { id: "displays-parts", name: "Displays & parts" },
];

export const products = [
  {
    id: "hp-255-g8-silver",
    name: "HP 255 G8",
    categories: ["laptops", "everyday-laptops"],
    finish: "Silver",
    price: 3000,
    status: "available", // Change to "sold" when this unit is sold.
    description: "An everyday laptop for work, study and browsing, with 8 GB of memory and NVMe SSD storage.",
    specs: [
      ["Processor", "AMD 3020e @ 1.21 GHz"],
      ["Memory", "8 GB DDR4 (2400 MHz)"],
      ["Memory slots", "1 of 2 slots occupied"],
      ["Storage", "256 GB NVMe SSD"],
      ["Wi-Fi", "Realtek RTL8821CE"],
    ],
    photos: [
      "17.08.30.jpeg", "17.08.29.jpeg", "17.08.29 (1).jpeg",
      "17.08.29 (2).jpeg", "17.08.28.jpeg", "17.08.28 (1).jpeg", "17.08.28 (2).jpeg",
    ].map((filename) => `/images/products/hp-255-G8-silver/WhatsApp Image 2026-10-13 at ${filename}`),
  },
  {
    id: "hp-elitebook-840-g4",
    name: "HP EliteBook 840 G4",
    categories: ["laptops", "business-laptops"],
    finish: "Silver",
    price: 3000,
    status: "available",
    description: "A compact business-class laptop for office work, study and everyday productivity, with a Core i7 processor and 16 GB of memory for multitasking.",
    specs: [
      ["Processor", "Intel Core i7-7500U (7th generation)"],
      ["Memory", "16 GB DDR4"],
      ["Storage", "256 GB SSD"],
      ["Display", "14-inch"],
      ["Graphics", "Intel HD Graphics 620"],
      ["Keyboard", "Backlit keyboard"],
      ["Security", "Fingerprint reader"],
      ["Audio", "Bang & Olufsen"],
    ],
    photos: [
      "23.36.12.jpeg", "23.36.19.jpeg", "23.36.19 (1).jpeg", "23.36.19 (2).jpeg",
      "23.36.20.jpeg", "23.36.20 (1).jpeg", "23.36.20 (2).jpeg", "23.36.20 (3).jpeg",
    ].map((filename) => `/images/products/hp-elitebook-840-g4/WhatsApp Image 2026-10-18 at ${filename}`),
  },
  {
    id: "hp-elitebook-850-g6",
    name: "HP EliteBook 850 G6",
    categories: ["laptops", "business-laptops"],
    finish: "Silver",
    price: 3500,
    status: "available",
    description: "A slim business laptop with a larger 15.6-inch display, a numeric keypad and SSD storage for office work, administration, online learning and video calls.",
    specs: [
      ["Processor", "Intel Core i5 (8th generation)"],
      ["Memory", "8 GB DDR4"],
      ["Storage", "256 GB SSD"],
      ["Display", "15.6-inch"],
      ["Keyboard", "Backlit keyboard with numeric keypad"],
      ["Security", "Fingerprint reader"],
      ["Operating system", "Windows 11"],
    ],
    photos: [
      "23.36.11.jpeg", "23.36.16.jpeg", "23.36.16 (1).jpeg", "23.36.16 (2).jpeg",
      "23.36.17.jpeg", "23.36.17 (1).jpeg", "23.36.17 (2).jpeg", "23.36.18.jpeg", "23.36.18 (1).jpeg",
    ].map((filename) => `/images/products/hp-elitebook-850-g6/WhatsApp Image 2026-10-18 at ${filename}`),
  },
  {
    "id": "lenovo-thinkpad-x390",
    "name": "Lenovo ThinkPad X390",
    "categories": [
      "laptops",
      "business-laptops"
    ],
    "finish": "Black",
    "price": null,
    "status": "available",
    "description": "A compact, lightweight business laptop for work, studies and everyday multitasking, with 16 GB of memory and a portable 13.3-inch display.",
    "specs": [
      [
        "Processor",
        "Intel Core i5-8365U (8th generation)"
      ],
      [
        "Memory",
        "16 GB DDR4"
      ],
      [
        "Storage",
        "256 GB M.2 SSD"
      ],
      [
        "Display",
        "13.3-inch"
      ],
      [
        "Operating system",
        "Windows 11 Pro"
      ],
      [
        "Battery health",
        "92% (reported at listing; confirm current health)"
      ]
    ],
    "photos": [
      "/images/products/dell-thinkpad-x390/WhatsApp Image 2026-10-19 at 00.32.16.jpeg",
      "/images/products/dell-thinkpad-x390/WhatsApp Image 2026-10-19 at 00.32.16 (1).jpeg",
      "/images/products/dell-thinkpad-x390/WhatsApp Image 2026-10-19 at 00.32.17 (1).jpeg",
      "/images/products/dell-thinkpad-x390/WhatsApp Image 2026-10-19 at 00.32.17 (2).jpeg",
      "/images/products/dell-thinkpad-x390/WhatsApp Image 2026-10-19 at 00.32.17.jpeg"
    ]
  },
  {
    "id": "dell-inspiron-3593",
    "name": "Dell Inspiron 3593",
    "categories": [
      "laptops",
      "everyday-laptops"
    ],
    "finish": "Black",
    "price": null,
    "status": "available",
    "description": "A practical 15.6-inch laptop for study, office tasks and home use, with a 10th-generation Core i5 processor, NVMe SSD storage and a full-size keyboard.",
    "specs": [
      [
        "Processor",
        "Intel Core i5-1035G1 (10th generation)"
      ],
      [
        "Memory",
        "8 GB"
      ],
      [
        "Storage",
        "256 GB NVMe SSD"
      ],
      [
        "Display",
        "15.6-inch"
      ],
      [
        "Operating system",
        "Windows 11 (installed and activated)"
      ],
      [
        "Office software",
        "Microsoft Office 2021 (installed and activated)"
      ],
      [
        "Keyboard",
        "Full-size keyboard with numeric keypad"
      ],
      [
        "Connectivity",
        "Wi-Fi, Bluetooth, USB, HDMI and Ethernet"
      ]
    ],
    "photos": [
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.10.jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.10 (1).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.11 (1).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.11 (2).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.11 (3).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.11 (4).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.11.jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.12 (1).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.12 (2).jpeg",
      "/images/products/dell-inspiron-3593/WhatsApp Image 2026-10-19 at 02.16.12.jpeg"
    ]
  },
  {
    "id": "hp-15-da2xxx",
    "name": "HP 15 Notebook - Core i7",
    "categories": [
      "laptops",
      "everyday-laptops"
    ],
    "finish": "Silver / black",
    "price": null,
    "status": "available",
    "description": "A 15.6-inch HP 15-series laptop for work, studies and home use, with a 10th-generation Core i7 processor, 16 GB of memory and NVMe SSD storage.",
    "specs": [
      [
        "Processor",
        "Intel Core i7-10510U (10th generation)"
      ],
      [
        "Memory",
        "16 GB DDR4"
      ],
      [
        "Storage",
        "256 GB NVMe SSD"
      ],
      [
        "Display",
        "15.6-inch"
      ],
      [
        "Product family",
        "HP 15 series"
      ],
      [
        "Operating system",
        "Windows 11 Pro (installed and activated)"
      ],
      [
        "Office software",
        "Microsoft Office 2021 (installed and activated)"
      ],
      [
        "Keyboard",
        "Full-size keyboard with numeric keypad"
      ],
      [
        "Connectivity",
        "USB, HDMI and Ethernet"
      ]
    ],
    "photos": [
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.19.jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.18.jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.19 (1).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.19 (2).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.19 (3).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.19 (4).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.20 (1).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.20 (2).jpeg",
      "/images/products/hp-core-i7-10th-gen/WhatsApp Image 2026-10-19 at 02.24.20.jpeg"
    ]
  },
];

export function formatPrice(amount) {
  if (amount === null) return "Price on enquiry";
  return `R${amount.toLocaleString("en-ZA")}`;
}
