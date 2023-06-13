import React, { Fragment } from 'react'
//Mui
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const useStyles = makeStyles(theme => ({}))

function Information() {
    const classes = useStyles()
  return (
    <Fragment>
        <div className={classes.root}>
            <Grid container direction='row'>

            </Grid>
        </div>
    </Fragment>
  )
}

export default Information