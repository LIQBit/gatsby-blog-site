import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout";
import Head from '../components/head';
import { Redirect } from '@reach/router'



const IndexPage = () => {
  return (
    <Redirect noThrow to={`home.html`} />
    //<Layout>
      //<Head title="Home" />
      //<h1>Hello</h1>
      //<h2>Hi there. I like things and a lot of stuff too.</h2>
      //<p>Need a developer? <Link to="/home.html">Contact me</Link></p>
    //</Layout>
  )
}


export default IndexPage;