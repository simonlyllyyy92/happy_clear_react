import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles} from '@material-ui/core/styles';

//custom styles
import useStyles from '../styles/difficultyCheckBox'

export default function RadioButtonsGroup({value, handleSelectDifficulty}) {
  const classes = useStyles()

  const handleChange = (event) => {
    handleSelectDifficulty(event.target.value);
  };

  const WhiteRadio = withStyles({
    root: {
      color: 'white',
      '&$checked': {
        color: 'white',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const WhiteFormLabel = withStyles({
    root: {
      color: 'white',
      '&$focused':{
        color: 'white', 
      },
      fontSize: '28px'
    },
    focused: {}
  })(FormLabel)

  return (
    <div className={classes.difficultyContainer}>
      <div className={classes.difficultyContentContainer}>
        <WhiteFormLabel component="legend">Select Difficulty</WhiteFormLabel>
        <div className ={classes.difficultyCheckBox}>
          <RadioGroup className={classes.difficultyCheckBoxContainer} aria-label="difficulty" name="difficulty" value={value} onChange={handleChange}>
              <FormControlLabel className = {classes.checkBoxLabel} value="easy" control={<WhiteRadio />} label={<Typography className={classes.checkBoxLabel}>Easy</Typography>} />
              <FormControlLabel className = {classes.checkBoxLabel} value="medium" control={<WhiteRadio />} label={<Typography className={classes.checkBoxLabel}>Medium</Typography>}/>
              <FormControlLabel className = {classes.checkBoxLabel} value="hard" control={<WhiteRadio />} label={<Typography className={classes.checkBoxLabel}>Hard</Typography>} />
          </RadioGroup>
        </div>
      </div>
    
    </div>
  );
}