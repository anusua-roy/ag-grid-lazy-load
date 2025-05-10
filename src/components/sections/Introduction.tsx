const Introduction = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 text-sm">
        Lazy loading is a performance optimization technique where resources —
        data, components, media, or even routes — are deferred until they are
        needed. Rather than loading the entire application upfront, which can be
        slow and memory-heavy, lazy loading ensures only what's visible or
        required is loaded, thus improving load time, user experience, and
        device resource usage.
      </p>
      <p className="text-gray-700 text-sm">
        It is widely used in dashboards, data-heavy UIs, long lists, media-rich
        pages, and admin panels.
      </p>
    </div>
  );
};

export default Introduction;
