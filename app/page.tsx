import Hero from "./ui/components/hero";
import Categories from "./ui/components/categories";
import FeaturedBlogs from "./ui/components/featuredBlogs";

const Home = () => {
  return (
    <div>
      <Hero />

      <Categories />

      <FeaturedBlogs />
    </div>
  );
};

export default Home;
