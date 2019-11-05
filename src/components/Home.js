import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles/HomeStyles";

function Home() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography display='block' variant='h1' className={classes.title}>
        Coffee Club
      </Typography>
    </Paper>
  );
}

export default Home;
