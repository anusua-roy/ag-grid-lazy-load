const WhyLazyLoading = () => {
  const ProsConsGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border rounded-md shadow-sm overflow-hidden">
      <div className="bg-green-50 px-4 py-3">
        <p className="font-medium text-green-800 mb-1">Pros of Lazy Loading</p>
        <ul className="list-disc list-inside text-green-900">
          <li>Faster initial page load</li>
          <li>Less memory usage</li>
          <li>Avoids rendering offscreen/unused content</li>
          <li>Reduces network and CPU load</li>
        </ul>
      </div>
      <div className="bg-red-50 px-4 py-3 border-l sm:border-l-0 sm:border-t border-red-100">
        <p className="font-medium text-red-800 mb-1">Cons of Lazy Loading</p>
        <ul className="list-disc list-inside text-red-900">
          <li>Complex implementation (scroll detection, loading state)</li>
          <li>SEO-unfriendly (especially for content)</li>
          <li>Risk of layout shift or poor fallback UX</li>
          <li>Debugging becomes harder with dynamic code paths</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <ProsConsGrid />

      <div>
        <h3 className="text-lg font-semibold">
          Comparison: Pagination vs Lazy Loading
        </h3>
        <table className="w-full mt-2 text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Feature</th>
              <th className="p-2 text-left">Pagination</th>
              <th className="p-2 text-left">Lazy Loading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Control</td>
              <td className="p-2">Explicit (pages, limits)</td>
              <td className="p-2">Implicit (scroll-based)</td>
            </tr>
            <tr>
              <td className="p-2">UX</td>
              <td className="p-2">Jumpy but clear</td>
              <td className="p-2">Seamless but unbounded</td>
            </tr>
            <tr>
              <td className="p-2">Implementation</td>
              <td className="p-2">Simple API contracts</td>
              <td className="p-2">Needs scroll detection, caching</td>
            </tr>
            <tr>
              <td className="p-2">SEO</td>
              <td className="p-2">Better (discrete pages)</td>
              <td className="p-2">Poor unless SSR'd</td>
            </tr>
            <tr>
              <td className="p-2">Great For</td>
              <td className="p-2">Blogs, admin reports</td>
              <td className="p-2">Social feeds, messaging UIs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-semibold">When to Use Lazy Loading?</h3>
        <table className="w-full mt-2 text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Scenario</th>
              <th className="p-2 text-left">Lazy Load?</th>
              <th className="p-2 text-left">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">A long table of financial transactions</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Avoid DOM overload</td>
            </tr>
            <tr>
              <td className="p-2">Charts inside tabs</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Don’t render until tab is visible</td>
            </tr>
            <tr>
              <td className="p-2">Contact form</td>
              <td className="p-2">No</td>
              <td className="p-2">Needs to be fast and interactive</td>
            </tr>
            <tr>
              <td className="p-2">Blog post content with inline images</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Use IntersectionObserver</td>
            </tr>
            <tr>
              <td className="p-2">Static navbar or footer</td>
              <td className="p-2">No</td>
              <td className="p-2">Always needed immediately</td>
            </tr>
            <tr>
              <td className="p-2">Admin-only features</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Load conditionally per user role</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhyLazyLoading;
