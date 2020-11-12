import { makeStyles } from '@material-ui/core/styles';
import starbackground from '../assets/starbackground.jpg'

const useStyles = makeStyles({
    root_container: {
      backgroundImage: `url(${starbackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    content_container:{
        width: '75%',
        height: '468px',
        minHeight: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    opacityTransition:{
      opacity: 0,
      height: props => props.cardHeight || '30%',
      width: props => props.cardWidth || '12%',
      transition: "opacity 1s" 
    },
    card:{
      height: props => props.cardHeight || '30%',
      width: props => props.cardWidth || '12%',
    },
    youWin_container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button:{
      width: '80%',
      display: 'flex',
      alignItems:'center',
      justifyContent:'space-evenly',
      marginTop: '15px'
    },
    left_container:{
      height: '468px',
      minHeight: '80%',
      width: '15%',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'flex-start'
    }
    
});

export default useStyles
