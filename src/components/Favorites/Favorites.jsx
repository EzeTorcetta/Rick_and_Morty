import { useDispatch, useSelector } from "react-redux";
import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";


const Favorites = () => {
    const { myFavorites } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleOrderCards = (event) => {
      dispatch(orderCards(event.target.value))
    }
    
    const handleFilterCards = (event) => {
      dispatch(filterCards(event.target.value))
    }



    return (
        
        <div>
           <div>
            <select name="" onChange={handleOrderCards}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="" onChange={handleFilterCards}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
            </select>
           </div>
            <div>
            {
                myFavorites.map((character) => {
                    return (
                        <div className={style.tarjeta}>
                            


                            <Link to={`/detail/${character.id}`}>
                                <h2>{character.name}</h2>
                            </Link>
                            <img src={character.image} alt="" />
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites;