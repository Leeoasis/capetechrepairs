This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## WhatsApp shop

The `/shop` page uses `src/app/shop/products.js` as its product catalogue. Add product photos under `public/images/products/`, then add the product's ID, name, price in rand, specifications and public image paths to the catalogue.

- Use `price: null` for products without a confirmed price. These show "Price on enquiry" and are excluded from the priced subtotal; the WhatsApp message requests a complete quote.
- Assign each product a `categories` array using IDs from `productCategories` in the catalogue. Category counts and filters update automatically; a product can belong to multiple categories.
- Each entry represents one pre-owned unit. The enquiry cart allows one of each unit.
- Set `status` to `"sold"` when a unit sells, then commit and deploy. Sold units remain visible but cannot be added, and are removed from saved carts when the updated site loads.
- Prices and availability come from the deployed catalogue; this is not live inventory or a reservation system.
- The cart saves product IDs in the customer's browser. WhatsApp receives the current product names, prices, subtotal and collection or delivery preference only when the customer opens and sends the message.
- No payment is processed and no order is recorded by the website. Confirm stock, condition/faults, battery health, accessories, delivery costs, payment arrangements, warranty and return terms in writing before accepting payment. Provide order confirmation and a receipt through the workshop's normal process.
- Update the listing with confirmed condition, battery, accessories and cover details as they become available. Do not advertise unconfirmed warranties, delivery promises or reviews.

Check changes with `npm run build` and `npm run typecheck`. Browser checks should cover add/remove, reload persistence, sold units, gallery selection, the WhatsApp message and mobile layout.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
