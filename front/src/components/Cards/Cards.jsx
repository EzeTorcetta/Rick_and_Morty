import Card from '../Card/Card';
import style from './CardsContainer.module.css'

export default function Cards({characters,onClose}) {
   
   return (
      <div className={style.CardsContainer}>
         {
            characters.map(({ name, species, gender, image, id }) => {
               return <Card
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose}


               />
            })
         }

      </div>
   )

}

