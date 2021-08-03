//Import fs
const fs = require("fs");

//Funcion fs
function escrituraJSON (answer1, answer2, answer3) {
    let persona2 = {
                    "name" : answer1,
                    "surname" : answer2,
                    "age" : answer3
    };
    let string2 = JSON.stringify(persona2, null, 2);
    setTimeout (
        () => {
            let data = fs.readFileSync("./persona2.json", "utf-8");
            console.log(data);
    }
    , 2000)
    
    fs.writeFileSync("./persona2.json", string2);
}

module.exports = {escrituraJSON};