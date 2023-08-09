import { useEffect } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title=`Rudiments | ${title}`;
  },[title])

  return null
}
