// import App from 'next/app'
import Layout from "../Components/Layout"
import { StateContext } from "../context/StateContext"
import { Toaster } from 'react-hot-toast';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
    <Layout>
      <Toaster />
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </Layout>
    </StateContext>
  )  
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
