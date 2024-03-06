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
}
export interface IUserAmountInfo {
  title: string;
  amount: string;
  played: string;
  unplayed: string;
  amountValue: number;
  playedValue: number;
  unplayedValue: number;
}
export interface IMessagesAndNotifications {
  id: number;
  isFavorite: boolean;
  title: string;
  text: string;
  date: string;
  type: string;
}
