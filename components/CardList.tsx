import { useContext, useEffect, useState } from "react";
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
    TvApiService.searchShows(searchTerm ?? "")
      .then((res) => res.json())
      .then((data) => setTvShows(data))
      .catch((err) => {
        console.log("Error fetching TV API", err);
      });
  }, [searchTerm]);

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
      {tvShows.map((item) => (
        <Card
          key={`tv-show-${item.show.id}`}
          item={item}
          onClick={() => selectTvShow(item.show.id)}
        />
      ))}
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
