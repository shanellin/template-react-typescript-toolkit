import { FC } from "react"
import { useRouter } from "next/router"
// Components
import { MainWrapper, Title, Description } from "./index.styles"
// Libs
import { useAppDispatch } from "@hooks/app"
import { fieldStatus } from "@constants"
import { getPosts } from "@slices/post"
import { useTranslation } from "next-i18next"
// Styles

interface IProps {
  postList?: any
}

const HomePage: FC = (props: IProps) => {
  const { postList } = props

  const dispatch = useAppDispatch()
  const { t } = useTranslation(["common"])
  const { locale, locales, defaultLocale } = useRouter()

  const handleClickAwait = async () => {
    try {
      const res = await dispatch(getPosts({ limit: 200 })).unwrap()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickThen = () => {
    dispatch(getPosts({ limit: 200 }))
      .unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <MainWrapper>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
        <Description>Get started by editing pages/index.tsx - {fieldStatus.VALID}</Description>
      </MainWrapper>
      <h1>
        {t("TXT_TEST")} {locale}
      </h1>
      <h2>Posts</h2>
      <ul>
        {postList?.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <h2>Axios</h2>
      <button onClick={() => handleClickAwait()}>click me (async/await)</button>
      <button onClick={() => handleClickThen()}>click me (then/catch)</button>
    </>
  )
}

export default HomePage
