import { cn } from "../utils"

const AnnualReportPage = () => {
  return (
    <div className='bg-slate-100'>
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
    </div>
  )
}

export default AnnualReportPage

const Card = ({ img, title, reportLink, className }) => {
  return (
    <div className={cn("relative h-[400px] w-[300px] rounded-xl", className)}>
      <img
        src={img}
        alt={title}
        className='z-0 h-full w-full rounded-xl object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
      <div className='absolute bottom-4 left-4 text-left'>
        <h1 className='text-lg font-semibold text-slate-200'>{title}</h1>

        <button
          onClick={() => window.open(reportLink, "_blank")}
          to={{ pathname: reportLink }}
          className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-slate-100'>
          View Annual Report &rarr;
        </button>
      </div>
    </div>
  )
}
