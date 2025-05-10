import LazyAgGrid from "../components/LazyAgGrid";
import LazyWideGrid from "../components/LazyWideGrid";

export const demoPages = [
  {
    path: "/vertical",
    title: "Vertical Lazy Load Grid",
    githubPath: "LazyAgGrid.tsx",
    component: LazyAgGrid,
  },
  {
    path: "/horizontal",
    title: "Horizontal Lazy Load Grid",
    githubPath: "LazyWideGrid.tsx",
    component: LazyWideGrid,
  },
];
