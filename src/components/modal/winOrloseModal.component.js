import React from 'react'

import useStyles from '../../styles/appStyle'
import youWin from '../../assets/youwin.gif'
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import GifPlayer from 'react-gif-player'

const WinOrLoseModal = (props) => {
      const classes = useStyles()
    

      const handleHardReload = () => {
        window.location.reload()
      }
    
      const handleLogOut = () => {
        window.close()
      }
    

    const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#CECFD0'
        }
    };
   
    const {isOpen, onRequestClose} = props
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className = {classes.youWin_container}>
                <h2 style={{fontSize: "24px"}}>！！You Win ！！</h2>
                <GifPlayer gif={youWin} autoplay={true} style={{width: '100%', objectFit: 'fill'}}/>
                <div className = {classes.button}>
                <Button variant="contained" color="primary" onClick={handleHardReload}>
                    Play Again
                </Button>
                <Button variant="contained" onClick={handleLogOut}>End Game</Button>
                </div>
            </div>
        </Modal>
    )
}

export default WinOrLoseModal