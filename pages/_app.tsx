import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

//<-- Function to return all components -->
const MyApp = ({ Component, pageProps }: AppProps) => {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
