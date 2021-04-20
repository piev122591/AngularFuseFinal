import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { combineLatest, Observable, of } from "rxjs";
import {
    VendorsEventType,
    vendorsList,
    VendorsSampleData,
} from "../data/products";

import { VendorsData, FilterSearchFunction } from "../../model/vendors.model";
import { MatTableDataSource } from "@angular/material/table";
import { switchMap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})

export class VendorService {
   
    constructor( private router: Router,) {}

    getVendorsData(): Observable<VendorsData> {
        return combineLatest([
            this.getCompanies(),
            this.displayedColumns(),
        ]).pipe(
            switchMap(
                ([vendorsData, displayedColumns]): Observable<VendorsData> =>
                    this.getFilterFunction(vendorsData, displayedColumns)
            )
        );
    }

    private getFilterFunction(
        vendorsData: MatTableDataSource<VendorsSampleData>,
        displayedColumns: string[]
    ): Observable<VendorsData> {
        return of({
            vendorsList: vendorsData,
            displayedColumns,
            filterFunction: this.filterFunction(vendorsData),
        });
    }


    private filterFunction(
        vendorsData: MatTableDataSource<VendorsSampleData>
    ): FilterSearchFunction {
        return (event: Event): void => {
            vendorsData.filterPredicate = (data, filter: string): boolean => {
                return (
                    data.VendorId.toString().includes(filter) ||
                    data.VendorName.toLowerCase().includes(
                        filter.toLowerCase()
                    )
                );
            };
            const filterValue = (event.target as HTMLInputElement).value;
            vendorsData.filter = filterValue.trim().toLowerCase();
        };
    }

    private displayedColumns(): Observable<string[]> {
        return of(["VendorId", "VendorName","IsWireless","IsWireline","ElectronicData", "Status", "Action"]);
    }
    private getCompanies(): Observable<MatTableDataSource<VendorsSampleData>> {
        return of(new MatTableDataSource(vendorsList));
    }


    submitAdd(event: VendorsEventType): void {
        vendorsList.push({
            VendorId: vendorsList.length + 1,
            VendorName: event.data.vendorName,
            IsWireless: event.data.isWireless,
            IsWireline: event.data.isWireline,
            ElectronicData: event.data.electronicData,
            Status: event.data.status,
        });
        this.router.navigate(["admin/vendors"]);

        console.log(vendorsList);
    }



    submitEdit(event: VendorsEventType): void {
        const currentVendor = vendorsList.find(
            (com): boolean => com.VendorId === event.data.vendorId
        );
        currentVendor.VendorName = event.data.vendorName;
        currentVendor.Status = event.data.status;

        this.router.navigate(["admin/vendors"]);
    }

}


