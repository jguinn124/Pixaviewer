import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Like from "../Likes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "20em",
    width: "25em",
  },
}));

const ImageList = (props) => {
  const classes = useStyles();
  //const { user: pageURL } = props.location.state.image;
  return (
    <div style={{ paddingTop: "70px" }}>
      {props.images.map((image) => {
        return (
          <div key={image.id}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              style={{ paddingTop: "5px", paddingBottom: "2vh" }}
            >
              <Grid item>
                <Card className={classes.root}>
                  <Link
                    to={{
                      pathname: `/image/${image.id}`,
                      state: { image: image },
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={image.largeImageURL}
                    />
                  </Link>

                  <CardContent>
                    <Like />
                    <Typography gutterBottom variant="body1" component="h3">
                      {image.likes} Likes
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={image.pageURL}
                      >
                        By: {image.user}
                      </a>
                    </Typography>
                    <Typography variant="caption" component="p">
                      {image.tags}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        href={image.pageURL}
                      >
                        Comments {image.comments}
                      </a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};
export default ImageList;
