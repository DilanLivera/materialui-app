import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import useStyles from "./styles/NavbarStyles";

function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar position='static' color='primary' className={classes.appBar}>
      <Toolbar>
        <NavLink to='/' className={classes.routeLink}>
          <Typography variant='h4' className={classes.title}>
            Coffee Club
          </Typography>
        </NavLink>

        <FreeBreakfastIcon outlined='true' className={classes.brandIcon} />
        <div className={classes.navItems}>
          {props.location.pathname !== "/signup" ? (
            <Button color='inherit'>
              <NavLink to='/signup' className={classes.routeLink}>
                SignUp
              </NavLink>
            </Button>
          ) : (
            ""
          )}

          {props.location.pathname !== "/login" ? (
            <Button color='inherit'>
              <NavLink to='/login' className={classes.routeLink}>
                Login
              </NavLink>
            </Button>
          ) : (
            ""
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Navbar);
