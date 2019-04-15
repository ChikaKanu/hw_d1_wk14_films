import React, {Component} from "react";

class Film extends Component {

  render() {
    return(
      <div className="film">
        <h4>{this.props.name}</h4>
        <a href="{this.props.children}">{this.props.children}</a>

      </div>
    )
  }
}

export default Film;