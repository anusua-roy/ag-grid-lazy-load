const LazyLoadingTypes = () => {
  const ProsConsGrid = ({ pros, cons }: { pros: string[]; cons: string[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border rounded-md shadow-sm overflow-hidden">
      <div className="bg-green-50 px-4 py-3">
        <p className="font-medium text-green-800 mb-1">Pros:</p>
        <ul className="list-disc list-inside text-green-900">
          {pros.map((item, i) => (
            <li key={`pro-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 px-4 py-3 border-l sm:border-l-0 sm:border-t border-red-100">
        <p className="font-medium text-red-800 mb-1">Cons:</p>
        <ul className="list-disc list-inside text-red-900">
          {cons.map((item, i) => (
            <li key={`con-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          A. Scroll-based (Virtual Scroll / Infinite Scroll)
        </h3>
        <p className="text-gray-700">
          Use case: Product lists, feeds, Gmail threads
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-1">
          <li>Loads items as the user scrolls</li>
          <li>Requires scroll detection or IntersectionObserver</li>
        </ul>
        <ProsConsGrid
          pros={[
            "Seamless experience",
            "Ideal for feeds or data with unknown length",
          ]}
          cons={[
            "Harder to track position/state",
            "Users can’t jump to specific pages",
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          B. Component-level Lazy Loading
        </h3>
        <p className="text-gray-700">
          Use case: Heavy UI widgets (e.g., charts, modals)
        </p>
        <pre className="bg-gray-100 text-sm rounded p-2 font-[Consolas,monospace] mt-2">
          {`const LazyChart = React.lazy(() => import('./Chart'))`}
        </pre>
        <ProsConsGrid
          pros={[
            "Decreases initial JS bundle size",
            "Only loads expensive code when needed",
          ]}
          cons={[
            "Fallback must be handled well",
            "Suspense boundaries can break layout if not managed",
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">C. Route-level Code Splitting</h3>
        <p className="text-gray-700">
          Use case: Admin dashboards, user panels, multi-page apps
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Split each route into chunks — ideal with react-router, React.lazy,
            or Vite/webpack
          </li>
        </ul>
        <ProsConsGrid
          pros={["Very scalable", "Great for multi-role apps (admin vs user)"]}
          cons={["Slower on first navigation if not prefetched"]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">D. Media & Asset Lazy Loading</h3>
        <p className="text-gray-700">
          Use case: Long blogs with images, video carousels
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            HTML5 supports <code>loading="lazy"</code> natively for &lt;img&gt;
            and &lt;iframe&gt;
          </li>
        </ul>
        <ProsConsGrid
          pros={[
            "Easy win for performance",
            "Native support in modern browsers",
          ]}
          cons={[
            "May not work in older browsers",
            "Must ensure dimensions to avoid layout shifts",
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          E. requestIdleCallback / Low-Priority Loading
        </h3>
        <p className="text-gray-700">
          Use case: Analytics scripts, support widgets
        </p>
        <pre className="bg-gray-100 text-sm rounded p-2 font-[Consolas,monospace] mt-2">
          {`requestIdleCallback(() => loadAnalytics())`}
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-semibold">When to Use What?</h3>
        <table className="w-full mt-2 text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Scenario</th>
              <th className="p-2 text-left">Best Choice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Large data tables</td>
              <td className="p-2">Scroll-based</td>
            </tr>
            <tr>
              <td className="p-2">Heavy widgets in modals/tabs</td>
              <td className="p-2">Component-level lazy</td>
            </tr>
            <tr>
              <td className="p-2">Multi-role apps or dashboards</td>
              <td className="p-2">Route-level</td>
            </tr>
            <tr>
              <td className="p-2">Article pages with lots of images</td>
              <td className="p-2">Media lazy loading</td>
            </tr>
            <tr>
              <td className="p-2">Analytics, chat widgets</td>
              <td className="p-2">Idle-time loading</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LazyLoadingTypes;
