import Card from "../components/Card"

const AnnualReportPage = () => {
  return (
    <div className='container lg:pt-8 lg:max-w-[1100px] mx-auto py-5 lg:pb-28'>
      <h1 className='text-4xl font-roboto pl-5 lg:p-0 font-medium mb-5'>
        Annual Reports
      </h1>
      <section className='grid px-5 lg:p-0 grid-cols-1 lg:grid-cols-3 gap-8'>
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2023'
          reportLink='https://www.google.co.in/'
        />
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2022'
          reportLink='https://www.google.co.in/'
        />
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2021'
          reportLink='https://www.google.co.in/'
        />
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2020'
          reportLink='https://www.google.co.in/'
        />
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2019'
          reportLink='https://www.google.co.in/'
        />
        <Card
          className='h-full w-full l'
          img='/images/cardimg.jpg'
          title='Annual Report 2018'
          reportLink='https://www.google.co.in/'
        />
      </section>
    </div>
  )
}

export default AnnualReportPage
