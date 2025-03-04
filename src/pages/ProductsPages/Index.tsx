import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "./components/ProductsTable";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";

export default function Index() {
    return (
        <>
            <PageMeta
                title="Dashboard - Ein Ecommerce"
                description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Products" />
            <div className="space-y-6">
                <ComponentCard
                    title="Products"
                >
                    <BasicTableOne />
                </ComponentCard>
            </div>
        </>
    );
}
