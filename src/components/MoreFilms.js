import React, {Component} from "react";

class MoreFilms extends Component {
  render() {
    return(
      <div className="film">
        <button><a href="https://www.imdb.com/calendar/?region=gb">
          <h2>Click to view more films</h2></a>
        </button>
      </div>
    )
  }
}


export default MoreFilms;
