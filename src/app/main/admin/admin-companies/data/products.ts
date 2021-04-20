import { Company } from "../../../../login/model/login.model";
export class CompanySampleData extends Company {
    Status: boolean;
}

export type CompanyEventType = {
    mode: "new" | "edit";
    action: "save";
    data: {
        companyName: string;
        status: boolean;
        companyId?: number;
    };
};
export const companyList: CompanySampleData[] = [
    {
        CompanyId: 1,
        CompanyName: "Burger King",
        Status: true,
    },
    {
        CompanyId: 2,
        CompanyName: "Mcdo",
        Status: true,
    },
    {
        CompanyId: 3,
        CompanyName: "Wendys",
        Status: true,
    },
];
