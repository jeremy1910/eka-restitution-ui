import { Grid } from '@mui/material'
import { EkaKPICard } from 'eka-components'
import React from 'react'

function ContextKpis() {
  return (
    <Grid container columns={8} spacing={2}>
      <Grid item xs={4} sm={2} md={1}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
      <Grid item xs={8} sm={4} md={2}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
      <Grid item xs={8} sm={4} md={2}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
      <Grid item xs={8} sm={4} md={2}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
    </Grid>
  )
}

export default ContextKpis