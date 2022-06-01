import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { BiHomeAlt, BiTrendingUp } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdStarBorder,
  MdOutlineSettings,
} from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io";
import React from "react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Drawer isOpen={onOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader fontSize="25px">Logo</DrawerHeader>
            <DrawerBody>
              <Box
                display="flex"
                alignItems="center"
                width="250px"
                fontSize="22px"
                // border="1px solid black"
                paddingLeft="10px"
                paddingTop="15px"
                paddingBottom="15px"
                borderRadius="10px"
                _hover={{
                  background: "#21abcd",
                  color: "white",
                }}
              >
                <BiHomeAlt />
                <Text marginLeft="15px">Home</Text>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                width="250px"
                fontSize="22px"
                // border="1px solid black"
                paddingLeft="10px"
                paddingTop="15px"
                paddingBottom="15px"
                borderRadius="10px"
                _hover={{
                  background: "#21abcd",
                  color: "white",
                }}
              >
                <BiTrendingUp />
                <Text marginLeft="15px">Trending</Text>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                width="250px"
                fontSize="22px"
                // border="1px solid black"
                paddingLeft="10px"
                paddingTop="15px"
                paddingBottom="15px"
                borderRadius="10px"
                _hover={{
                  background: "#21abcd",
                  color: "white",
                }}
              >
                <MdOutlineExplore />
                <Text marginLeft="15px"> Explore</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                width="250px"
                fontSize="22px"
                // border="1px solid black"
                paddingLeft="10px"
                paddingTop="15px"
                paddingBottom="15px"
                borderRadius="10px"
                _hover={{
                  background: "#21abcd",
                  color: "white",
                }}
              >
                <MdStarBorder />
                <Text marginLeft="15px"> Favourites</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                width="250px"
                fontSize="22px"
                // border="1px solid black"
                paddingLeft="10px"
                paddingTop="15px"
                paddingBottom="15px"
                borderRadius="10px"
                _hover={{
                  background: "#21abcd",
                  color: "white",
                }}
              >
                <MdOutlineSettings />
                <Text marginLeft="15px"> Settinng</Text>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};

export default Sidebar;
