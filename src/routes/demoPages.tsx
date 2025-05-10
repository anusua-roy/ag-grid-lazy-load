import LazyAgGrid from "../components/LazyAgGrid";
import LazyWideGrid from "../components/LazyWideGrid";

export const demoPages = [
  {
    path: "/vertical",
    title: "Vertical Lazy Load Grid",
    githubPath: "LazyAgGrid.tsx",
    component: LazyAgGrid,
    implemented: true,
  },
  {
    path: "/horizontal",
    title: "Horizontal Lazy Load Grid",
    githubPath: "LazyWideGrid.tsx",
    component: LazyWideGrid,
    implemented: true,
  },
  {
    path: "/hybrid",
    title: "Hybrid Lazy Load Grid (Vertical + Horizontal)",
    implemented: false,
  },
  {
    path: "/pagination",
    title: "Server Pagination with Lazy Chunking",
    implemented: false,
  },
  {
    path: "/dynamic-columns",
    title: "Dynamic Columns from API (Column Metadata)",
    implemented: false,
  },
  {
    path: "/metrics",
    title: "UI Performance Metrics (Load Time, Scroll FPS)",
    implemented: false,
  },
];
