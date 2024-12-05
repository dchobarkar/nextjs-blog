import BlogContent from "@/app/ui/components/blogContent";
import BlogMeta from "@/app/ui/components/blogMeta";
import RelatedBlogs from "@/app/ui/components/relatedBlogs";

import { blogContent, blogMeta } from "@/app/lib/constant";

const Page = () => {
  return (
    <div>
      <BlogMeta
        title={blogMeta.title}
        author={blogMeta.author}
        date={blogMeta.date}
        category={blogMeta.category}
      />

      <BlogContent content={blogContent} />

      <RelatedBlogs />
    </div>
  );
};

export default Page;
