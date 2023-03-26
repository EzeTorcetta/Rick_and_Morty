
const http = require("http");
const  getCharById  = require("./controllers/getCharById");
const  getCharDetail  = require("./controllers/getCharDetail");

http

.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');        

    const { url } = req;
    
    let id = url.split("/").at(-1);
        
    if (url.includes("onsearch")) {
        getCharById(res, id)
//      res.end(id) --> para chequear que ande bien en el insomnia
    }

    if(url.includes("detail")){
        getCharDetail(res, id)
    }

}).listen(3001, "localhost");



// const http = require("http");
// const characters = require("./utils/data")


// http

// .createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');


//     const { url } = req;
    

//     if (url.includes("rickandmorty/character/")) {
//         let id = url.split("/").at(-1);
//         // res.end (`Estoy en la ruta con el ID ${id}`)  para probar con el insomia si toma bien el id

//         let characterFind = characters.find(char => char.id == id)

//         if(characterFind){
//             // console.log(characterFind)
//             res.writeHead(200, { "Content-Type": "application/json" })
//             return res.end(JSON.stringify(characterFind))
//         } else {
//             res.writeHead(404, {"Content-Type": "application/json"})
//             return res.end(JSON.stringify({error: "Character not found"}))
//         }
//     }

//     res.writeHead(404);
//     res.end();

// })

// .listen(3001, "localhost");