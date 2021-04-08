import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { PaymentService } from "./service/payments.service";

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  providers:[PaymentService],
  
})
export class AdminPaymentsComponent implements OnInit {
    payments$ = this.paymentService.getPayments();
    
  constructor(
      private router: Router,
      private companyChangeEventService: CompanyChangeEventService,
      private paymentService:PaymentService
      ) { }


  ngOnInit() {
  }
  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "payments"]);
  }

}
