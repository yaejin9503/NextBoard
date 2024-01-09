import '../styles/globals.css'
import Layout from '../src/components/commons/layouts/index'
import ApolloSetting from '../src/components/commons/apollo/ApolloSetting'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'

export default function App({ Component, pageProps }) {

  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles}/>
        <Layout> 
          <Component {...pageProps} />
        </Layout> 
      </>
    </ApolloSetting>
  )
}
