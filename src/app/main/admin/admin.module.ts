import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingRoutes,
    MatButtonModule,
    MatIconModule,

  ],
  declarations: [AdminComponent,AdminDashboardComponent]
})
export class AdminModule { }
