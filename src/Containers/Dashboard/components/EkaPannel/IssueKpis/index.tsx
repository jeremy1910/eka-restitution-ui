import { Grid } from '@mui/material'
import { EkaKPICard, EkaKPITop } from 'eka-components'
import React from 'react'
import { TopKpiWrapper, KpiWrapper } from './styles'

function IssueKpis() {
    return (
        <Grid container columns={8} spacing={2}>
            <Grid item md={2} sm={4} xs={8}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TopKpiWrapper>
                            <EkaKPITop
                                title="Top 3 incidents in progress"
                                kpis={[
                                    { name: 'Public Access - Home Client', time: 50000 },
                                    { name: 'Public Access - Home Client', time: 50000 },
                                    { name: 'Public Access - Home Client', time: 50000 }
                                ]} />
                        </TopKpiWrapper>
                    </Grid>
                    <Grid item>
                        <TopKpiWrapper>
                            <EkaKPITop
                                title="Top 3 incidents in progress"
                                kpis={[
                                    { name: 'Public Access - Home Client', time: 50000 },
                                    { name: 'Public Access - Home Client', time: 50000 },
                                    { name: 'Public Access - Home Client', time: 50000 }
                                ]} />
                        </TopKpiWrapper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={1} sm={2} xs={8}>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <KpiWrapper>
                            <EkaKPICard title="Applications" kpi={8} />
                        </KpiWrapper>
                    </Grid>
                    <Grid item>
                        <KpiWrapper>
                            <EkaKPICard title="Applications" kpi={8} />
                        </KpiWrapper>
                    </Grid>
                    <Grid item>
                        <KpiWrapper>
                            <EkaKPICard title="Applications" kpi={8} />
                        </KpiWrapper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={1} sm={2} xs={8}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TopKpiWrapper>
                            <EkaKPICard title="Applications" kpi={8} />
                        </TopKpiWrapper>
                    </Grid>
                    <Grid item>
                        <TopKpiWrapper>
                            <EkaKPICard title="Applications" kpi={8} />
                        </TopKpiWrapper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} sm={8} xs={8}>
                <EkaKPICard title="Applications" kpi={8} />
            </Grid>
        </Grid>
    )
}

export default IssueKpis