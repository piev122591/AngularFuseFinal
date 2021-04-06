import { User } from "../model/login.model";
export const logindata: User[] = [
    {
        UserName: "Pievan",
        Email: "Pievan@gmail.com",
        UserId: "1",
        FirstName: "Pievan",
        MiddleName: "M",
        LastName: "Tocao",
        Company: [
            {
                CompanyId: 1,
                CompanyName: "Burger King",
            },
            {
                CompanyId: 2,
                CompanyName: "Mcdo",
            },
            {
                CompanyId: 3,
                CompanyName: "Wendys",
            },
        ],
        Navigation: [
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
        ],
    },
];
