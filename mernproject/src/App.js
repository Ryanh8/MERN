import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router className="App">
      <Navbar />
      <br/>
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" component = {EditExercise} />
      <Route path= "/create" component={CreateExercise} />
      <Route path= "/user" component= {CreateUser} />
        
    </Router>
  );
}

export default App;