const attributesData = [
    {
        name: "Edad",
        desc: "Representa la edad en años del paciente, redondeada al número más cercano."
    },
    {
        name: "Estado_civil",
        desc: "Representa, mediante un número, el estado civil de la persona: 0 = soltero, 1 = casado, 2 = divorciado, 3 = viudo."
    },
    {
        name: "Sexo",
        desc: "Representa, mediante un número, el sexo de la persona: 0 = femenino, 1 = masculino."
    },
    {
        name: "Categoria_Peso",
        desc: "Representa, mediante un número, la categoría de IMC de la persona: 0 = normal, 1 = sobrepeso, 2 = obeso (no hay ejemplos por debajo del IMC normal)."
    },
    {
        name: "Colesterol",
        desc: "Nivel de colesterol de la persona durante su primer ataque cardíaco, en miligramos por decilitro"
    },
    {
        name: "Manejo_stress",
        desc: "Representa, mediante un número, si la persona participó en cursos de manejo del estrés: 0 = no, 1 = sí"
    },
    {
        name: "Trat_ansiedad",
        desc: "Representa, mediante un número, el nivel natural de ansiedad de la persona y su capacidad de manejo del estrés: entero de 0 a 100"
    },
    {
        name: "2do_Ataque_Corazon",
        objective: true,
        desc: "Indica si la persona ha recibido un segundo ataque cardíaco. Se representa con \"Si\" o \"No\". Este atributo solo se encuentra presente en el dataset de entrenamiento."
    },
];

const attributeList = document.getElementById("attribute-list");
attributeDescriptionList(attributeList, attributesData);
