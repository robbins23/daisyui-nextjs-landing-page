import Layout from '@/containers/Layout'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Provider } from 'react-redux'
import store from '../store'
import { hotjar } from 'react-hotjar'
import { GoogleAnalytics } from "nextjs-google-analytics"
import mixpanel from 'mixpanel-browser';
import { Crisp } from "crisp-sdk-web";
import TagManager from 'react-gtm-module'

export default function App({ Component, pageProps }) {
  
    useEffect(() => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          
        }else{
            console.log = () => {};
            if(process.env.NEXT_PUBLIC_HOTJAR_ID)hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1)
            if(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {debug: false}); 
            if(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID)Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
            if(process.env.NEXT_PUBLIC_GTM_ID)TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM_ID})
        }
      }, []);

  return (
      <Provider store={store}>
          <Layout>
              <GoogleAnalytics trackPageViews />
              <Component {...pageProps} />
          </Layout>
      </Provider>
  )
}
