import React from "react"

const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
  )

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value))
  }, [localStorageKey, value])

  const resetValue = () => setValue(defaultValue)
  return [value, setValue, resetValue]
}

export default useStateWithLocalStorage
