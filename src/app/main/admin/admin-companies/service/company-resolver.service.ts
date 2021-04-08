import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { CompanySampleData } from "../data/products";
import { CompanyService } from "./company.service";

@Injectable({
    providedIn: "root",
})
export class CompanyResolverService implements Resolve<CompanySampleData> {
    constructor(private service: CompanyService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
    ): Observable<CompanySampleData> {
        return this.service.getCompanyById(route.paramMap.get("id"));
    }
}
