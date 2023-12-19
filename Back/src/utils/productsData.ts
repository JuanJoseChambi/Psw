import ProductoApi from "../models/Productos";

const productsData = [
  {
    name: "Zapatillas Deportivas Nike Air Max",
    image: "https://example.com/zapatillas1.jpg",
    description:
      "Zapatillas deportivas de alta gama con tecnología Air Max para una máxima comodidad y rendimiento.",
    brand: "Nike",
    price: 129.99,
    category: "Calzado Deportivo",
    stock: 100,
    available_colors: ["Negro", "Blanco", "Rojo"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
  },
  {
    name: "Camiseta de Algodón Adidas Essential",
    image: "https://example.com/camiseta2.jpg",
    description:
      "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Adidas.",
    brand: "Adidas",
    price: 29.99,
    category: "Ropa",
    stock: 80,
    available_colors: ["Azul Marino", "Gris", "Blanco"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    name: "Portátil Ultrabook Dell XPS 13",
    image: "https://example.com/portatil3.jpg",
    description:
      "Portátil ultraligero con pantalla InfinityEdge y procesador Intel Core i7. Ideal para trabajo y entretenimiento.",
    brand: "Dell",
    price: 899.99,
    category: "Electrónica",
    stock: 20,
    available_colors: ["Plata", "Negro"],
    sizes: ["13 pulgadas", "15 pulgadas"],
  },
  {
    name: "Smartwatch Fitbit Versa 3",
    image: "https://example.com/smartwatch4.jpg",
    description:
      "Smartwatch con monitoreo de ritmo cardíaco, seguimiento de sueño y GPS integrado. Compatible con iOS y Android.",
    brand: "Fitbit",
    price: 149.99,
    category: "Wearables",
    stock: 30,
    available_colors: ["Negro", "Rosa", "Gris"],
    sizes: ["S", "L"],
  },
  {
    name: "Auriculares Inalámbricos Sony WH-1000XM4",
    image: "https://example.com/auriculares5.jpg",
    description:
      "Auriculares con cancelación de ruido líder en la industria, sonido premium y larga duración de batería.",
    brand: "Sony",
    price: 299.99,
    category: "Audio",
    stock: 15,
    available_colors: ["Negro", "Plata"],
    sizes: ["Único"],
  },
  {
    name: "Bicicleta de Montaña Cannondale Trail 5",
    image: "https://example.com/bicicleta6.jpg",
    description:
      "Bicicleta de montaña con cuadro de aluminio y componentes de alta calidad. Perfecta para senderos y terrenos difíciles.",
    brand: "Cannondale",
    price: 899.99,
    category: "Deportes y Aire Libre",
    stock: 10,
    available_colors: ["Negro/Azul", "Rojo/Negro"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Teclado Mecánico Corsair K70 RGB",
    image: "https://example.com/teclado7.jpg",
    description:
      "Teclado mecánico para juegos con retroiluminación RGB personalizable y switches Cherry MX. Construcción duradera y diseño ergonómico.",
    brand: "Corsair",
    price: 149.99,
    category: "Tecnología",
    stock: 25,
    available_colors: ["Negro"],
    sizes: ["Completo"],
  },
  {
    name: "Cámara DSLR Canon EOS 90D",
    image: "https://example.com/camara8.jpg",
    description:
      "Cámara réflex digital con sensor APS-C de 32.5 megapíxeles. Captura imágenes y videos de alta calidad.",
    brand: "Canon",
    price: 1299.99,
    category: "Fotografía",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Juego de Mesa Catan",
    image: "https://example.com/juego9.jpg",
    description:
      "Juego de estrategia y negociación para toda la familia. Construye y comercia para ser el colonizador más exitoso en la isla de Catan.",
    brand: "Catan Studio",
    price: 39.99,
    category: "Juguetes y Juegos",
    stock: 40,
    available_colors: ["Multicolor"],
    sizes: ["Único"],
  },
  {
    name: "Mochila North Face Recon",
    image: "https://example.com/mochila10.jpg",
    description:
      "Mochila resistente y versátil con compartimento para laptop. Ideal para uso diario o excursiones.",
    brand: "The North Face",
    price: 89.99,
    category: "Moda y Accesorios",
    stock: 18,
    available_colors: ["Negro", "Gris", "Azul"],
    sizes: ["Único"],
  },
  {
    name: "Set de Herramientas Craftsman de 200 Piezas",
    image: "https://example.com/herramientas11.jpg",
    description:
      "Set completo de herramientas para mecánicos y entusiastas del bricolaje. Incluye llaves, destornilladores, y más.",
    brand: "Craftsman",
    price: 249.99,
    category: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Rojo", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Guitarra Acústica Taylor 214ce",
    image: "https://example.com/guitarra12.jpg",
    description:
      "Guitarra acústica con tapa de abeto sólido y cuerpo de palisandro. Sonido claro y cálido, ideal para músicos de todos los niveles.",
    brand: "Taylor",
    price: 999.99,
    category: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Natural"],
    sizes: ["Único"],
  },
  {
    name: "Silla de Oficina Ergonómica Herman Miller Aeron",
    image: "https://example.com/silla13.jpg",
    description:
      "Silla de oficina de diseño ergonómico con soporte lumbar ajustable. Comodidad y estilo para largas jornadas de trabajo.",
    brand: "Herman Miller",
    price: 1199.99,
    category: "Muebles",
    stock: 10,
    available_colors: ["Negro", "Blanco", "Gris"],
    sizes: ["Único"],
  },
  {
    name: "Tableta Gráfica Wacom Intuos Pro",
    image: "https://example.com/tableta14.jpg",
    description:
      "Tableta gráfica profesional para artistas y diseñadores. Sensibilidad a la presión y funciones personalizables.",
    brand: "Wacom",
    price: 349.99,
    category: "Arte y Diseño",
    stock: 20,
    available_colors: ["Negro"],
    sizes: ["Mediana", "Grande"],
  },
  {
    name: "Botella de Vino Tinto Reserva 2015",
    image: "https://example.com/vino15.jpg",
    description:
      "Vino tinto reserva con notas complejas y envejecimiento en barricas de roble. Perfecto para ocasiones especiales.",
    brand: "Viñedos de la Montaña",
    price: 49.99,
    category: "Alimentos y Bebidas",
    stock: 30,
    available_colors: ["Rojo"],
    sizes: ["750 ml"],
  },
  {
    name: "Aspiradora Robot iRobot Roomba 980",
    image: "https://example.com/aspiradora16.jpg",
    description:
      "Aspiradora robot inteligente con mapeo y navegación avanzados. Limpieza eficiente y programable.",
    brand: "iRobot",
    price: 499.99,
    category: "Electrodomésticos",
    stock: 15,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Monitor Gaming Alienware 34 Curved",
    image: "https://example.com/monitor17.jpg",
    description:
      "Monitor curvo ultrawide con tasa de refresco de 144Hz y resolución QHD. Experiencia de juego inmersiva.",
    brand: "Alienware",
    price: 899.99,
    category: "Tecnología",
    stock: 10,
    available_colors: ["Negro"],
    sizes: ["34 pulgadas"],
  },
  {
    name: "Reloj Automático Seiko Presage",
    image: "https://example.com/reloj18.jpg",
    description:
      "Reloj automático con diseño clásico y movimiento mecánico. Elegancia y precisión en cada detalle.",
    brand: "Seiko",
    price: 349.99,
    category: "Relojes",
    stock: 25,
    available_colors: ["Plateado", "Dorado"],
    sizes: ["Único"],
  },
  {
    name: "Batería Electrónica Roland TD-17KVX",
    image: "https://example.com/bateria19.jpg",
    description:
      "Kit de batería electrónica con pads de malla y sonidos auténticos. Perfecto para práctica y grabación.",
    brand: "Roland",
    price: 1499.99,
    category: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Cámara de Seguridad Arlo Pro 3",
    image: "https://example.com/camara20.jpg",
    description:
      "Cámara de seguridad inalámbrica con calidad de video 2K HDR. Vigilancia para interiores y exteriores.",
    brand: "Arlo",
    price: 249.99,
    category: "Electrónica",
    stock: 20,
    available_colors: ["Blanco"],
    sizes: ["Único"],
  },
  {
    name: "Impresora 3D Creality Ender 3",
    image: "https://example.com/impresora21.jpg",
    description:
      "Impresora 3D de nivel de entrada con gran calidad de impresión. Ideal para proyectos creativos y prototipos.",
    brand: "Creality",
    price: 259.99,
    category: "Tecnología",
    stock: 15,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Bicicleta Eléctrica Xiaomi Mi Electric Scooter Pro 2",
    image: "https://example.com/bicicleta22.jpg",
    description:
      "Bicicleta eléctrica plegable con autonomía extendida. Perfecta para desplazamientos urbanos rápidos y cómodos.",
    brand: "Xiaomi",
    price: 499.99,
    category: "Deportes y Aire Libre",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Sartén Antiadherente T-fal E93808",
    image: "https://example.com/sarten23.jpg",
    description:
      "Sartén antiadherente con tecnología Thermo-Spot para indicar la temperatura adecuada de cocción. Fácil de limpiar.",
    brand: "T-fal",
    price: 29.99,
    category: "Hogar y Cocina",
    stock: 40,
    available_colors: ["Negro"],
    sizes: ["10 pulgadas"],
  },
  {
    name: 'Libro "El Señor de los Anillos"',
    image: "https://example.com/libro24.jpg",
    description:
      'Edición especial de la trilogía "El Señor de los Anillos" de J.R.R. Tolkien. Tapa dura y ilustraciones originales.',
    brand: "HarperCollins",
    price: 49.99,
    category: "Libros",
    stock: 25,
    available_colors: ["Multicolor"],
    sizes: ["Único"],
  },
  {
    name: "Máquina de Café Espresso Breville Barista Express",
    image: "https://example.com/cafe25.jpg",
    description:
      "Máquina de café semiautomática con molinillo integrado. Permite preparar espressos, lattes y cappuccinos de calidad profesional.",
    brand: "Breville",
    price: 599.99,
    category: "Electrodomésticos",
    stock: 18,
    available_colors: ["Acero Inoxidable"],
    sizes: ["Único"],
  },
  {
    name: "Juego de Herramientas de Jardinería Fiskars",
    image: "https://example.com/herramientas26.jpg",
    description:
      "Set completo de herramientas de jardinería ergonómicas y duraderas. Perfecto para amantes de la jardinería.",
    brand: "Fiskars",
    price: 69.99,
    category: "Jardín y Exteriores",
    stock: 20,
    available_colors: ["Naranja", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Robot Educativo Makeblock mBot Ranger",
    image: "https://example.com/robot27.jpg",
    description:
      "Robot educativo programable con capacidades de programación y robótica. Perfecto para aprender STEM de manera divertida.",
    brand: "Makeblock",
    price: 149.99,
    category: "Juguetes Educativos",
    stock: 15,
    available_colors: ["Azul"],
    sizes: ["Único"],
  },
  {
    name: "Altavoces Bluetooth Bose SoundLink Revolve+",
    image: "https://example.com/altavoces28.jpg",
    description:
      "Altavoces Bluetooth portátiles con sonido envolvente de 360 grados. Batería de larga duración y resistencia al agua.",
    brand: "Bose",
    price: 299.99,
    category: "Audio",
    stock: 22,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Set de Maletas Samsonite Winfield 3 DLX",
    image: "https://example.com/maletas29.jpg",
    description:
      "Set de maletas rígidas con diseño moderno y duradero. Incluye maletas de diferentes tamaños para viajes cortos y largos.",
    brand: "Samsonite",
    price: 249.99,
    category: "Viajes y Equipaje",
    stock: 14,
    available_colors: ["Negro", "Azul", "Plateado"],
    sizes: ["Pequeña", "Mediana", "Grande"],
  },
  {
    name: "Teclado y Ratón Inalámbricos Logitech MK270",
    image: "https://example.com/teclado30.jpg",
    description:
      "Conjunto de teclado y ratón inalámbricos con conexión fiable. Ideal para trabajar o jugar sin cables.",
    brand: "Logitech",
    price: 29.99,
    category: "Tecnología",
    stock: 30,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Manta de Lana Sherpa Bedsure",
    image: "https://example.com/manta31.jpg",
    description:
      "Manta suave y acogedora de lana Sherpa. Ideal para mantenerse cálido en las noches frías de invierno.",
    brand: "Bedsure",
    price: 39.99,
    category: "Hogar y Cocina",
    stock: 35,
    available_colors: ["Gris", "Beige", "Marrón"],
    sizes: ["Queen", "King"],
  },
  {
    name: "Bicicleta Estática Schwinn IC4",
    image: "https://example.com/bicicleta32.jpg",
    description:
      "Bicicleta estática con resistencia magnética y conectividad Bluetooth. Perfecta para entrenamientos en casa.",
    brand: "Schwinn",
    price: 799.99,
    category: "Deportes y Aire Libre",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Cepillo de Dientes Eléctrico Oral-B Genius X",
    image: "https://example.com/cepillo33.jpg",
    description:
      "Cepillo de dientes eléctrico con inteligencia artificial para un cepillado más efectivo. Conectividad Bluetooth para seguimiento en la aplicación.",
    brand: "Oral-B",
    price: 129.99,
    category: "Cuidado Personal",
    stock: 25,
    available_colors: ["Blanco"],
    sizes: ["Único"],
  },
  {
    name: "Set de Tazas de Café Espresso De Longhi",
    image: "https://example.com/tazas34.jpg",
    description:
      "Set de tazas de cerámica para café espresso. Diseño elegante y apto para lavavajillas.",
    brand: "De'Longhi",
    price: 19.99,
    category: "Hogar y Cocina",
    stock: 40,
    available_colors: ["Blanco", "Negro"],
    sizes: ["Juego de 6"],
  },
  {
    name: "Pelota de Yoga ProForm",
    image: "https://example.com/pelota35.jpg",
    description:
      "Pelota de yoga duradera para ejercicios de estabilidad y fortalecimiento. Incluye bomba de inflado.",
    brand: "ProForm",
    price: 14.99,
    category: "Fitness y Deportes",
    stock: 30,
    available_colors: ["Azul", "Morado"],
    sizes: ["65 cm"],
  },
  {
    name: "Cámara de Seguridad para el Hogar Ring Stick Up Cam",
    image: "https://example.com/camara36.jpg",
    description:
      "Cámara de seguridad inalámbrica para interiores y exteriores con resolución HD y comunicación bidireccional.",
    brand: "Ring",
    price: 99.99,
    category: "Electrónica",
    stock: 18,
    available_colors: ["Blanco"],
    sizes: ["Único"],
  },
  {
    name: "Silla de Escritorio Ergonómica Hbada",
    image: "https://example.com/silla37.jpg",
    description:
      "Silla de escritorio con diseño ergonómico y soporte lumbar. Ajustable en altura y reclinable.",
    brand: "Hbada",
    price: 129.99,
    category: "Muebles",
    stock: 20,
    available_colors: ["Negro", "Blanco"],
    sizes: ["Único"],
  },
  {
    name: "Monitor de Actividad Fitbit Charge 4",
    image: "https://example.com/monitor38.jpg",
    description:
      "Monitor de actividad con GPS integrado, monitorización del sueño y resistencia al agua. Ideal para el seguimiento del estado físico.",
    brand: "Fitbit",
    price: 149.99,
    category: "Wearables",
    stock: 25,
    available_colors: ["Negro", "Gris"],
    sizes: ["Único"],
  },
];

async function allCreate () {
    const results = await ProductoApi.create(productsData)
    console.log("Success Creat", results);
    
}

export default allCreate