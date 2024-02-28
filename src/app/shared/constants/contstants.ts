export type TYPE_MENU_BALANCE = { id: number; name: string; index: number; isActive: boolean };
export const MENU_BALANCE: TYPE_MENU_BALANCE[] = [
  { id: 0, name: 'Deposit', index: 0, isActive: true },
  { id: 1, name: 'Withdraw', index: 1, isActive: false },
  { id: 2, name: 'Withdraw Status', index: 2, isActive: false },
  { id: 3, name: 'Balance History', index: 3, isActive: false },
];

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
  }
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

export type TYPE_WITHDRAW_STATUS_TABLE_DATA = {
  dateAndTime: string;
  id: string;
  paymentMethod: string;
  amount: string;
  status: string;
};
export type TYPE_BALANCE_HISTORY_TABLE_DATA = {
  dateAndTime: string;
  type: string;
  id: string;
  paymentMethod: string;
  balance: string;
  amountStatus: string;
};
export type TYPE_HISTORY_SPORTBETTING_TABLE_DATA = {
  dateAndTime: string;
  betId: string;
  betType: string;
  betAmount: string;
  possibleWin: string;
  winAmount: string;
  odd: string;
  status: string;
};
export type TYPE_HISTORY_CASINO_TABLE_DATA = {
  dateAndTime: string;
  gameType: string;
  name: string;
  spinAmount: string;
  winAmount: string;
  status: string;
};
export type TYPE_ACTIVE_BONUSES_TABLE_DATA = {
  dateAndTime: string;
  bonusId: string;
  bonusName: string;
  amount: string;
  currency: string;
  turnoverAmount: string;
  state: string;
};

export type TYPE_TABLE_HEADER = { name: string };

export const WITHDRAW_STATUS_TABLE_HEADER: TYPE_TABLE_HEADER[] = [
  { name: 'Date and time' },
  { name: 'ID' },
  { name: 'Payment Method' },
  { name: 'Amount' },
  { name: 'Status' },
];
export const BALANCE_HISTORY_TABLE_HEADER: TYPE_TABLE_HEADER[] = [
  { name: 'Date and time' },
  { name: 'Type' },
  { name: 'ID' },
  { name: 'Payment Method' },
  { name: 'Balance' },
  { name: 'Amount/Status' },
];
export const HISTORY_SPORTBETTING_TABLE_HEADER: TYPE_TABLE_HEADER[] = [
  { name: 'Date and time' },
  { name: 'Bet ID' },
  { name: 'Bet type' },
  { name: 'Bet Amount' },
  { name: 'Possible win' },
  { name: 'Win Amount' },
  { name: 'Odd' },
  { name: 'Status' },
];
export const HISTORY_CASINO_TABLE_HEADER: TYPE_TABLE_HEADER[] = [
  { name: 'Date and time' },
  { name: 'Game Type' },
  { name: 'Name' },
  { name: 'Spin Amount' },
  { name: 'Win Amount' },
  { name: 'Status' },
];
export const ACTIVE_BONUSES_TABLE_HEADER: TYPE_TABLE_HEADER[] = [
  { name: 'Date and time' },
  { name: 'Bonus ID' },
  { name: 'Bonus Name' },
  { name: 'Amount' },
  { name: 'Currency' },
  { name: 'Turnover Amount' },
  { name: 'State' },
];

export const WITHDRAW_STATUS_TABLE_DATA: TYPE_WITHDRAW_STATUS_TABLE_DATA[] = [
  {
    dateAndTime: '10/12/2023',
    id: '12345678',
    paymentMethod: 'Master',
    amount: '2050 USD',
    status: 'Pending',
  },
  {
    dateAndTime: '10/12/2023',
    id: '12345678',
    paymentMethod: 'Visa',
    amount: '1800 USD',
    status: 'Paid',
  },
  {
    dateAndTime: '12/12/2023',
    id: '12345678',
    paymentMethod: 'Master',
    amount: '400 EUR',
    status: 'Faild',
  },
  {
    dateAndTime: '10/12/2023',
    id: '12345678',
    paymentMethod: 'Visa',
    amount: '140000 AMD',
    status: 'Paid',
  },
  {
    dateAndTime: '12/12/2023',
    id: '12345678',
    paymentMethod: 'Visa',
    amount: '1400 USD',
    status: 'Paid',
  },
  {
    dateAndTime: '12/12/2023',
    id: '12345678',
    paymentMethod: 'Visa',
    amount: '1500 USD',
    status: 'Faild',
  },
  {
    dateAndTime: '12/12/2023',
    id: '12345678',
    paymentMethod: 'Master',
    amount: '800 USD',
    status: 'Pending',
  },
  {
    dateAndTime: '10/12/2023',
    id: '12345678',
    paymentMethod: 'Visa',
    amount: '1200 USD',
    status: 'Faild',
  },
];

export const BALANCE_HISTORY_TABLE_DATA: TYPE_BALANCE_HISTORY_TABLE_DATA[] = [
  {
    dateAndTime: '12/12/2023',
    type: 'Deposit',
    id: '12345678',
    paymentMethod: 'Master',
    balance: 'Pending',
    amountStatus: '2850 USD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Withdraw',
    id: '12345678',
    paymentMethod: 'Master',
    balance: 'Pending',
    amountStatus: '2850 AMD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Deposit',
    id: '12345678',
    paymentMethod: 'Visa',
    balance: 'Pending',
    amountStatus: '2850 EUR',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Withdraw',
    id: '12345678',
    paymentMethod: 'Visa',
    balance: 'Pending',
    amountStatus: '2850 USD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Deposit',
    id: '12345678',
    paymentMethod: 'Visa',
    balance: 'Pending',
    amountStatus: '2050 AMD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Withdraw',
    id: '12345678',
    paymentMethod: 'Master',
    balance: 'Pending',
    amountStatus: '2850 USD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Withdraw',
    id: '12345678',
    paymentMethod: 'Visa',
    balance: 'Pending',
    amountStatus: '2850 AMD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Deposit',
    id: '12345678',
    paymentMethod: 'Master',
    balance: 'Pending',
    amountStatus: '2850 USD',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Withdraw',
    id: '12345678',
    paymentMethod: 'Visa',
    balance: 'Pending',
    amountStatus: '2850 EUR',
  },
  {
    dateAndTime: '12/12/2023',
    type: 'Deposit',
    id: '12345678',
    paymentMethod: 'Master',
    balance: 'Pending',
    amountStatus: '2850 EUR',
  },
];

export const HISTORY_SPORTBETTING_TABLE_DATA: TYPE_HISTORY_SPORTBETTING_TABLE_DATA[] =
  [
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '3,36',
      status: 'Win',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,36',
      status: 'Pending',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '4,06',
      status: 'Lose',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1000 USD',
      winAmount: '1400 USD',
      odd: '2,36',
      status: 'Cash-Out',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,36',
      status: 'Returned',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '1,36',
      status: 'Win',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,5',
      status: 'Pending',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,06',
      status: 'Lose',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1400 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,36',
      status: 'Lose',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Returned',
    },
    {
      dateAndTime: '12/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '2100 USD',
      possibleWin: '1200 USD',
      winAmount: '1100 USD',
      odd: '6,01',
      status: 'Win',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    {
      dateAndTime: '10/12/2023',
      betId: '12345678',
      betType: 'Express',
      betAmount: '1100 USD',
      possibleWin: '1200 USD',
      winAmount: '1400 USD',
      odd: '2,26',
      status: 'Pending',
    },
    
  ];
export const HISTORY_CASINO_TABLE_DATA: TYPE_HISTORY_CASINO_TABLE_DATA[] = [
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '1400 USD',
    status: 'Win',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '1400 USD',
    status: 'Win',
  },
  {
    dateAndTime: '10/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '-',
    status: 'Lose',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '1400 USD',
    status: 'Win',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '-',
    status: 'Lose',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '1400 USD',
    status: 'Win',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '-',
    status: 'Lose',
  },
  {
    dateAndTime: '10/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '-',
    status: 'Lose',
  },
  {
    dateAndTime: '12/12/2023',
    gameType: '12345678',
    name: 'Express',
    spinAmount: '1400 USD',
    winAmount: '1400 USD',
    status: 'Win',
  },
];
export const ACTIVE_BONUSES_TABLE_DATA: TYPE_ACTIVE_BONUSES_TABLE_DATA[] = [
  {
    dateAndTime: '10/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Active',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Used',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Expired',
  },
  {
    dateAndTime: '10/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Canceled',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Expired',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Active',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Canceled',
  },
  {
    dateAndTime: '10/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Used',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Used',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Used',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Canceled',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Expired',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Active',
  },
  {
    dateAndTime: '12/12/2023',
    bonusId: '12345678',
    bonusName: 'Express',
    amount: '1400 USD',
    currency: 'USD',
    turnoverAmount: '1400 USD',
    state: 'Active',
  },
];
