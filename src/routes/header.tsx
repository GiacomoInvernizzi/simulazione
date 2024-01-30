import { Box, Center, Image, Stack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Blockbuster_logo.svg.png";

export const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyItems="center"
        paddingLeft="50px"
        paddingRight={"50px"}
        backgroundColor={"yellow"}
      >
        <Link to={"/"}>
          <Image boxSize="100px" src={logo} alt="blockbusters" />
        </Link>
        <Center
          flex="1"
          fontSize={"xxx-large"}
          fontFamily={"comic sans"}
          color={"blue"}
          fontWeight={"bold"}
        >
          Cool Film Website!
        </Center>
      </Stack>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};
