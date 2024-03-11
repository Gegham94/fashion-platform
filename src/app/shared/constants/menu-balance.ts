export type TYPE_MENU_BALANCE = {
  id: number;
  name: string;
  index: number;
  isActive: boolean;
};
export const MENU_BALANCE: TYPE_MENU_BALANCE[] = [
  { id: 0, name: 'Deposit', index: 0, isActive: true },
  { id: 1, name: 'Withdraw', index: 1, isActive: false },
  { id: 2, name: 'Withdraw Status', index: 2, isActive: false },
  { id: 3, name: 'Balance History', index: 3, isActive: false },
];
