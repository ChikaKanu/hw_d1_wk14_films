import React, {Component} from "react";
import FilmBox from "./containers/FilmBox.js";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="film">
        <FilmBox/>
      </div>
    )
  }
}

export default App;
