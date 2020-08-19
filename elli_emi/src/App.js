import React, {Component} from "react";
import { Route } from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";


class App extends Component {
  render (){
    return (
      <>

      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      </>
    )
  }
}

export default App;


