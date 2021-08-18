import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../components/layout';

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Helmet } from 'react-helmet';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              fixed(width: 2800, height: 1000) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
`

const Blog = ({data}) => {
    const options = {
      renderNode: {
        "embedded-asset-block": node => {
          //const alt = node.data.target.fields.title['en-US']
          //const url = node.data.target.fields.file['en-US'].url

         

          return(
              <img src={node.data.target.fixed.src} alt={node.data.target.title} />
            
          ) 
         
        }
      }
    }


    return(
        <Layout>
          <Head title={data.contentfulBlogPost.title} />
            <div>
              <h1>{data.contentfulBlogPost.title}</h1>
              <p>{data.contentfulBlogPost.publishedDate}</p> 
              {renderRichText(data.contentfulBlogPost.body,options)}
            </div>
        </Layout>
    )
}

export default Blog;