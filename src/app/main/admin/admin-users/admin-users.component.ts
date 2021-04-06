import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyChangeEventService } from 'app/core/services/company-change-event.service';
import { UserService } from "./service/user.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  providers: [UserService],
})
export class AdminUsersComponent implements OnInit {
    users$ = this.userService.getUsers();
  constructor(
      private router: Router,
      private companyChangeEventService: CompanyChangeEventService,
      private userService : UserService
      ) { }


  ngOnInit() {
  }

  chooseCompany(companyId: number): void {
    this.companyChangeEventService.fire({
      companyId:companyId
  });
  this.router.navigate(["/admin", companyId, "users"]);
  }

}
