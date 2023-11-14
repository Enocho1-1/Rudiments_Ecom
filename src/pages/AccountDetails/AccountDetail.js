import { useTitle } from "../../hooks"

export const AccountDetail = () => {
    useTitle("Login Details")
  return (
    <section className="font-Inconsolata">
        <div className="mt-[200px] flex justify-center items-center">
            <span className=" h-[150px]">
                account details
            </span>
        </div>
    </section>
  )
}
