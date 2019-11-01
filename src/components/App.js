import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1
  },
  brandIcon: {
    marginLeft: theme.spacing(2)
  },
  loginButton: {
    marginLeft: "auto"
  },
  paper: {
    marginTop: theme.spacing(10),
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    width: 400
  },
  signUpButton: {
    marginTop: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <div>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Coffee Club
            </Typography>
            <FreeBreakfastIcon outlined='true' className={classes.brandIcon} />
            <Button color='inherit' className={classes.loginButton}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.root} justify='space-around'>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} elevation='3'>
              <div>
                <Typography variant='h5' color='textSecondary' className={classes.formTitle}>
                  Create an account
                </Typography>
                <TextField id='standard-basic' className={classes.textField} label='Username' margin='normal' />
                <TextField id='standard-basic' className={classes.textField} label='Email' margin='normal' />
                <TextField id='standard-basic' className={classes.textField} label='Password' margin='normal' />
                <TextField id='standard-basic' className={classes.textField} label='Confirm Password' margin='normal' />
              </div>
              <Button color='inherit' color='primary' size='medium' variant='outlined' className={classes.signUpButton}>
                Sign Up
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
