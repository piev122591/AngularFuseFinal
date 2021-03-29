import { Injectable } from "@angular/core";
import { FuseNavigation } from "@fuse/types/fuse-navigation";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class NavigationService {
    constructor() {}

    defaultNav(): Observable<FuseNavigation[]> {
        return of([
            {
                id: "applications",
                title: "Applications",
                translate: "NAV.APPLICATIONS",
                type: "group",
                children: [
                    {
                        id: "sample",
                        title: "Sample",
                        translate: "NAV.SAMPLE.TITLE",
                        type: "item",
                        icon: "email",
                        url: "/sample",
                        badge: {
                            title: "25",
                            translate: "NAV.SAMPLE.BADGE",
                            bg: "#F44336",
                            fg: "#FFFFFF",
                        },
                    },
                ],
            },
        ]);
    }
}
