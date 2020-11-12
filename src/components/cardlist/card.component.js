import React, {useState, useEffect} from 'react'
import ReactCardFlip from 'react-card-flip';

//components
import FrontCard from './frontCard.component'
import BackCard from './backCard.component'

import cardBackEasy from '../../assets/cardback_0.png'
import cardBackMedium from '../../assets/cardback_5.png'
import cardBackHard from '../../assets/cardback_8.png'
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
        }, 500)
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
            <img 
              className={classes.card_back} 
              src = {
                difficulty === 'easy' ?
                cardBackEasy : difficulty === 'medium' ?
                cardBackMedium : cardBackHard
              } 
              alt="Unavailable" 
              onClick={handleClick}
            />
          </FrontCard>
          <BackCard>
            <img className={classes.card_image} src = {imageGalary.imgUrl} alt='Unavailable' onClick={handleClick}/>
          </BackCard>
        </ReactCardFlip>
      )
  }

  export default Card