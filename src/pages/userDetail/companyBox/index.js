import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const CompanyBox = ({ name, bs, catchPhrase }) => {
  return (
    <Box height={1}>
      <Paper elevation={1} width={1} style={{ height: "100%" }}>
        {name === undefined || name === "" || name === null ? (
          <>Loading ...</>
        ) : (
          <Box width={1} px={3} pb={3} pt={1}>
            <h3> Company</h3>
            <Box>{name}</Box>
            <Box>{bs}</Box>
            <Box>
              <q>
                <cite>{catchPhrase}</cite>
              </q>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CompanyBox;
