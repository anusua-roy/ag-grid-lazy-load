// in App.tsx
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import LayoutWrapper from "./components/LayoutWrapper";
import { demoPages } from "./routes/demoPages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      {demoPages.map(({ path, component: Component, githubPath, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <LayoutWrapper title={title} githubPath={githubPath}>
              <Component />
            </LayoutWrapper>
          }
        />
      ))}
    </Routes>
  );
}
