import { Button, theme } from "@chakra-ui/react";

const PaginationButton = ({
  pageNumber,
  disabled,
  onPageChange,
}: {
  pageNumber: number;
  disabled: boolean;
  onPageChange?: (page: number) => void;
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
    <Button
      onClick={() => onPageChange(pageNumber)}
      size="sm"
      fontSize="xs"
      w="4"
      {...additionalProps}
    >
      {pageNumber}
    </Button>
  );
};

export { PaginationButton };
