import Slider from "react-slick"
import { PlayCircle } from "lucide-react"
import { isMobile } from "react-device-detect"
import { cn } from "../utils"

const HomeStorySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  }
  return (
    <section className='p-14 home bg-white lg:py-28'>
      <h1 className='text-2xl lg:text-5xl font-bold mb-10 lg:mb-20 text-center'>
        Story in motion
      </h1>
      <Slider {...settings}>
        <div>
          <MobileSlide />
        </div>
        <div>
          <MobileSlide className="bg-[url('../images/card-imgs/boys-water.jpg')]" />
        </div>
        <div>
          <MobileSlide className="bg-[url('../images/card-imgs/girl-edu.jpg')]" />
        </div>
      </Slider>
    </section>
  )
}

export default HomeStorySection

const MobileSlide = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-[url('../images/cardimg.jpg')] h-[25vh] lg:h-[35vh]  w-full bg-cover bg-center bg-no-repeat rounded-xl z-0 ",
        className
      )}>
      <div className='w-full h-full flex justify-center items-center  backdrop-brightness-75 rounded-xl z-10'>
        <span className='text-gray-200 text-center inline-block  rounded-xl'>
          <PlayCircle className='h-10 w-10 cursor-pointer' />
        </span>
      </div>
    </div>
  )
}
