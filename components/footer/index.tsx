import { FC, useEffect } from "react"
// Components
import { FooterWrapper } from "./index.styles"
import { Text } from "@components/common"
// Libs
// Styles

const Footer: FC = () => {
  useEffect(() => {
    console.log("footer render")
  }, [])
  return (
    <FooterWrapper>
      <Text size="18px" weight="bold">
        Power By Next.js
      </Text>
    </FooterWrapper>
  )
}

export default Footer
