export const getPages = (
  currentPage: number,
  siblingsCount: number,
  totalCountOfRegisters: number
) => {
  const firstMiddlePage =
    currentPage - siblingsCount > 1 ? currentPage - siblingsCount : 1;

  let middlePagesAmount: number;
  if (
    currentPage - siblingsCount >= 1 &&
    currentPage + siblingsCount <= totalCountOfRegisters
  ) {
    middlePagesAmount = siblingsCount * 2 + 1;
  } else if (currentPage - siblingsCount < 1) {
    middlePagesAmount = currentPage + siblingsCount;
  } else if (currentPage + siblingsCount > totalCountOfRegisters) {
    middlePagesAmount = siblingsCount * 2 + 1;
  }
  return [...new Array(middlePagesAmount)]
    .map((_, index) => {
      return index + firstMiddlePage;
    })
    .filter((page) => page <= totalCountOfRegisters);
};
