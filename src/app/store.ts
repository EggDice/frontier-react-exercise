import { createCoreStore } from '../store/store';

export const createStore = () => {
  return createCoreStore({reducer: (s = 0) => s});
};

export type AppStore = ReturnType<typeof createStore>;
