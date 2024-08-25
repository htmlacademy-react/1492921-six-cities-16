import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, Logo } from '@components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setupStore } from '@store/store.ts';
import { checkLogin } from '@store/api-actions.ts';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  useLocation,
} from 'react-router-dom';
import { LogoType, NameSpace, Pages } from './const';
import { mockInitialState, withRoutes, withStore } from './mock/mock';
import { render } from 'react-dom';
import { mockUserAuthState } from './mock/mock-user';
import { MainPageRoutes, TestComponentRoute } from './routes';

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

// root.render(
//   withStore(
//     withRoutes(
//       <Routes>
//         {MainPageRoutes()}
//         {TestComponentRoute(<Logo viewType={LogoType.Header} />)}
//       </Routes>,
//       '/test'
//     ),
//     mockInitialState
//   ).withStoreComponent
// );
