import { Box, HStack, Text } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";
import { getPages } from "./utils";

const siblingsCount = 1;
interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  console.log("current page", currentPage);
  const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
  1 - currentPage - siblingsCount;
  return (
    <HStack mt={8} align="center" justify="space-between">
      <Box>
        <strong>0 - 10 de 100</strong>
      </Box>

      <HStack spacing="2">
        {currentPage - siblingsCount > 1 ? (
          <>
            <PaginationButton
              onPageChange={onPageChange}
              key={1}
              pageNumber={1}
              disabled={currentPage === 1}
            />
            {currentPage - siblingsCount > 2 ? (
              <Text color={"gray.300"} width="8" textAlign={"center"}>
                ...
              </Text>
            ) : null}
          </>
        ) : null}
        {pages.map((pageNumber) => (
          <PaginationButton
            onPageChange={onPageChange}
            key={pageNumber}
            pageNumber={pageNumber}
            disabled={pageNumber === currentPage}
          />
        ))}
        {currentPage + siblingsCount < totalCountOfRegisters ? (
          <>
            {currentPage + siblingsCount < totalCountOfRegisters - 1 ? (
              <Text color={"gray.300"} width="8" textAlign={"center"}>
                ...
              </Text>
            ) : null}

            <PaginationButton
              onPageChange={onPageChange}
              key={totalCountOfRegisters}
              pageNumber={totalCountOfRegisters}
              disabled={totalCountOfRegisters === currentPage}
            />
          </>
        ) : null}
      </HStack>
    </HStack>
  );
};
