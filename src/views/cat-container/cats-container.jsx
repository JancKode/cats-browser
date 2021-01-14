import React, { useState, useEffect, useContext } from "react";
import Cards from "../../components/cards/cats-thumbnail/cats-thumbnail";
import SelectBreedDropDown from "../../components/select-breed-dropdown/select-breed-dropdown";

import { Context as CatContext } from "../../context/CatDataContext";

let selectedID = null;
let selecetedBreed = "Select a cat breed";

const CatsContainer = (props) => {
  const { state, getCatsImagesByBreed } = useContext(CatContext);
  const [catsImage, setCatsImage] = useState([]);
  const [selectedId, setSelectBreed] = useState(null);
  const [locationKey, setLocationKey] = useState("");
  const [limit, setLimit] = useState(5);
  const { location } = props;

  const onClickHandler = (selectedBreedId, selectedCatBreed) => {
    getCatsImagesByBreed(selectedBreedId);
    setSelectBreed(selectedBreedId);
    setLocationKey(location.key);
    selectedID = selectedBreedId;
    selecetedBreed = selectedCatBreed;
    setLimit(5);
  };

  useEffect(() => {
    if (locationKey !== location.key) {
      getCatsImagesByBreed(selectedID);
      setCatsImage(state.catsImage);
      setLocationKey(location.key);
    }

    if (state.catsImage) {
      setCatsImage(state.catsImage);
    }
  }, [state, catsImage]);

  return (
    <div>
      <SelectBreedDropDown
        callback={onClickHandler}
        title={selecetedBreed}
        selectedBreedId={selectedId}
      />
      {catsImage && <Cards catsImageData={catsImage} limit={limit} />}
    </div>
  );
};

export default CatsContainer;
