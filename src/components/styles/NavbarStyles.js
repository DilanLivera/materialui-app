import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    flexGrow: 1
  },
  routeLink: {
    color: "inherit",
    textDecoration: "none"
  },
  title: {
    letterSpacing: "0.1em"
  },
  brandIcon: {
    fontSize: "35px",
    marginLeft: theme.spacing(2)
  },
  navItems: {
    marginLeft: "auto"
  }
}));
