export type TYPE_LANGUAGES = {
  id: number;
  name: string;
  title: string;
  short: string;
  isActive: boolean;
};

export const LANGUAGES: TYPE_LANGUAGES[] = [
  {
    id: 1,
    name: 'Armenia',
    title: 'ARM',
    short: 'am',
    isActive: true,
  },
  {
    id: 2,
    name: 'English',
    title: 'USA',
    short: 'en',
    isActive: false,
  },
  {
    id: 3,
    name: 'Brazil',
    title: 'BRA',
    short: 'br',
    isActive: false,
  },
  {
    id: 4,
    name: 'Canada',
    title: 'CAN',
    short: 'ca',
    isActive: false,
  },
];
