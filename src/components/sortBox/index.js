import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const sortOptions = ["name", "username", "email"];

const SortBox = ({ handleSortChange }) => {
  const classes = useStyles();
  const [val, setVal] = useState("");
  const handleChange = (ev) => {
    setVal(ev.target.value);
    handleSortChange(ev.target.value);
  };
  useEffect(() => {
    setVal(sortOptions[0]);
  }, []);
  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel id='demo-simple-select-outlined-label'>Sort By</InputLabel>
      <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={val} label='Sort By' onChange={handleChange}>
        {sortOptions.map((el, index) => {
          return (
            <MenuItem key={index} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SortBox;
