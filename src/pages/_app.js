import Layout from '@/containers/Layout'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])

  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
