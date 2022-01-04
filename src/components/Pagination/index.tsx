import { Box, HStack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = () => {
  return (
    <HStack mt={8} align="center" justify="space-between">
      <Box>
        <strong>0 - 10 de 100</strong>
      </Box>

      <HStack spacing="2">
        {[1, 2, 3, 4].map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            pageNumber={pageNumber}
            disabled={pageNumber === 1}
          />
        ))}
      </HStack>
    </HStack>
  );
};
