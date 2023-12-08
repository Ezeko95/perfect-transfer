export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Papeles",
    description: "Description for Category 1",
    image: "/papel.jpg",
  },
  {
    id: 2,
    name: "Lonas",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  {
    id: 3,
    name: "Vinilos",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  {
    id: 4,
    name: "PET",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  {
    id: 5,
    name: "Transfer",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  {
    id: 6,
    name: "Telas y Canvas",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  {
    id: 7,
    name: "Roll-Up y Port-Banner",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
];
