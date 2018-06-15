import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const content = `
<p>Agradecemos que nos contacte por este medio. En breve tendrá respuesta por nuestra parte.</p>
`;

const Thanks = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Thanks" />
        <Typography variant="display1">Gracias &#xA75E;</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
      </Grid>
    </Section>
  );
};
export default Thanks;
