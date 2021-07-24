import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PrivateRoutes from "./../../router/PrivateRoutes";
const LandingPage = () => {
  return (
    <Container maxWidth='md'>
      <Box mt={5} width={1}>
        <PrivateRoutes />
      </Box>
    </Container>
  );
};

export default LandingPage;
