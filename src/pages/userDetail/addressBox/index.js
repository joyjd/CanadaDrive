import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const AddressBox = ({ suite, street, city, zipcode }) => {
  return (
    <Box width={1} height={1}>
      <Paper elevation={1} width={1} style={{ height: "100%" }}>
        {suite === undefined || suite === "" || suite === null ? (
          <>Loading ...</>
        ) : (
          <Box width={1} px={3} pb={3} pt={1}>
            <h3> Address</h3>
            {suite} {street} {city} {zipcode}
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default AddressBox;
