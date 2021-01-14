import React from "react";
import { Card, Button } from "react-bootstrap";

const CatDetails = (props) => {
  const { cats } = props.location.state;
  const { goBack } = props.history;
  const breed = cats.breeds[0];

  return (
    <Card>
      <Card.Header>
        <Button variant='primary' onClick={goBack}>
          Go Back
        </Button>
      </Card.Header>
      <Card.Body>
        {/* <Card.Img style={{ height: "100%" }} src=: /> */}

        <Card.Img
          style={{ height: "60vh", marginBottom: ".5rem" }}
          src={cats.url}
        />
        <Card.Title className='detail-card--title'>{breed.name}</Card.Title>
        <Card.Title>{breed.origin}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {breed.temperament}
        </Card.Subtitle>

        <Card.Text>{breed.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CatDetails;
