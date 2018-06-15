import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Markdown from 'react-markdown';
import styled from '../utils/styled';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';
import Button from '../components/Button';


const List = styled('ul')(theme => ({
  padding: 0,
  margin: 0,
}));
const ListItem = styled('li')(theme => ({
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.spacing.unit * 2}px 0`,
  margin: 0,
  borderBottom: '1px solid #eee',
  overflow: 'hidden',
  '&:last-child': {
    borderBottom: 'none',
  },
}));
const PostTitle = styled(Link)(theme => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const Placeholder = styled('div')(theme => ({
  backgroundColor: '#eee',
  minWidth: 100,
  marginRight: theme.spacing.unit * 3,
}));
const Thumbnail = styled('img')(theme => ({
  display: 'block',
  height: '100%',
  borderRadius: 3,
}));

const IndexPage = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Noticias" />
        <Typography variant="display1">Noticias</Typography>
        <Typography>
          
        </Typography>
        <List>
          {data.allPost.edges.map(post => (
            <ListItem key={post.node.id}>
              <Link to={`/post/${post.node.slug}`}>
                <Placeholder>
                  <Thumbnail
                    alt={post.node.title}
                    src={
                      post.node.coverImage
                        ? `https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
                            post.node.coverImage.handle
                          }`
                        : 'https://via.placeholder.com/100x100'
                    }
                  />
                </Placeholder>
              </Link>
              <div>
                <PostTitle to={`/post/${post.node.slug}`}>
                  <Typography variant="title">{post.node.title}</Typography>
                </PostTitle>
                <Typography>
                  <Button component={Link} to={`/post/${post.node.slug}`} variant="stroked">
                    Seguir Leyendo
                  </Button>
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Section>
  );
};
export default IndexPage;

export const query = graphql`
  query GetPosts {
    allPost(sort: { fields: [dateAndTime], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          content
          coverImage {
            handle
          }
        }
      }
    }
  }
`;
