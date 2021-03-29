import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.scss']
})
export class AdminPlansComponent implements OnInit {

  constructor(private router: Router,private companyChangeEventService: CompanyChangeEventService) { }
  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "plans"]);
  }



}
