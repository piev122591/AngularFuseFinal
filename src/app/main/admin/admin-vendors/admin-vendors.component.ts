import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { VendorService } from "./service/vendor.service";
@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  providers:[VendorService],
  
})
export class AdminVendorsComponent implements OnInit {
    vendors$ = this.vendorService.getVendors();
  constructor(
      private router:Router,
      private companyChangeEventService: CompanyChangeEventService,
      private vendorService: VendorService
      ) { }


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "vendors"]);
  }

}
