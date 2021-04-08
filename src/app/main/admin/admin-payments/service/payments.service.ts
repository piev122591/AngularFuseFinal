import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { products } from "../data/products";

@Injectable()
export class PaymentService {
    constructor() {}

    getPayments(): Observable<any> {
        return of(products);
    }
}
