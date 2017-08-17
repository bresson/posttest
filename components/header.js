/* eslint-disable react/no-danger */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Menu from './menu'

export default class extends React.Component {


  render() {
    /*
    let stylesheet
    if (process.env.NODE_ENV === 'production') {
      // In production, serve pre-built CSS file from /assets/{version}/main.css
      let pathToCSS = '/assets/' + Package.version + '/main.css'
      stylesheet = <link rel="stylesheet" type="text/css" href={pathToCSS}/>
    } else {
      // In development, serve CSS inline (with live reloading) with webpack
      // NB: Not using dangerouslySetInnerHTML will cause problems with some CSS
      stylesheet = <style dangerouslySetInnerHTML={{__html: inlineCSS}}/>
    }*/

    return (
      <header>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <Menu />
        <div className="header">
          <h1>TEST</h1>
          <hr/>
        </div>
      </header>
    )
  }

}