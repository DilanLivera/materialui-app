import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import axios from "axios";
import "./App.css";
import useStyles from "./AppStyles";

function App() {
  const classes = useStyles();
  const [username, updateUsername, resetUsername] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");
  const [confirmPassword, updateConfirmPassword, resetConfirmPassword] = useInputState("");

  return (
    <div className='App'>
      <div>
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
        <Grid container className={classes.root} justify='space-around'>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} elevation={1}>
              <div>
                <Typography variant='h5' color='textSecondary' className={classes.formTitle}>
                  Create an account
                </Typography>
                <TextField
                  id='username'
                  className={classes.textField}
                  label='Username'
                  margin='normal'
                  onChange={updateUsername}
                  value={username}
                />
                <TextField
                  id='email'
                  className={classes.textField}
                  label='Email'
                  margin='normal'
                  onChange={updateEmail}
                  value={email}
                  required
                />
                <TextField
                  id='password'
                  className={classes.textField}
                  label='Password'
                  type='password'
                  margin='normal'
                  onChange={updatePassword}
                  value={password}
                  required
                  helperText='at least 8 characters'
                />
                <TextField
                  id='confirm-password'
                  className={classes.textField}
                  label='Confirm Password'
                  type='password'
                  margin='normal'
                  onChange={updateConfirmPassword}
                  value={confirmPassword}
                  required
                />
              </div>
              <Button
                color='primary'
                size='medium'
                variant='contained'
                className={classes.signUpButton}
                onClick={e => {
                  e.preventDefault();

                  axios({
                    method: "post",
                    url: "http://localhost:3000/",
                    data: {
                      username,
                      email,
                      password
                    }
                  })
                    .then(function(response) {
                      resetUsername();
                      resetEmail();
                      resetPassword();
                      resetConfirmPassword();
                    })
                    .catch(function(error) {
                      console.error(error);
                    });
                }}
              >
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
