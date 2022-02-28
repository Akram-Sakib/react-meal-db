import React from 'react';
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from 'react-router';

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  const history = useHistory();
  const details = () => {
    history.push(`/meal/${props.keyData}`);
  }
    return (
      <Col md={4} className="mb-4" >
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>{strInstructions.slice(0,150)+"..."}</Card.Text>
            <Button onClick={details} variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Meal;