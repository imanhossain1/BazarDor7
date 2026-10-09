import {getCategories} from "../../../lib/api";
import {getCategoryProducts} from "../../../lib/api";
import CategoryProductList from "../../../components/CategoryProductList";

type CategoryDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

async function CategoryDetailsPage({params}: CategoryDetailsPageProps) {
    const {slug} = await params;

    const products = await getCategoryProducts(slug);
    const getCategoriesData = await getCategories();
    const category = getCategoriesData.find((item) => item.slug === slug);

    return (
        <div>
            <h1>
                hello world : {category?.icon} {category?.nameBn}
            </h1>
            <CategoryProductList products={products} />{" "}
        </div>
    );
}

export default CategoryDetailsPage;
