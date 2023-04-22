import { AuthUserProvider } from '@/Config/auth'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  )
}
