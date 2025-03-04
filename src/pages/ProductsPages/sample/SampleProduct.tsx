interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    status: string;
    image: string;
}

// Define the table data using the interface
const tableData: Product[] = [
    {
        id: 1,
        name: "MacBook Pro 13”",
        category: "Laptop",
        price: "23990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 2,
        name: "Apple Watch Ultra",
        category: "Watch",
        price: "8790000",
        status: "Pending",
        image: "/images/no_image.jpg",
    },
    {
        id: 3,
        name: "iPhone 15 Pro Maxs",
        category: "SmartPhone",
        price: "18690000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 4,
        name: "iPad Pro 3rd Gen",
        category: "Electronics",
        price: "16990000",
        status: "Canceled",
        image: "/images/no_image.jpg",
    },
    {
        id: 5,
        name: "AirPods Pro 2nd Gen",
        category: "Accessories",
        price: "2400000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 6,
        name: "Apple TV 4K",
        category: "Electronics",
        price: "6990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 7,
        name: "Apple Pencil",
        category: "Accessories",
        price: "1990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 8,
        name: "iPad Air 4th Gen",
        category: "Electronics",
        price: "13990000",
        status: "Pending",
        image: "/images/no_image.jpg",
    },
    {
        id: 9,
        name: "Apple Watch SE",
        category: "Watch",
        price: "5990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 10,
        name: "iPhone 15",
        category: "SmartPhone",
        price: "15990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 11,
        name: "Apple Magic Mouse 2",
        category: "Accessories",
        price: "1990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 12,
        name: "iPad mini 5th Gen",
        category: "Electronics",
        price: "10990000",
        status: "Pending",
        image: "/images/no_image.jpg",
    },
    {
        id: 13,
        name: "Apple Watch Series 7",
        category: "Watch",
        price: "7990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 14,
        name: "iPhone 15 Pro",
        category: "SmartPhone",
        price: "17990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 15,
        name: "Apple TV HD",
        category: "Electronics",
        price: "4990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 16,
        name: "Apple Watch Series 6",
        category: "Watch",
        price: "6490000",
        status: "Pending",
        image: "/images/no_image.jpg",
    },
    {
        id: 17,
        name: "iPad Pro 2nd Gen",
        category: "Electronics",
        price: "12990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 18,
        name: "iPhone 14 Pro Max",
        category: "SmartPhone",
        price: "19990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 19,
        name: "Apple AirTag",
        category: "Accessories",
        price: "990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
    {
        id: 20,
        name: "Apple Smart Keyboard",
        category: "Accessories",
        price: "2990000",
        status: "Delivered",
        image: "/images/no_image.jpg",
    },
];

export type { Product };
export { tableData };