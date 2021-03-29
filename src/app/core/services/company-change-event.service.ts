import { Injectable } from "@angular/core";
import { Broadcast } from "./broadcast.service";

@Injectable({
    providedIn: "root",
})
export class CompanyChangeEventService extends Broadcast {
    readonly eventName = "themeChange";
}
