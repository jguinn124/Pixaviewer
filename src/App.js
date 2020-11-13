import React from "react";
import "./fonts.css";

import ImageList from "./ImageList/ImageList";
import Appbar from "./Appbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Background from "./background.png";

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
          <div>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
              spacing={7}
            >
              <Grid
                item
                style={{
                  position: "relative",
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontFamily: "Libre Baskerville" }}
                >
                  Enter a Search Query.
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  style={{ fontFamily: "Libre Baskerville" }}
                >
                  Explore.
                </Typography>
              </Grid>
              <Grid item>
                <div>
                  <img
                    alt="background"
                    src={Background}
                    style={{
                      maxHeight: "20vh",
                    }}
                  ></img>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              style={{ paddingTop: "20vh" }}
            >
              <Grid item>
                <h4 style={{ fontFamily: "Libre Baskerville" }}>
                  PixaViewer is a modern way to search for images
                </h4>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default App;
