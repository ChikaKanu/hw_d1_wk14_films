import React, {Component} from "react";

class Film extends Component {

  render() {
    return(
      <div className="film">

        <ul>
        <li><a href={this.props.url}>{this.props.children}</a></li>
        </ul>

      </div>
    )
  }
}

export default Film;
