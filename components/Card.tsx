import Image from "next/image";
import { TvShowDetail } from "../@types/tv-show.types";

type CardProps = {
  item: { show: TvShowDetail },
  onClick: any
}

const Card = ({ item, onClick }: CardProps) => {
  const {
    show: { image, name, summary },
  } = item;

  const getImageSrc = (): string => {
    return image?.medium ?? "/no-image-placeholder.png";
  };

  return (
    <div
      className="tv-show-catalog__item"
      title="Click show detail"
      onClick={onClick}
      role="card"
    >
      <Image
        src={getImageSrc()}
        alt=""
        className="tv-show-catalog__image"
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className="tv-show-catalog__content">
        <h2 className="tv-show-catalog__title">{name}</h2>
        <p
          className="tv-show-catalog__description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    </div>
  );
};

export default Card;
