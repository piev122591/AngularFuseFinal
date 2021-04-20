
export class Vendors  {
    VendorId: number;
    VendorName: string;
    IsWireless: boolean;
    IsWireline: boolean;
    ElectronicData:boolean;
    
}

export class VendorsSampleData extends Vendors{
    Status: boolean;
    PoBox?: string;
    Address?: string;
    State?: string;
    City?: string;
    Zip?: string;   
}

export type VendorsEventType = {
    mode: "new" | "edit";
    action: "save";
    data: {
        vendorName: string;
        status: boolean;
        vendorId?: number;
        isWireless?: boolean;
        isWireline?: boolean;
        electronicData?: boolean;
    };
};


export const vendorsList: VendorsSampleData[] = [
    {
        VendorId: 1,
        VendorName: "ACC Business",
        IsWireless: true,
        IsWireline: true,
        ElectronicData:false,
        Status: true,
    },
    {
        VendorId: 2,
        VendorName: "AFS Technologies",
        IsWireless: false,
        IsWireline: true,
        ElectronicData:true,
        Status: true,
    },
    {
        VendorId: 3,
        VendorName: "AFS Technologies",
        IsWireless: true,
        IsWireline: true,
        ElectronicData:true,
        Status: true,
    },

];