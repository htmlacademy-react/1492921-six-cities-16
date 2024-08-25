import { Route } from 'react-router-dom';
import { Pages } from '@src/const';
import MainPage from '@pages/main-page/main-page';
import { MainRoute } from '@components';

function MainPageRoute(path: string): JSX.Element {
  return (
    <Route
      path={path}
      element={
        <MainRoute>
          <MainPage />
        </MainRoute>
      }
    />
  );
}

function MainPageRoutes(): JSX.Element {
  return (
    <>
      {MainPageRoute(Pages.Main.route)}
      {MainPageRoute(Pages.City.route)}
    </>
  );
}

function TestComponentRoute(testElement: JSX.Element): JSX.Element {
  return <Route path="/test" element={testElement} />;
}

export { MainPageRoute, MainPageRoutes, TestComponentRoute };
