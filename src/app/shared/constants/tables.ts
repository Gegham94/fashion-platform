// TABLE HEADERS
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

//TABLE DATA
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
