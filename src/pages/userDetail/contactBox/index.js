import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const ContactBox = ({ username, email, phone, website }) => {
  return (
    <Box height={1}>
      <Paper elevation={1} width={1} style={{ height: "100%" }}>
        {username === undefined || username === "" || username === null ? (
          <>Loading ...</>
        ) : (
          <Box width={1} px={3} pb={3} pt={1}>
            <h3> Contact Info</h3>
            <Box>
              Username: <Link>{username}</Link>
            </Box>
            <Box>
              Email: <Link>{email}</Link>
            </Box>
            <Box>
              Phone: <Link>{phone}</Link>
            </Box>
            <Box>
              Website: <Link href={"https://" + website}>{website}</Link>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ContactBox;
