import { Navigate } from 'react-router-dom';
import { CityName, RouteProps } from '../../types/types';
import { useParams } from 'react-router-dom';
import { isValidCity } from '../../data/cities';
import { Pages } from '../../const';
import ErrorPage from '../../pages/error-page/error-page';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { placesSelectors, setCurrentCity } from '../../store/places-slice';
import { useEffect } from 'react';

function NavigateToActiveCity(): JSX.Element {
  const cityName = useAppSelector(placesSelectors.cityName);
  return <Navigate to={Pages.City.route.replace(':cityName', cityName)} />;
}

function useUpdateActiveCityByRoute() {
  const dispatch = useAppDispatch();
  const { cityName } = useParams();
  const isValid = cityName ? isValidCity(cityName) : false;
  useEffect(() => {
    if (isValid) {
      dispatch(setCurrentCity(cityName as CityName));
    }
  }, [dispatch, cityName, isValid]);
  return { isValid, cityName };
}

export default function MainRoute({ children }: RouteProps): JSX.Element {
  const { isValid, cityName } = useUpdateActiveCityByRoute();
  if (isValid) {
    return children;
  }
  if (cityName) {
    return (
      <ErrorPage
        description={`The city with the name ${cityName} was not found`}
      />
    );
  }
  return <NavigateToActiveCity />;
}
