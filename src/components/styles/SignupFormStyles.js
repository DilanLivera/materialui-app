import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    display: "block",
    marginTop: theme.spacing(3)
  }
}));
