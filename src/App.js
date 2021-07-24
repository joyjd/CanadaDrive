import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import LandingPage from "./pages/landingPage";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <LandingPage />
    </React.Fragment>
  );
};

export default App;
