import { MatTableDataSource } from "@angular/material/table";
import { VendorsSampleData } from "../admin-vendors/data/products";

export type FilterSearchFunction = (event: Event) => void;
export class VendorsData {
    displayedColumns: string[];
    vendorsList: VendorsSampleData[] | MatTableDataSource<VendorsSampleData>;
    filterFunction: FilterSearchFunction;
}
