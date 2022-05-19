import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import Main from "../pages/Main";
import PostList from "../pages/PostList";
import PostView from "../pages/PostView";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import Signup from "../pages/Signup";


import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/Postlist" exact component={PostList} />
        <Route path="/PostView" exact component={PostView} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
