/* eslint-disable @typescript-eslint/no-unused-vars */
import LazyAgGrid from "./components/LazyAgGrid";
import LazyWideGrid from "./components/LazyWideGrid";

function App() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        AG Grid Lazy Loading (Rows)
      </h1>
      {/* <LazyAgGrid /> */}
      <LazyWideGrid />
    </main>
  );
}

export default App;
