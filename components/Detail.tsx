import { useEffect, useState } from "react";
import TvApiService from "../services/tv-api.service";
import Image from "next/image";

export default function Detail({ id }) {
    const [info, setInfo] = useState(null);

    // TODO: Fetch by id, render an image, use a suspend while the API returns, handle errors
    useEffect(() => {
        TvApiService.getById(id)
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(err =>  console.log(err))
    }, [])

    return (
        info && 
        <div className="detail">
            <div className="detail-text">
            <h1>{info.name}</h1>
                <span><strong>Channel:</strong> {info.network?.name ?? 'Unknown'}</span>
                <span><strong>Country:</strong> {info.network?.country.name ?? 'Unknown'}</span>
                <span><strong>Site:</strong> <a href={info.officialSite}>Click here</a></span>
                <span><strong>Status:</strong> {info.status}</span>
                <span><strong>Genres:</strong> {info.genres.join(', ')}</span>
                <span><strong>IMBD:</strong> {info.externals.imdb}</span>
                <span><strong>Rating:</strong> {info.rating.average}</span>
            </div>     
            <Image
                src={info.image?.original ?? "/no-image-placeholder.png"}
                alt=""
                //className="tv-show-catalog__image"
                width="100%"
                height="100%"
                objectFit="contain"
            />
        </div>
    );
}