import Layout from "../components/layout/layout";
import '../styles/globals.css';

const MyApp =({Component,pageProps,router})=>{
  return (
    <>
      <Layout>
            <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}



export default MyApp;