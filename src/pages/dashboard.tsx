import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1200} my="6" px="6" mx="auto">
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
