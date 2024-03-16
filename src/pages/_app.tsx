import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { theme } from "@/theme/theme";

type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider theme={theme()}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
