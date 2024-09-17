import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const App = () => (
  <Container>
    <Typography variant="h2" gutterBottom>My Assistant</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary">Add a Task</Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="secondary">Check Calendar</Button>
      </Grid>
      {/* Add more features as buttons here */}
    </Grid>
  </Container>
);

export default App;
