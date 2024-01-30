import Slider from "react-slick"

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-[url('./images/home-slider/girl-education.jpg')] h-[80vh] lg:h-screen w-full bg-cover relative bg-center bg-no-repeat ">
          <div className='w-full h-full flex justify-center items-center backdrop-brightness-50'>
            <span className='text-white text-4xl w-1/2 text-center'>
              <h5>Bringing smiles through education and empowerment</h5>
            </span>
          </div>
        </div>

        <div className="bg-[url('./images/home-slider/women-emp.jpg')] h-[80vh] lg:h-screen relative w-full bg-cover bg-center bg-no-repeat after:h-full after:bg-black/75 after:left-0 after:top-0 after:z-10">
          <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50'>
            <span className='text-white text-4xl w-1/2 text-center'>
              Here is an example of black overlay on an image
            </span>
          </div>
        </div>

        <div className="bg-[url('./images/home-slider/health-care.jpg')] h-[80vh] lg:h-screen w-full relative bg-cover bg-center bg-no-repeat">
          <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50'>
            <span className='text-white text-4xl w-1/2 text-center'>
              Here is an example of black overlay on an image
            </span>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default HomeSlider
