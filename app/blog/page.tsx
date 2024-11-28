import BlogCards from "../ui/components/blogCards";
import Pagination from "../ui/components/pagination";
import SearchBar from "../ui/components/searchBar";

const Page = () => {
  return (
    <div>
      <SearchBar />

      <BlogCards />

      <Pagination />
    </div>
  );
};

export default Page;
