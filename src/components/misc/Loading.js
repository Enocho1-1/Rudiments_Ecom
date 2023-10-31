import loadGif from "../../assests/giphy.gif"

export const Loading = () => {
  return (
    <section className="flex justify-center items-center">
        <aside>
            <img src={loadGif} alt="" />
        </aside>
    </section>
  )
}
