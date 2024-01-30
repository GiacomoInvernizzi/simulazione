import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { MovieType } from "../types/types";

export const MovieCard = (movie: MovieType) => {
  return (
    <Card maxW="md" bg="white" boxShadow="md" borderRadius="lg">
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading size="md">{movie.Title}</Heading>
            <Text color="gray.500">{movie.Year}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p="4">
        <Image
          objectFit="cover"
          src={movie.Poster}
          alt={movie.Title}
          borderRadius="md"
          alignSelf={"center"}
          height={"100%"}
        />
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Flex justify="center">
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<TriangleUpIcon />}
            _hover={{ bg: "gray.200" }}
          >
            Like
          </Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<TriangleDownIcon />}
            _hover={{ bg: "gray.200" }}
          >
            Dislike
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};
