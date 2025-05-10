import type { ColDef } from "ag-grid-community";

export function generateColumns(start: number, count: number): ColDef[] {
  return Array.from({ length: count }, (_, i) => {
    const colIndex = start + i;
    return {
      field: `col_${colIndex}`,
      headerName: `Col ${colIndex}`,
      width: 120,
    };
  });
}
