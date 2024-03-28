/* eslint-disable react/prop-types */
import { Button, Flex, Input } from "@chakra-ui/react";

const SearchBar = ({ onChange, onClick }) => {
  return (
    <Flex width={"100%"} height={["15vh", "15vh", "15vh"]} paddingY={4} gap={2}>
      <Input
        width={["100%", "100%", "100%", "100%", "100%"]}
        placeholder='Search'
        _hover={{}}
        type='text'
        color={"#DFF5F2"}
        rounded={16}
        onChange={onChange}
        border={"2px rgb(5 255 158) solid"}
      />
      <Button
        onClick={onClick}
        bg={"rgb(5 255 158)"}
        color={"#0d1b2a"}
        borderRadius={"50%"}
        _hover={{}}>
        Q
      </Button>
    </Flex>
  );
};

export default SearchBar;
