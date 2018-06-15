import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const content = `
<p>Desarrollo web a medida de sus necesidades y posibilidades.</p>
<ul>
  <li><b>¿El presupuesto es un problema?</b><br /> Buscamos la solución más 
adecuada, sin perder de vista el diseño y el rendimiento.</li>
  <li><b>¿El proyecto no es muy claro?</b><br /> Ayudamos a definir una solución a la necesidad planteada.</li>
</ul>
<p>Nos gusta crear, a través del uso de herramientas de código abierto, soluciones a
problemas complejos y desafiantes.</p>
`;

const About = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Nosotros" />
        <Typography variant="display1">Acerca de &#xA75E;</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
      </Grid>
    </Section>
  );
};
export default About;
