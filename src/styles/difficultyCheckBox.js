import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    checkBoxLabel:{
        color: 'white',
        fontSize: '24px'
    },
    difficultyContainer: {
        height: '468px',
        minHeight: '80%',
        padding: 'auto',
        width: '15%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'flex-start'
      },
    difficultyContentContainer: {
        display: 'flex',
        flexDirection:'column',
        height: '70%',
        justifyContent:'center',
        width: '100%'
      },
    difficultyCheckBoxContainer: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        height: '80%'
      }
    
});

export default useStyles