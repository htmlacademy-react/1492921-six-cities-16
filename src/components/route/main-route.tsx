import { Navigate } from 'react-router-dom';
import { CityName, RouteProps } from '../../types/types';
import { useParams } from 'react-router-dom';
import { isValidCity } from '../../data/cities';
import { Pages } from '../../const';
import ErrorPage from '../../pages/error-page/error-page';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { placesSelectors, setCurrentCity } from '../../store/places-slice';

export default function MainRoute({ children }: RouteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(placesSelectors.cityName);
  const param = useParams();
  if (param.cityName && isValidCity(param.cityName)) {
    dispatch(setCurrentCity(param.cityName as CityName));
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
