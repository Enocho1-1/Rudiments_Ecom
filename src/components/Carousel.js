

import ImgOne from "../assests/SlideImg2.jpg"
import ImgTwo from "../assests/SlideImg3.jpg"
import ImgThree from "../assests/SlideImg4.jpg"
import ImgFour  from "../assests/david-lezcano-NfZiOJzZgcg-unsplash.jpg"
import "./Carousel.css"



export const Carousel = () => {

  return (

    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ImgOne} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={ImgTwo} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={ImgThree} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={ImgFour} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}
