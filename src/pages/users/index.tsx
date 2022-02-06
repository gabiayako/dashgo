import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { useQuery } from "react-query";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../hooks/useUsers";

const UserList = () => {
  const { data, isLoading, isRefetching, error } = useUsers();

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1200} my="6" px="6" mx="auto">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {isRefetching && <Spinner size="sm" ml={4} />}
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar usuário
            </Button>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex>Error</Flex>
          ) : (
            <Table colors="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>

                  <Th>Usuário</Th>
                  <Th>Data de cadastro</Th>
                  <Th w="8"></Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map(({ name, email, createdAt }) => (
                  <Tr key={name}>
                    <Td px="6">
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">{name}</Text>
                        <Text fontSize="sm" color="gray.300">
                          {email}
                        </Text>
                      </Box>
                    </Td>

                    <Td>{createdAt}</Td>

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="green"
                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
