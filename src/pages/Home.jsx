import {
  Box,
  CircularProgress,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import SearchBar from "../component/searchBar";
import Navbar from "../component/Navbar";
import Cards from "../component/cards";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useFetch(
    `https://api.jikan.moe/v4/anime?q=${search}&sfw`,
  );
  const submitForm = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    console.log(search);
  };

  console.log({ data, isLoading, isError });

  return (
    <Box width={"100%"} bg={"#0d1b2a"} height={"fit-content"}>
      <Navbar />

      <Flex
        width={"100%"}
        height={"15vh"}
        paddingX={10}
        py={4}
        justifyContent={"center"}
        alignItems={"center"}>
        <Box w={["100%", "70%", "50%", "40%", "40%"]}>
          <SearchBar onChange={submitForm} />
        </Box>
      </Flex>
      {isLoading && (
        <Flex
          width={"100%"}
          height={"80vh"}
          justifyContent={"center"}
          paddingX={10}
          alignItems={"center"}>
          <CircularProgress isIndeterminate color='rgb(5 255 158)' />
        </Flex>
      )}
      {isError && (
        <Flex
          width={"100%"}
          height={"80vh"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Text
            textAlign={"center"}
            color={"#DFF5F2"}
            fontSize={23}
            fontWeight={500}>
            Error! Unable to load the data.{" "}
          </Text>
        </Flex>
      )}
      <SimpleGrid
        paddingX={[4, 4, 7, 10, 10]}
        columns={[2, 2, 3, 4, 5]}
        spacing={4}>
        {data &&
          data.data &&
          data.data.map((anime) => (
            <Cards
              key={anime.mal_id}
              link={`/${anime.mal_id}`}
              img={
                anime.images &&
                anime.images.webp &&
                anime.images.webp.large_image_url
              }
              title={anime.title}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
