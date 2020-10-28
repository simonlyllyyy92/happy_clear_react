import React from 'react'
import useStyles from '../styles/cardStyle'

const FrontCard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.card}>{props.children}</div>
    )
}

export default FrontCard