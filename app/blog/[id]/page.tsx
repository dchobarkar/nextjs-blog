import BlogContent from "@/app/ui/components/blogContent";
import BlogMeta from "@/app/ui/components/blogMeta";
import RelatedBlogs from "@/app/ui/components/relatedBlogs";

const Page = () => {
  return (
    <div>
      <BlogMeta />

      <BlogContent />

      <RelatedBlogs />
    </div>
  );
};

export default Page;
