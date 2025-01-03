import { relatedBlogs } from "@/app/lib/constant";
import FeaturedCard from "./FeatureCard";

const RelatedBlogs = () => {
  return (
    <section className="container m-auto w-full min-h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <h2>Related Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {relatedBlogs.map((blog) => (
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

export default RelatedBlogs;
