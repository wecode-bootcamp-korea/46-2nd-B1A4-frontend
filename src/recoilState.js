import { atom } from 'recoil';

export const date = atom({
  key: 'date',
  default: new Date(),
});

export const count = atom({
  key: 'count',
  default: 1,
});

export const time = atom({
  key: 'time',
  default: [],
});

export const allTime = atom({
  key: 'allTime',
  default: [],
});
