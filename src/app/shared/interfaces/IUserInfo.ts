export interface IUserInfo {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  location: string;
  loyalPoints: string;
  image: string | null;
  verified: boolean;
  api_token: string;
}
export interface IMessagesAndNotifications {
  id: number;
  isFavorite: boolean;
  title: string;
  text: string;
  date: string;
  type: string;
}

export interface ICountry {
  isSelected: boolean;
  value: string;
  short: string;
}
export interface ICity {
  isSelected: boolean;
  value: string;
}
export interface ICurrency {
  isSelected: boolean;
  value: string;
}
export interface IPhoneCode {
  isSelected: boolean;
  value: string;
}
export interface ITypeOfDocument {
  isSelected: boolean;
  value: string;
}
