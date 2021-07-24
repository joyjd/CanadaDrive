import React, { useState, useEffect, useRef } from "react";
import DisplayRow from "./../../components/displayRow";
import List from "@material-ui/core/List";
import styles from "./homestyle.module.css";
import SortBox from "./../../components/sortBox";
import SearchBox from "./../../components/searchBox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  let history = useHistory();
  let selectedSortChoice = "name";
  let org_users = useRef([]);

  const handleSort = (key) => {
    return function (a, b) {
      // a should come before b in the sorted order
      if (a[key] < b[key]) {
        return -1;
        // a should come after b in the sorted order
      } else if (a[key] > b[key]) {
        return 1;
        // a and b are the same
      } else {
        return 0;
      }
    };
  };
  const handleSortChange = (val) => {
    selectedSortChoice = val;
    setUsers([...users].sort(handleSort(selectedSortChoice)));
  };

  const handleSearch = (searchText) => {
    let original_set = org_users.current.value;
    let result_set = [];
    original_set.forEach((el) => {
      const { name, username, email } = el;
      if (name.toLowerCase().includes(searchText.toLowerCase()) || username.toLowerCase().includes(searchText.toLowerCase()) || email.toLowerCase().includes(searchText.toLowerCase())) {
        result_set.push(el);
      }
    });
    setUsers(result_set.sort(handleSort(selectedSortChoice)));
  };

  const handleNavigation = (userId) => {
    history.push("UserDetail/" + userId);
  };

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.sort(handleSort(selectedSortChoice)));
        org_users.current.value = [...res];
      });
  }, []);

  return (
    <>
      <Grid container direction='row' justifyContent='flex-end' alignItems='center' spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={36}>
          <h2>Users</h2>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Box width={1} pl={1}>
            <SearchBox handleSearch={(text) => handleSearch(text)} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Box width={1} pr={1}>
            <SortBox handleSortChange={(val) => handleSortChange(val)} />
          </Box>
        </Grid>
      </Grid>

      {users.length > 0 ? (
        <Box width={1} mt={2} pb={5}>
          <List className={styles.list}>
            {users.map((el, index) => {
              const { id, name, username, email } = el;
              return <DisplayRow handleNavigation={(userId) => handleNavigation(userId)} index={index} key={id} userId={id} name={name} username={username} email={email} />;
            })}
          </List>
        </Box>
      ) : (
        <> No data to show </>
      )}
    </>
  );
};

export default Home;
