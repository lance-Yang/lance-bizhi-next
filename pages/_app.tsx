import '../styles/globals.css'
import React, { Suspense } from "react";
import type { AppProps } from 'next/app'

import Layout from './layout/Layout'
import LoadingPage from '../components/Loading/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  )
}

export default MyApp
