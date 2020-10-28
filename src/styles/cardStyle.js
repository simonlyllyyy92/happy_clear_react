import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card:{
        width:'100%',
        height: "100%",
    },
    card_image:{
        width:'100%', 
        height:"100%", 
        objectFit:'fill', 
        borderRadius: '10%', 
    },
    card_back:{
        width:'100%', 
        height:"100%", 
        objectFit:'fill',
    }
});

export default useStyles
