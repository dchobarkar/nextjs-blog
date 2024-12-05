const BlogContent = ({ content }: { content: object }) => {
  return (
    <section className="container m-auto w-full min-h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <div
        className="prose lg:prose-lg max-w-none container mx-auto px-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export default BlogContent;
