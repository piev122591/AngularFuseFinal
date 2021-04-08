import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { EDIService } from "./service/edi.service";

@Component({
  selector: 'app-admin-edi',
  templateUrl: './admin-edi.component.html',
  providers: [EDIService],
})
export class AdminEdiComponent implements OnInit {
    edi$ = this.ediService.getEDI();

  constructor(
      private router: Router,
      private companyChangeEventService: CompanyChangeEventService,
      private ediService: EDIService
      ) { }


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "edi"]);
  }

}
