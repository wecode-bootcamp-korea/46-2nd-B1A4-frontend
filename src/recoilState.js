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

export const bookingNumber = atom({
  key: 'bookingNumber',
  default: [],
});

export const userInfo = atom({
  key: 'userInfo',
  default: [],
});

export const isLiked = atom({
  key: 'isLiked',
  default: 0,
});

export const hostId = atom({
  key: 'hostId',
  default: 0,
});

export const studioId = atom({
  key: 'studioId',
  default: 0,
});
