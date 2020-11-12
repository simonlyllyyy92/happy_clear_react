import React from 'react'
import Card from './card.component'
//styles
import useStyles from '../../styles/appStyle'

const Cardlist = (props) => {
    const {imageGalary, incrementCount, clearCount, state, cardHeight, cardWidth, difficulty} = props
    const classes = useStyles({cardHeight, cardWidth})
    return (
        <div className = {classes.content_container}>
            {imageGalary.map((item,index) => {
                return (
                <div key={index} className = {item.is_shown ? classes.card : classes.opacityTransition}>
                <Card
                    index = {index}
                    difficulty = {difficulty} 
                    imageGalary = {item} 
                    state = {state} 
                    addCount = {incrementCount} 
                    clearCount = {clearCount}
                />
                </div>)
            })}
        </div>
    )
 
}

export default Cardlist 