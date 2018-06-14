import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const content = `
<p>En &#xA75E; la gente est&aacute; antes que la tecnología</p>
<p>Pasamos tiempo trabajando con el cliente a través de todo el proceso de
creación de la solución tecnológica personalizada. Como cliente, puede 
contactarnos en cualquier momento con ideas o preguntas sobre su proyecto, 
y recibirá respuestas completas y sinceras.</p>
<p>La comunicación es un componente vital de nuestro proceso. Antes de comenzar a
escribir código, nos aseguramos de haber entendido por completo los deseos y las
expectativas del cliente.</p>
`;

const Home = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Inicio</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
        {/* <Button component={Link} to="/about" variant="stroked">
          Acerca
        </Button> */}
      </Grid>
    </Section>
  );
};
export default Home;
