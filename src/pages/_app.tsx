import { FC } from "react";
import type { AppProps } from "next/app";
import GlobalStyle from '../global-styles'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
