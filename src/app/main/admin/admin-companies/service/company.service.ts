
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { products } from "../data/products";

@Injectable()
export class CompanyService {
    constructor() {}

    getCompanies(): Observable<any> {
        return of(products);
    }
}
