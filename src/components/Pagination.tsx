import { Box, Button, HStack, theme } from "@chakra-ui/react";

const PaginationButton = ({
  pageNumber,
  disabled,
}: {
  pageNumber: number;
  disabled: boolean;
}) => {
  const _disabled = {
    backgroundColor: theme.colors.pink[500],
    cursor: "default",
  };

  const _hover = {
    backgroundColor: theme.colors.gray[500],
  };

  const additionalProps = disabled
    ? {
        colorScheme: "pink",
        disabled: true,
        _disabled: _disabled,
      }
    : {
        bg: theme.colors.gray[700],
        _hover: _hover,
      };

  return (
    <Button size="sm" fontSize="xs" w="4" {...additionalProps}>
      {pageNumber}
    </Button>
  );
};

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
