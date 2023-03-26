import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // hace lo mismo que fetch basicamente




export default function Detail() {

    const { detailId } = useParams(); //obtengo id del personaje 
    const [character, setCharacter] = useState({}); //crea un estado local character

    useEffect(() => { // useEffect quiere decir "cuando se monta el componente"

        const URL_BASE = "http://localhost:3001/rickandmorty/detail";
        // const URL_BASE = "https://be-a-rym.up.railway.app/api";
        // const KEY = "416486ca5103.96ef6b2df4eb1059f55c";


        // axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
        axios(`${URL_BASE}/character/${detailId}`)
        .then((response) => setCharacter(response.data)
        );
    }, []);



    return (
        <div>
            {character.name ? ( //operador ternario--> (existe)?(por la positiva):(por la negativa)
                <>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.specie}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="imagen" />
                </>
            ) : (
                <h2>Loading...</h2>// muestra loading porque no tiene el estado actualizado, luego de cambiarlo react renderiza de nuevo, mostrando el detail
            )
            }
        </div>
    );
}







