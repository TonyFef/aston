import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@store/store';
import App from '@components/App/App';
import BgImageProvider from '@context/BgImageProvider'

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BgImageProvider>
          <App />
        </BgImageProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
