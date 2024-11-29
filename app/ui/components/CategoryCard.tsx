import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  title,
  des,
  img,
  href,
}: {
  title: string;
  des: string;
  img: string;
  href: string;
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 p-4 border-b border-gray-200">
        {title}
      </h3>

      <div className="w-full h-48 object-cover relative">
        <Image src={img} alt={`${title}'s cover`} fill />
      </div>

      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4">{des}</p>

        <Link
          href={href}
          className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
