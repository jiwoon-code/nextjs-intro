import "../styles/globals.css";
import Layout from "./LayOut";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
