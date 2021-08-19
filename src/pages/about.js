import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import Head from '../components/head';


const aboutPage = () => {
    return(
        <div>
            <Layout>
                <Head title="About" />
                <h1>SURVIVING DECEMBER</h1>
                <p>Yearning for the sounds of the true punk rock you grew up with?
                    We can transport you back!
                </p>
            </Layout>
        </div>
    )
}

export default aboutPage;