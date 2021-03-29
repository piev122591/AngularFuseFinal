import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingRoutes } from './client-routing.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingRoutes, 
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
