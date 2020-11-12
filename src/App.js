import React from "react";
import ImageList from "./ImageList/ImageList";
import Appbar from "./Appbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const API_KEY = "1572283-b92e597df9908815dea42dc51";

class App extends React.Component {
  state = {
    images: [],
    error: null,
    searched: false,
  };
  handleGetRequest = async (e) => {
    e.preventDefault();

    const searchItem = e.target.elements.searchValue.value; //Gets the value on button click
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchItem}&image_type=photo`;

    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
    if (!searchItem) {
      this.setState({
        error: (
          <Typography variant="caption" component="p">
            Please Provide a Search Term
          </Typography>
        ),
      });
    } else {
      this.setState({ images: response.hits, error: null });
      this.setState({ searched: true });
    }
  };

  render() {
    return (
      <div>
        <Appbar handleGetRequest={this.handleGetRequest} />
        {this.state.images.length === 0 && this.state.searched === true ? (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "2vh", paddingBottom: "2vh" }}
          >
            <div style={{ paddingTop: "90px" }}>
              <Typography variant="caption" component="p" align="center">
                Search Contains 0 Results
              </Typography>
            </div>
          </Grid>
        ) : (
          " "
        )}

        {this.state.error !== null ? (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "2vh", paddingBottom: "2vh" }}
          >
            <div style={{ paddingTop: "90px" }}>{this.state.error}</div>
          </Grid>
        ) : (
          <ImageList images={this.state.images} />
        )}
        {this.state.searched ? (
          " "
        ) : (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "2vh", paddingBottom: "2vh" }}
          >
            <div style={{ paddingTop: "90px" }}>
              <Typography variant="caption" component="p" align="center">
                No Photos to View
              </Typography>
              <Typography variant="caption" component="p">
                Enter a Search Query
              </Typography>
            </div>
          </Grid>
        )}
      </div>
    );
  }
}

export default App;
