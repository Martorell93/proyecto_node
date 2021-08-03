//Importacion fs/promise y función escritura
const fs = require("fs/promises");
const escritura = require("./lecturaArchivo")

//Módulo readline para convertirlo en promesas
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntas(pregunta) {
    const question = new Promise((resolve, reject) => {
        rl.question (pregunta, (respuesta) => {resolve(respuesta)})
    })
    return question;
}

//Declaro el objeto que quiero modificar con las preguntas
let persona = {
    "name" : "",
    "surname" : "",
    "age" : 0
}

//.then y .catch
function respuestas() {
    preguntas("¿Nombre?: ")
    .then(function (question) {
        persona.name = question;
        return preguntas ("¿Apellido?: ");
    })
    .then (function (question) {
        persona.surname = question;
        return preguntas ("¿Edad?: ");
    })
    .then (function (question) {
        persona.age = question
        rl.close();
        escritura.escritura(persona);
    })
    .catch(function (error) {
        console.log(error);
    })
}

//async y await
async function respuestas() {
    try
    {
        let respuesta1 = await preguntas("¿Nombre?: ");
        let respuesta2 = await preguntas("¿Apellido?: ");
        let respuesta3 = await preguntas("¿Edad?: ");
        let persona = {
            "name": respuesta1,
            "surname": respuesta2,
            "age": respuesta3
        }
        rl.close();
        await escritura.escritura(persona);
    }

    catch(error)
    {
        console.log(error);
    }
}

module.exports = {respuestas};