"use client";

import { useState } from "react";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [currPage, setCurrPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrPage(page);

    console.log(`Navigating to page ${page}`);
  };

  const handlePrev = () => {
    if (currPage > 1) handlePageChange(currPage - 1);
  };

  const handleNext = () => {
    if (currPage < totalPages) handlePageChange(currPage + 1);
  };

  return (
    <section className="container m-auto px-4 py-6 flex flex-wrap justify-center mt-6">
      <button
        onClick={handlePrev}
        disabled={currPage === 1}
        className="px-4 py-2 m-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 m-1 rounded-md ${
              currPage === page
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currPage === totalPages}
        className="px-4 py-2 m-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
