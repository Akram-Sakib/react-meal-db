import React, { useEffect, useState } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import ErrorCase from "../ErrorCase/ErrorCase";
import Meal from "../Meal/Meal";

const Resturant = () => {
  const [meal, setMeal] = useState([]);
  const [text, setText] = useState("");

  const getText = (e) => {
    const textValue = e.target.value; 
    setText(textValue);
  }

  console.log(meal);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [text]);

  return (
    <div>
      <Row className="mt-3 mb-4">
        <Col md={3}></Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <FormControl
              onChange={getText}
              placeholder="Search food by name"
              aria-label="Search food by name"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        {
        meal != null ? meal.map((mealData) => (
          <Meal keyData={mealData.idMeal} meal={mealData}></Meal>
        )) : <ErrorCase></ErrorCase>
        }
      </Row>
    </div>
  );
};

export default Resturant;
