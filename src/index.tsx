import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import '@styles/index.sass';

const domNode: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
