import {
  FC,
  useState,
  useReducer,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  ReactNode
} from "react"
// Components
import { MainWrapper, Title } from "./index.styles"
// Libs
import isBrowser from "@utils/isBrowser"
import mainReducer, { initialState, changeNumber } from "./reducers"
// Styles

const HooksPage: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [flag, setFlag] = useState<boolean>(false)

  const [state, reducerDispatch] = useReducer(mainReducer, initialState)

  const divRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const childRef = useRef<TChildAddCountRef>(null)

  useEffect(() => {
    console.log("Welcome to Hooks page!")

    intervalRef.current = setInterval(() => {
      console.log("show intervalRef")
    }, 1000)

    return () => stopIntervalRef()
  }, [])

  // useLayoutEffect(() => {
  //   if (isBrowser) {
  //     console.log("useLayoutEffect does nothing on the server")
  //   }
  // }, [])

  const handleRenderClick = () => {
    setTimeout(() => {
      setCount(count + 1)
      setFlag(!flag)
    }, 0)
  }

  const handleClick = (type: string) => {
    reducerDispatch(changeNumber({ type }))
  }

  const memoizedCallback = useCallback(
    (firstName: string, lastName: string) => {
      console.log(`${firstName} ${lastName} ${count}`)
    },
    [count]
  )

  const memoizedCount = useMemo(() => count, [count])

  const stopIntervalRef = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout)
  }

  const clickHandle = () => {
    childRef.current?.addCount()
  }

  console.log("re-render!!!!")

  return (
    <>
      <MainWrapper>
        <Title>Welcome to Hooks page!</Title>
        <h2>#1. useState</h2>
        <div>
          count: {count}, flag: {flag.toString()}
          <button onClick={() => handleRenderClick()}>try render</button>
        </div>
        <h2>#2. useReducer</h2>
        <div>
          click times: {state.clickTimes}
          <button onClick={() => handleClick("increment")}>+1</button>
          <button onClick={() => handleClick("decrement")}>-1</button>
        </div>
        <h2>#3. useCallback</h2>
        <div>
          <button onClick={() => memoizedCallback("Shane", "Lin")}>click memoizedCallback</button>
        </div>
        <h2>#4. useMemo</h2>
        <div ref={divRef}>memoized count: {memoizedCount}</div>
        <h2>#5. useRef</h2>
        <div>
          <button onClick={() => console.log(divRef)}>show divRef in devtool</button>
          <button onClick={() => stopIntervalRef()}>stop intervalRef</button>
        </div>
        <h2>#6. useImperativeHandle</h2>
        <div>
          <ChildAddCount ref={childRef} />
          <button onClick={clickHandle}>add count in parent</button>
        </div>
      </MainWrapper>
    </>
  )
}

type TChildAddCountRef = {
  addCount: () => void
}

interface IChildAddCountProps {
  children?: ReactNode
}

const ChildAddCount = forwardRef<TChildAddCountRef, IChildAddCountProps>((props, ref) => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  useImperativeHandle(ref, () => ({ addCount }))

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>add count in child</button>
    </div>
  )
})

export default HooksPage
