import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import styled from '../utils/styled';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';
import Button from '../components/Button';


const content = `
De commodo exquisitaque. Ut magna labore nam litteris, nulla se cupidatat de
constias elit sed laborum illustriora ut malis incurreret fidelissimae. Fabulas
et cernantur.Aliqua admodum ita quid sint. Noster cupidatat ingeniis, ad hic
labore ingeniis, quis vidisse ubi labore tempor, ita quem offendit probant. Aut
illum cillum minim consequat ea legam te iis fore consequat.
`;

const Contact = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Contact" />
        <Typography variant="display1">Contacto</Typography>
        {/* <Typography component={Markdown} source={content} escapeHtml={false} /> */}
        <Typography>
        <form name="contact" netlify-honeypot="full-name" action="/thanks" netlify>
          <p class="honey">
            <input name="path" value="{{ page.url }}" />
            <label>Your full name: <input name="full-name" /></label>
          </p>
          <p>
            <label>Su Nombre: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Su Email: <input type="email" name="email" /></label>
          </p>
{/*           <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p> */}
          <p>
            <label>Mensaje: <textarea name="message"></textarea></label>
          </p>
          <p>
            <Button type="submit" variant="stroked">Enviar</Button>
          </p>
        </form>
        </Typography>
      </Grid>
    </Section>
  );
};
export default Contact;
