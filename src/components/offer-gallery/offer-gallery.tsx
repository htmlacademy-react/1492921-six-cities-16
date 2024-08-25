type OfferGalleryProps = {
  images: string[];
};

export default function OfferGallery({
  images,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt="Photo studio"></img>
        </div>
      ))}
    </div>
  );
}
