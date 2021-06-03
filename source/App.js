import './App.css';
import CreateUsersAccount from "./page/CreateUsersAccount";
import UsersAccount from "./page/UsersAccount";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="head">
          <div className="flex">
            <Link className="m-30" to="/users">VISI VARTOTOJAI</Link>
            <Link className="m-30" to="/adduser">PRIDETI VARTOTOJA</Link>
          </div>
          <Switch>
            <Route path="/users"> <UsersAccount/></Route>
            <Route path="/addUser"> <CreateUsersAccount/></Route>
          </Switch>
        </div>
      </Router>
  );
}

App;