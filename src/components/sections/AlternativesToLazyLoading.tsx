const AlternativesToLazyLoading = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-sm">
        While lazy loading is a powerful tool for performance optimization,
        there are other techniques that serve similar goals depending on the use
        case. Let’s look at some of the most effective alternatives:
      </p>

      <div>
        <h3 className="text-lg font-semibold">A. Pagination</h3>
        <p className="text-gray-700 text-sm">
          Splits content into discrete pages. Each page can be navigated
          manually using controls.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
          <li>
            <strong>Pros:</strong> Easy to implement, SEO-friendly, good for
            user control
          </li>
          <li>
            <strong>Cons:</strong> Requires user interaction, jumpy experience
          </li>
        </ul>
        <p className="text-sm text-gray-700 mt-1">
          <strong>Best For:</strong> Blogs, archives, admin reports
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          B. Server-Side Rendering (SSR)
        </h3>
        <p className="text-gray-700 text-sm">
          Content is rendered on the server and sent to the client already
          populated.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
          <li>
            <strong>Pros:</strong> Great for SEO, fast first paint
          </li>
          <li>
            <strong>Cons:</strong> Adds server load, hydration delays
            interactivity
          </li>
        </ul>
        <p className="text-sm text-gray-700 mt-1">
          <strong>Best For:</strong> Marketing pages, e-commerce product details
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">C. Skeleton Screens</h3>
        <p className="text-gray-700 text-sm">
          Placeholder UI shown while data is being fetched.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
          <li>
            <strong>Pros:</strong> Improves perceived performance
          </li>
          <li>
            <strong>Cons:</strong> Adds visual complexity, no real load
            improvement
          </li>
        </ul>
        <p className="text-sm text-gray-700 mt-1">
          <strong>Best For:</strong> Dashboards, user profiles, media-heavy
          content
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Comparison Summary</h3>
        <table className="w-full mt-2 text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Approach</th>
              <th className="p-2 text-left">Best For</th>
              <th className="p-2 text-left">Caveats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Lazy Loading</td>
              <td className="p-2">Feeds, infinite scroll, dashboards</td>
              <td className="p-2">Complexity, SEO</td>
            </tr>
            <tr>
              <td className="p-2">Pagination</td>
              <td className="p-2">Search results, reports</td>
              <td className="p-2">Navigation effort, page jumps</td>
            </tr>
            <tr>
              <td className="p-2">SSR</td>
              <td className="p-2">Landing pages, SEO-critical pages</td>
              <td className="p-2">Server load, hydration delay</td>
            </tr>
            <tr>
              <td className="p-2">Skeleton Screens</td>
              <td className="p-2">Interactive UIs, dashboards</td>
              <td className="p-2">Adds dev complexity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlternativesToLazyLoading;
