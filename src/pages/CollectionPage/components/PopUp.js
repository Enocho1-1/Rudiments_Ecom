

export const PopUp = ({children}) => {
  return (
    <div className="fixed Lrgmoniter:top-[15%] Lrgmoniter:right-[10%]  max-Lrgmoniter:relative max-Lrgmoniter:top-0 max-Lrgmoniter:m-auto max-[600px]:mx-4 border-2 border-gray-200 bg-gray-200 rounded-md p-4 flex flex-wrap gap-y-2 max-w-[20rem] max-Lrgmoniter:max-w-[35rem] z-50 ">
        {children}
    </div>
  )
}
