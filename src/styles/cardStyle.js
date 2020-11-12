import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card:{
        width:'100%',
        height: "100%",
    },
    card_image:{
        width:'80%', 
        height:"80%", 
        objectFit:'fill',
        borderRadius: '10%', 
    },
    card_back_container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_back:{
        width:'100%', 
        height:"100%", 
        objectFit:'fill',
    }
});

export default useStyles
