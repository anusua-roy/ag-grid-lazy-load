const RealWorldExample = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-sm">
        This very page — the Lazy Loading Overview — can be an excellent
        candidate for section-based lazy loading. Although it's not implemented
        yet, we plan to enhance this page using scroll-triggered techniques.
      </p>

      <div>
        <h3 className="text-lg font-semibold">
          Planned Implementation Strategy
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>
            Each section (Introduction, Why, Types, etc.) will be a separate
            component
          </li>
          <li>
            Components will be wrapped with{" "}
            <code className="font-[Consolas,monospace]">Suspense</code> and
            dynamically loaded
          </li>
          <li>
            Use{" "}
            <code className="font-[Consolas,monospace]">
              IntersectionObserver
            </code>{" "}
            to detect when a section scrolls into view
          </li>
          <li>Trigger component load when the section is about to appear</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Why This Page?</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>
            It’s long and content-heavy, so loading everything upfront is
            wasteful
          </li>
          <li>Most users won’t read every section at once</li>
          <li>Each section can render independently</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Next Steps</h3>
        <p className="text-sm text-gray-700">
          Once the content and design stabilize, we’ll explore section-level
          chunking and scroll-based lazy rendering. The goal is to reduce
          initial load time without compromising usability.
        </p>
      </div>

      <p className="italic text-sm text-yellow-700">
        This is a roadmap description. Lazy loading for this page is not active
        yet.
      </p>
    </div>
  );
};

export default RealWorldExample;
