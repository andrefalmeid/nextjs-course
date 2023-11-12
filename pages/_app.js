import GlobalStyle from "../src/theme/Globalstyle";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <GlobalStyle/>
  <Component {...pageProps} />
</>
  )
}

export default MyApp;