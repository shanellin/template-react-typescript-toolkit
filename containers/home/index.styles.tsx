import { styled } from "@mui/material"

export const MainWrapper = styled("main")({
  padding: "5rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
})

export const Title = styled("h1")(({ theme }) => ({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  textAlign: "center",
  "& a": {
    color: theme.palette.text.blue_light,
    textDecoration: "none"
  }
}))

export const Description = styled("p")({
  lineHeight: 1.5,
  textAlign: "center",
  fontSize: "1.5rem"
})
