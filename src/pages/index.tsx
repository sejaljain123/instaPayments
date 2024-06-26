import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push('/cart');
  }, []);

  return (
    <>
      <Head>
        <title>InstaPayments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner />
    </>
  );
}
