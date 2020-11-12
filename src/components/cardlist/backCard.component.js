import React from 'react'
import useStyles from '../../styles/cardStyle'

const BackCard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.card_back_container}>{props.children}</div>
    )
}

export default BackCard