import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    flexGrow: 1
  },
  title: {
    letterSpacing: "0.1em"
  },
  brandIcon: {
    fontSize: "35px",
    marginLeft: theme.spacing(2)
  },
  loginButton: {
    marginLeft: "auto"
  },
  paper: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(10),
    padding: 20,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formTitle: {
    color: "#000"
  },
  textField: {
    width: "70%"
  },
  signUpButton: {
    marginTop: theme.spacing(3)
  }
}));
