import React from 'react';
import { navigateTo } from 'gatsby-link';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import styled from '../utils/styled';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';
import Button from '../components/Button';

/* 
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
        <Helmet title="Contacto" />
        <Typography variant="display1">Contacto</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
        <Typography>
        <form name="contact" netlify-honeypot="full-name" action="/thanks" netlify>
          <p class="honey">
            <label>Your full name: <input name="full-name" /></label>
          </p>
          <p>
            <input placeholder="Nombre" type="text" name="name" required />
          </p>
          <p>
            <input placeholder="Email" type="email" name="email" required />
            <span class="validation-text">Ingrese una dirección de email válida.</span>
          </p>
          <p>
            <textarea placeholder="Mensaje" rows="4" name="message" required></textarea>
          </p>
          <div data-netlify-recaptcha></div>
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
 */
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Contacto" />
          <Typography variant="display1">Contacto</Typography>
          <Typography>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Nombre:<br />
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Email:<br />
                  <input type="email" name="email" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Mensaje:<br />
                  <textarea name="message" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <Button type="submit" variant="stroked">Enviar</Button>
              </p>
            </form>
          </Typography>
        </Grid>
      </Section>
    );
  }
}