import { Container, Flex, Heading, Input } from "@chakra-ui/react";
import Eyedropper from "../components/Eyedropper";
import { useCanvas } from "../context/CanvasContext";

const HomePage = () => {
  const { setImage } = useCanvas();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setImage(base64File);
  };

  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Heading as="h2" size="lg" margin={1}>
          EYEDROPPER TOOL
        </Heading>
        <Eyedropper />
        <Heading as="h3" size="md" margin={1} textAlign="start" marginTop={4}>
          Choose an Image
        </Heading>
        <Input
          type="file"
          onChange={onFileChange}
          multiple
          accept="image/*"
          margin={4}
          size={"sm"}
        />
      </Flex>
    </Container>
  );
};

export default HomePage;
