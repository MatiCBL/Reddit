import { Flex, Button, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image
          src="/images/googlelogo.png"
          height="20px"
          mr={4}
          alt="google logo"
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other Provider</Button>
    </Flex>
  );
};
export default OAuthButtons;
