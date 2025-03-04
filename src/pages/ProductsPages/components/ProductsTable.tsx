import DataTable from "react-data-table-component";
import { useState } from "react";
import { Product, tableData } from "../sample/SampleProduct";
import Button from "../../../components/ui/button/Button";
import { PlusCircleIcon, ArrowPathIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import IconWrapper from "../../../components/ui/button/IconWrapper";

// Columns definition for react-data-table-component
const columns = [
  {
    name: "#",
    width: "7%",
    center: true,
    selector: (row: Product) => row.id,
  },
  {
    name: "Gambar",
    width: "7%",
    center: true,
    selector: (row: Product) => row.image,
    cell: (row: Product) => (
      <img src={row.image} alt={row.name} className="w-10 h-10 object-cover rounded-md" />
    ),
  },
  {
    name: "Nama Produk",
    // width: "28%",
    selector: (row: Product) => row.name,
    sortable: true,
  },
  {
    name: "Kategori",
    width: "18%",
    selector: (row: Product) => row.category,
    sortable: true,
  },
  {
    name: "Harga",
    width: "17%",
    selector: (row: Product) => row.price,
    sortable: true,
  },
  {
    name: "Status",
    width: "12%",
    selector: (row: Product) => row.status,
    sortable: true,
    cell: (row: Product) => (
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${row.status === "Delivered"
          ? "bg-green-100 text-green-800"
          : row.status === "Pending"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
          }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Aksi",
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

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      minHeight: "48px", // Tinggi row
    },
  },
};

export default function ProductsTable() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.toLowerCase();
    setSearch(keyword);

    const filtered = tableData.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  const handleReload = () => {
    setFilteredData(tableData);
    setSearch("");
  };

  return (
    <>
      {/* Input Pencarian */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <Button
            variant="success"
            size="sm"
            startIcon={
              <IconWrapper size="xs">
                <PlusCircleIcon />
              </IconWrapper>
            }
            onClick={() => {
              alert("Add Product");
            }}>
            Add Product
          </Button>
          <Button
            variant="primary"
            size="sm"
            startIcon={
              <IconWrapper size="xs">
                <ArrowPathIcon />
              </IconWrapper>
            }
            onClick={handleReload}>
            Reload Table
          </Button>
        </div>
        <input
          type="text"
          placeholder="Cari Produk..."
          value={search}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-64 transition duration-300"
        />
      </div>
      {/* DataTable */}
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <DataTable
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
}

