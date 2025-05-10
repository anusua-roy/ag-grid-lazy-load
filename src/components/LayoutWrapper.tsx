import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiGithub } from "react-icons/fi";

interface LayoutWrapperProps {
  title: string;
  githubPath: string;
  children: ReactNode;
}

export default function LayoutWrapper({
  title,
  githubPath,
  children,
}: LayoutWrapperProps) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top bar */}
      <div className="flex justify-between items-center text-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        <a
          href={`https://github.com/anusua-roy/ag-grid-lazy-load/blob/main/src/components/${githubPath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          <FiGithub /> View on GitHub
        </a>
      </div>

      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      {children}
    </div>
  );
}
