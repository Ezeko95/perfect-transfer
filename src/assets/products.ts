export interface IProductSubcategory {
  id: number;
  label: string;
  weight: string;
  measures: string[];
  file: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  subcategory: IProductSubcategory[];
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Papeles",
    subcategory: [
      {
        id: 1,
        label: "Blueback",
        weight: "120gr",
        measures: ["1.40x125m", "1.60x125m"],
        file: "/Blueback.pdf",
      },
      {
        id: 2,
        label: "Citylight",
        weight: "150gr",
        measures: ["1.05x100m", "1.27x100m", "1.40x100m", "1.60x100m"],
        file: "/blueback.pdf",
      },
      {
        id: 3,
        label: "Bond",
        weight: "75gr",
        measures: ["0.61x50m", "0.91x50m", "1.05x50m", "1.27x50m", "1.40x50m"],
        file: "/blueback.pdf",
      },
    ],
    image: "/papel.png",
  },
  // {
  //   id: 2,
  //   name: "Lonas",
  //   description: ["Front-Blanca, Front-Gris, Mesh, Back-Lit, etc."],
  //   image: "lona.png",
  // },
  // {
  //   id: 3,
  //   name: "Vinilos",
  //   description: ["Blanco, Gris, Bubble-Free, Transparente, Micro, etc."],
  //   image: "vinilo.png",
  // },
  // {
  //   id: 5,
  //   name: "PET",
  //   description: ["Duratrans doble, Backlit, etc."],
  //   image: "/PET.png",
  // },
  // {
  //   id: 6,
  //   name: "Algodón",
  //   description: ["Canvas, Tela Flag, etc."],
  //   image: "tela.png",
  // },
  // {
  //   id: 7,
  //   name: "Exhibidores",
  //   description: ["Roll-Ups, PortaBanners, L-Banners, etc."],
  //   image: "roll-up.png",
  // },
];
