import { render, screen } from '@testing-library/react'

import { createApp } from './app';
import { createStore } from './store'

test('render the app', () => {
  const renderer = (element: JSX.Element): void => { render(element); };
  const store = createStore();
  const app = createApp({renderer, store});
  app.render();
  store.send({type: 'job/fetch'});
  expect(screen.getByTestId('progress')).toBeInTheDocument();
});
