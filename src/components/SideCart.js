

export const SideCart = ({sidecart,setSideCart}) => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 w-screen flex justify-end z-40" id="modalOverlay">
        <div className="absolute top-0 bg-white h-full laptop:w-[17%]">
            <header className="mt-6 px-4 flex flex-row justify-between">
                <h1 className="text-2xl font-Bebas">Cart</h1>
                <svg onClick={() => {setSideCart(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </header>
        </div>
    </section>
  )
}
