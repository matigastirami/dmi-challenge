import { useEffect, useState } from "react";
import TvApiService from "../services/tv-api.service";
import Image from "next/image";
import { TvShowDetail } from "../@types/tv-show.types";

type DetailProps = {
  id: number | null;
};

export default function Detail({ id }: DetailProps) {
  const [info, setInfo] = useState<TvShowDetail | null>(null);

  // TODO: Fetch by id, render an image, use a suspend while the API returns, handle errors
  useEffect(() => {
    getTvShowInfo();
  }, []);

  const getTvShowInfo = () => {
    return TvApiService.getById(id)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch(console.error);
  };

  const getNetworkName = () => {
    return info?.network?.name ?? "Unknown";
  };

  const getCountry = () => {
    return info?.network?.country.name ?? "Unknown";
  };

  const getOfficialSiteLink = () => {
    return info?.officialSite ? (
      <a href={info?.officialSite}>Click here</a>
    ) : (
      "Site not available"
    );
  };

  const getImgSrc = () => {
    return info?.image?.original ?? "/no-image-placeholder.png";
  };

  const getStatus = () => {
    return info?.status;
  };

  const getGenres = () => {
    return info?.genres?.join(", ");
  };

  const getImdb = () => {
    return info?.externals.imdb ?? "Unknown";
  };

  const getRating = () => {
    return info?.rating.average ?? "Unknown";
  };

  const renderShowInfo = () =>
    info ? (
      <div className="detail" role="show-detail">
        <div className="detail-text">
          <h1>{info.name}</h1>
          <span>
            <strong>Channel:</strong> {getNetworkName()}
          </span>
          <span>
            <strong>Country:</strong> {getCountry()}
          </span>
          <span>
            <strong>Site:</strong> {getOfficialSiteLink()}
          </span>
          <span>
            <strong>Status:</strong> {getStatus()}
          </span>
          <span>
            <strong>Genres:</strong> {getGenres()}
          </span>
          <span>
            <strong>IMDB:</strong> {getImdb()}
          </span>
          <span>
            <strong>Rating:</strong> {getRating()}
          </span>
        </div>
        <Image
          src={getImgSrc()}
          alt=""
          //className="tv-show-catalog__image"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>
    ) : (
      <h2>Could not fetch info the the selected show</h2>
    );

  return renderShowInfo();
}
