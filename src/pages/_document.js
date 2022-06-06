import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang={'en'}>
        <Head>
          <meta charSet={'utf-8'} />
          <meta name={'theme-color'} content={'#fff'} />
          <meta name={'description'} content={'cleaning'} />
          <title>Shedevr Cleaning - COMMERCIAL & OFFICE CLEANING</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
