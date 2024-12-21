import RelatedBlogs from "@/app/ui/components/relatedBlogs";

import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/app/posts/${slug}.mdx`);

  if (!Post) return notFound();

  return (
    <div>
      <section className="container m-auto w-full max-w-5xl min-h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
        <div className="prose lg:prose-lg max-w-none container mx-auto px-6">
          <Post />
        </div>
      </section>

      <RelatedBlogs />
    </div>
  );
};

export default Page;
