import React, { useState, useContext } from 'react';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Radio from '../radio-button/Radio';
import carbonFootprintQuestions from '../../utils/questions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  }
}));

export default function FormPages() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carbonFootprintQuestions.length;
  const {
    householdSize, setHouseholdSize,
    homeSize, setHomeSize,
    food, setFood,
    water, setWater,
    purchases, setPurchases,
    waste, setWaste,
    recycle, setRecycle,
    transportation, setTransportation,
    publicTransit, setPublicTransit,
    flights, setFlights,
    totalFootprint, setTotalFootprint
  } = useContext(carbonFootprintContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{carbonFootprintQuestions[activeStep].label}</Typography>
      </Paper>
      <Radio
        carbonFootprintQuestions={carbonFootprintQuestions[activeStep]}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
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
}
