import React, {useState, useEffect} from 'react'
import Card from './card.component'
//styles
import useStyles from '../../styles/appStyle'

const Cardlist = (props) => {
    const {imageGalary, incrementCount, clearCount, state, cardHeight, cardWidth, difficulty} = props
    const [transformPosition, setPosition] = useState('translate(0px, 1480px)');
    const classes = useStyles({cardHeight, cardWidth, transformPosition})

    useEffect(() => {
        if(transformPosition !== 'translate(0px, 1480px)'){
            setPosition('translate(0px, 1480px)')
        }
    },[difficulty])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(transformPosition !== 'translate(0px, 0px)'){
                setPosition('translate(0px, 0px)')
            }
        }, 1000)
        return () => clearTimeout(timeout)
    }, [transformPosition])
  
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