import React from 'react'
import { useTranslation } from 'react-i18next';
import { EkaKPICard, EkaKPITop } from 'eka-components';
import { Box, Grid } from '@mui/material';
import EkaPannel from './components/EkaPannel';

function DashBoard() {

  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
      <p>Dashboard</p>
      <EkaPannel />
      {/* <Grid container columns={8}>
        <Grid item xs={4} sm={2} md={1}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={4} sm={2} md={1}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
      </Grid>

      <Grid container columns={8}>
        <Grid item  md={2} sm={4} xs={8}>
          <Grid container direction="column">
            <Grid item>
              <div style={{height: '150px'}}>
                <EkaKPITop title="Top 3 incidents in progress" kpis={[{name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}]}/>
              </div>
            </Grid>
            <Grid item>
              <div style={{height: '150px'}}>
                <EkaKPITop title="Top 3 incidents in progress" kpis={[{name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}]}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item  md={1} sm={2} xs={8}>
          <Grid container direction="column">
            <Grid item>
              <div style={{height: '100px'}}>
                <EkaKPICard title="Applications" kpi={8}/>
              </div>
            </Grid>
            <Grid item>
              <div style={{height: '100px'}}>
                <EkaKPICard title="Applications" kpi={8}/>
              </div>
            </Grid>
            <div style={{height: '100px'}}>
                <EkaKPICard title="Applications" kpi={8}/>
              </div>
          </Grid>
        </Grid>
        <Grid item  md={1} sm={2} xs={8}>
          <Grid container direction="column">
              <Grid item>
                <div style={{height: '150px'}}>
                  <EkaKPICard title="Applications" kpi={8}/>
                </div>
              </Grid>
              <Grid item>
              <div style={{height: '150px'}}>
                  <EkaKPICard title="Applications" kpi={8}/>
                </div>
              </Grid>
          </Grid>
        </Grid>
        <Grid item  md={4} sm={8} xs={8}>
          <EkaKPICard title="Applications" kpi={8}/>  
        </Grid>
      </Grid> */}


      {/* <Grid container columns={8} spacing={2}>
        <Grid item xs={4} sm={2} md={1}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={4} sm={2} md={1}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
        <Grid item xs={8} sm={4} md={2}>
          <EkaKPICard title="Applications" kpi={8}/>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',  // Une seule colonne sur mobile
            sm: 'repeat(2, 1fr)',  // Deux colonnes sur petite tablette
            md: 'repeat(4, 1fr)',  // Quatre colonnes sur tablette
            lg: 'repeat(8, 1fr)',  // Huit colonnes sur ordinateur portable et plus
          },
          gridTemplateRows: {
            xs: 'repeat(24, 50px)',
            sm: 'repeat(18, 50px)',
            md: 'repeat(12, 50px)',
            lg: 'repeat(6, 50px)',
          },
          gap: 2,
        }}
      >
        <Box sx={{ gridColumn: {
            xs: '1',            
            sm: '1 / 3',
            md: '1 / 3',           
            lg: '1 / 3',            
          }, 
          gridRow: '1 / 4' }}>
          <EkaKPITop title="Top 3 incidents in progress" kpis={[{name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}]}/>
        </Box>
        <Box sx={{ 
            gridColumn: {
              xs: '1',            
              sm: '1 / 3',
              md: '1 / 3',           
              lg: '1 / 3',            
            },
            gridRow: '4 / 7'
          }}>
          <EkaKPITop title="Top 3 incidents in progress" kpis={[{name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}, {name: 'Public Access - Home Client', time: 50000}]}/>
        </Box>
        <Box sx={{ gridColumn: {
          xs: '1',
          sm: '1',
          md: '3',
          lg: '3'
          }, 
          gridRow: {
            xs: '7 / 9',
            sm: '7 / 9',
            md: '1 / 3',
            lg: '1 / 3',
            } }}>
          <EkaKPICard title="Applications" kpi={1}/>
        </Box>
        <Box sx={{ gridColumn: {
          xs: '1',
          sm: '1',
          md: '3',
          lg: '3'
          }, 
          gridRow: {
            xs: '9 / 11',
            sm: '9 / 11',
            md: '3 / 5',
            lg: '3 / 5',
            } }}>
          <EkaKPICard title="Applications" kpi={5}/>
        </Box>
        <Box sx={{ gridColumn: {
          xs: '1',
          sm: '1',
          md: '3',
          lg: '3'
          }, 
          gridRow: {
            xs: '11 / 13',
            sm: '11 / 13',
            md: '5 / 7',
            lg: '5 / 7'
          } }}>
          <EkaKPICard title="Applications" kpi={6}/>
        </Box>
        <Box sx={{ 
          gridColumn: {
            xs: '1',
            sm: '2',
            md: '4',
            lg: '4'
          }, 
          gridRow: {
            xs: '13 / 15',
            sm: '7 / 10',
            md: '1 / 4',
            lg: '1 / 4'
            } }}>
          <EkaKPICard title="Applications" kpi={7}/>
        </Box>
        <Box sx={{ gridColumn: {
            xs: '1',
            sm: '2',
            md: '4',
            lg: '4'
          }, gridRow: {
            xs: '15 / 17',
            sm: '10 / 13',
            md: '4 / 7',
            lg: '4 / 7'
            } }}>
          <EkaKPICard title="Applications" kpi={9}/>
        </Box>
        <Box sx={{ 
          gridColumn: {
            xs: '1',
            sm: '1 / 5',
            md: '1 / 5',
            lg: '5 / 9'
          }, 
          gridRow: {
            xs: '17 / 24',
            sm: '13 / 19',
            md: '7 / 12',
            lg: '1 / 7'
          }}}>
          <EkaKPICard title="Applications" kpi={10}/>
        </Box>
        
      </Box> */}

      

    </div>
  )
}

export default DashBoard