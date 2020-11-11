import React from 'react'
import Card from './card.component'
//styles
import useStyles from '../../styles/appStyle'

const Cardlist = (props) => {
    const {imageGalary, incrementCount, clearCount, state, cardHeight, cardWidth} = props
    const classes = useStyles({cardHeight, cardWidth})
    return (
        <div className = {classes.content_container}>
            {imageGalary.map((item,index) => {
                return (
                <div className = {item.is_shown ? classes.card : classes.opacityTransition}>
                <Card
                    index = {index} 
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