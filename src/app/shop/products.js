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
];

export function formatPrice(amount) {
  return `R${amount.toLocaleString("en-ZA")}`;
}
