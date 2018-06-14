import React from 'react';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Section>
    <Grid item xs={12} sm={8}>
      <Typography variant="display1">NO ENCONTRADO</Typography>
      <Typography>
        La p&aacute;gina solicitada no existe... qu&eacute; tristeza.
      </Typography>
    </Grid>
  </Section>
);

export default NotFoundPage;
