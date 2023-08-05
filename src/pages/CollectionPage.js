import { useFetch } from "../hooks/useFetch"

export const CollectionPage = ({apiPath}) => {
  const { data } = useFetch(apiPath)

  console.log(data)

  return (
    <div>CollectionPage</div>
  )
}
