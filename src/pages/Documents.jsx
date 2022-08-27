import { Grid } from '@mui/material'
import React from 'react'
import MainMenu from '../components/MainMenu'
const Documents = () => {
  return (
    <MainMenu>
    <Grid container>
      <Grid item xs={12}>
        <Grid container item>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
    </Grid>
  </MainMenu>
  )
}

export default Documents