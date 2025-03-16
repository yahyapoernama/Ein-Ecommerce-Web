import { useState, useEffect } from "react";
import { Category } from "../sample/SampleCategory";
import Button from "../../../components/ui/button/Button";
import { PlusCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconWrapper from "../../../components/ui/button/IconWrapper";
import BasicTable from "../../../components/table/BasicTable";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { useModal } from "../../../context/ModalContext";
import api from "../../../api/axios";

const fetchData = async () => {
  const response = await api.get("/categories");
  return response.data.categories;
};

const deleteData = async (id: number) => {
  await api.delete(`/categories/${id}`);
};

const CategoryTable = () => {
  const { openModal, closeModal } = useModal();
  const [modalTitle, setModalTitle] = useState("Add Data");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [tableData, setTableData] = useState<Category[]>([]);
  const [id, setId] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
  });

  const fetchTableData = async () => {
    const data = await fetchData();
    setTableData(data);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  useEffect(() => {
    setModalContent(modalContentForm);
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleReload = () => {
    fetchTableData();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(modalTitle);
    try {
      if (modalTitle === "Add Category") {
        await api.post("/categories", formData);
      } else {
        await api.put(`/categories/${id}`, formData);
      }
      closeModal();
      fetchTableData();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "#",
      width: "7%",
      center: "true",
      selector: (_: any, index: number) => index + 1,
    },
    {
      name: "Category Name",
      selector: (row: Category) => row.name,
      sortable: true,
    },
    {
      name: "Action",
      width: "12%",
      center: "true",
      cell: (row: Category) => (
        <div className="flex space-x-2">
          <Button
            variant="warning"
            size="xs"
            onClick={() => {
              setModalTitle("Edit Category");
              setId(row.id);
              handleChange({ 
                target: { name: "name", value: row.name },
              } as React.ChangeEvent<HTMLInputElement>);
              openModal();
            }}>
            <IconWrapper size="xs">
              <PencilSquareIcon />
            </IconWrapper>
          </Button>
          <Button
            variant="danger"
            size="xs"
            onClick={async () => {
              setModalTitle("Delete Category");
              setModalContent(
                <>
                  <p>Are you sure you want to delete this category?</p>
                  <p className="mt-1">
                    Category Name: {" "}
                    <span className="font-semibold text-red-600">{row.name}</span>
                  </p>
                  <div className="mt-4">
                    <Button variant="danger" size="sm" className="mr-1"
                      onClick={async () => {
                        await deleteData(row.id);
                        handleReload();
                        closeModal();
                      }}>
                      Delete
                    </Button>
                    <Button variant="secondary" size="sm" onClick={closeModal}>
                      Close
                    </Button>
                  </div>
                </>
              );
              openModal();
            }}>
            <IconWrapper size="xs">
              <TrashIcon />
            </IconWrapper>
          </Button>
        </div>
      ),
    },
  ];

  const modalContentForm = (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Category Name"
        className="w-full"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <div className="mt-4">
        <Button variant="success" size="sm" className="mr-1" type="submit">
          Submit
        </Button>
        <Button variant="secondary" size="sm" onClick={closeModal}>
          Close
        </Button>
      </div>
    </form>
  );

  return (
    <BasicTable
      columns={columns}
      tableData={tableData}
      fetchData={fetchData}
      customButtons={
        <Button
          variant="success"
          size="sm"
          startIcon={
            <IconWrapper size="xs">
              <PlusCircleIcon />
            </IconWrapper>
          }
          onClick={() => {
            setModalTitle("Add Category");
            setId(0);
            handleChange({ 
              target: { name: "name", value: "" } 
            } as React.ChangeEvent<HTMLInputElement>);
            openModal();
          }}>
          Add Category
        </Button>
      }
      modalTitle={modalTitle}
      modalContent={modalContent}
    />
  );
};

export default CategoryTable;