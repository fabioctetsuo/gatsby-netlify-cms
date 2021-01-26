import * as React from "react";
import Image from "gatsby-image";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const { posts } = data.allMarkdownRemark;
  return (
    <main>
      <title>Home Page</title>
      {posts.map(({ post }) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            background: "#fafafa",
            padding: 16,
          }}
          key={post.id}
        >
          <Image
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ width: 180 }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 16,
            }}
          >
            <h3>{post.frontmatter.title}</h3>
            <span>{post.frontmatter.description}</span>
            <time>{post.frontmatter.date}</time>
          </div>
        </div>
      ))}
    </main>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      posts: edges {
        post: node {
          id
          frontmatter {
            title
            description
            date(formatString: "LL", locale: "pt-BR")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 250, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
