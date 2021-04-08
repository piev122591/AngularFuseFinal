import { Injectable } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import {
    CompanyEventType,
    companyList,
    CompanySampleData,
} from "../data/products";
import { CompanyData, FilterSearchFunction } from "../../model/company.model";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

@Injectable()
export class CompanyService {
    constructor(private router: Router) {}

    getCompanyData(): Observable<CompanyData> {
        return combineLatest([
            this.getCompanies(),
            this.displayedColumns(),
        ]).pipe(
            switchMap(
                ([companyData, displayedColumns]): Observable<CompanyData> =>
                    this.getFilterFunction(companyData, displayedColumns)
            )
        );
    }
    submitAdd(event: CompanyEventType): void {
        companyList.push({
            CompanyId: companyList.length + 1,
            CompanyName: event.data.companyName,
            Status: event.data.status,
        });
        this.router.navigate(["admin/companies"]);
    }

    private getFilterFunction(
        companyData: MatTableDataSource<CompanySampleData>,
        displayedColumns: string[]
    ): Observable<CompanyData> {
        return of({
            companyList: companyData,
            displayedColumns,
            filterFunction: this.filterFunction(companyData),
        });
    }
    private filterFunction(
        companyData: MatTableDataSource<CompanySampleData>
    ): FilterSearchFunction {
        return (event: Event): void => {
            companyData.filterPredicate = (data, filter: string): boolean => {
                return (
                    data.CompanyId.toString().includes(filter) ||
                    data.CompanyName.toLowerCase().includes(
                        filter.toLowerCase()
                    )
                );
            };
            const filterValue = (event.target as HTMLInputElement).value;
            companyData.filter = filterValue.trim().toLowerCase();
        };
    }
    private displayedColumns(): Observable<string[]> {
        return of(["CompanyId", "CompanyName", "Status", "Action"]);
    }
    private getCompanies(): Observable<MatTableDataSource<CompanySampleData>> {
        return of(new MatTableDataSource(companyList));
    }
}
