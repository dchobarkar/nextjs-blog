import { categoryCards } from "@/app/lib/constant";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="container m-auto w-full min-h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <h2>Browse by Categories</h2>

      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {categoryCards.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            des={category.description}
            img={category.image}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
