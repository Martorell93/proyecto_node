//Import readline
const readline = require("readline");
const escritura = require("./lecturaArchivo");

//Funcionaes readline
function preguntas() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("¿Nombre?: ", function(answer1) {
        rl.question("¿Apellido?: ", function(answer2) {
            rl.question("¿Edad?: ", function(answer3) {
                escritura.escrituraJSON(answer1, answer2, answer3);
                rl.close();
            });
        });
    });
}

//Module export
module.exports = {preguntas};