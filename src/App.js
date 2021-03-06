import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Home/Contact/Contact';
import About from './Components/Home/About/About';
import Topbar from './Components/Home/Topbar/Topbar';
import Services from './Components/Home/Detail/Services/Services';
import AddServices from './Components/Orders/AddServices/AddServices';
import AdminDashboard from './Components/Orders/Admin/AdminDashboard/AdminDashboard';
import AddClients from './Components/Orders/AddClients/AddClients';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import MyOrders from './Components/Orders/MyOrders/MyOrders';
import ManageServices from './Components/Orders/Admin/ManageServices/ManageServices';
import Carts from './Components/Home/Detail/Carts/Carts';




function App() {
  return (
    <div className="App">


      <AuthProvider>
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

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <Route path="/services">
              <Services></Services>
            </Route>




            <PrivateRoute exact path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route exact path="/addClients">
              <AddClients></AddClients>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route exact path="/addClients">
              <AddClients></AddClients>
            </Route>
            <PrivateRoute exact path="/manageServices/:serviceKey">
              <ManageServices></ManageServices>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
