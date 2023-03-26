import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   }
   return (
      <div className={style.SearchBar}>
         <input className={style.Input} type='search' onChange={handleChange}/>
      <button className={style.Button} onClick={() => onSearch(id) }>Agregar</button>
      </div>
   );
}
