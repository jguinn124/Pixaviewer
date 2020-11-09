import React from "react";
import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

const API_KEY = "1572283-b92e597df9908815dea42dc51";

class App extends React.Component {
  state = {
    images: [],
    error: null,
  };
  handleGetRequest = async (e) => {
    e.preventDefault();
    const searchItem = e.target.elements.searchValue.value; //Gets the value on button click
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchItem}&image_type=photo`;

    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
    if (!searchItem) {
      this.setState({ error: "please provide a search term" });
    } else {
      this.setState({ images: response.hits, error: null });
    }
  };

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {this.state.error !== null ? (
          <div>{this.state.error}</div>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
