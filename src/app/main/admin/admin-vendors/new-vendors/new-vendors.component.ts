import { Component, OnInit } from '@angular/core';
import { VendorService } from "../service/vendor.service";
import { VendorsEventType } from "../data/products";

@Component({
  selector: 'app-new-vendors',
  templateUrl: './new-vendors.component.html',
  providers: [VendorService],
})
export class NewVendorsComponent {

  constructor(private vendorService: VendorService) { }
    action(event: VendorsEventType): void {
    this.vendorService.submitAdd(event);
}

}
