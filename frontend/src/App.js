import React from "react";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import IconButton from '@material-ui/core/IconButton';
import NotFoundPage from "./pages/404";
import Moderator from "./pages/Moderator";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/SEPractice">Select the Practice</NavLink></li>
          <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
          <li><NavLink to="/moderator">Moderator </NavLink></li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SEPractice" component={(SEPractice)} />
            <Route path="/SubmitArticle" component={SubmitArticle} />
            <Route path="/moderator" component={Moderator} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;