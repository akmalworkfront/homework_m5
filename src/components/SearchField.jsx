import Input from "antd/es/input/Input"
import { useEffect, useState } from "react"
import { WeatherInfo } from "./WeatherInfo"

export const SearchField = () => {

  const [inputValue, setinputValue] = useState("")
  const [searchValue, setsearchValue] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsearchValue(inputValue)
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputValue])


  return (
    <>
      <Input
        placeholder="Введите город" 
        onChange={(e) => setinputValue(e.target.value)} />
      <WeatherInfo searchValue={searchValue} />
    </>

  )
}
