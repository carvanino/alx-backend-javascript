import { RowID, RowElement } from "./interface";


// Type declaration
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;

