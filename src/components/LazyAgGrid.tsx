import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridReadyEvent, IGetRowsParams } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { generateRow, type RowData } from "../data/rowGenerator";

import { ModuleRegistry } from "ag-grid-community";
import { InfiniteRowModelModule, ValidationModule } from "ag-grid-community";

ModuleRegistry.registerModules([InfiniteRowModelModule, ValidationModule]);

const TOTAL_ROWS = 100_000;
const PAGE_SIZE = 100;

export default function LazyAgGrid() {
  const [status, setStatus] = useState<string>("Waiting for grid...");

  const columnDefs = useMemo<ColDef<RowData>[]>(
    () => [
      { field: "id", headerName: "ID", width: 80 },
      { field: "name", headerName: "Name", flex: 1 },
      { field: "email", headerName: "Email", flex: 1 },
      { field: "country", headerName: "Country", flex: 1 },
      { field: "phone", headerName: "Phone", flex: 1 },
    ],
    []
  );

  const datasource = {
    rowCount: undefined,
    getRows: (params: IGetRowsParams) => {
      setStatus(`Loading rows ${params.startRow + 1} to ${params.endRow}`);
      setTimeout(() => {
        const rows: RowData[] = [];
        for (
          let i = params.startRow;
          i < Math.min(params.endRow, TOTAL_ROWS);
          i++
        ) {
          rows.push(generateRow(i + 1));
        }

        const lastRow =
          rows.length < PAGE_SIZE ? params.startRow + rows.length : undefined;

        params.successCallback(rows, lastRow);
        setStatus(`Loaded rows ${params.startRow + 1} to ${params.endRow}`);
      }, 500);
    },
  };

  const onGridReady = (params: GridReadyEvent) => {
    params.api.setGridOption("datasource", datasource);
    setStatus("Grid is ready. Start scrolling to load rows.");
  };

  return (
    <div className="w-full">
      {/* Status bar */}
      <div className="sticky top-0 z-10 bg-white border border-gray-300 p-2 font-mono text-sm shadow-sm">
        {status}
      </div>

      {/* Grid */}
      <div className="ag-theme-alpine h-[80vh] w-full">
        <AgGridReact<RowData>
          columnDefs={columnDefs}
          rowModelType="infinite"
          cacheBlockSize={PAGE_SIZE}
          maxBlocksInCache={10}
          infiniteInitialRowCount={1000}
          rowBuffer={0}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}
