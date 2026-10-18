export const products = [
  {
    id: "hp-255-g8-silver",
    name: "HP 255 G8",
    finish: "Silver",
    price: 3200,
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
    finish: "Silver",
    price: 2800,
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
    finish: "Silver",
    price: 3000,
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
];

export function formatPrice(amount) {
  if (amount === null) return "Price on enquiry";
  return `R${amount.toLocaleString("en-ZA")}`;
}
