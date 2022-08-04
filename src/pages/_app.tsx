import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../models/layout";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import instance from "../../api/config";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <div>
      <LayoutWrapper>
        <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
          <Component {...pageProps} />
        </SWRConfig>
      </LayoutWrapper>
      <ToastContainer />
    </div>
  );
}

export default MyApp;
