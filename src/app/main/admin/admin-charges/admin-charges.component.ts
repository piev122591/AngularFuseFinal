import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { ChargesService } from "./service/charges.service";

@Component({
  selector: 'app-admin-charges',
  templateUrl: './admin-charges.component.html',
  providers: [ChargesService],
})
export class AdminChargesComponent implements OnInit {

    charges$ = this.chargesService.getCharges();
  constructor(
      private router: Router,
      private companyChangeEventService: CompanyChangeEventService,
      private chargesService: ChargesService
      ) {}


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "charges"]);
  }

}
