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
import Record from "./Record"

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recommend" exact component={Recommend} />
            <Route path="/new" exact component={New} />
            <Route path="/search" exact component={Search} />
            <Route path="/book/:id" exact component={Detail} />
            <Route path="/record" exact component={Record} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)