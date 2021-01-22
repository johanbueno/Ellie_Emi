import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import Footer from "./Footer/Footer";
import PageNotFound from "./PageNotFound";
import ImageOnMouseOver from "./pages/ImageChangeOnMouseOver";
import shopping from "./shopping/shopping";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.auth} {...props} />}
            />
            <Route
              path="/profile"
              render={(props) =>
                this.auth.isAuthenticated() ? (
                  <Profile auth={this.auth} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="/public" component={Public} />
            <Route path="/bows" component={ImageOnMouseOver} />
            <Route path="/shopping" component={shopping} />
            <Route
              path="/private"
              render={(props) =>
                this.auth.isAuthenticated() ? (
                  <Private auth={this.auth} {...props} />
                ) : (
                  this.auth.login()
                )
              }
            />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
