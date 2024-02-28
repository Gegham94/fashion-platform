export interface ISignin {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  country: string;
  city: string;
  zipCode: string;
  currency: string;
  phoneCode: string;
  phoneNumber: string;
  typeOfDocument: string;
  documentNumber: string;
  userName: string;
  gender: string;
  password: string;
  repeatPassword: string;
  referralBonusPromoCode: string;
  optional?: string;
  promotionalCommunications?: boolean;
  bonusesAndOffers?: boolean;
  termsAndConditions?: boolean;
}
