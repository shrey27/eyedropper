import { Container, Flex, Heading } from "@chakra-ui/react";
import Eyedropper from "../components/Eyedropper";

const HomePage = () => {
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Heading as="h2" size="lg" margin={1}>
          EYEDROPPER TOOL
        </Heading>
        <Eyedropper />
      </Flex>
    </Container>
  );
};

export default HomePage;
