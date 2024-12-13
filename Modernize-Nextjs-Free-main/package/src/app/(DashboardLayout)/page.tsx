'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import TreesAdopted from '@/app/(DashboardLayout)/components/dashboard/TreesAdopted';
import RecentActivity from '@/app/(DashboardLayout)/components/dashboard/RecentActivity';
import TreesPerRegion from '@/app/(DashboardLayout)/components/dashboard/TreesPerRegion';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import Volunteers from '@/app/(DashboardLayout)/components/dashboard/Volunteers';
import AdoptTreeForm from './components/dashboard/AdoptForm';
import MapComponent from './components/dashboard/Map';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TreesAdopted />
              </Grid>
              <Grid item xs={12}>
                <Volunteers />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* Adjust the MapComponent section */}
            <Box
              sx={{
                height: '400px', // Set a fixed height for the map container
                borderRadius: '8px', // Optional: Add rounded corners
                overflow: 'hidden', // Prevent overflow issues
              }}
            >
              <MapComponent />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <TreesPerRegion />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
          <Grid item xs={12}>
            <AdoptTreeForm />
          </Grid>

        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
