import { styled } from "@mui/material"

export const LayoutWrapper = styled("div")({
  position: "relative",
  height: "100vh",
  maxHeight: "100vh",
  width: "100%",
})

export const MainWrapper = styled("div")({
  position: "relative",
  height: "calc(100% - 170px)",
  width: "100%",
  overflowY: "auto"
})
