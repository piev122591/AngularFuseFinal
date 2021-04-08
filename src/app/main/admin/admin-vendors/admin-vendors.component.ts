import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.scss']
})
export class AdminVendorsComponent implements OnInit {

  constructor(private router: Router,private companyChangeEventService: CompanyChangeEventService) { }


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "vendors"]);
  }

}
