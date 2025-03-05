import { Product, tableData } from "../sample/SampleProduct";
import Button from "../../../components/ui/button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconWrapper from "../../../components/ui/button/IconWrapper";
import { currency } from "../../../utils/currency";
import BasicTable from "../../../components/table/BasicTable";
import Badge from "../../../components/ui/badge/Badge";

// Columns definition for react-data-table-component
const columns = [
  {
    name: "#",
    width: "7%",
    center: true,
    selector: (row: Product) => row.id,
  },
  {
    name: "Image",
    width: "7%",
    center: true,
    selector: (row: Product) => row.image,
    cell: (row: Product) => (
      <img src={row.image} alt={row.name} className="w-10 h-10 object-cover rounded-md" />
    ),
  },
  {
    name: "Product Name",
    selector: (row: Product) => row.name,
    sortable: true,
  },
  {
    name: "Category",
    width: "18%",
    selector: (row: Product) => row.category,
    sortable: true,
  },
  {
    name: "Price",
    width: "17%",
    format: (row: Product) => currency(Number(row.price)),
    selector: (row: Product) => row.price,
    sortable: true,
  },
  {
    name: "Status",
    width: "12%",
    selector: (row: Product) => row.status,
    sortable: true,
    cell: (row: Product) => (
      <Badge
        size="sm"
        color={
          row.status === "Delivered"
            ? "success"
            : row.status === "Pending"
              ? "warning"
              : "error"
        }
      >
        {row.status}
      </Badge>
    ),
  },
  {
    name: "Action",
    width: "12%",
    center: true,
    cell: (row: Product) => (
      <div className="flex space-x-2">
        <Button
          variant="warning"
          size="xs"
          onClick={() => {
            alert(`Edit Product with ID: ${row.id}`);
          }}>
          <IconWrapper size="xs">
            <PencilSquareIcon />
          </IconWrapper>
        </Button>
        <Button
          variant="danger"
          size="xs"
          onClick={() => {
            alert(`Delete Product with ID: ${row.id}`);
          }}>
          <IconWrapper size="xs">
            <TrashIcon />
          </IconWrapper>
        </Button>
      </div>
    ),
  },
];

export default function ProductTable() {
  return (
    <BasicTable columns={columns} tableData={tableData} />
  );
}
