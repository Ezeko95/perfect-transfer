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
    description: "Blueback, Citylight, Bond, Fotográfico, etc.",
    image: "/papel.png",
  },
  {
    id: 2,
    name: "Lonas",
    description: "Front-Blanca, Front-Gris, Mesh, Back-Lit, etc.",
    image: "lona.png",
  },
  {
    id: 3,
    name: "Vinilos",
    description: "Blanco, Gris, Bubble-Free, Transparente, Micro, etc.",
    image: "vinilo.png",
  },
  // {
  //   id: 4,
  //   name: "Montaje",
  //   description: "Description for Category 2",
  //   image: "category2.jpg",
  // },
  {
    id: 5,
    name: "PET",
    description: "Duratrans doble, Backlit, etc.",
    image: "/PET.png",
  },
  {
    id: 6,
    name: "Algodón",
    description: "Canvas, Tela Flag, etc.",
    image: "tela.png",
  },
  {
    id: 7,
    name: "Exhibidores",
    description: "Roll-Ups, PortaBanners, L-Banners, etc.",
    image: "roll-up.png",
  },
];
