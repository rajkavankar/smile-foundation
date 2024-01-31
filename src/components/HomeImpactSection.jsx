const HomeImpactSection = () => {
  return (
    <section className='bg-gray-200 p-24 lg:pb-36 font-bold'>
      <h1 className='text-center text-2xl lg:text-5xl mb-10 lg:mb-28 font-roboto'>
        OUR IMPACT
      </h1>

      <div className='grid lg:grid-cols-4 grid-cols-1 space-y-8 lg:space-y-0 '>
        <div className='text-center'>
          <h1 className='text-7xl text-green-500 font-bold mb-2'>15+</h1>
          <h6 className='text-3xl'>LAC</h6>
        </div>
        <div className='text-center'>
          <h1 className='text-7xl text-green-500 font-bold mb-2'>2000+</h1>
          <h6 className='text-3xl'>VILLAGES</h6>
        </div>
        <div className='text-center'>
          <h1 className='text-7xl text-green-500 font-bold mb-2'>400+</h1>
          <h6 className='text-3xl'>PROJECTS</h6>
        </div>
        <div className='text-center'>
          <h1 className='text-7xl text-green-500 font-bold mb-2'>25+</h1>
          <h6 className='text-3xl'>STATES</h6>
        </div>
      </div>
    </section>
  )
}

export default HomeImpactSection
