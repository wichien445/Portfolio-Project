import React, { useState } from 'react'
//Mui
import { makeStyles } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(theme => ({}))

function getSteps() {
    return ['Phone', 'Confirm OTP', 'Reset Password']
}

function StepperForm() {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep(preActiveStep => preActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep(preActiveStep => preActiveStep + 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    function getStepContent(setIndex) {
        switch (setIndex) {
            case 0 :
                return 'Phone Component'
            case 1 :
                return 'Confirm OTP Component'
            case 2 :
                return 'Reset Password Component'
            default : 
                return 'Unknow stepIndex'
        }
    }
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(lable => (
                <Step key={lable}>
                    <StepLabel>{lable}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div>
            {activeStep === steps.length ? (
                <div>
                    <Typography>All Steps Comleted</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
            ) : (
                <div>
                    <div>{getStepContent(activeStep)}</div>
                    <div>
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                        </Button>
                        <Button variant='contained' color='primary' onClick={handleNext}>
                            {activeStep === steps.length -1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default StepperForm