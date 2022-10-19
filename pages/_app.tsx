import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import '../styles/index.scss'

console.log(process.env)

export default function MyApp({ Component, pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
