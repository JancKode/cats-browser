import React, { useContext, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Context as CatContext } from "../../context/CatDataContext";
import "./select-breed-dropdown.styles.css";

const SelectBreedDropDown = ({ title, callback, selectedBreedId }) => {
  const { state, getBreedDetails } = useContext(CatContext);

  useEffect(() => {
    getBreedDetails();
  }, []);

  return (
    <div>
      <h4>Breed</h4>
      <DropdownButton bsPrefix='drop-down--container' title={title}>
        {state.cats.map((cat) => {
          return (
            <Dropdown.Item
              key={cat.id}
              onSelect={() => {
                callback(cat.id, cat.breed);
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#495057" }}
                to={`/?breed=${cat.id}`}
              >
                {" "}
                {cat.breed}{" "}
              </Link>
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default SelectBreedDropDown;
