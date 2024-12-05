import BlogCards from "../ui/components/blogCards";
import Pagination from "../ui/components/pagination";
import SearchBar from "../ui/components/searchBar";
import { totalPages } from "../lib/constant";

const Page = () => {
  return (
    <div>
      <SearchBar />

      <BlogCards />

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Page;
