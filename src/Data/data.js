import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilUsdSquare,
  UilBox,
  UilCheckCircle,
} from "@iconscout/react-unicons";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

//Sidebar Data

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Main",
  },
  {
    icon: UilClipboardAlt,
    heading: "Ventas",
  },
  {
    icon: UilPackage,
    heading: "Productos",
  },
];

export const CardsData = [
  {
    title: "Facturación",
    color: {
      background:
        "linear-gradient(90deg, rgba(255,60,155,0.835171568627451) 0%, rgba(254,80,202,0.8906882591093117) 32%, rgba(255,82,168,0.7773279352226721) 50%)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    },
    barValue: 70,
    value: "1,240,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Facturación",
        data: [31, 20, 45, 66, 33, 87, 49, 39, 67],
      },
    ],
  },
  {
    title: "Pendientes",
    color: {
      background:
        "linear-gradient(111deg, rgba(140,60,255,0.835171568627451) 0%, rgba(189,66,255,0.8906882591093117) 16%, rgba(194,92,255,1) 35%, rgba(82,114,255,0.7773279352226721) 75%)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    },
    barValue: 30,
    value: "372,000",
    png: UilBox,
    series: [
      {
        name: "Pendientes",
        data: [31, 20, 45, 66, 33, 87, 49, 39, 67],
      },
    ],
  },
  {
    title: "Entregados",
    color: {
      background:
        "linear-gradient(124deg, rgba(62,255,145,0.9190283400809717) 35%, rgba(119,255,76,0.7773279352226721) 75%)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    },
    barValue: 70,
    value: "868,000",
    png: UilCheckCircle,
    series: [
      {
        name: "Entregados",
        data: [31, 20, 45, 66, 33, 87, 49, 39, 67],
      },
    ],
  },
];

export const tableData = [
  {
    name: "RTX 3080",
    memory: "10GB",
    tracking: "360001080261089",
    date: "2021-09-20",
    status: "Entregado",
    link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3080-3080ti/",
  },
  {
    name: "RTX 3090",
    memory: "24GB",
    tracking: "360001080267779",
    date: "2021-09-20",
    status: "Pendiente",
    link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3090/",
  },
  {
    name: "RTX 3070",
    memory: "8GB",
    tracking: "360001080266789",
    date: "2021-09-20",
    status: "Entregado",
    link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3070/",
  },
  {
    name: "RTX 3060",
    memory: "12GB",
    tracking: "360001080256789",
    date: "2021-09-20",
    status: "Pendiente",
    link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3060/",
  },
  {
    name: "GTX 1660S",
    memory: "6GB",
    tracking: "360001080261000",
    date: "2021-09-20",
    status: "Cancelado",
    link: "https://www.nvidia.com/es-la/geforce/graphics-cards/gtx-1660-super/",
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "Nicolas Lorenzo",
    notification: "Ha realizado una compra",
    date: "Hace 2 horas",
    producto: "RTX 3080",
  },
  {
    img: img2,
    name: "Juan Perez",
    notification: "Ha realizado una compra",
    date: "Hace 30 minutos",
    producto: "RTX 3090",
  },
  {
    img: img3,
    name: "Pedro Sanchez",
    notification: "Ha realizado una compra",
    date: "Hace 1 hora",
    producto: "RTX 3070",
  },
];


export const filters = [
  {
    label: "Marca",
    type: "checkbox",
    options: ["NVIDIA", "AMD"],
    required: true,
  },
  {
    label: "Modelo",
    type: "checkbox",
    options: [
      "RTX 2060",
      "RTX 2060S",
      "RTX 2070",
      "RTX 2070S",
      "RTX 2080",
      "RTX 3060",
      "RTX 3070",
      "RTX 3070TI",
      "RTX 3080",
      "RTX 3090",
      "RTX 3090S",
      "GTX 1060",
      "GTX 1070",
      "GTX 1080",
      "GTX 1650",
      "GTX 1650S",
      "GTX 1660",
      "GTX 1660S",
      "GTX 1660TI",
      "RX5500",
      "RX5500XT",
      "RX5600",
      "RX5600XT",
      "RX5700",
      "RX5700XT",
      "RX6800",
      "RX6800XT",
      "RX6900XT",
      "RX550",
      "RX560",
      "RX570",
      "RX580",
      "RX590",
    ],
  },
  {
    label: "Fabricante",
    type: "checkbox",
    options: [
      "Asus",
      "MSI",
      "Gigabyte",
      "EVGA",
      "Zotac",
      "PNY",
      "Galax",
      "Gainward",
      "Palit",
      "Colorful",
    ],
  },
];

export const stockTable = [
  {
    id: "1",
    marca: "NVIDIA",
    modelo: "RTX 3080",
    fabricante: "Asus",
    vram: "10GB",
    precio: "900",
    stock: "10",
    img: "https://dlcdnwebimgs.asus.com/gain/95f0e9a2-aa85-473e-b5a6-b1e3bb3341a6/w692",
  },
  {
    id: "2",
    marca: "NVIDIA",
    modelo: "RTX 3080",
    fabricante: "MSI",
    vram: "10GB",
    precio: "880",
    stock: "7",
    img: "https://asset.msi.com/resize/image/global/product/product_1623834930083e54118002c13961e3ce71a2f22f6e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  },
  {
    id: "3",
    marca: "NVIDIA",
    modelo: "RTX 3070",
    fabricante: "Zotac",
    vram: "8GB",
    precio: "800",
    stock: "15",
    img: "https://www.zotac.com/download/files/styles/org/public/product_main_image/graphics_cards/zt-a30700j-10plhr-image01.jpg?itok=eWGthprk",
  },
  {
    id:"4",
    marca: "AMD",
    modelo: "RX 6800 XT",
    fabricante: "MSI",
    vram: "16GB",
    precio: "950",
    stock: "12",
    img: "https://http2.mlstatic.com/D_NQ_NP_786316-MLA46165064471_052021-O.webp",
  },
  {
    id:"5",
    marca: "NVIDIA",
    modelo: "GTX 1660 Super",
    fabricante: "Gigabyte",
    vram: "6GB",
    precio: "250",
    stock: "20",
    img: "https://static.gigabyte.com/StaticFile/Image/Global/8065138a16efda86224a1582c41bd579/Product/23911/Png",
  },
  {
    id:"6",
    marca: "NVIDIA",
    modelo: "RTX 3060",
    fabricante: "ASUS",
    vram: "12GB",
    precio: "700",
    stock: "18",
    img: "https://dlcdnwebimgs.asus.com/gain/95f0e9a2-aa85-473e-b5a6-b1e3bb3341a6/w692",
  },
  {
    id:"7",
    marca: "AMD",
    modelo: "RX 6700 XT",
    fabricante: "PowerColor",
    vram: "12GB",
    precio: "550",
    stock: "15",
    img: "https://www.comeros.com.ar/wp-content/uploads/2023/06/VGA-8GB-RTX-3060-TI-ASUS-TUF-GAMING-O8GD6X7.webp",
  },
  {
    id:"8",
    marca: "NVIDIA",
    modelo: "RTX 3070",
    fabricante: "Gigabyte",
    vram: "8GB",
    precio: "800",
    stock: "10",
    img: "https://www.fullh4rd.com.ar/img/productos/3/video-geforce-rtx-3070-8gb-gigabyte-gaming-oc-0.jpg",
  }
];

export const stockTableGrid = [
  [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'marca', headerName: 'Marca', width: 130 },
    { field: 'modelo', headerName: 'Modelo', width: 130 },
    { field: 'fabricante', headerName: 'Fabricante', width: 130 },
    { field: 'vram', headerName: 'VRAM', width: 90 },
    { field: 'precio', headerName: 'Precio', width: 90 },
    { field: 'stock', headerName: 'Stock', width: 90 },
  ],
  [
    ...stockTable.map((item) => {
      return {
        id: item.id,
        marca: item.marca,
        modelo: item.modelo,
        fabricante: item.fabricante,
        vram: item.vram,
        precio: item.precio,
        stock: item.stock,
      };
    }),
  ],
];
