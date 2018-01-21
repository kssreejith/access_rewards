export class User {

    SecurityToken: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    PinCode: string;
    MobileNo: number;
    EasyPin: string;
    UserName: string;
    MemberShipCardNumber: number;
    StoreCode: string;
    AssignMembershipCard: string;
    ChannelCode: string;
    ReferralCode: string;
    CountryCode: string;
    ChildName: string;
    ChildDOB: string;
    AnniversaryDate: string;
    email: string;
    // Both the passwords are in a single object
    password: {
        pwd: string;
        confirmPwd: string;
    };
    Gender: string;
    terms: boolean;

    constructor(values: Object = {}) {
        // Constructor initialization
        Object.assign(this, values);
    }

}
