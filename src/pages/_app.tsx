import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../themes/ThemeProvider";
import Header from "@/components/Header";
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from "@/constants";
import { Flex, Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/lib/store";
import Layout from "@/components/layout/Layout";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <Provider store={store} >
//         <Flex w="full" h="100vh" direction="column" >
//           <Box w="full" height={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }} >
//             <Header />
//           </Box>
//           <Flex background="background" width="full" flex="1" justifyContent="center" px={{ base: "2", md: "4", lg: "8" }} py={{ base: "", md: "4", lg: "8" }} gap="12">
//             <Component {...pageProps} />
//           </Flex>
//         </Flex>
//       </Provider>
//     </ThemeProvider >
//   )
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}