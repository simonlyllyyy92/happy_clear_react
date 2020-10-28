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
      alignItems: 'center'
    },
    content_container:{
        width: '70%',
        height: '468px',
        minHeight: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    opacityTransition:{
      opacity: 0,
      height: '30%',
      width: '12%',
      transition: "opacity 1s" 
    },
    card:{
      height: '30%',
      width: '12%',
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
    }
    
});

export default useStyles
