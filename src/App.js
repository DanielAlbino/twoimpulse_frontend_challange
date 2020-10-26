import NavBar from './components/Header/navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
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
          <Route path="/contact">
              <Contact />
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
