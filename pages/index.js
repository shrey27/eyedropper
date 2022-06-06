import { Container, Flex, Heading } from "@chakra-ui/react";
import Eyedropper from "../components/Eyedropper";

const HomePage = () => {
  return (
    <Container>
      <Container maxW="container.xl" p={0} paddingBottom="10">
        <Flex
          py={0}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading>Eyedropper Tool</Heading>
          <Eyedropper />
        </Flex>
      </Container>
    </Container>
  );
};

export default HomePage;
