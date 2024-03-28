import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from "@/constants";
import { Flex, Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/lib/store";
import Layout from "@/components/layout/Layout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}