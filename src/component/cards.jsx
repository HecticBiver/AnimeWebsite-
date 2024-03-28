/* eslint-disable react/prop-types */
import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Cards = ({ title, img, link }) => {
  return (
    <Card maxW='sm' height={"fit-content"} bg={"#0d2741"} rounded={12}>
      <Link to={link}>
        <Image
          width={"full"}
          src={img}
          height={["40vh", "40vh", "45vh", "50vh", "50vh"]}
          objectFit={"cover"}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Flex width={"100%"} alignItems={"center"} p={4}>
          <Text noOfLines={1} color={"#DFF5F2"} size='md' fontWeight={500}>
            {title}
          </Text>
        </Flex>
      </Link>
    </Card>
  );
};

export default Cards;
