import React, {useState, useEffect} from 'react'
import ReactCardFlip from 'react-card-flip';

//components
import FrontCard from './frontCard.component'
import BackCard from './backCard.component'

import cardBackHard from '../../assets/cardback_easy.gif'
import cardBackEasy from '../../assets/iceCrown_cardback.gif'
import cardBackMedium from '../../assets/cardBack_medium.gif'
//style
import useStyles from '../../styles/cardStyle'


const Card = (props) => {
    const {state, clearCount, addCount, index, imageGalary, difficulty} = props
    const [isFlipped, setisFlipped] = useState(false)
   
    const handleClick = (e) => {
      e.preventDefault();
      if(state.count < 2 && imageGalary.is_shown !== false){
        setisFlipped(!isFlipped)
        addCount(index, imageGalary.id)
      }
    } 

    const classes = useStyles()

    useEffect(() => {
      if(state.count === 2){
        setTimeout(function(){  
            setisFlipped(false)
            clearCount()
        }, 450)
      }
    },[state.count])


      return (
          <ReactCardFlip 
              isFlipped={isFlipped} 
              flipDirection="horizontal" 
              containerStyle = {{
                height: '100%',
                width: '100%'
          }}>
            <FrontCard>
                {difficulty === 'easy' ? 
                  <img 
                  className={classes.card_back} 
                  src = {cardBackEasy} 
                  alt="Unavailable" 
                  onClick={handleClick}
                /> : difficulty === 'medium' ? 
                  <img 
                    className={classes.card_back} 
                    src = {cardBackMedium} 
                    alt="Unavailable" 
                    onClick={handleClick}
                  /> :  <img 
                  className={classes.card_back} 
                  src = {cardBackHard} 
                  alt="Unavailable" 
                  onClick={handleClick}
                />
              }
            </FrontCard>
            <BackCard>
              <img className={classes.card_image} src = {imageGalary.imgUrl} alt='Unavailable' onClick={handleClick}/>
            </BackCard>
          </ReactCardFlip>
      )
  }

  export default Card