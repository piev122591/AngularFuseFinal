import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { PlanService } from "./service/plan.service";

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  providers:[PlanService],
})
export class AdminPlansComponent implements OnInit {
    plans$ = this.planService.getPlans();

  constructor(
      private router: Router,
      private companyChangeEventService: CompanyChangeEventService,
      private planService : PlanService,
      ) { }
  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "plans"]);
  }



}
