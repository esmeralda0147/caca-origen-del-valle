// src/data/products.js

const cloudinaryBase = "https://res.cloudinary.com/dlxp4pqso/image/upload";
const getImageUrl = (publicId) =>
    `${cloudinaryBase}/f_auto,q_auto,w_600,h_400,c_fill/${publicId}`;

const products = [
    {
        id: 1,
        name: 'Chocolate 100% Cacao',
        image: getImageUrl("v1748712050/chocolate100_lgsjhm.jpg"),
        description: 'Chocolate puro sin azúcar ni aditivos, ideal para recetas saludables.',
        ingredients: ['Pasta de cacao 100%'],
        options: [
            { size: '50g', price: 8000 },
            { size: '100g', price: 15000 },
            { size: '200g', price: 18000 }
        ]
    },
    {
        id: 2,
        name: 'Cocoa Natural 500 gramos',
        image: getImageUrl("v1748712055/cocoa-natural_kuuuuk.jpg"),
        description: 'Cocoa sin alcalinizar, con su sabor original y propiedades antioxidantes.',
        ingredients: ['Cacao en polvo natural'],
        options: [
            { size: '250g', price: 9000 },
            { size: '500g', price: 15000 },
            { size: '1kg', price: 27000 }
        ]
    },
    {
        id: 3,
        name: 'Cobertura de Chocolate Amargo',
        image: getImageUrl("v1748712053/cobertura-amargo_ddr2bb.jpg"),
        description: 'Perfecta para repostería, con un intenso sabor a cacao.',
        ingredients: ['Cacao', 'Manteca de cacao', 'Azúcar'],
        options: [
            { size: '100g', price: 12000 },
            { size: '200g', price: 18000 },
            { size: '500g', price: 22000 }
        ]
    },
    {
        id: 4,
        name: 'Cocoa Alcalinizada',
        image: getImageUrl("v1748712054/cocoa-alcalina_ie5nlm.jpg"),
        description: 'Cocoa con proceso de alcalinización, más suave al paladar.',
        ingredients: ['Cacao alcalinizado'],
        options: [
            { size: '250g', price: 10000 },
            { size: '500g', price: 16000 },
            { size: '1kg', price: 29000 }
        ]
    }
];

export default products;
