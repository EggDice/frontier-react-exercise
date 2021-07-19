import React from 'react';

import { AppStore } from './store';

interface MainProps {
  store: AppStore;
};

export const Main = ({store}: MainProps) => (
    <div data-testid="progress">
    </div>
  );

export const injectMain = (store: AppStore) => <Main store={store} />
