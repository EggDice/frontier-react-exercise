import { AppStore } from './store';
import { injectMain } from './Main';

interface AppArgs {
  renderer(element: JSX.Element): void;
  store: AppStore;
}

export const createApp = ({renderer, store}: AppArgs) => {
  const render = () => {
    renderer(injectMain(store));
  };

  const start = () => {

  };

  return { render, start };
}
