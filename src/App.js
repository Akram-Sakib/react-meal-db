import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Resturant from './components/Resturant/Resturant';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Resturant></Resturant>
          </Route>
          <Route exact path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route>
            <MealDetails></MealDetails>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
