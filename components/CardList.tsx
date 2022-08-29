import { useContext, useEffect, useState } from "react";
import { TvShowDetail } from "../@types/tv-show.types";
import useModal from "../hooks/useModal";
import { SearchTermContext } from "../pages";
import TvApiService from "../services/tv-api.service";
import Card from "./Card";
import Detail from "./Detail";
import Modal from "./Modal";

const CardList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [selected, setSelected] = useState(null);
  const { isShowing, toggle } = useModal();

  const { searchTerm } = useContext(SearchTermContext);

  useEffect(() => {
    fetchTvShows();
  }, [searchTerm]);

  const fetchTvShows = async () => {
    try {
      const response = await TvApiService.searchShows(searchTerm ?? "");
      const data = await response.json();
      setTvShows(data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectTvShow = (id) => {
    if (isShowing) {
      setSelected(null);
    } else {
      setSelected(id);
    }

    toggle();
  };

  const showCards = () => (
    <>
      {tvShows.length
        ? tvShows.map((item) => (
            <Card
              key={`tv-show-${item.show.id}`}
              item={item}
              onClick={() => selectTvShow(item.show.id)}
            />
          ))
        : <h2>No cards found, try searching another thing :)</h2>}
    </>
  );

  return (
    <div className="centered">
      <div className="tv-show-catalog__container">{showCards()}</div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        // eslint-disable-next-line react/no-children-prop
        children={<Detail id={selected} />}
      />
    </div>
  );
};

export default CardList;
