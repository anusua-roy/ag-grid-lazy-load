const LazyLoadingInReact = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 text-sm">
        React offers built-in support for component-level lazy loading using{" "}
        <code className="font-[Consolas,monospace]">React.lazy</code>
        and <code className="font-[Consolas,monospace]">Suspense</code>. This
        approach enables you to defer loading of a component until it's actually
        rendered, reducing the initial bundle size and improving load
        performance.
      </p>

      <div>
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <pre className="bg-gray-100 text-sm rounded p-3 font-[Consolas,monospace]">
          {`const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>`}
        </pre>
        <p className="text-gray-700 text-sm mt-2">
          The fallback UI is shown while the lazy component is being loaded.
          This makes the transition feel smooth to the user.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Why Use Lazy Loading in React?
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Reduces the size of the initial JS bundle</li>
          <li>Improves time to interactive (TTI)</li>
          <li>Delays execution of non-critical code</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">When NOT to Use</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>For content that must render immediately (e.g., navbars)</li>
          <li>When fallback content breaks layout or UX expectations</li>
          <li>If the component is tiny and doesn’t benefit from deferring</li>
        </ul>
      </div>
    </div>
  );
};

export default LazyLoadingInReact;
