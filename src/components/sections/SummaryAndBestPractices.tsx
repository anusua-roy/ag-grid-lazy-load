const SummaryAndBestPractices = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-sm">
        Lazy loading is a key performance optimization technique that improves
        user experience and responsiveness by deferring non-critical content. It
        is especially effective in data-heavy UIs, media-rich applications, and
        modular frontend systems.
      </p>

      <div>
        <h3 className="text-lg font-semibold">Best Practices</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Use lazy loading for components not visible above the fold</li>
          <li>Combine with pagination or SSR where SEO or control matters</li>
          <li>
            Always include a loading fallback (e.g., spinners or skeletons)
          </li>
          <li>
            Use <code className="font-[Consolas,monospace]">React.lazy</code>{" "}
            and <code className="font-[Consolas,monospace]">Suspense</code> for
            dynamic component import
          </li>
          <li>
            Ensure layout stability to avoid CLS (Cumulative Layout Shift)
          </li>
          <li>Cache data and components whenever appropriate</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">When to Avoid Lazy Loading</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>For above-the-fold content that must render immediately</li>
          <li>If lazy loading increases perceived complexity unnecessarily</li>
          <li>
            When the content is critical for SEO and SSR is more appropriate
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-700">
        Ultimately, the best results come from balancing lazy loading with
        thoughtful UX, measuring actual performance impact, and keeping the user
        experience seamless.
      </p>
    </div>
  );
};

export default SummaryAndBestPractices;
