import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex paddingX={10} width={"100%"} height={"12vh"} py={4}>
      <Link to={"/"}>
        <Text color={"#DFF5F2"} fontSize={27} fontWeight={500}>
          Anime
          <span
            style={{
              color: "rgb(5 255 158)",
              fontWeight: 700,
            }}>
            World.
          </span>
        </Text>
      </Link>
    </Flex>
  );
}

export default Navbar;
