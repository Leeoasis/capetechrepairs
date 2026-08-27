export default function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hi Cape Tech Repairs, I need help with an electronics repair.",
  );

  return (
    <a
      href={`https://wa.me/27648188737?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget group"
      aria-label="Chat with Cape Tech Repairs on WhatsApp"
    >
      <span className="whatsapp-widget__label" aria-hidden="true">
        Need help? Chat with us
      </span>
      <span className="whatsapp-widget__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img">
          <path
            fill="currentColor"
            d="M16.02 3C8.85 3 3.03 8.75 3.03 15.84c0 2.26.6 4.47 1.73 6.4L3 29l6.98-1.82a13.08 13.08 0 0 0 6.04 1.47H16c7.16 0 12.98-5.75 12.98-12.83C28.98 8.75 23.16 3 16.02 3Zm0 23.48h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-4.14 1.08 1.1-4-.26-.41a10.55 10.55 0 0 1-1.65-5.56c0-5.89 4.9-10.68 10.92-10.68 2.91 0 5.65 1.12 7.71 3.15a10.53 10.53 0 0 1 3.2 7.54c0 5.88-4.9 10.67-10.92 10.67Zm5.99-8c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.25-.71.08-.33-.16-1.39-.5-2.64-1.6a9.87 9.87 0 0 1-1.83-2.25c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.76-1.01-2.41-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.1-1.15 2.69 0 1.59 1.18 3.12 1.34 3.34.16.22 2.32 3.49 5.62 4.89.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.94-.78 2.21-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z"
          />
        </svg>
      </span>
    </a>
  );
}
