import { Category, tableData } from "../sample/SampleCategory";
import Button from "../../../components/ui/button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconWrapper from "../../../components/ui/button/IconWrapper";
import BasicTable from "../../../components/table/BasicTable";
import Badge from "../../../components/ui/badge/Badge";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { useModal } from "../../../context/ModalContext";

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

const CategoryTable = () => {
  const { closeModal } = useModal();

  return (
    <BasicTable
      columns={columns}
      tableData={tableData}
      addDataButton={true}
      modalTitle="Add Data"
      modalContent={
        <form onSubmit={(e) => {
          e.preventDefault();
          // const formData = new FormData(e.currentTarget);
          // const name = formData.get('name') as string;
          alert("uhuy");
        }}>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="Category Name" className="w-full" />
          <div className="mt-4">
            <Button variant="success" size="sm" className="mr-1" type="submit">
              Submit
            </Button>
            <Button variant="secondary" size="sm" onClick={closeModal}>
              Close
            </Button>
          </div>
        </form>
      }
    />
  );
};

export default CategoryTable;