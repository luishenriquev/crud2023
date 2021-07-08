import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from 'context/AppContext'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import * as gtag from 'libs/gtag'



function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
export default MyApp
