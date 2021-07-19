import ReactDOM from 'react-dom';
import { createApp, createStore } from './app/';

const renderer = (element: JSX.Element) => {
  ReactDOM.render(
    element,
    document.getElementById('root'),
  );
};
const store = createStore();
const app = createApp({ renderer, store });
app.render();
app.start();
