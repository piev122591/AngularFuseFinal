import { FuseNavigation } from "@fuse/types";

export const adminNav: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "vendors",
                title: "Vendors",
                type: "item",
                icon: "business",
                url: "/vendors",
            },
           
        ],
    },
];

export const company1: FuseNavigation[] = [
    {
        id: "global",
        title: "Global Management",
        type: "group",
        children: [
            {
                id: "assets",
                title: "Assets",
                type: "item",
                icon: "dashboard",
                url: "admin/assets",
            }, 
            {
                id: "vendors",
                title: "Vendors",
                type: "item",
                icon: "business",
                url: "admin/vendors",
            },
            {
                id: "payments",
                title: "Payments",
                type: "item",
                icon: "business",
                url: "admin/payments",
            },
            {
                id: "services",
                title: "Services",
                type: "item",
                icon: "business",
                url: "admin/services",
            },
            {
                id: "users",
                title: "Users",
                type: "item",
                icon: "business",
                url: "admin/users",
            },
            {
                id: "wireless",
                title: "Wireless",
                type: "item",
                icon: "business",
                url: "admin/wireless",
            },
            {
                id: "plans",
                title: "Plans",
                type: "item",
                icon: "business",
                url: "admin/plans",
            },
            {
                id: "charges",
                title: "Charges",
                type: "item",
                icon: "business",
                url: "admin/charges",
            },
            {
                id: "companies",
                title: "Companies",
                type: "item",
                icon: "business",
                url: "admin/companies",
            },

            {
                id: "edi",
                title: "EDI",
                type: "item",
                icon: "business",
                url: "admin/edi",
            },



            
        ],
    },
];
export const company2: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard Dos",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "dashboard",
            },
        ],
    },
];
export const company3: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard Tres",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "dashboard",
            },
        ],
    },
];
