

export const MobileCarousel = ({images}) => {
    const [imageone,imagetwo,imagethree,imagefour] = images
  return (
    <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner items-carousel">
              <div className="carousel-item active">
                <img src={imageone} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imagetwo} className="block w-full" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imagethree} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                {imagefour ? ( <img src={imagefour} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
    </div>
  )
}
