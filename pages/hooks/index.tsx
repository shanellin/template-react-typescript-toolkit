import type { NextPage } from "next"
// Components
import Head from "next/head"
import HooksPage from "@containers/hooks"
// Libs
import assetPrefix from "@prefix"
// Styles

const Hooks: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Hooks page</title>
        <meta name="description" content="Hooks page" />
        <link rel="icon" href={`${assetPrefix}/images/favicon.ico`} />
      </Head>
      <HooksPage {...props} />
    </>
  )
}

export default Hooks
