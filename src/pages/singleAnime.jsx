import {
  Flex,
  Box,
  Image,
  List,
  ListItem,
  ListIcon,
  HStack,
  Tag,
  TagLabel,
  AspectRatio,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  CircularProgress,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FaStar, FaVideo, FaPlay } from "react-icons/fa";
import Navbar from "../component/Navbar";
import { useFetch } from "../hooks/useFetch";
import Cards from "../component/cards";
const SingleAnime = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(
    `https://api.jikan.moe/v4/anime/${id}/full`,
  );
  const { data: cast } = useFetch(
    `https://api.jikan.moe/v4/anime/${id}/characters`,
  );
  console.log(data);
  console.log("cast", cast && cast.data.map((a) => a.character));
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width={"100%"} bg={"#0D1B2A"} height={"fit-content"}>
      <Navbar />
      {isLoading ? (
        <Flex
          width={"100%"}
          height={"100vh"}
          justifyContent={"center"}
          paddingX={10}
          alignItems={"center"}>
          <CircularProgress isIndeterminate color='rgb(5 255 158)' />
        </Flex>
      ) : (
        <Flex
          paddingX={["1rem", "1.3rem", "6em", "10rem", "10rem"]}
          width={"100%"}
          height={"fit-content"}
          direction={["column", "column", "row", "row", "row"]}
          paddingY={5}>
          <Box
            width={["full", "full", "70%", "70%", "70%"]}
            height={["65vh", "65vh", "100vh", "100vh", "100vh"]}>
            <Image
              width={"100%"}
              bg={"#0d2741"}
              borderLeftRadius={12}
              objectFit={["contain", "contain", "cover", "cover", "cover"]}
              src={
                data &&
                data.data &&
                data.data.images &&
                data.data.images.webp &&
                data.data.images.webp.large_image_url
              }
              height={"100%"}
            />
          </Box>
          <Box
            borderRightRadius={12}
            width={"100%"}
            bg={"#0d2741"}
            height={[
              "fit-content",
              "fit-content",
              "fit-content",
              "100vh",
              "100vh",
            ]}
            boxShadow={"md"}
            p={4}>
            <List spacing={3} color={"#DFF5F2"}>
              <ListItem fontWeight={600} fontSize={20}>
                {data && data.data && data.data.title}
              </ListItem>
              <ListItem fontWeight={600}>
                <ListIcon as={FaStar} color='yellow' fontSize={22} />
                {data && data.data && data.data.score}
              </ListItem>
              <ListItem>
                <HStack spacing={4}>
                  {data &&
                    data.data &&
                    data.data.genres.map((genre) => (
                      <Tag
                        size={"md"}
                        padding={2}
                        key={genre.mal_id}
                        borderRadius='full'
                        bg={"rgb(5 255 158)"}>
                        <TagLabel>{genre.name}</TagLabel>
                      </Tag>
                    ))}
                </HStack>
              </ListItem>

              <ListItem>
                <ListIcon as={FaVideo} color='rgb(5 255 158)' />
                <Button
                  leftIcon={FaVideo}
                  onClick={onOpen}
                  rounded={10}
                  size={"md"}
                  bg={"rgb(5 255 158)"}>
                  <FaPlay /> Trailer
                </Button>

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  bg={"#0d2741"}
                  size={"2xl"}
                  scrollBehavior={"inside"}>
                  <ModalOverlay />
                  <ModalContent bg={"#0d2741"}>
                    <ModalHeader color={"#DFF5F2"}>
                      {data && data.data && data.data.title}
                    </ModalHeader>
                    <ModalCloseButton color={"#DFF5F2"} />
                    <ModalBody color={"#DFF5F2"}>
                      {data &&
                      data.data &&
                      data.data.trailer &&
                      data.data.trailer.embed_url ? (
                        <AspectRatio maxW='560px' ratio={1.5} rounded={4}>
                          <iframe
                            title='naruto'
                            src={data.data.trailer.embed_url}
                            allowFullScreen
                          />
                        </AspectRatio>
                      ) : (
                        <Text fontWeight={500} fontSize={18}>
                          Video trailer not available!
                        </Text>
                      )}
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <Text fontWeight={400} noOfLines={[20, 20, 16, 16, 15]}>
                  {data && data.data && data.data.synopsis}
                </Text>
              </ListItem>
            </List>
          </Box>
        </Flex>
      )}
      <Box width={"100%"} borderRightRadius={12} paddingX={[4, 4, 7, 10, 10]}>
        <Text fontWeight={600} fontSize={23} color={"#DFF5F2"} py={4}>
          Main Cast
        </Text>
        <SimpleGrid
          width={"100%"}
          bg={"#0d2741"}
          columns={[2, 2, 3, 4, 5]}
          padding={4}
          spacing={3}>
          {cast &&
            cast.data
              .filter((a) => a.role === "Main")
              .map((cast) => (
                <Cards
                  key={cast && cast.character && cast.character.mal_id}
                  img={
                    cast &&
                    cast.character &&
                    cast.character.images &&
                    cast.character.images.webp &&
                    cast.character.images.webp.image_url
                  }
                  title={cast && cast.character && cast.character.name}
                />
              ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SingleAnime;
