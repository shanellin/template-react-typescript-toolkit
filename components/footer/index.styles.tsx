import { styled } from "@mui/material"

export const FooterWrapper = styled("footer")(({ theme }) => {
  let style = {
    width: "100%",
    height: "100px",
    borderTop: `1px solid ${theme.palette.background.yellow}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > a": {
      alignItems: "center",
      display: "flex"
    }
  }
  return style
})
