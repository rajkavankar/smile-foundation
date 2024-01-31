import Slider from "react-slick"

const HomeSupportSection = () => {
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
    <section className='bg-gray-200 p-14 lg:py-24'>
      <h1 className='text-center text-2xl lg:text-5xl font-roboto font-semibold mb-10 lg:mb-24'>
        SUPPORT A CAUSE
      </h1>

      <div className='lg:grid hidden grid-cols-4 gap-x-3'>
        <SupportCard img='/images/card-imgs/girl-edu.jpg' title='Shiksha' />
        <SupportCard img='/images/card-imgs/boys-water.jpg' title='Rozgar' />
        <SupportCard img='/images/cardimg.jpg' title='Childern development' />
        <SupportCard
          img='/images/card-imgs/school.jpg'
          title='Skill development'
        />
      </div>

      <div className='block support lg:hidden'>
        <Slider {...settings}>
          <div>
            <SupportCard img='/images/card-imgs/girl-edu.jpg' title='Shiksha' />
          </div>
          <div>
            <SupportCard
              img='/images/card-imgs/boys-water.jpg'
              title='Rozgar'
            />
          </div>
          <div>
            <SupportCard
              img='/images/cardimg.jpg'
              title='Childern development'
            />
          </div>
          <div>
            <SupportCard
              img='/images/card-imgs/school.jpg'
              title='Skill development'
            />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default HomeSupportSection

const SupportCard = ({ img, title }) => {
  return (
    <div className=' w-full lg:w-[300px]  rounded-md border bg-white'>
      <img
        src={img}
        alt={title}
        className='h-[200px] w-full rounded-t-md object-cover'
      />
      <div className='p-4'>
        <h1 className='inline-flex items-center text-lg font-semibold'>
          {title}
        </h1>
        <p className='mt-3 text-sm text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

        <button
          type='button'
          className='mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
          Support Cause
        </button>
      </div>
    </div>
  )
}
