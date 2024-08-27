import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setupStore } from '@store/store.ts';
import { checkLogin } from '@store/api-actions.ts';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

store.dispatch(checkLogin());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
