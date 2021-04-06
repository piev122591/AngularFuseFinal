import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { ServiceService } from "./service/service.service";
@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  providers: [ServiceService],
})
export class AdminServicesComponent implements OnInit {
    services$ = this.serviceService.getService();
  constructor(
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService,
        private serviceService: ServiceService
    ) { }


  ngOnInit() {}
  
  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "services"]);
  }

}
