import Loading from '../../components/loader/loading';
import '../../components/loader/loading.css';

export default function LoadingPage(): JSX.Element {
  return (
    <div style={{ height: '100vh' }}>
      <Loading />
    </div>
  );
}
