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

  return (
    <div>
      {props.images.map((image) => {
        return (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "70px", paddingBottom: "2vh" }}
          >
            <Grid item>
              <Card key={image.id} className={classes.root}>
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
                    By: {image.user}
                  </Typography>
                  <Typography variant="caption" component="p">
                    {image.tags}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Comments {image.comments}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};
export default ImageList;
