import Layout from "../components/layout/layout";
import '../styles/globals.css';
import LanguageProvider from "@/components/Menu/LanguageContext";

const MyApp =({Component,pageProps,router})=>{
  return (
    <>
      <LanguageProvider>
         <Layout>
               <Component {...pageProps} key={router.route} />
         </Layout>
      </LanguageProvider>
    </>
  );
}



export default MyApp;