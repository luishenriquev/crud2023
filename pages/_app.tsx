import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from 'context/AppContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'libs/gtag'



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
export default MyApp
