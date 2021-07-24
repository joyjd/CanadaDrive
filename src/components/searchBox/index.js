import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const SearchBox = ({ handleSearch }) => {
  const handleChange = (ev) => {
    handleSearch(ev.target.value);
  };

  return <TextField style={{ width: "100%" }} id='outlined-basic' label='Search' variant='outlined' onChange={handleChange} />;
};

export default SearchBox;
