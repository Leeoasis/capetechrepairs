export const youtubeChannel = "https://www.youtube.com/@cape-tech8303";

export default function YouTubeLink({ compact = false }) {
  return (
    <a href={youtubeChannel} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 rounded-lg bg-[#c8102e] font-extrabold text-white shadow-lg transition hover:bg-[#a90d27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 ${compact ? "px-4 py-3 text-sm" : "px-6 py-4"}`}>
      <svg viewBox="0 0 28 20" className="h-5 w-7 shrink-0" fill="currentColor" aria-hidden="true"><path d="M27.4 3.1A3.5 3.5 0 0 0 25 .6C22.8 0 14 0 14 0S5.2 0 3 .6A3.5 3.5 0 0 0 .6 3.1C0 5.3 0 10 0 10s0 4.7.6 6.9A3.5 3.5 0 0 0 3 19.4c2.2.6 11 .6 11 .6s8.8 0 11-.6a3.5 3.5 0 0 0 2.4-2.5c.6-2.2.6-6.9.6-6.9s0-4.7-.6-6.9ZM11.2 14.3V5.7L18.5 10l-7.3 4.3Z" /></svg>
      {compact ? "YouTube" : "See tech come back to life"}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function YouTubeBanner() {
  return (
    <section className="border-y border-red-200 bg-[#fff1f2] py-10 md:py-14" aria-labelledby="youtube-heading">
      <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="eyebrow mb-3 text-[#a90d27]">Cape Tech Repairs on YouTube</p>
          <h2 id="youtube-heading" className="text-2xl font-extrabold md:text-3xl">Get to know us before you visit.</h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-600">Explore our channel and watch our videos. Have a question about your device? Speak directly with the workshop.</p>
        </div>
        <div className="shrink-0"><YouTubeLink /><p className="mt-3 text-sm font-bold text-[#a90d27]">@cape-tech8303</p></div>
      </div>
    </section>
  );
}
