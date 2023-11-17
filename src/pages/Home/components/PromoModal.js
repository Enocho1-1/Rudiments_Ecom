

export const PromoModal = () => {
  return (
    <div className="modalOverlay absolute top-0 left-0 h-[100vh] w-[100%] overflow-hidden flex justify-center items-center z-50" id="promoModal" >
        <span className="h-[500px] w-[900px] font-Inconsolata bg-red-700">
            <div className="promoOverlay px-4 h-[100%] w-[100%] text-gray-200 flex flex-col justify-center  items-center z-20">
                <h1 className="text-4xl font-Bebas font-semibold">Welcome To The Rudiments</h1>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fugit quia vel magni ducimus ea ipsam quaerat quis consequatur vitae fuga blanditiis, obcaecati nam non earum qui cupiditate. Nihil debitis sed rem praesentium quas provident neque atque vel reprehenderit explicabo.</p>
            </div>
        </span>
    </div>
  )
}
