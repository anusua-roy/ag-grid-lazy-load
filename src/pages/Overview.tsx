import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-sm text-gray-800">
      <h1 className="text-2xl font-bold text-gray-900">
        🚀 Lazy Loading Grids
      </h1>
      <p>
        This demo app showcases vertical and horizontal lazy loading using AG
        Grid v33+ with React & TypeScript. It's designed to improve performance
        by deferring rendering of rows and columns until required.
      </p>

      <h2 className="text-lg font-semibold">📚 Demos</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link
            to="/vertical"
            className="text-blue-600 underline hover:opacity-80"
          >
            Vertical Lazy Load Grid
          </Link>
        </li>
        <li>
          <Link
            to="/horizontal"
            className="text-blue-600 underline hover:opacity-80"
          >
            Horizontal Lazy Load Grid
          </Link>
        </li>
      </ul>

      <p className="text-sm text-gray-600">
        💡 This layout is also designed to serve as a personal
        learning/refresher space before interviews.
      </p>
    </div>
  );
}
