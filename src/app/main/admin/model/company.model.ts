import { MatTableDataSource } from "@angular/material/table";
import { CompanySampleData } from "../admin-companies/data/products";

export type FilterSearchFunction = (event: Event) => void;
export class CompanyData {
    displayedColumns: string[];
    companyList: CompanySampleData[] | MatTableDataSource<CompanySampleData>;
    filterFunction: FilterSearchFunction;
}
