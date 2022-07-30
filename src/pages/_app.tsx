import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../models/layout";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </LayoutWrapper>
  );
}

export default MyApp;
