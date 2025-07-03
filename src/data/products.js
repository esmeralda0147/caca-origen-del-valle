// src/data/products.js

const cloudinaryBase = "https://res.cloudinary.com/dlxp4pqso/image/upload";
const getImageUrl = (publicId) =>
    `${cloudinaryBase}/f_auto,q_auto,w_600,h_400,c_fill/${publicId}`;

const products = [
    {
        id: 1,
        name: 'CHOCOLATE NATURAL',
        image: getImageUrl("v1750989641/Whisk_512bace735_e8pl8g.jpg"),
        description: 'Elaborado con granos cuidadosamente seleccionados, sin azúcar ni aditivos 100% cacao. Ideal para quienes buscan un sabor puro, intenso y natural. Una experiencia pensada para paladares que valoran la esencia del cacao en su máxima expresión. ',
        ingredients: [],
        options: [
            { size: '125g', price: 12999},
            { size: '250g', price: 22999},
            { size: '500g', price: 43999},
            { size: '1000g', price: 81999},
            { size: '2500g', price: 198999 }


        ]
    },
    {
        id: 2,
        name: 'COCOA NATURAL',
        image: getImageUrl("v1750985276/Whisk_86d6844254_z0rwr2.jpg"),
        description: 'Polvo fino de cacao, naturalmente bajo en grasa y sin ningún tipo de tratamiento químico. Elaborado a partir de granos seleccionados y cuidadosamente procesados para conservar su sabor auténtico y todas sus propiedades. Ideal para preparar bebidas nutritivas, batidos energizantes, o para dar un toque saludable y profundo a tus recetas de repostería. Un producto 100% cacao, sin azúcar, sin aditivos y lleno de aroma, sabor y bienestar.',
        ingredients: ['Cacao en polvo natural'],
        options: [
            { size: '125g', price: 12999 },
            { size: '250g', price: 22999 },
            { size: '500g', price: 41999 },
            { size: '1000g', price: 81999 },
            { size: '2500g', price: 198999 }
        ]
    },
    {
        id: 3,
        name: 'COBERTURA DE CHOCOLATE 65%' +
            ' ',
        image: getImageUrl("v1750985276/Whisk_storyboard2d411ed587094810bd77350c_xoaelb.jpg"),
        description: 'Cobertura fina elaborada con un 65% de pasta de cacao, 15% de manteca de cacao y 20% de azúcar. Su equilibrio perfecto entre intensidad, suavidad y dulzura la hace ideal para bombonería, repostería y baños de chocolate. Con un alto contenido de cacao, sin aditivos ni grasas añadidas, esta cobertura resalta el sabor auténtico del grano y garantiza un acabado brillante, fluido y delicioso..',
        ingredients: ['Cacao', 'Manteca de cacao', 'Azúcar'],
        options: [
            { size: '125g', price: 14999 },
            { size: '250g', price: 26999 },
            { size: '500g', price: 46999 },
            { size: '1000g', price: 85999 },
            { size: '2500g', price: 207999 }
        ]
    },
    {
        id: 4,
        name: 'NIBS DE CACAO NATURALES',
        image: getImageUrl("v1750985593/Whisk_5685cc5d7d_esdojl.jpg"),
        description: 'Fragmentos de granos de cacao tostados a una temperatura media para conservar su perfil nutricional, aroma y sabor original. Crujientes, intensos y sin azúcar ni aditivos, los nibs son una fuente natural de antioxidantes, fibra y energía.Perfectos para agregar a smoothies, bowls, repostería o disfrutar como snack saludable. Un producto puro, directo del grano, ideal para quienes buscan lo esencial del cacao..',
        ingredients: ['Cacao alcalinizado'],
        options: [
            { size: '250g', price: 17999 },
            { size: '500g', price: 32999 },
            { size: '1000g', price: 58999 },
            { size: '2500g', price: 144999 }
        ]
    }
];

export default products;
