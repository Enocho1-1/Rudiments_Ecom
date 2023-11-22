
export const ProductsContain = ({children}) => {
  return (
    <aside className="m-auto mt-4 px-4 grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4">
        {children}
    </aside>
  )
}
