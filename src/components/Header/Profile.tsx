import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabi Ueno</Text>
        <Text color="gray.300" fontSize="sm">
          gabi@example.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Gabi Ueno"
        src="https://www.github.com/gabiayako.png"
      />
    </Flex>
  );
}
