import React from 'react'
import ContextKpis from './ContextKpis'
import IssueKpis from './IssueKpis'
import { Grid } from '@mui/material'

function EkaPannel() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ContextKpis />
      </Grid>
      <Grid item>
        <IssueKpis />
      </Grid>
    </Grid>

  )
}

export default EkaPannel