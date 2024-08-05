import { Navigate } from 'react-router-dom';
import { RouteProps } from '../../types/types';
import { useParams } from 'react-router-dom';
import { CITIES, getCurrentCity } from '../../data/cities';
import { Pages } from '../../const';
import ErrorPage from '../../pages/error-page/error-page';
//import { useAppSelector } from '../../hooks/store';
//import { placesSelectors } from '../../store/places-slice';

export default function MainRoute({ children }: RouteProps): JSX.Element {
  //const cityName = useAppSelector(placesSelectors.cityName);
  //const cityName = CITIES[0];
  const cityName = getCurrentCity().name;
  const param = useParams();
  if (
    param.cityName &&
    (CITIES as readonly string[]).includes(param.cityName)
  ) {
    return children;
  }
  if (param.cityName) {
    return (
      <ErrorPage
        description={`The city with the name ${param.cityName} was not found`}
      />
    );
  }
  return <Navigate to={Pages.City.route.replace(':cityName', cityName)} />;
}
