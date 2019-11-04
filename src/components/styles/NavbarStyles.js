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
  }
}));
