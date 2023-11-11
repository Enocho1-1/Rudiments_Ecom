
import { Carousel } from "flowbite-react"
import ImgOne from "../../../assests/SlideImg2.jpg"
import ImgTwo from "../../../assests/SlideImg3.jpg"
import ImgThree from "../../../assests/SlideImg4.jpg"
import ImgFour  from "../../../assests/david-lezcano-NfZiOJzZgcg-unsplash.jpg"
import "./Carousel.css"

export const HomeCarousel = () => {
  return (
        <Carousel className="carousel h-[53.125rem] max-mobile:h-[28.125rem] mobile:max-tablet:h-[40.625rem]">
            { [ImgOne,ImgTwo,ImgThree,ImgFour].map((image,index) => (
                  <img key={index}  src={image} alt="carousel"/>
            ))}
        </Carousel>
  )
}
