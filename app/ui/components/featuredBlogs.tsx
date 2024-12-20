import { featuredCards } from "@/app/lib/constant";
import FeaturedCard from "./FeatureCard";

const FeaturedBlogs = () => {
  return (
    <section className="container m-auto w-full min-h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <h2>Featured Blogs</h2>

      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {featuredCards.map((blog) => (
          <FeaturedCard
            key={blog.title}
            title={blog.title}
            des={blog.description}
            img={blog.image}
            href={blog.href}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
