import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { WirelessService } from "./service/wireless.service";
@Component({
  selector: 'app-admin-wireless',
  templateUrl: './admin-wireless.component.html',
  providers:[WirelessService]
})
export class AdminWirelessComponent implements OnInit {
    wireless$ = this.wirelessService.getWireless();
   constructor(
    private router: Router,
    private companyChangeEventService: CompanyChangeEventService,
    private wirelessService: WirelessService,
    ) { }


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "wireless"]);
  }

}
