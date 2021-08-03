//Importo librería fs
const fs = require("fs/promises");

//.then y .catch
function escritura (persona) {
    fs.writeFile("persona.json", JSON.stringify(persona, null, 2))
    .then (function (path, data) {
        return fs.readFile("persona.json", "utf-8");
    })
    .then (function (data) {
        console.log(JSON.parse(data));
    })
    .catch (function (error) {
        console.log(error);
    })
}

//async y await
async function escritura(persona) {
    try
    {
        fs.writeFile("persona2.json", JSON.stringify(persona, null, 2));
        let resultado = await fs.readFile("persona2.json", "utf-8");
        console.log(JSON.parse(resultado));
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {escritura};