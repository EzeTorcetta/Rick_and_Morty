import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import Card from "../Card/Card";

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
                    <option value="All characters">All characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            <div>
                {
                    myFavorites.map(({ id, name, species, gender, image }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                species={species}
                                gender={gender}
                                image={image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;