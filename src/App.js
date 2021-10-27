import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger  from './pages/messenger/Messenger'

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/messenger"/>: <Register />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/>: <Login />}
        </Route>
        <Route  path="/register">
           {user ? <Redirect to="/login"/>: <Register />}
        </Route>
        <Route path="/messenger">
        {user ? <Redirect to="/messenger"/>: <Login />}
        <Messenger /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
