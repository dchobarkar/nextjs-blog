"use client";

const SearchBar = () => {
  const handleSearch = () => {
    alert("Search Triggered");
  };

  return (
    <section className="container m-auto mt-4 w-full h-[25vh] px-6 py-4 flex items-center justify-center space-y-3">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a blog..."
          className="w-full py-2 pl-4 pr-12 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />

        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
