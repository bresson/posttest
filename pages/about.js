import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('color state', this.props)
    return (
      <Layout {...this.state}>
        <h2>About</h2>
      </Layout>
    )
  }

}