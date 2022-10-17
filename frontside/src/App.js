import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Components/Context/AuthProvider';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import Signup from './Components/SignUpLogin/Signup';
import Login from './Components/SignUpLogin/Login';
import ForgetPassword from './Components/SignUpLogin/ForgetPassword';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      {/* is providing the data that is your user logged in or not */}
      <AuthProvider>
         <NavBar />
         <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>
          </Switch>
         <Footer />
      </ AuthProvider>
    </ Router>
  );
}

export default App;
