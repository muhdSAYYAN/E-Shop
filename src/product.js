

const datas = [
    {
        id:1,
        image:"https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw4a2a06b8/images/hi-res/329070341/329070341_01_Front.jpg?sw=451&sh=600",
        name:"MEN'S YELLOW SHIRT",
        category:"shirt",
        brand:"LEVI'S",
        price:1000,
        priceRange:"0-10",
        image2:"https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw033599f8/images/hi-res/329070341/329070341_01_Style%20Shot.jpg?sw=451&sh=600",
        image3:"https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwfe55f417/images/hi-res/329070341/329070341_02_Back.jpg?sw=451&sh=600"
    },
    {
        id:2,
        image:"https://images.meesho.com/images/products/291107543/crlxt_512.webp",
        name:"T-shirt-Gray",
        category:"shirt",
        brand:"lp",
        price:1000,
        priceRange:"0-10",
        image2:"https://images.meesho.com/images/products/291107543/tyvzx_512.webp",
        image3:"https://images.meesho.com/images/products/291107543/o7nwa_512.webp"
    },
    {
        id:3,
        image:"https://images.meesho.com/images/products/230426123/cbbar_512.webp",
        name:"shirt",
        category:"shirt",
        brand:"allensonly",
        price:1000,
        priceRange:"10-20",
        image2:"https://images.meesho.com/images/products/230426123/gw8t5_512.webp",
        image3:"https://images.meesho.com/images/products/230426123/kmhqe_512.webp"
    },
    {
        id:4,
        image:"https://assets.ajio.com/medias/sys_master/root/20230827/Jpzn/64ea5140ddf77915197ef196/-473Wx593H-466500072-maroon-MODEL.jpg",
        name:"shirt-red",
        category:"shirt",
        brand:"lp",
        price:1000,
        priceRange:"10-20",
        image2:"https://images.meesho.com/images/products/291107543/tyvzx_512.webp",
        image3:"https://images.meesho.com/images/products/291107543/o7nwa_512.webp"
    },
    {
        id:5,
        image:"https://assets.ajio.com/medias/sys_master/root/20220312/JQy1/622bc0cef997dd03e20f0929/-473Wx593H-469157903-black-MODEL.jpg",
        name:"shirt-black",
        category:"shirt",
        brand:"allensonly",
        price:1000,
        priceRange:"10-20"
    },
    // {
    //     id:6,
    //     image:"https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //     name:"Leves Pant ",
    //     category:"pant",
    //     brand:"leves",
    //     price:1000,
    //     priceRange:"10-20"
    // }
    // ,
    // {
    //     id:7,
    //     image:"https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    //     name:"Leves Pant ",
    //     category:"pant",
    //     brand:"leves",
    //     price:1000,
    //     priceRange:"10-20"
    // },
    // {
    //     id:8,
    //     image:"https://assets.ajio.com/medias/sys_master/root/20230703/CqET/64a2db86eebac147fc47d342/-473Wx593H-420434303-black-MODEL.jpg",
    //     name:"Black jean Pant ",
    //     category:"pant",
    //     brand:"lp",
    //     price:1000,
    //     priceRange:"10-20"
    // },
    // {
    //     id:9,
    //     image:"https://assets.ajio.com/medias/sys_master/root/20230310/7USN/640afb85f997dde6f4ee86ce/-473Wx593H-465897698-blue-MODEL.jpg",
    //     name:"Leves Pant ",
    //     brand:"leves",
    //     price:1000,
    //     priceRange:"10-20"
    // },
    {
        id:8,
        image:"https://assets.ajio.com/medias/sys_master/root/20230526/LpjQ/6470cd5242f9e729d7ecdf01/-473Wx593H-466199858-blue-MODEL.jpg",
        name:"Cargos Pant ",
        category:"pant",
        brand:"lp",
        price:1000,
        priceRange:"10-20"
    },
    {
        id:9,
        image:"https://assets.ajio.com/medias/sys_master/root/20220921/8Rwy/632b21d9f997dd1f8d115374/-473Wx593H-420417324-darkblue-MODEL.jpg",
        name:"Leves Pant ",
        category:"pant",
        brand:"levis",
        price:1000,
        priceRange:"10-20"
    },
    {
        id:10,
        image:"https://assets.ajio.com/medias/sys_master/root/20230201/8Nu5/63da40b0f997dd708e3192c5/-473Wx593H-443002154-blue-MODEL.jpg",
        name:"Leves Pant ",
        category:"pant",
        brand:"allensonly",
        price:1000,
        priceRange:"10-20"
    },
    {
        id:11,
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
        name:"Sheo ",
        category:"sheo",
        brand:"nike",
        price:1000,
        priceRange:"20-30"
    },
    {
        id:12,
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/619223ad-3916-4143-9568-d5ba663a5fe0/air-jordan-1-mid-se-shoes-CF3K5m.png",
        name:"Sheo ",
        category:"sheo",
        brand:"nike",
        price:1000,
        priceRange:"20-30"
    },
    {
        id:13,
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4e9138d9-278f-48b1-851c-f4e51dbb4ee9/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png",
        name:"Sheo ",
        category:"sheo",
        brand:"nike",
        price:1000,
        priceRange:"30-40"
    },
    {
        id:14,
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bf68179-df2c-41b2-98e4-d969f831e26f/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
        name:"Sheo ",
        category:"sheo",
        brand:"nike",
        price:1000,
        priceRange:"30-40"
    },
    {
        id:15,
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
        name:"Sheo ",
        category:"sheo",
        brand:"nike",
        price:1000,
        priceRange:"30-40"
    },
    {
        id:16,
        image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a67149ecd87847c0beceae8300ef8392_9366/grand-court-cloudfoam-comfort-shoes.jpg",
        name:"Sheo ",
        category:"sheo",
        brand:"adidas",
        price:1000,
        priceRange:"30-40"
    },
    {
        id:17,
        image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6c753ef24524a5c9cebae9201436817_9366/nmd_r1-shoes.jpg",
        name:"Sheo ",
        category:"sheo",
        brand:"adidas",
        price:1000,
        priceRange:"30-40"
    },
    {
        id:18,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d56f34548cb34facb2ddaf8700810fde_9366/Questar_Shoes_White_HP2431_01_standard.jpg",
        name:"Sheo ",
        category:"sheo",
        brand:"adidas",
        price:1000,
        priceRange:"30-40"
    },
    // {
    //     id:19,
    //     image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/017c2e13e9d147b49e4fafa500dbbe69_9366/solarglide-6-shoes.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // },
    // {
    //     id:21,
    //     image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4335364a95f343368fd2af7700806ca3_9366/faztcort-star.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // }

    // {
    //     id:20,
    //     image:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/017c2e13e9d147b49e4fafa500dbbe69_9366/solarglide-6-shoes.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // },
    // {
    //     id:21,
    //     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d56f34548cb34facb2ddaf8700810fde_9366/Questar_Shoes_White_HP2431_01_standard.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // }
    // ,
    // {
    //     id:23,
    //     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d56f34548cb34facb2ddaf8700810fde_9366/Questar_Shoes_White_HP2431_01_standard.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // }
    
    // ,
    // {
    //     id:24,
    //     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d56f34548cb34facb2ddaf8700810fde_9366/Questar_Shoes_White_HP2431_01_standard.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // } ,
    // {
    //     id:25,
    //     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d56f34548cb34facb2ddaf8700810fde_9366/Questar_Shoes_White_HP2431_01_standard.jpg",
    //     name:"Sheo ",
    //     category:"sheo",
    //     brand:"adidas",
    //     price:1000,
    //     priceRange:"30-40"
    // }  

]

export default datas;