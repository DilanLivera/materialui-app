import React from "react";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";
import Navbar from "./Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Grid container justify='space-around'>
          <Grid item xs={12} md={4}>
            <Form />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
