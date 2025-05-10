const LazyLoadingInTables = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-sm">
        Tables are one of the most performance-sensitive UI components,
        especially when dealing with large datasets, such as financial
        transactions or log histories. Lazy loading can be applied both
        vertically (rows) and horizontally (columns) to optimize rendering and
        memory use.
      </p>

      <div>
        <h3 className="text-lg font-semibold">Why Lazy Load Tables?</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Reduces number of DOM nodes rendered at once</li>
          <li>Improves scroll performance and responsiveness</li>
          <li>Minimizes re-renders during filtering/sorting</li>
          <li>Supports infinite scroll or server-driven data</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Horizontal Lazy Loading</h3>
        <p className="text-gray-700 text-sm">
          When tables have a large number of columns (e.g. 100+), rendering them
          all can cause layout thrashing and long initial load times. Horizontal
          lazy loading or column virtualization renders only what is visible in
          the viewport.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Used by:</strong> AG Grid (Enterprise), TanStack Table
          (virtual mode)
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Vertical Lazy Loading</h3>
        <p className="text-gray-700 text-sm">
          Row virtualization or infinite scroll helps in rendering only visible
          rows, ideal for large tables with thousands of entries. This can be
          combined with dynamic data loading (e.g. fetch more rows on scroll).
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Best For:</strong> Transaction logs, history views, analytics
          dashboards
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Common Pitfalls</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Incorrect row heights can break virtualization</li>
          <li>Row/column resizing must be handled carefully</li>
          <li>Scroll sync issues between header/body</li>
        </ul>
      </div>
    </div>
  );
};

export default LazyLoadingInTables;
