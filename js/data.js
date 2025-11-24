const services = [
    {
        title: "Asesorías Técnicas",
        description: "Nos especializamos en evaluación técnica integral de proyectos inmobiliarios",
        items: [
            "Estudios de factibilidad técnica y económica",
            "Inspecciones técnicas de edificaciones",
            "Asesoría normativa y permisos de construcción",
            "Due diligence para adquisiciones inmobiliarias",
            "Peritajes y certificaciones técnicas"
        ]
    },
    {
        title: "Proyectos Comerciales",
        description: "Transformamos espacios comerciales en soluciones funcionales y atractivas",
        items: [
            "Diseño y remodelación de locales comerciales",
            "Construcción de oficinas corporativas",
            "Retail y espacios comerciales llave en mano",
            "Optimización de espacios y flujos de trabajo",
            "Gestión integral de proyectos comerciales"
        ]
    },
    {
        title: "Arquitectura",
        description: "Diseño arquitectónico innovador orientado a calidad y sustentabilidad",
        items: [
            "Anteproyectos y proyectos arquitectónicos",
            "Proyectos ejecutivos y especialidades",
            "Arquitectura residencial y comercial",
            "Diseño sustentable y eficiencia energética",
            "Tramitación de permisos municipales"
        ]
    }
];

const portfolio = [
    // Carl's Jr. - Proyectos Principales
    {
        title: "Carl's Jr. Oficinas Administrativas",
        category: "Comercial",
        area: "Obra Completa",
        year: 2016,
        location: "Chile",
        description: "Oficinas administrativas de Carl's Jr. Chile - Obra completa con diseño integral",
        type: "Obra Completa",
        images: ["carl-jr-admin-01.jpg", "carl-jr-admin-02.jpg", "carl-jr-admin-03.jpg"]
    },
    {
        title: "Carl's Jr. Nueva Providencia",
        category: "Comercial",
        area: "Local Comercial",
        year: 2016,
        location: "Santiago, Chile",
        description: "Restaurante Carl's Jr. Nueva Providencia con diseño moderno y funcional",
        type: "Obra Completa",
        images: ["carl-jr-providencia-01.jpg", "carl-jr-providencia-02.jpg", "carl-jr-providencia-03.jpg"]
    },
    {
        title: "Carl's Jr. Outlet Vivo La Florida",
        category: "Comercial",
        area: "Local Comercial",
        year: 2017,
        location: "La Florida, Santiago",
        description: "Restaurante en centro comercial Vivo con layout optimizado para operación",
        type: "Obra Completa",
        images: ["carl-jr-vivo-01.jpg", "carl-jr-vivo-02.jpg", "carl-jr-vivo-03.jpg"]
    },
    {
        title: "Carl's Jr. Mall Plaza Los Domínicos",
        category: "Comercial",
        area: "Local Comercial",
        year: 2017,
        location: "Los Domínicos, Santiago",
        description: "Sucursal Carl's Jr. en Mall Plaza con diseño de última generación",
        type: "Obra Completa",
        images: ["carl-jr-dominiicos-01.jpg", "carl-jr-dominiicos-02.jpg", "carl-jr-dominiicos-03.jpg"]
    },
    {
        title: "Carl's Jr. Mall Vivo Galería Imperio",
        category: "Comercial",
        area: "Local Comercial",
        year: 2018,
        location: "Galería Imperio, Santiago",
        description: "Restaurante con concepto de servicio rápido y acogedor",
        type: "Obra Completa",
        images: ["carl-jr-imperio-01.jpg", "carl-jr-imperio-02.jpg", "carl-jr-imperio-03.jpg"]
    },
    {
        title: "Carl's Jr. Vitacura",
        category: "Comercial",
        area: "Local Comercial",
        year: 2018,
        location: "Vitacura, Santiago",
        description: "Sucursal premium en zona residencial de Vitacura",
        type: "Obra Completa",
        images: ["carl-jr-vitacura-01.jpg", "carl-jr-vitacura-02.jpg", "carl-jr-vitacura-03.jpg"]
    },
    {
        title: "Carl's Jr. Mall Plaza Oeste",
        category: "Comercial",
        area: "Local Comercial",
        year: 2018,
        location: "Sector Oeste, Santiago",
        description: "Restaurante con diseño moderno y eficiente",
        type: "Obra Completa",
        images: ["carl-jr-oeste-01.jpg", "carl-jr-oeste-02.jpg", "carl-jr-oeste-03.jpg"]
    },
    {
        title: "Carl's Jr. Independencia",
        category: "Comercial",
        area: "Local Comercial",
        year: 2019,
        location: "Independencia, Santiago",
        description: "Sucursal con concepto de take-away y servicio al cliente",
        type: "Obra Completa",
        images: ["carl-jr-independencia-01.jpg", "carl-jr-independencia-02.jpg", "carl-jr-independencia-03.jpg"]
    },

    // Little Caesars - Proyectos
    {
        title: "Little Caesars Manuel Montt",
        category: "Comercial",
        area: "Local Comercial",
        year: 2017,
        location: "Manuel Montt, Santiago",
        description: "Pizzería Little Caesars con concepto Hot-N-Ready",
        type: "Obra Completa",
        images: ["little-caesars-montt-01.jpg", "little-caesars-montt-02.jpg", "little-caesars-montt-03.jpg"]
    },
    {
        title: "Little Caesars Manquehue Norte",
        category: "Comercial",
        area: "Local Comercial",
        year: 2018,
        location: "Manquehue Norte, Santiago",
        description: "Sucursal con área de comida lista y servicio al cliente",
        type: "Obra Completa",
        images: ["little-caesars-norte-01.jpg", "little-caesars-norte-02.jpg", "little-caesars-norte-03.jpg"]
    },
    {
        title: "Little Caesars Manquehue Sur",
        category: "Comercial",
        area: "Local Comercial",
        year: 2018,
        location: "Manquehue Sur, Santiago",
        description: "Pizzería con diseño moderno y operación eficiente",
        type: "Obra Completa",
        images: ["little-caesars-sur-01.jpg", "little-caesars-sur-02.jpg", "little-caesars-sur-03.jpg"]
    },

    // Otros Proyectos
    {
        title: "Cielo Milano Alonso de Córdova",
        category: "Comercial",
        area: "Local Comercial",
        year: 2019,
        location: "Alonso de Córdova, Santiago",
        description: "Habilitación local comercial con acabados premium",
        type: "Habilitación",
        images: ["cielo-milano-01.jpg", "cielo-milano-02.jpg", "cielo-milano-03.jpg"]
    },
    {
        title: "Matlife - Área Rentas Inmobiliarias",
        category: "Arquitectura",
        area: "Edificio Patrimonial",
        year: 2019,
        location: "Santiago Centro",
        description: "Re-habilitación Edificio Patrimonial Las Hiedras",
        type: "Obra Completa",
        images: ["matlife-hiedras-01.jpg", "matlife-hiedras-02.jpg", "matlife-hiedras-03.jpg"]
    },
    {
        title: "Bubble Gummers Rediseño",
        category: "Comercial",
        area: "Local Comercial",
        year: 2019,
        location: "Costanera Center, Providencia",
        description: "Propuesta de rediseño de imagen y layout - Modelo piloto",
        type: "Proyecto",
        images: ["bubble-gummers-01.jpg", "bubble-gummers-02.jpg", "bubble-gummers-03.jpg"]
    },
    {
        title: "Coffee Market La Cisterna",
        category: "Comercial",
        area: "Local Comercial",
        year: 2024,
        location: "Estación Intermodal La Cisterna",
        description: "Café con concepto de servicio rápido en estación intermodal",
        type: "Obra Completa",
        images: ["coffee-market-01.jpg", "coffee-market-02.jpg", "coffee-market-03.jpg"]
    },
    {
        title: "EcoCarga - Remodelaciones Múltiples",
        category: "Comercial",
        area: "Múltiples Locales",
        year: 2020,
        location: "Las Condes, Maipú, Arauco, Valparaíso, Viña",
        description: "Remodelación, manutención y recuperación de múltiples sucursales",
        type: "Obra Completa",
        images: ["ecocarga-01.jpg", "ecocarga-02.jpg", "ecocarga-03.jpg"]
    },
    {
        title: "Joyerías Marró",
        category: "Comercial",
        area: "Locales Comerciales",
        year: 2023,
        location: "Vitacura, Camino El Alba, Estoril",
        description: "Tiendas de joyería con diseño elegante y moderno",
        type: "Obra Completa",
        images: ["marró-vitacura-01.jpg", "marró-vitacura-02.jpg", "marró-vitacura-03.jpg"]
    },
    {
        title: "Modista Gilda Vitacura",
        category: "Comercial",
        area: "Local Comercial",
        year: 2025,
        location: "Vitacura, Santiago",
        description: "Tienda de modas con diseño contemporáneo",
        type: "Obra Completa",
        images: ["modista-gilda-01.jpg", "modista-gilda-02.jpg", "modista-gilda-03.jpg"]
    },
    {
        title: "Chikin - Comida Coreana",
        category: "Comercial",
        area: "Local Comercial",
        year: 2025,
        location: "San Pascual, Las Condes",
        description: "Restaurante de comida coreana con concepto moderno",
        type: "Obra Completa",
        images: ["chikin-01.jpg", "chikin-02.jpg", "chikin-03.jpg"]
    }
];

const team = [
    {
        name: "M. Soledad San Martin",
        role: "Socia - Gerente Área Comercial",
        avatar: "SS",
        experience: "15+ años",
        bio: "Arquitecto con experiencia en Postventa, Mantención, Área Comercial e implementación de Control de Proyectos",
        previousRoles: ["Gerente General Fmax", "Jefe Venta ASL Sencorp", "Coordinador Constructora DLP"]
    },
    {
        name: "Renzo Borghero",
        role: "Socio - Gerente Arquitectura",
        avatar: "RB",
        experience: "15+ años",
        bio: "Arquitecto especializado en proyectos retail y comercial con enfoque en arquitectura sustentable",
        previousRoles: ["Gerente Oficina Diseño Ecocarga", "Jefe de Proyectos SMU Retail"]
    },
    {
        name: "Osvaldo Velásquez",
        role: "Socio - Gerente Operaciones",
        avatar: "OV",
        experience: "15+ años",
        bio: "Ingeniero Eléctrico especializado en sistemas de construcción, CCTV y climatización",
        previousRoles: ["Especialista sistemas minería", "Consultor empresarial"]
    }
];

// Mapa de descripciones adicionales por proyecto
const projectDetails = {
    "Carl's Jr. Oficinas Administrativas": "Oficinas corporativas diseñadas para optimizar la operación administrativa de Carl's Jr. Chile con espacios modernos y eficientes.",
    "Carl's Jr. Nueva Providencia": "Restaurante emblemático ubicado en Nueva Providencia con diseño de marca actualizado y optimización de flujo de clientes.",
    "Carl's Jr. Outlet Vivo La Florida": "Sucursal en centro comercial con layout especializado para maximizar operación en espacios reducidos.",
    "Coffee Market La Cisterna": "Concepto innovador de café en estación intermodal con atención rápida y servicio de calidad.",
    "EcoCarga - Remodelaciones Múltiples": "Proyecto integral de múltiples sucursales con enfoque en reutilización y ahorro de recursos."
};
