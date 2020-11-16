import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import footerAdornment from "./SVG/Artboard 1.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#2E3B55",
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  Adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid Item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid item className={classes.link}>
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid Item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Site Purpose
              </Grid>
              <Grid item>
                <Typography style={{ color: "white" }} variant="p">
                  This site was created for educational purposes.
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ color: "white" }} variant="p">
                  Leveraging{" "}
                  <a
                    style={{ textDecoration: "underline", color: "#E1E1E1" }}
                    href="https://pixabay.com/"
                  >
                    Pixabay.com
                  </a>{" "}
                  API we are able to search
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ color: "white" }} variant="p">
                  for pictures.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}></Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                About Us
              </Grid>
              <Grid item className={classes.link}>
                <a
                  href="https://github.com/jguinn124"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Github
                </a>
              </Grid>
              <Grid item className={classes.link}>
                <a
                  href="https://www.linkedin.com/in/john-guinn-2184bb134/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Linkedin
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="Decorative Thing"
        src={footerAdornment}
        className={classes.Adornment}
      />
    </footer>
  );
}
