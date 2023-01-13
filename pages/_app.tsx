import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import "../styles/globals.css";
import Head from "next/head";
import Web3sdksGuideFooter from "../components/Web3sdksGuideFooter";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdks Marketplace with Next.JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Web3sdks's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
        />
        <meta
          name="keywords"
          content="Web3sdks, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Web3sdksGuideFooter />
    </Web3sdksProvider>
  );
}

export default MyApp;
