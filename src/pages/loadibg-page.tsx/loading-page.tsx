import Loading from '../../components/loader/loading';

export default function LoadingPage(): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">
          <Loading />
        </b>
      </div>
    </section>
  );
}
