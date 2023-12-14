export interface IProductSubcategory {
  id: number;
  label: string;
  weight: string | null;
  measures: string[];
  file: string | null;
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
        file: "/Citylight.pdf",
      },
      {
        id: 3,
        label: "Bond",
        weight: "75gr",
        measures: ["0.61x50m", "0.91x50m", "1.05x50m", "1.27x50m", "1.40x50m"],
        file: "/Blueback.pdf",
      },
    ],
    image: "/papel.png",
  },

  {
    id: 3,
    name: "Vinilos",
    subcategory: [
      {
        id: 1,
        label: "Vinilo Base Blanca",
        weight: "80mic",
        measures: ["1.07x50m", "1.27x50m", "1.37x50m", "1.52x50m"],
        file: "/ViniloBlanco.pdf",
      },
      {
        id: 2,
        label: "Vinilo Base Gris",
        weight: "80mic",
        measures: ["1.07x50m", "1.27x50m", "1.37x50m", "1.52x50m"],
        file: "/ViniloGris.pdf",
      },
    ],
    image: "vinilo.png",
  },
  {
    id: 2,
    name: "Lonas",
    subcategory: [
      {
        id: 1,
        label: "Lona Front Base Blanca",
        weight: "440 g/m2 (13 oz/sq yd), 500 x 500, 9x9",
        measures: ["1.10x50m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 2,
        label: "Lona Front Base Blanca",
        weight: "440 g/m2 (13 oz/sq yd), 300 x 500, 18x12",
        measures: ["1,37 x 50m", "1,52 x 50m"],
        file: "/LonaFront.pdf",
      },
    ],
    image: "lona.png",
  },
  {
    id: 5,
    name: "PET",
    subcategory: [
      {
        id: 1,
        label: "PET Film Backlit",
        weight: "150mic",
        measures: ["1.27x50m", "1.37x50m"],
        file: "/PETBacklit.pdf",
      },
    ],
    image: "/PET.png",
  },
  {
    id: 6,
    name: "Algodón",
    subcategory: [
      {
        id: 1,
        label: "Canvas Fine Art",
        weight: "380 gr/m2",
        measures: ["1.27x30m"],
        file: "/Algodon.pdf",
      },
      {
        id: 2,
        label: "Tela Flag",
        weight: "110 gr/m2",
        measures: ["1.52x50m"],
        file: "/TelaFlag.pdf",
      },
    ],
    image: "tela.png",
  },
  {
    id: 7,
    name: "Exhibidores",
    subcategory: [
      {
        id: 1,
        label: "Roll Up",
        weight: "380 gr/m2",
        measures: ["0,90x2m (x10 uds)", "1,00x2m (x6 uds)"],
        file: "",
      },
    ],
    image: "roll-up.png",
  },
];
