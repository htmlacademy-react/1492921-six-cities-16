import { FadeLoader } from 'react-spinners';
import './loading.css';

export default function Loading(): JSX.Element {
  return (
    <div>
      <div className="loading">
        Loading...
        <FadeLoader />
      </div>
    </div>
  );
}
