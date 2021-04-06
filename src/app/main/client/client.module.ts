import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { ClientRoutingRoutes } from "./client-routing.routing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingRoutes,
        MatIconModule,
        MatButtonModule,
    ],
    declarations: [ClientComponent],
    exports: [RouterModule],
})
export class ClientModule {}
