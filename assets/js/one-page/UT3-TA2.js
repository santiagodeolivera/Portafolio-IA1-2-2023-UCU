const attributesData = [
    {
        name: "CRIM",
        desc: "Tasa de crimen por 100000 personas.",
        type: "Números reales",
        range: "De 0,006 a 88,976",
        distr: {
            imgSrc: "/images/UT3-TA2/0.png",
            desc: "Alta concentración en el intervalo 0-10",
            notes: ""
        },
    },
    {
        name: "ZN",
        desc: "Proporción de terreno residencial zonificado para lotes de 25000 pies cuadrados.",
        type: "Números reales",
        range: "De 0 a 100",
        distr: {
            imgSrc: "/images/UT3-TA2/1.png",
            desc: "Alta concentración en el intervalo 0-10",
            notes: ""
        },
    },
    {
        name: "INDUS",
        desc: "Proporción de acres de negocios minoristas.",
        type: "Números reales",
        range: "De 0,460 a 27,740",
        distr: {
            imgSrc: "/images/UT3-TA2/2.png",
            desc: "No se observa ninguna Distribución particular",
            notes: ""
        },
    },
    {
        name: "CHAS",
        desc: "Variable dummy que indica si tiene frontera con el río Charles River.",
        type: "Números enteros",
        range: "0 o 1",
        distr: {
            imgSrc: "/images/UT3-TA2/3.png",
            desc: "La mayor parte de las ciudades no tienen frontera con el río Charles River",
            notes: ""
        },
    },
    {
        name: "NOX",
        desc: "Concentración de óxidos nítricos, en partes por 10 millones.",
        type: "Números reales",
        range: "De 0,385 a 0,871",
        distr: {
            imgSrc: "/images/UT3-TA2/4.png",
            desc: "Leve asimetría positiva o a la derecha",
            notes: ""
        },
    },
    {
        name: "RM",
        desc: "Número medio de habitantes por vivienda.",
        type: "Números reales",
        range: "De 3,561 a 8,780",
        distr: {
            imgSrc: "/images/UT3-TA2/5.png",
            desc: "Se asemeja a una distribución gaussiana, con media alrededor del 6 o 7",
            notes: ""
        },
    },
    {
        name: "AGE",
        desc: "Porcentaje de unidades ocupadas por sus propietarios, que fueron construidas antes de 1940.",
        type: "Números reales",
        range: "De 2,9 a 100,0",
        distr: {
            imgSrc: "/images/UT3-TA2/6.png",
            desc: "Asimetría a la izquierda, con una gran propoción de datos en el intervalo 80-100",
            notes: ""
        },
    },
    {
        name: "DIS",
        desc: "Promedio ponderado de las distancias a cinco centros de empleo de Boston.",
        type: "Números reales",
        range: "De 1,130 a 12,127",
        distr: {
            imgSrc: "/images/UT3-TA2/7.png",
            desc: "Asimetría a la derecha",
            notes: ""
        },
    },
    {
        name: "RAD",
        desc: "Índice de accesibilidad a carreteras radiales.",
        type: "Números enteros",
        range: "De 1 a 24",
        distr: {
            imgSrc: "/images/UT3-TA2/8.png",
            desc: "Dos grupos de datos polarizados, uno en el intervalo 0-10 y otro en el intervalo 20-24",
            notes: ""
        },
    },
    {
        name: "TAX",
        desc: "Tasa de impuesto a la propiedad de valor total por $10000.",
        type: "Números enteros",
        range: "De 187 a 711",
        distr: {
            imgSrc: "/images/UT3-TA2/9.png",
            desc: "Dos cúmulos de datos, uno en el intervalo 187-500 y otro en el intervalo 650-700",
            notes: ""
        },
    },
    {
        name: "PTRATIO",
        desc: "Cantidad de alumnos por maestro o profesor.",
        type: "Números reales",
        range: "De 12,6 a 22",
        distr: {
            imgSrc: "/images/UT3-TA2/10.png",
            desc: "No se observa ninguna distribución particular, más allá de un pico en el intervalo 20-21",
            notes: ""
        },
    },
    {
        name: "B",
        desc: "Representa un atributo no presente directamente en el dataset llamado Bk, que es la proporción de gente negra sobre el total en la ciudad. Más concretamente, se calcula como 1000 * (Bk - 0.63) ^ 2.",
        type: "Números reales",
        range: "De 0,320 a 396,900",
        distr: {
            imgSrc: "/images/UT3-TA2/11.png",
            desc: "Asimetría a la izquierda, con una alta concentración en el intervalo 350-400",
            notes: ""
        },
    },
    {
        name: "LSTAT",
        desc: "Proporción de gente de estatus bajo.",
        type: "Números reales",
        range: "De 1,730 a 37,970",
        distr: {
            imgSrc: "/images/UT3-TA2/12.png",
            desc: "Asimetría a la derecha",
            notes: ""
        },
    },
    {
        name: "MEDV",
        objective: true,
        desc: "Es la variable de salida que representa la mediana del precio de las casas que están ocupadas por sus dueños, en miles de dólares.",
        type: "Números reales",
        range: "De 5 a 50",
        distr: {
            imgSrc: "/images/UT3-TA2/13.png",
            desc: "Distribución ligeramente similar a una distribución gaussiana con intervalo modal 20-25",
            notes: ""
        },
    },
];

const attributeList = document.getElementById("attribute-list");
attributeDescriptionList(attributeList, attributesData);

const attributeTable = document.getElementById("attribute-table-content");
for (let attr of attributesData) {
    attributeTable.appendChild(
        newElement({
            tag: "tr",
            children: [
                { tag: "td", children: [attr.name] },
                { tag: "td", children: [attr.type] },
                { tag: "td", children: [attr.range] },
            ]
        })
    );
}

const distrTable = document.getElementById("distr-table-content");
for (let attr of attributesData) {
    distrTable.appendChild(
        newElement({
            tag: "tr",
            children: [
                { tag: "td", children: [attr.name] },
                {
                    tag: "td",
                    children: [{
                        tag: "img",
                        attrs: [["src", attr.distr.imgSrc]]
                    }]
                },
                { tag: "td", children: [attr.distr.desc] },
                { tag: "td", children: [attr.distr.notes] },
            ]
        })
    );
}

const rmSteps = [
    {
        content: "Crear un nuevo proceso en RapidMiner."
    },
    {
        content: "Extraer el dataset \"Housing\" mediante el operador \"Retrieve\"."
    },
    {
        content: "Fijar el atributo \"MEDV\" como variable objetivo mediante el operador \"Set Role\"."
    },
    {
        content: "Barajar los ejemplos del dataset mediante el operador \"Shuffle\"."
    },
    {
        content: "Dividir el dataset en dos sub-datasets (uno para entrenamiento, y otro para evaluación) mediante dos operadores \"Filter examples range\", con rangos de 1 - 450 y 451 - 506, respectivamente."
    },
    {
        content: "Con el dataset de entrenamiento, realizar dos operaciones \"Split Validation\": una con regresión lineal sin selección de atributos y otra con regresión lineal con selección de atributos \"greedy\".\n"
            + "Los operadores \"Performance\" de ambos \"Split Validation\" deben indicar las características \"squared error\", \"correlation\" y \"squared correlation\"."
    },
    {
        content: "Aplicar el dataset de evaluación a los modelos de ambas operaciones."
    }
];

const rmStepsList = document.getElementById("rm-process-steps");
for (let step of rmSteps) {
    rmStepsList.appendChild(
        newElement({
            tag: "li",
            children: [step.content]
        })
    );
}