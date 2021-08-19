import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Layout from '../components/layout';
import*as blogStyles from './blog.module.scss';

import { Helmet } from 'react-helmet';
import Head from '../components/head';

import bandpic from '/static/images/bandwebsitepic.png';

const Blogpage = () => {
    
    const data = useStaticQuery(graphql`
       query {
           allContentfulBlogPost (filter: {node_locale: {eq: "en-US"}},
               sort: {
                   fields: publishedDate,
                   order: DESC
               }
           ) {
               edges {
                   node {
                       title
                       slug
                       publishedDate (formatString: "MMMM Do, YYYY")
                       body {
                           raw
                           references {
                               description
                           }
                       }
                   }
               }
           }
       }
    `)
    console.log(data)

    return(
            <Layout>
                <Head title="Blog" />
                <h1>SURVIVING DECEMBER BLOG</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map(edge => (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    ))}
                </ol>
            </Layout>
    )
}

export default Blogpage;

