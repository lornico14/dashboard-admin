import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilBox,
    UilCheckCircle,

} from '@iconscout/react-unicons'

//Sidebar Data

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    }
    ,
    {
        icon: UilClipboardAlt,
        heading: "Ventas",
    }
    ,
    {
        icon: UilUsersAlt,
        heading: "Clientes",
    }
    ,
    {
        icon: UilPackage,
        heading: "Productos",
    },
    {
        icon: UilChart,
        heading: "Reportes",
    },

];

export const CardsData = [
    {
        title: "Facturación",
        color: {
            background: "linear-gradient(90deg, rgba(255,60,155,0.835171568627451) 0%, rgba(254,80,202,0.8906882591093117) 32%, rgba(255,82,168,0.7773279352226721) 50%)",
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
            background: "linear-gradient(111deg, rgba(140,60,255,0.835171568627451) 0%, rgba(189,66,255,0.8906882591093117) 16%, rgba(194,92,255,1) 35%, rgba(82,114,255,0.7773279352226721) 75%)",
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
    },{
        title: "Entregados",
        color: {
            background: "linear-gradient(124deg, rgba(62,255,145,0.9190283400809717) 35%, rgba(119,255,76,0.7773279352226721) 75%)",
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
        link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3080-3080ti/"
    },
    {
        name: "RTX 3090",
        memory: "24GB",
        tracking: "360001080267779",
        date: "2021-09-20",
        status: "Pendiente",
        link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3090/"
    },
    {
        name: "RTX 3070",
        memory: "8GB",
        tracking: "360001080266789",
        date: "2021-09-20",
        status: "Entregado",
        link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3070/"
    },
    {
        name: "RTX 3060",
        memory: "12GB",
        tracking: "360001080256789",
        date: "2021-09-20",
        status: "Pendiente",
        link: "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3060/"
    },
    {
        name: "GTX 1660S",
        memory: "6GB",
        tracking: "360001080261000",
        date: "2021-09-20",
        status: "Cancelado",
        link: "https://www.nvidia.com/es-la/geforce/graphics-cards/gtx-1660-super/"
    },
]