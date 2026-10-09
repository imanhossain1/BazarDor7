
import Link from "next/link";
import { getCategories } from "../lib/api";

async function CategoryNav() {
  const categoryNavLink = await getCategories();

  return (
    <div className="flex gap-3">
      {categoryNavLink.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
        >
          {category.icon} {category.nameBn}
        </Link>
      ))}
    </div>
  );
}

export default CategoryNav;
