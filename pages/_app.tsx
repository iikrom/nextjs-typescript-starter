import { AppProps } from 'next/app'
import '../styles/globals.css'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default CustomApp
