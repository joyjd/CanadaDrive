import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import styles from "./rowstyle.module.css";

const DisplayRow = ({ userId, index, name, username, email, handleNavigation }) => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <ListItem onClick={() => handleNavigation(userId)} className={index % 2 !== 0 ? styles.rowBg : styles.row}>
      <ListItemAvatar>
        <Avatar></Avatar>
      </ListItemAvatar>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <ListItemText primary={name} secondary={username} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Link href='#' onClick={preventDefault}>
            <ListItemText primary={email} />
          </Link>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default DisplayRow;
