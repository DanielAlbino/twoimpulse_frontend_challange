import NavBar from './components/Header/navbar'
import Home from './pages/Home'
import Absences from './pages/Absences'
import Employee from './pages/Employees'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/absences">
              <Absences />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/">
            <Home />
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
