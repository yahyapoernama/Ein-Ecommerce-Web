import { PlusCircleIcon, ArrowPathIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Button from "../ui/button/Button";
import IconWrapper from "../ui/button/IconWrapper";
import { useTheme } from "../../context/ThemeContext";

interface BasicTableProps {
    columns: any[];
    tableData: any[];
}

createTheme('solarized', {
    background: {
        default: 'transparent',
    },
    text: {
        primary: '#ffffff',
        secondary: '#ffffff',
    },
    button: {
        default: '#ffffff',
        hover: 'black',
        disabled: '#777777',
    }
});

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

export default function BasicTable({ columns, tableData }: BasicTableProps) {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(tableData);
    const [isReloading, setIsReloading] = useState(false);
    const { theme } = useTheme();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = event.target.value.toLowerCase();
        setSearch(keyword);

        const filtered = tableData.filter((item) =>
            item.name.toLowerCase().includes(keyword)
        );
        setFilteredData(filtered);
    };

    const handleReload = () => {
        setIsReloading(true);
        setTimeout(() => {
            setFilteredData(tableData);
            setSearch("");
            setIsReloading(false);
        }, 1000);
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
                            alert("Add Data");
                        }}>
                        Add Data
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        startIcon={
                            <IconWrapper size="xs">
                                <ArrowPathIcon className={isReloading ? "animate-spin" : ""} />
                            </IconWrapper>
                        }
                        onClick={handleReload}>
                        Reload Table
                    </Button>
                </div>
                <input
                    type="text"
                    placeholder="Search ..."
                    value={search}
                    onChange={handleSearch}
                    className="p-2 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 w-64 text-sm rounded-lg"
                />
            </div>
            {/* DataTable */}
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <AnimatePresence>
                    {isReloading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-white dark:bg-gray-dark bg-opacity-80 dark:bg-opacity-80 flex items-center justify-center z-10"
                        >
                            <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500 h-10 w-10" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    theme={theme === 'dark' ? 'solarized' : 'default'}
                    customStyles={customStyles}
                    noDataComponent="No data available"
                    pagination
                />
            </div>
        </>
    );
}



