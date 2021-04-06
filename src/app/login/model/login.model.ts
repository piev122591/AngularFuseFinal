import { FuseNavigation } from "@fuse/types/fuse-navigation";
export class LoginData {
    email: string;
    password: string;
}

export class LoginResult {
    data?: User;
    response?: boolean;
    responseText?: string;
}

export class User {
    UserName: string;
    Email: string;
    UserId: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Company: Company[];
    Navigation: FuseNavigation[];
}

export class Company {
    CompanyId: number;
    CompanyName: string;
}
