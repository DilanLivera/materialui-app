import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import validator from "validator";
import useStyles from "./styles/SignupFormStyles";

function SignupForm(props) {
  const classes = useStyles();
  const [username, updateUsername, resetUsername] = useInputState("");
  const [validUsername, setUserNameValid] = useState(true);
  const [email, updateEmail, resetEmail] = useInputState("");
  const [validEmail, setEmailValid] = useState(true);
  const [password, updatePassword, resetPassword] = useInputState("");
  const [validPassword, setPasswordValid] = useState(true);
  const [confirmPassword, updateConfirmPassword, resetConfirmPassword] = useInputState("");
  const [validConfirmPassword, setConfirmPasswordValid] = useState(true);

  /* 
    check if all the inputs are valid
  */
  function isInputsValid() {
    const isValidUsername = !validator.isEmpty(username);
    setUserNameValid(isValidUsername);
    const isValidEmail = !(validator.isEmpty(email) || !validator.isEmail(email));
    setEmailValid(isValidEmail);
    const isValidPassword = validator.isLength(password, { min: 15, max: 20 });
    setPasswordValid(isValidPassword);
    const isValidConfirmPassword = !validator.isEmpty(confirmPassword) && validator.equals(password, confirmPassword);
    setConfirmPasswordValid(isValidConfirmPassword);

    return isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword;
  }

  return (
    <Paper className={classes.paper} elevation={1}>
      <Typography variant='h5' className={classes.formTitle}>
        Create an account
      </Typography>
      <TextField
        error={!validUsername}
        id='username'
        className={classes.textField}
        label='Username'
        margin='normal'
        onChange={updateUsername}
        value={username}
      />
      <TextField
        error={!validEmail}
        id='email'
        className={classes.textField}
        label='Email'
        margin='normal'
        onChange={updateEmail}
        value={email}
        required
      />
      <TextField
        error={!validPassword}
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
        error={!validConfirmPassword}
        id='confirm-password'
        className={classes.textField}
        label='Confirm Password'
        type='password'
        margin='normal'
        onChange={updateConfirmPassword}
        value={confirmPassword}
        required
      />
      <Button
        color='primary'
        size='medium'
        variant='contained'
        className={classes.signUpButton}
        onClick={e => {
          e.preventDefault();
          if (isInputsValid()) {
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
                props.history.push("/");
              })
              .catch(function(error) {
                console.error(error);
              });
          }
        }}
      >
        Sign Up
      </Button>
    </Paper>
  );
}

export default withRouter(SignupForm);
