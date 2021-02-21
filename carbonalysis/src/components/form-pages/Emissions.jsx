import React, { useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import RadioEmissions from '../radio-button/RadioEmissions';
import { co2Emissions } from '../../utils/questions';
import styles from './FormPages.module.css';
import { useHistory } from 'react-router-dom';
import HttpHelper from '../../utils/HttpHelper';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '50rem',
    minWidth: '50rem',
    maxHeight: '50rem',
    minHeight: '50rem'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    // maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%'
  }
}));

export default function Emissions() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = co2Emissions.length;

  const history = useHistory();

  const {
    user_id, car, fuel, utility, offsets
  } = useContext(carbonFootprintContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    const payload = {
      user_id,
      car,
      fuel,
      utility,
      offsets
    };
  
    HttpHelper('/emissions', 'POST', payload)
      .then((response) => {
        if (response.ok) {
          history.push('/dashboard');
        } else {
          throw new Error('oops something went wrong');
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
  };

  return (
    <div className={classes.root}>
      <h1 className={styles.title}>CO2 Emissions Analyzer</h1>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{co2Emissions[activeStep].label}</Typography>
      </Paper>
      <div className={styles.radioContainer}>
        <RadioEmissions
          co2Emissions={co2Emissions[activeStep]}
        />
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          activeStep === (maxSteps - 1)
          ?
          <Button type="submit" onClick={handleSubmit}>Submit</Button> 
          :
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};
