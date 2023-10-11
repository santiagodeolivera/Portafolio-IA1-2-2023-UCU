const attributesData = [
    {
        name: "CRIM",
        desc: "Tasa de crimen per cápita de la ciudad.",
        type: "Números reales",
        range: "De 0,006 a 88,976",
        distr: {
            imgSrc: "/images/UT3-TA2/0.png",
            desc: "Alta concentración en el rango 0-10, pocos ejemplos en el resto del rango",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "ZN",
        desc: "Proporción de terreno residencial zonificado para lotes de 25000 pies cuadrados.",
        type: "Números reales",
        range: "De 0 a 100",
        distr: {
            imgSrc: "/images/UT3-TA2/1.png",
            desc: "Alta concentración en el rango 0-10, pocos ejemplos en el resto del rango",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "INDUS",
        desc: "Proporción de acres de negocios minoristas en la ciudad.",
        type: "Números reales",
        range: "De 0,460 a 27,740",
        distr: {
            imgSrc: "/images/UT3-TA2/2.png",
            desc: "No se nota ninguna distribución particular",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "CHAS",
        desc: "Variable dummy que indica si tiene frontera con el río Charles River.",
        type: "Numéros reales",
        range: "De 0 a 1",
        distr: {
            imgSrc: "/images/UT3-TA2/3.png",
            desc: "Solo tiene dos valores",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "NOX",
        desc: "Concentración de óxidos nítricos, en partes por 10 millones.",
        type: "Números reales",
        range: "De 0,385 a 0,871",
        distr: {
            imgSrc: "/images/UT3-TA2/4.png",
            desc: "No se nota ninguna distribución particular, más allá de una tendencia decreciente",
            outliers: "No se notan outliers"
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
            outliers: "No se notan outliers"
        },
    },
    {
        name: "AGE",
        desc: "Proporción de unidades ocupadas por sus propietarios, que fueron construidas antes de 1940.",
        type: "Números reales",
        range: "De 2,900 a 100,000",
        distr: {
            imgSrc: "/images/UT3-TA2/6.png",
            desc: "Distribución creciente, con una parte importante de los ejemplos en el rango 80-100",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "DIS",
        desc: "Distancias ponderadas a cinco centros de empleo de Boston.",
        type: "Números reales",
        range: "De 1,130 a 12,127",
        distr: {
            imgSrc: "/images/UT3-TA2/7.png",
            desc: "Distribución decreciente",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "RAD",
        desc: "Índice de accesibilidad a carreteras radiales.",
        type: "Números reales",
        range: "De 1 a 24",
        distr: {
            imgSrc: "/images/UT3-TA2/8.png",
            desc: "Dos cúmulos de datos, uno en el rango 0-10 y otro en el rango 20-24",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "TAX",
        desc: "Tasa de impuesto a la propiedad de valor total por $10000.",
        type: "Números reales",
        range: "De 187 a 711",
        distr: {
            imgSrc: "/images/UT3-TA2/9.png",
            desc: "Dos cúmulos de datos, uno en el rango 187-500 y otro en el rango 650-700",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "PTRATIO",
        desc: "Proporción entre cantidad de alumnos y de maestros de la ciudad.",
        type: "Números reales",
        range: "De 12,6 a 22",
        distr: {
            imgSrc: "/images/UT3-TA2/10.png",
            desc: "No se nota ninguna distribución particular, más allá de un pico en el rango 20-21",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "B",
        desc: "Representa un atributo no presente directamente en el dataset llamado Bk, que es la proporción de gente negra sobre el total en la ciudad. Más concretamente, se calcula como 1000 * (Bk - 0.63) ^ 2.",
        type: "Números reales",
        range: "De 0,320 a 396,900",
        distr: {
            imgSrc: "/images/UT3-TA2/11.png",
            desc: "Alta concentración en el rango 350-400, pocos ejemplos en el resto del rango",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "LSTAT",
        desc: "Proporción de gente de estatus bajo sobre el total.",
        type: "Números reales",
        range: "De 1,730 a 37,970",
        distr: {
            imgSrc: "/images/UT3-TA2/12.png",
            desc: "No se nota ninguna distribución particular, más allá de una tendencia decreciente",
            outliers: "No se notan outliers"
        },
    },
    {
        name: "MEDV",
        objective: true,
        desc: "Variable de salida, representa la mediana de valores de hogares ocupados por sus dueños, en miles de dólares.",
        type: "Números reales",
        range: "De 5 a 50",
        distr: {
            imgSrc: "/images/UT3-TA2/13.png",
            desc: "Distribución ligeramente similar a una distribución gaussiana, más un pico ligero en el rango 45-50",
            outliers: "No se notan outliers"
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
                { tag: "td", children: [attr.distr.outliers] },
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
        content: "Dividir el dataset en los sub-datasets mencionados mediante dos operadores \"Filter examples range\", con rangos de 1 - 450 y 451 - 506 respectivamente."
    },
    {
        content: "Con el dataset de entrenamiento, realizar dos operaciones \"Split Validation\", una con regresión lineal sin selección de atributos, y otra con una regresión lineal con una selección de atributos \"greedy\".\n"
            + "El operador \"Performance\" en ambos \"Split Validation\" debe indicar las características \"squared error\", \"correlation\" y \"squared correlation\"."
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