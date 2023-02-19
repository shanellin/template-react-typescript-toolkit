import { FC, useEffect } from "react"
// Components
import NextLink from "next/link"
import { HeaderWrapper } from "./index.styles"
import { Row, HSpace } from "@components/common"
// Libs
// Styles

const Header: FC = () => {
  useEffect(() => {
    console.log("header render")
  }, [])
  return (
    <HeaderWrapper>
      <h1>Create Next App With TypeScript</h1>
      <Row>
        <NextLink href={"/"}>Home</NextLink>
        <HSpace length="20" />
        <NextLink href={"/hooks"}>Hooks</NextLink>
      </Row>
    </HeaderWrapper>
  )
}

export default Header
