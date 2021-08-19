import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import*as footerStyles from './footer.module.scss';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)


    return (
        <footer className={footerStyles.footer}>
            <Link to= "https://leighbitossi.com" ><p>Created by {data.site.siteMetadata.author}, &#169; 2021</p></Link>
        </footer>
    )
}

export default Footer;