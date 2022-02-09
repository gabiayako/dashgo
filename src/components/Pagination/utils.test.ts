import { getPages } from "./utils";

describe("getPages", () => {
  describe("works properly when siblings count is 2", () => {
    let currentPage = 4;
    let siblingsCount = 2;
    let totalCountOfRegisters = 200;

    it("works properly when page is in the middle", () => {
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([2, 3, 4, 5, 6]);
    });

    it("works properly when page is near the end", () => {
      currentPage = 200;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([198, 199, 200]);
    });

    it("works properly when page is the fisrt one", () => {
      let currentPage = 1;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([1, 2, 3]);
    });

    it("works properly when page is near the beginning", () => {
      let currentPage = 2;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([1, 2, 3, 4]);
    });
  });

  describe("works properly when siblings count is 1", () => {
    let currentPage = 4;
    let siblingsCount = 1;
    let totalCountOfRegisters = 200;

    it("works properly when page is in the middle", () => {
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([3, 4, 5]);
    });

    it("works properly when page is near the end", () => {
      currentPage = 200;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([199, 200]);
    });

    it("works properly when page is the fisrt one", () => {
      let currentPage = 1;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([1, 2]);
    });

    it("works properly when page is near the beginning", () => {
      let currentPage = 2;
      const pages = getPages(currentPage, siblingsCount, totalCountOfRegisters);
      expect(pages).toEqual([1, 2, 3]);
    });
  });
});
