import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import Main from "../pages/Main";
import PostList from "../pages/PostList";
import ChangeInfo from "../pages/ChangeInfo";
import PostView from "../pages/PostView";
import PostMain from "../pages/PostMain";
import Withdraw from "../pages/Withdraw";
import PostUp from "../pages/PostUp";
import PostUp2 from "../pages/PostUp2";
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
        <Route path="/PostMain" exact component={PostMain} />
        <Route path="/Withdraw" exact component={Withdraw} />
        <Route path="/ChangeInfo" exact component={ChangeInfo} />
        <Route path="/PostUp" exact component={PostUp} />
        <Route path="/PostUp2" exact component={PostUp2} />
        <Route path="/PostView/:no" exact component={PostView} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
