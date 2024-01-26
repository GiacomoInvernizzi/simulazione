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
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{movie.Title}</Heading>
              <Text>{movie.Year}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Image objectFit="cover" src={movie.Poster} alt={movie.Title} />
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
        <Button flex="1" variant="ghost" leftIcon={<TriangleUpIcon />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<TriangleDownIcon />}>
          Dislike
        </Button>
      </CardFooter>
    </Card>
  );
};
