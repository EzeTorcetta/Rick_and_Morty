
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "416486ca5103.96ef6b2df4eb1059f55c";


const getCharDetail = (res, ID) =>{
    fetch(`${URL_BASE}/character/${ID}?key=${KEY}`)
    .then(response => response.json())
    .then(data => {
        let character = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            status: data.status
        }

        res
            .writeHead(200, { "Content-Type": "application/json" })
            .end(JSON.stringify(character))
    })
    .catch(err => {
        res
        .writeHead(500, {"Content-Type": "text/plain"})
        .end(err.message)
    })
}

module.exports = getCharDetail