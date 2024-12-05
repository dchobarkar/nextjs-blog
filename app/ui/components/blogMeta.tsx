const BlogMeta = ({
  title,
  author,
  date,
  category,
}: {
  title: string;
  author: string;
  date: string;
  category: string;
}) => {
  return (
    <section className="container m-auto w-full px-6 py-4 flex flex-col justify-center items-center border-b border-gray-200 space-y-3">
      <h1>{title}</h1>

      <div className="text-sm text-gray-600 flex flex-wrap items-center gap-4">
        <span>
          <strong>Author:</strong> {author}
        </span>

        <span>
          <strong>Date:</strong>{" "}
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
    </section>
  );
};

export default BlogMeta;
