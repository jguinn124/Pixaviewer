import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "./images/dog.jpg";
import image2 from "./images/road.jpg";
import image3 from "./images/landscape.jpg";
import Like from "../Likes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "20em",
    width: "25em",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Examples = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ paddingTop: "150px", paddingBottom: "2vh" }}
        className={classes.control}
      >
        <Typography
          variant="h4"
          component="h2"
          style={{ fontFamily: "Libre Baskerville" }}
        >
          Example Output
        </Typography>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item style={{ padding: "15px" }}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={image} />
              <CardContent>
                <Like />
                <Typography gutterBottom variant="body1" component="h3">
                  1364 Likes
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  By: Free-Photos
                </Typography>
                <Typography variant="caption" component="p">
                  pug, dog, pet
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Comments 180
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item style={{ padding: "15px" }}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={image2} />
              <CardContent>
                <Like />
                <Typography gutterBottom variant="body1" component="h3">
                  3868 Likes
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  By: Valiphotos
                </Typography>
                <Typography variant="caption" component="p">
                  road, forest, season
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Comments 715
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item style={{ padding: "15px" }}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={image3} />
              <CardContent>
                <Like />
                <Typography gutterBottom variant="body1" component="h3">
                  2626 Likes
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                  By: Kinkate
                </Typography>
                <Typography variant="caption" component="p">
                  mountain, landscape, mountains
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Comments 322
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Examples;
