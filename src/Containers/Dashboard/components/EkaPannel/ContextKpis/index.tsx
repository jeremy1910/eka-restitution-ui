import { Grid } from '@mui/material'
import { EkaKPICard, EkaKPIScore } from 'eka-components'
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
        <EkaKPIScore title="Realized Tests" kpi1={{
          title: 'This Month',
          kpi: 500000,
          variant: {
            percent: -5.6,
            label: 'of last month',
          }
        }}
          kpi2={{
            title: 'Last Month',
            kpi: 2500000,
            variant: {
              percent: 11,
              label: 'of the month before',
            }
          }}
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2}>
        <EkaKPICard title="Applications" kpi={8} />
      </Grid>
    </Grid>
  )
}

export default ContextKpis