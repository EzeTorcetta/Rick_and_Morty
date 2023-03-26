
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "416486ca5103.96ef6b2df4eb1059f55c";


const getCharById = (res, ID) => {
    fetch(`${URL_BASE}/character/${ID}?key=${KEY}`)  // axios y fetch retornan una promesa, por eso hay que preveer el caso de exito o fallo
        .then(response => response.json())
        .then(data => {                     // caso de exito
            let character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species
            }

            res
                .writeHead(200, { "Content-Type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(err => {                            //caso de fallo 
            res
            .writeHead(500, {"Content-Type": "text/plain"})
            .end(JSON.stringify(err.message))
        })
}

module.exports = getCharById