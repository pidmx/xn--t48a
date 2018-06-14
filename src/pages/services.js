import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const content = `
<p>Aquí en &#xA75E; se produce, mantiene y expande el software que es clave
para el negocio de nuestros clientes. Nuestras habilidades técnicas nos
permiten ser flexibles. Podemos trabajar en una variedad de formas para
lograr hacer lo que se necesite.</p>
`;

const Services = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Services" />
        <Typography variant="display1">Servicios</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
      </Grid>
    </Section>
  );
};
export default Services;
