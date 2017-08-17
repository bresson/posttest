/**
 * The index page uses a layout page that pulls in header and footer components
 */
import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default class extends React.Component {

  render() {
    return (
      <Layout {...this.state}>
        <h2>About this project</h2>
        <p>
          This is a starter <a href="https://zeit.co/blog/next">Next.js 2.0</a> project
          that shows how to put together a simple website with server and client
          side rendering powered by Next.js, which uses React.
        </p>
      </Layout>
    )
  }

}
