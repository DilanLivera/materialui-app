import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import useStyles from "./styles/NavbarStyles";

function App() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h4' className={classes.title}>
          Coffee Club
        </Typography>
        <FreeBreakfastIcon outlined='true' className={classes.brandIcon} />
        <Button color='inherit' className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
