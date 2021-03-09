import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import Recommend from "../Routes/Recommend";
import New from "../Routes/New";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "./Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recommend" component={Recommend} />
            <Route path="/new" component={New} />
            <Route path="/search" component={Search} />
            <Route paht="/book/:id" exact component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)