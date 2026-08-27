export default function MobileContactBar() {
  return (
    <aside className="mobile-contact-bar" aria-label="Quick contact options">
      <a href="tel:+27648188737" className="mobile-contact-bar__call">
        <span aria-hidden="true">☎</span> Call
      </a>
      <a
        href="https://wa.me/27648188737?text=Hi%20Cape%20Tech%20Repairs%2C%20I%20need%20help%20with%20a%20repair."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-contact-bar__whatsapp"
      >
        <span aria-hidden="true">●</span> WhatsApp
      </a>
    </aside>
  );
}
