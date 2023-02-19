import { FC, ReactNode, useEffect } from "react"
import { useRouter } from "next/router"
// Components
import Header from "@components/header/index"
import Footer from "@components/footer/index"
import { LayoutWrapper, MainWrapper } from "./index.styles"
// Libs
import { useTranslation } from "react-i18next"
// Styles

interface ILayout {
  children?: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  // const { locale } = useRouter()
  // const { i18n } = useTranslation()

  // useEffect(() => {
  //   i18n.changeLanguage(locale)
  // }, [])
  
  return (
    <>
      <LayoutWrapper>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </>
  )
}

export default Layout
