import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
    };
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          updated: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          updated: false,
        };
      });
    }
  }

  render() {
    return (
      <div onClick={this.updateLikes}>
        {this.state.updated === false ? (
          <div>
            <FavoriteIcon style={{ color: "black" }} />
          </div>
        ) : (
          <div>
            <FavoriteIcon style={{ color: "red" }} />
          </div>
        )}
      </div>
    );
  }
}

export default Likes;
