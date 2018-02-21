export class User {

  SecurityToken: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  PinCode: string;
  MobileNo: number;
  EasyPin: string;
  UserName = 'apiuser@Tablez';
  MemberShipCardNumber: number;
  StoreCode = 'DemoA';
  AssignMembershipCard: string;
  ChannelCode = 'Online';
  ReferralCode: string;
  CountryCode: string;
  ChildName: string;
  ChildDOB: string;
  AnniversaryDate: string;
  EmailId: string;
  EmailAddress: string;
  // Both the passwords are in a single object
  password: {
    pwd: string;
    confirmPwd: string;
  };
  Gender: string;
  terms: boolean;
  secretToken: any;
  BirthDate: string;
  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }

}
