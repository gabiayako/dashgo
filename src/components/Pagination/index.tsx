import { Box, HStack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";
import { getPages } from "./utils";

const siblingsCount = 1;
interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
  1 - currentPage - siblingsCount;
  return (
    <HStack mt={8} align="center" justify="space-between">
      <Box>
        <strong>0 - 10 de 100</strong>
      </Box>

      <HStack spacing="2">
        {currentPage - siblingsCount > 1 ? (
          <PaginationButton key={1} pageNumber={1} disabled={false} />
        ) : null}
        {pages.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            pageNumber={pageNumber}
            disabled={pageNumber === 1}
          />
        ))}
        {currentPage + siblingsCount < totalCountOfRegisters ? (
          <PaginationButton
            key={totalCountOfRegisters}
            pageNumber={totalCountOfRegisters}
            disabled={false}
          />
        ) : null}
      </HStack>
    </HStack>
  );
};
