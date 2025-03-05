import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ProductTable from "./components/ProductTable";

export default function Index() {
    return (
        <>
            <PageMeta
                title="Products - Ein Ecommerce"
                description="This is a page for managing products, you can add, edit, delete product in this page"
            />
            <PageBreadcrumb pageTitle="Products" />
            <div className="space-y-6">
                <ComponentCard
                    title="Products"
                >
                    <ProductTable />
                </ComponentCard>
            </div>
        </>
    );
}
