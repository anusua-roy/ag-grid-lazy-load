/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Overview.tsx
import WhyLazyLoading from "../components/sections/WhyLazyLoading";
import LazyLoadingTypes from "../components/sections/LazyLoadingTypes";
import LiveDemos from "../components/sections/LiveDemos";

const sections = [
  { id: "intro", title: "Introduction" },
  {
    id: "why",
    title: "Why Use Lazy Loading (Pros, Cons & Comparisons)",
    Component: WhyLazyLoading,
  },
  {
    id: "types",
    title: "Types of Lazy Loading – Deep Dive",
    Component: LazyLoadingTypes,
  },
  { id: "alternatives", title: "Alternatives to Lazy Loading" },
  { id: "tables", title: "Lazy Loading in Tables" },
  { id: "react", title: "Lazy Loading in React" },
  { id: "example", title: "Real World Example: This Page" },
  { id: "summary", title: "Summary & Best Practices" },
  {
    id: "demos",
    title: "Live Demos",
    Component: () => <LiveDemos />,
  },
];

export default function Overview() {
  return (
    <div className="flex max-w-7xl mx-auto px-4 py-8">
      <nav className="hidden lg:block w-64 pr-8 sticky top-8 text-sm">
        <ul className="space-y-2 border-l-2 border-gray-200 pl-4">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 space-y-12 text-sm leading-6">
        {sections.map(({ id, title, Component }) => (
          <section key={id} id={id}>
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            {Component ? (
              <Component />
            ) : (
              <p className="text-gray-700 italic">(Content coming soon)</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
