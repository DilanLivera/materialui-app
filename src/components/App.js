import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import SignupForm from "./SignupForm";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";

import "./styles/App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Grid container justify='space-around'>
        <Grid item xs={12} s={6} md={4}>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignupForm} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
