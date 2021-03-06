import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1200}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
