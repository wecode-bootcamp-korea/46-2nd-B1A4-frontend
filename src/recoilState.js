import { atom } from 'recoil';

export const date = atom({
  key: 'date',
  default: new Date(),
});

export const count = atom({
  key: 'count',
  default: 0,
});
