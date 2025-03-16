import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import CategoryTable from "./components/CategoryTable";

export default function Index() {
    return (
        <>
            <PageMeta
                title="Category - Ein Ecommerce"
                description="This is a page for managing categories, you can add, edit, delete product in this page"
            />
            <PageBreadcrumb
                pageTitle="Category"
                pageDescription="This is a page for managing categories, you can add, edit, delete product in this page"
            />
            <div className="space-y-6">
                <ComponentCard
                    title="Category Table"
                >
                    <CategoryTable />
                </ComponentCard>
            </div>
        </>
    );
}
