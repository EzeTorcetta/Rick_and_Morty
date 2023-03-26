import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addCharacter, removeCharacter} from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const Card = ({ id, name, species, gender, image, onClose }) => {

   const myFavorites = useSelector((state) => state.myFavorites)
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeCharacter(id))
      }
      else {
         setIsFav(true);
         dispatch(addCharacter({ id, name, species, gender, image, onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.tarjeta}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.BotonTarjeta} onClick={() => onClose(id)} >X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt="" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

export default Card;

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addCharacter: () => { dispatch(addCharacter()) },
//       removeCharacter: () => { dispatch(removeCharacter()) }

//    }
// }

// export default connect(null, mapDispatchToProps)(Card);