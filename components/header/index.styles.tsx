import { styled } from "@mui/material"

export const HeaderWrapper = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "70px",
  paddingLeft: "16px",
  paddingRight: "16px",
  background: theme.palette.background.paper,
  borderBottom: `2px solid ${theme.palette.primary.main}`
}))
