// fixes a bug for next-auth and mongodb atlas somehow
// https://github.com/nextauthjs/next-auth/issues/833
import 'reflect-metadata'
import React from 'react'
import '../styles/globals.css'
import { Provider  } from 'next-auth/client'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
  // auth provider
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
