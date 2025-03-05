import { Category, tableData } from "../sample/SampleCategory";
import Button from "../../../components/ui/button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconWrapper from "../../../components/ui/button/IconWrapper";
import BasicTable from "../../../components/table/BasicTable";
import Badge from "../../../components/ui/badge/Badge";

// Columns definition for react-data-table-component
const columns = [
  {
    name: "#",
    width: "7%",
    center: true,
    selector: (row: Category) => row.id,
  },
  {
    name: "Category Name",
    selector: (row: Category) => row.name,
    sortable: true,
  },
  {
    name: "Status",
    width: "12%",
    selector: (row: Category) => row.status,
    sortable: true,
    cell: (row: Category) => (
      <Badge
        size="sm"
        color={
          row.status === "Active"
            ? "success"
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
    cell: (row: Category) => (
      <div className="flex space-x-2">
        <Button
          variant="warning"
          size="xs"
          onClick={() => {
            alert(`Edit Category with ID: ${row.id}`);
          }}>
          <IconWrapper size="xs">
            <PencilSquareIcon />
          </IconWrapper>
        </Button>
        <Button
          variant="danger"
          size="xs"
          onClick={() => {
            alert(`Delete Category with ID: ${row.id}`);
          }}>
          <IconWrapper size="xs">
            <TrashIcon />
          </IconWrapper>
        </Button>
      </div>
    ),
  },
];

export default function CategoryTable() {
  return (
    <BasicTable columns={columns} tableData={tableData} />
  );
}
