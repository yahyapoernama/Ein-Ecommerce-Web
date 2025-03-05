interface Category {
    id: number;
    name: string;
    status: "Active" | "Inactive";
}

// Define the table data using the interface
const tableData: Category[] = [
    {
        id: 1,
        name: "Laptop",
        status: "Active",
    },
    {
        id: 2,
        name: "Phone",
        status: "Active",
    },
    {
        id: 3,
        name: "TV",
        status: "Inactive",
    },
];

export type { Category };
export { tableData };