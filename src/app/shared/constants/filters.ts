export type TYPE_FILTER = {
  id: number;
  name: string;
  key: string;
  short?: string;
};
export const STATUS: TYPE_FILTER[] = [
  { id: 1, name: 'Pending', key: 'status' },
  { id: 2, name: 'Paid', key: 'status' },
  { id: 3, name: 'Faild', key: 'status' },
];
export const METHOD: TYPE_FILTER[] = [
  { id: 1, name: 'Visa', key: 'paymentMethod' },
  { id: 2, name: 'Master', key: 'paymentMethod' },
  { id: 3, name: 'Skrill', key: 'paymentMethod' },
];
export const CURRENCY: TYPE_FILTER[] = [
  { id: 1, name: 'All', key: 'amount' },
  { id: 2, name: 'USD', key: 'amount' },
  { id: 3, name: 'AMD', key: 'amount' },
  { id: 4, name: 'RUB', key: 'amount' },
  { id: 5, name: 'EUR', key: 'amount' },
];
export const BET_TYPE: TYPE_FILTER[] = [
  { id: 1, name: 'Express', key: 'betType' },
  { id: 2, name: 'Express', key: 'betType' },
  { id: 3, name: 'Express', key: 'betType' },
];
export const STATE: TYPE_FILTER[] = [
  { id: 1, name: 'Active', key: 'state' },
  { id: 2, name: 'Used', key: 'state' },
  { id: 3, name: 'Expired', key: 'state' },
  { id: 4, name: 'Canceled', key: 'state' },
];
export const TYPE: TYPE_FILTER[] = [
  { id: 1, name: 'Type 1', key: 'type' },
  { id: 2, name: 'Type 2', key: 'type' },
  { id: 3, name: 'Type 3', key: 'type' },
];
export const GENDER: TYPE_FILTER[] = [
  {
    id: 1,
    name: 'Male',
    key: 'gender',
  },
  {
    id: 2,
    name: 'Female',
    key: 'gender',
  },
];
export const COUNTRY: TYPE_FILTER[] = [
  {
    id: 1,
    name: 'Armenia',
    key: 'country',
    short: 'am',
  },
  {
    id: 2,
    name: 'Argentina',
    key: 'country',
    short: 'ag',
  },
  {
    id: 3,
    name: 'Brazil',
    key: 'country',
    short: 'br',
  },
  { id: 4, name: 'China', key: 'country', short: 'cn' },
  {
    id: 5,
    name: 'Canada',
    key: 'country',
    short: 'ca',
  },
  {
    id: 6,
    name: 'Spain',
    key: 'country',
    short: 'es',
  },
  {
    id: 7,
    name: 'Georgia',
    key: 'country',
    short: 'ge',
  },
  {
    id: 8,
    name: 'Italy',
    key: 'country',
    short: 'it',
  },
  {
    id: 9,
    name: 'Germany',
    key: 'country',
    short: 'gm',
  },
  {
    id: 10,
    name: 'Columbia',
    key: 'country',
    short: 'co',
  },
  {
    id: 11,
    name: 'Russia',
    key: 'country',
    short: 'ru',
  },
];
export const CITY: TYPE_FILTER[] = [
  {
    id: 1,
    name: 'City 1',
    key: 'city',
  },
  {
    id: 2,
    name: 'City 2',
    key: 'city',
  },
  {
    id: 3,
    name: 'City 3',
    key: 'city',
  },
  {
    id: 4,
    name: 'City 4',
    key: 'city',
  },
  {
    id: 5,
    name: 'City 5',
    key: 'city',
  },
  {
    id: 6,
    name: 'City 6',
    key: 'city',
  },
];
export const PHONE_CODE: TYPE_FILTER[] = [
  {
    id: 1,
    name: '+70965',
    key: 'phoneCode',
  },
  {
    id: 2,
    name: '+95588',
    key: 'phoneCode',
  },
  {
    id: 3,
    name: '+374',
    key: 'phoneCode',
  },
  {
    id: 4,
    name: '+1074',
    key: 'phoneCode',
  },
  {
    id: 5,
    name: '+11114',
    key: 'phoneCode',
  },
];
export const TYPE_OF_DOCUMENT: TYPE_FILTER[] = [
  {
    id: 1,
    name: 'Doc. 1',
    key: 'phoneCode',
  },
  {
    id: 2,
    name: 'Doc. 2',
    key: 'typeOfDocument',
  },
  {
    id: 3,
    name: 'Doc. 3',
    key: 'typeOfDocument',
  },
  {
    id: 4,
    name: 'Doc. 4',
    key: 'typeOfDocument',
  },
  {
    id: 5,
    name: 'Doc. 5',
    key: 'typeOfDocument',
  },
  {
    id: 6,
    name: 'Doc. 6',
    key: 'typeOfDocument',
  },
];
