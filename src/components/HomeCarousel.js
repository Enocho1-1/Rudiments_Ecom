
import { Carousel } from "flowbite-react"
import ImgOne from "../assests/SlideImg2.jpg"
import ImgTwo from "../assests/SlideImg3.jpg"
import ImgThree from "../assests/SlideImg4.jpg"
import ImgFour  from "../assests/david-lezcano-NfZiOJzZgcg-unsplash.jpg"
import "./Carousel.css"

export const HomeCarousel = () => {
  return (
        <Carousel className="carousel h-[850px] max-mobile:h-[450px] mobile:max-tablet:h-[650px]">
            <img
                alt="..."
                src={ImgOne}
            />
            <img
                alt="..."
                src={ImgTwo}
            />
            <img
                alt="..."
                src={ImgThree}
            />
            <img
                alt="..."
                src={ImgFour}
            />
        </Carousel>
  )
}
