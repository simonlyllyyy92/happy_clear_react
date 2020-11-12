import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    checkBoxLabel:{
        color: 'white',
        fontSize: '24px'
    },
    difficultyContainer: {
        height: '80%',
        padding: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'flex-start',
      },
    difficultyContentContainer: {
        display: 'flex',
        flexDirection:'column',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
      },

    difficultyCheckBox:{
      display: 'flex',
      width: '100%',
      height: '80%',
      justifyContent: 'center',
    },
    difficultyCheckBoxContainer: {
        display: 'flex',
        flexDirection:'column',
        width: '50%',
        justifyContent: 'space-evenly',
        height: '100%'
      }
    
});

export default useStyles