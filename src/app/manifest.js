export default function manifest() {
  return {
    name: "Cape Tech Repairs",
    short_name: "Cape Tech",
    description:
      "Expert electronics diagnostics and repair for computers, TVs, consoles and audio equipment in Cape Town.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: "/cape-tech-logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
