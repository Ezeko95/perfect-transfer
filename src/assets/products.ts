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
  description: string;
  subcategory: IProductSubcategory[];
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Papeles",
    description:
      "Papeles para impresión digital en gran formato, para interiores y exteriores, con diferentes pesos y medidas.",
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
        weight: "90gr",
        measures: ["0.91x50m", "1.07x50m"],
        file: null,
      },
    ],
    image: "/papel.png",
  },

  {
    id: 2,
    name: "Vinilos",
    description:
      "Vinilos versátiles y de alta adherencia para aplicaciones gráficas variadas.",
    subcategory: [
      {
        id: 1,
        label: "Vinilo Base Blanca/Gris/Negro",
        weight: "80mic",
        measures: ["1.07x50m", "1.27x50m", "1.37x50m", "1.52x50m"],
        file: "/ViniloBcoGrisNegro.pdf",
      },
      {
        id: 2,
        label: "Vinilo Clear 60",
        weight: "60mic",
        measures: ["1.27x50m", "1.52x50m"],
        file: "/ViniloClear.pdf",
      },
      {
        id: 3,
        label: "Vinilo Clear 80",
        weight: "80mic",
        measures: ["1.07x50m", "1.27x50m", "1.52x50m"],
        file: "/ViniloClear.pdf",
      },
      {
        id: 4,
        label: "Vinilo Microperforado",
        weight: null,
        measures: ["1.07x50m", "1.37x50m", "1.52x50m"],
        file: "/ViniloMicro.pdf",
      },
      {
        id: 5,
        label: "Vinilo Piso",
        weight: "200mic",
        measures: ["1.27x50m", "1.37x50m", "1.52x50m"],
        file: "/FloorGraphics.pdf",
      },
      {
        id: 6,
        label: "Vinilo Estático 150mic (Blanco/Transparente)",
        weight: null,
        measures: ["1.27x50m"],
        file: "/ViniloEstatico.pdf",
      },
    ],
    image: "vinilo.png",
  },
  {
    id: 3,
    name: "Lonas",
    description: "Lonas para impresión digital en gran formato.",
    subcategory: [
      {
        id: 1,
        label: "Lona Front Blanca",
        weight: "440 g/m2 (13 oz/sq yd), 9x9",
        measures: ["1.10x50m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 2,
        label: "Lona Front",
        weight: "440 g/m2 (13 oz/sq yd), 18x12",
        measures: ["1.37x50m", "1.52x50m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 3,
        label: "Lona Front Gris",
        weight: "(9 oz/sq yd), 9x9",
        measures: ["2.50x70m", "3.20x70m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 5,
        label: "Lona Front Gris",
        weight: "440 g/m2 (9 oz/sq yd), 18x12",
        measures: ["1.37x50m", "1.52x50m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 6,
        label: "Lona Front Gris Brillante",
        weight: "440 g/m2 (13 oz/sq yd), 18x12",
        measures: [
          "1x50m",
          "1.10x50m",
          "1.20x50m",
          "1.60x50m",
          "1.67x50m",
          "1.85x50m",
          "2.20x50m",
          "2.50x50m",
          "3.20x50m",
        ],
        file: "/LonaFront.pdf",
      },
      {
        id: 7,
        label: "Lona Front Gris Mate",
        weight: "440 g/m2 (13 oz/sq yd), 18x12",
        measures: [
          "1.00x50m",
          "1.10x50m",
          "1.40x50m",
          "1.60x50m",
          "2.50x50m",
          "3.20x50m",
        ],
        file: "/LonaFront.pdf",
      },
      {
        id: 8,
        label: "Lona Backlit",
        weight: "440 g/m2 (13 oz/sq yd), 300x500, 18x12",
        measures: [
          "1.00x50m",
          "1.52x50m",
          "1.60x50m",
          "1.85x50m",
          "2.50x50m",
          "3.20x50m",
        ],
        file: "/LonaFront.pdf",
      },
      {
        id: 9,
        label: "Lona Blackout Doble Cara Mate",
        weight: "510 g/m2 (15 oz/sq yd), 200x200, 18x12",
        measures: ["1.10x50m", "1.37x50m", "1.60x50m", "2.50x50m", "3.20x50m"],
        file: "/LonaFront.pdf",
      },
      {
        id: 10,
        label: "Lona Mesh con Liner",
        weight: "260 g/m2 (8 oz/sq yd), 1000x1000, 18x12",
        measures: ["1.60x50m", "2.50x50m", "3.20x50m"],
        file: "/LonaFront.pdf",
      },
    ],
    image: "lona.png",
  },
  {
    id: 5,
    name: "Fotografícos y PET Backlit",
    description:
      "Láminas de PET de alta transparencia y resistencia, perfectas para impresión en alta definición, con aplicaciones en displays, embalajes y exhibidores.",
    subcategory: [
      {
        id: 1,
        label: "Fotografíco Irrompible Semibrillo",
        weight: "190gr",
        measures: ["1.37x50m"],
        file: "/Fotografico.pdf",
      },
      {
        id: 2,
        label: "Fotografíco Irrompible Brillo",
        weight: "180mic",
        measures: ["1.07x30m", "1.27x30m"],
        file: "/Fotografico.pdf",
      },
      {
        id: 3,
        label: "Luster Film Mate",
        weight: "180gr",
        measures: ["0.91x50", "1.27x50m", "1.52x50m"],
        file: "/LusterFilm.pdf",
      },
      {
        id: 4,
        label: "Duratrans Doble Cara",
        weight: "450gr",
        measures: ["1.07x50", "1.27x50m", "1.52x50m"],
        file: "/Duratrans.pdf",
      },
      {
        id: 4,
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
    description:
      "Nuestros productos de tela flag y canvas ofrecen una base de algodón de alta calidad para impresiones artísticas o publicitarias.",
    subcategory: [
      {
        id: 1,
        label: "Canvas Fine Art",
        weight: "380 gr/m2",
        measures: ["1.27x30m"],
        file: "/Canvas.pdf",
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
    description:
      "Soluciones de exhibición innovadoras y personalizadas para destacar productos y mensajes.",
    subcategory: [
      {
        id: 1,
        label: "Roll Up",
        weight: "2.100 kg",
        measures: ["0,90x2m (x10 uds)", "1,00x2m (x6 uds)"],
        file: "RollUp.pdf",
      },
      {
        id: 2,
        label: "PortaBanner Hierro (simple y doble)",
        weight: "1.500 kg",
        measures: ["0,90x1.90m (x5 uds)"],
        file: null,
      },
      {
        id: 3,
        label: "L-Banner (aluminio)",
        weight: "1.300 kg",
        measures: ["0,90x1.90m (x10 uds)"],
        file: "Lbanner.pdf",
      },
    ],
    image: "roll-up.png",
  },
  {
    id: 8,
    name: "Montaje",
    description:
      "Productos de montaje para aplicaciones de impresión digital en gran formato.",
    subcategory: [
      {
        id: 1,
        label: "PCV Espumado Blanco",
        weight: "50-80 gr/cm2",
        measures: [
          "1mm | 1.22x2.44",
          "2mm | 1.22x2.44",
          "3mm | 1.22x2.44",
          "5mm | 1.22x2.44",
        ],
        file: "PVC.pdf",
      },
      {
        id: 2,
        label: "Cinta Doble Faz",
        weight: null,
        measures: ["1.07x50m", "1.30x50m"],
        file: null,
      },
      {
        id: 3,
        label: "Posicionador",
        weight: "40 gr/m2",
        measures: ["0.60x50m", "1.22x50m"],
        file: null,
      },
    ],
    image: "montaje.png",
  },
  {
    id: 9,
    name: "Papel Transfer",
    description:
      "Papel transfer para ropa oscura y clara, con impresión en espejo.",
    subcategory: [
      {
        id: 1,
        label: "Para Prendas Oscuras de Algodón",
        weight: null,
        measures: ["A3", "A4"],
        file: "PapelTransfer.pdf",
      },
      {
        id: 2,
        label: "Multiple Superficies",
        weight: null,
        measures: ["Carta"],
        file: "PapelTransfer.pdf",
      },
    ],
    image: "Papel-transfer.png",
  },
];
