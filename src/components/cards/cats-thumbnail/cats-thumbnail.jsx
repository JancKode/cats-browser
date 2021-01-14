import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { slice, concat } from "lodash";

import "./cats-thumbnail.styles.css";

const Cards = ({ catsImageData, limit }) => {
  const [showMore, setShowMore] = useState(true);
  const [imagesToShow, setImagesToShow] = useState(slice(catsImageData, 0));
  const [index, setIndex] = useState(limit);
  const [buttonLabel, setButtonLabel] = useState("Load more");

  const sliceData = () => {
    setImagesToShow(slice(catsImageData, 0, limit));
    setShowMore(true);
    setIndex(limit);
  };

  useEffect(() => {
    sliceData();
  }, [catsImageData, limit]);

  const loadMoreImages = () => {
    const newIndex = index + limit;
    const loadMore = newIndex < catsImageData.length - 1;

    const newImageList = concat(
      imagesToShow,
      slice(catsImageData, index, newIndex)
    );

    setIndex(newIndex);
    setImagesToShow(newImageList);
    setShowMore(loadMore);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {imagesToShow.length > 0 ? (
          imagesToShow.map((cats) => {
            return (
              <Card className='thumbnail-card--container' key={cats.id}>
                <Card.Body className='thumbnail-card--body'>
                  <Card.Img
                    variant='top'
                    src={cats.url}
                    className='thumbnail-card--image'
                  />
                  <Button variant='primary' className='thumbnail-card--button'>
                    <Link
                      className={"thumbnail-card--link"}
                      to={{
                        pathname: `/${cats.id}`,
                        state: {
                          cats,
                        },
                      }}
                    >
                      View Details
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <p>No cats available</p>
        )}
      </div>
      <div style={{ display: "block" }}>
        {showMore && (
          <Button
            className='thumbnail--button'
            onClick={loadMoreImages}
            disabled={!(imagesToShow.length > 0)}
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cards;
