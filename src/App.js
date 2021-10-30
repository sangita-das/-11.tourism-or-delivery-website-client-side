import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Home/Booking/Booking';
import Contact from './Components/Home/Contact/Contact';
import About from './Components/Home/About/About';
// import Topbar from './Components/Home/Home/Topbar/Topbar';
import Topbar from './Components/Home/Topbar/Topbar';
import Services from './Components/Home/Detail/Services/Services';



function App() {
  return (
    <div className="App">


      <Router>
        <Topbar></Topbar>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
