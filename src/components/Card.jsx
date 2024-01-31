import { cn } from "../utils"

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
        <h1 className='text-lg font-semibold text-white'>{title}</h1>

        <button
          onClick={() => window.open(reportLink, "_blank")}
          to={{ pathname: reportLink }}
          className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>
          View Annual Report &rarr;
        </button>
      </div>
    </div>
  )
}

export default Card
