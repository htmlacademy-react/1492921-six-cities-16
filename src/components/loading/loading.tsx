import { FadeLoader } from 'react-spinners';
import './loading.css';
import { LOADING_MESSAGE } from '@src/const';

export default function Loading(): JSX.Element {
  return (
    <div className="loading">
      {LOADING_MESSAGE}
      <FadeLoader />
    </div>
  );
}
