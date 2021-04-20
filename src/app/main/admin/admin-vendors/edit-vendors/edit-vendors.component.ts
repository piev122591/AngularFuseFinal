import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { VendorsEventType, VendorsSampleData } from "../data/products";
import { VendorService } from "../service/vendor.service";

@Component({
  selector: 'app-edit-vendors',
  templateUrl: './edit-vendors.component.html',
  
})
export class EditVendorsComponent {

    company$ = this.route.data.pipe(
        map(
            (value: { company: VendorsSampleData }): VendorsSampleData => {
                return value.company;   
            }
        )
    );

  constructor(
    private vendorService: VendorService,
    private route: ActivatedRoute
  ) {}
  action(event: VendorsEventType): void {
    this.vendorService.submitEdit(event);
 }
}
