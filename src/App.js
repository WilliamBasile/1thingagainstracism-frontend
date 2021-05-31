import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AbuotUs";
import Home from "./pages/home/Home";
import NavBar from './components/nav-bar/NavBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route>
            not found
          </Route>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;