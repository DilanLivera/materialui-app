import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1),
    marginTop: theme.spacing(20),
    padding: 20,
    background: "none",
    border: "2px solid grey"
  },
  title: {
    color: "#fff"
  }
}));
