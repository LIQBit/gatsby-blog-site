import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import*as blogStyles from './blog.module.scss';

import { Helmet } from 'react-helmet';
import Head from '../components/head';

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
                   }
               }
           }
       }
    `)

    return(
            <Layout>
                <Head title="Blog" />
                <h1>Blog</h1>
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

