import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { products } from "../data/products";

@Injectable()
export class VendorService {
     private departmentUrl = 'https://localhost:44328/api/Department';
    constructor( private http: HttpClient,) {}

    getVendors(): Observable<any> {
          return this.http.get<any>(this.departmentUrl).pipe(
              map((result) => {
                console.log(result.data);
          return of(products);
              
        }));
        
    }
}
