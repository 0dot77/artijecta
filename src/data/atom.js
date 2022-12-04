import { atom } from 'recoil';
const clueState = atom({
  key: 'clueState',
  default: false,
});

const soundState = atom({
  key: 'soundState',
  default: false,
});

export { clueState, soundState };
