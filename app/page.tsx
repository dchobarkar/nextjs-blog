import Categories from "./ui/components/categories";
import FeaturedBlogs from "./ui/components/featuredBlogs";
import Hero from "./ui/components/hero";

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
