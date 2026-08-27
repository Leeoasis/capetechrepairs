export default function sitemap() {
  const base = "https://capetechrepairs.co.za";
  return [
    ["", "weekly", 1],
    ["/services", "monthly", 0.9],
    ["/quote", "monthly", 0.9],
    ["/shop", "weekly", 0.8],
    ["/about", "monthly", 0.6],
    ["/blog", "weekly", 0.7],
  ].map(([path, changeFrequency, priority]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
