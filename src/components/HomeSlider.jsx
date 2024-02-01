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
        <div className="bg-[url('../images/home-slider/girl-education.jpg')] h-[80vh] lg:h-screen w-full bg-cover bg-center bg-no-repeat ">
          <div className='w-full h-full flex justify-center items-center lg:justify-start backdrop-brightness-50 lg:pl-8'>
            <span className='text-slate-200 text-center inline-block text-4xl font-roboto lg:text-6xl lg:w-1/2 '>
              <h5 className='font-medium text-center lg:text-left '>
                BRINGING SMILES THROUGH <br />
                <p className='text-green-500 text-center lg:text-left'>
                  EDUCATION & EMPOWERMENT
                </p>
              </h5>
            </span>
          </div>
        </div>

        <div className="bg-[url('../images/home-slider/women-emp.jpg')] h-[80vh] lg:h-screen relative w-full bg-cover bg-center bg-no-repeat after:h-full after:bg-black/75 after:left-0 after:top-0 after:z-10">
          <div className='w-full h-full flex  justify-center lg:justify-start lg:items-start items-center backdrop-brightness-50'>
            <span className='text-slate-200 font-roboto font-medium text-4xl lg:text-6xl lg:w-1/2 text-center lg:text-left lg:p-8'>
              ENABLING LIVELIHOODS{" "}
              <h5 className='text-green-500'>THROUGH SKILL TRAINING </h5>
            </span>
          </div>
        </div>

        <div className="bg-[url('../images/home-slider/health-care.jpg')] h-[80vh] lg:h-screen w-full relative bg-cover bg-center bg-no-repeat">
          <div className='w-full h-full flex lg:pt-8 justify-center lg:justify-end items-center lg:items-start backdrop-brightness-50'>
            <span className='text-slate-200 text-4xl lg:text-6xl lg:w-1/2 lg:text-left text-center font-medium font-roboto pr-0'>
              MAKING PRIMARY{" "}
              <h5 className='text-green-500 font-medium'>
                HEALTHCARE <br /> ACCESSIBLE <br className='block lg:hidden' />{" "}
                FOR ALL
              </h5>
            </span>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default HomeSlider
