import { FC } from "react"
// Components
// Libs
import { styled } from "@mui/material"
import assetPrefix from "@prefix"
// Styles

interface IImage {
  width?: string
  height?: string
  cursor?: string
  objectfit?: string
}

const Image = styled("img")<IImage>(({ width, height, cursor, objectfit }) => {
  let style = {
    width: width || "32px",
    height: height || width || "32px",
    cursor: cursor || "unset",
    objectfit: objectfit || "contain"
  }
  return style
})

interface IImageBase extends IImage {
  src: string
  alt: string
}

const ImgBase: FC<IImageBase> = (props) => {
  const { src, alt, ...rest } = props
  const srcCustom = `${src}.png`

  return <Image src={`${assetPrefix}/images/${srcCustom}`} alt={alt || src} {...rest} />
}

export default ImgBase

