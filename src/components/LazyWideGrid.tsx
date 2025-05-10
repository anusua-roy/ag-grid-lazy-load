import { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { generateColumns } from "../data/columnGenerator";
import { generateWideRow } from "../data/rowGenerator";

import {
  ModuleRegistry,
  ClientSideRowModelModule,
  ValidationModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

const TOTAL_ROWS = 100;
const TOTAL_COLS = 500;
const COLUMN_BATCH_SIZE = 10;

export default function LazyWideGrid() {
  const gridRef = useRef<AgGridReact>(null);
  const [visibleColCount, setVisibleColCount] = useState(COLUMN_BATCH_SIZE);

  // 👇 Attach horizontal scroll listener after the grid is rendered
  useEffect(() => {
    const interval = setInterval(() => {
      const scrollContainer = document.querySelector(
        ".ag-center-cols-viewport"
      ) as HTMLElement;

      if (!scrollContainer) return;

      const handleScroll = () => {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
        const isNearEnd = scrollLeft + clientWidth >= scrollWidth - 50;

        if (isNearEnd && visibleColCount < TOTAL_COLS) {
          setVisibleColCount((prev) =>
            Math.min(prev + COLUMN_BATCH_SIZE, TOTAL_COLS)
          );
        }
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      clearInterval(interval); // stop polling once attached

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }, 100);

    return () => clearInterval(interval);
  }, [visibleColCount]);

  const columnDefs = useMemo<ColDef[]>(() => {
    return [
      { field: "id", headerName: "ID", width: 80, pinned: "left" },
      ...generateColumns(0, visibleColCount),
    ];
  }, [visibleColCount]);

  const rowData = useMemo(() => {
    return Array.from({ length: TOTAL_ROWS }, (_, i) =>
      generateWideRow(i + 1, TOTAL_COLS)
    );
  }, []);

  return (
    <div className="w-full">
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-mono text-gray-700">
          Showing {visibleColCount} of {TOTAL_COLS} columns
        </span>
      </div>

      <div className="ag-theme-alpine w-full h-[80vh]">
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={rowData}
          domLayout="normal"
          modules={[ClientSideRowModelModule, ValidationModule]}
        />
      </div>
    </div>
  );
}
