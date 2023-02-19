import type { GetServerSideProps, GetStaticProps } from "next"
// Components
import Head from "next/head"
import Layout from "@components/layout/index"
import HomePage from "@containers/home"
// Libs
import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./_app"
import assetPrefix from "@prefix"
import { getPosts } from "@slices/post"
import { wrapper } from "@states/store"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Styles

const Home: NextPageWithLayout = (props) => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href={`${assetPrefix}/images/favicon.ico`} />
      </Head>
      <HomePage {...props} />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'common'])),
    },
  };
};

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async (context) => {
//   console.log("bbbb");
//   console.log(context.locale)
//   const locale = context.locale
  
  
//   let props = {}
//   try {
//     const res = await dispatch(getPosts({ limit: 2 })).unwrap()
//     props = { postList: res }
//   } catch (err) {
//     console.log(`The Error happened in getServerSideProps: ${err}`)
//   } finally {
//     props = {
//       ...props,
//       ...(await serverSideTranslations(locale, ["common"]))
//     }
//     return { props }
//   }
// })

export default Home
