import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {

    const { mealId } = useParams();
    const [meal ,setMeal] = useState([]);
    const history = useHistory();
    const toHome = () =>{
      history.push("/");
    } 

    useEffect(() => {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parseInt(
          mealId
        )}`
      )
        .then((res) => res.json())
        .then((data) => setMeal(data.meals));
    }, []);
    
    return (
      <Card>
        <Card.Img className="" variant="top" src={meal[0]?.strMealThumb} />
        <Card.Body>
          <Card.Title>{meal[0]?.strMeal}</Card.Title>
          <Card.Text>{meal[0]?.strInstructions}</Card.Text>
          <Button onClick={toHome} variant="primary">
            All Food
          </Button>
        </Card.Body>
      </Card>
    );
};

export default MealDetails;