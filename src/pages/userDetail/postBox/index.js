import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const PostBox = ({ title, body }) => {
  return (
    <Box height={1}>
      <Paper elevation={1} width={1} style={{ height: "100%" }}>
        {title === undefined || title === "" || title === null ? (
          <>Loading ...</>
        ) : (
          <Box width={1} px={3} pb={3} pt={1}>
            <h3> {title}</h3>
            <p>{body}</p>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default PostBox;
