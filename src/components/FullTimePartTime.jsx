import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { blue, lightBlue } from '@material-ui/core/colors';

 const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    cssClass: "e-info",
  },
 /*  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  }, */
})); 

export default function FullTimePartTime() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root} >
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend" ><b>Full Time - Part Time</b></FormLabel>
        <RadioGroup row
          aria-label="title"
          name="title"
          className={classes.group}
          value={value}
          onChange={handleChange}
       
        >
          <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          
          
        </RadioGroup>
      </FormControl>
      </div>
      )
    }