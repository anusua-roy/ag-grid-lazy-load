import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

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
          className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          {/* GitHub icon in white circle */}
          <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <FaGithub className="text-white w-full h-full" />
          </span>
          <span className="font-semibold text-sm">View on GitHub</span>
        </a>
      </div>

      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      {children}
    </div>
  );
}
