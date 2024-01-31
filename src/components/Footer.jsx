import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className='w-full bg-gray-600 text-slate-300 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row'>
        <div className='w-full px-4 md:w-1/2 lg:px-0'>
          <h1 className='max-w-sm text-3xl font-bold'>
            Subscribe to our Newsletter
          </h1>
          <form className='mt-4 w-full items-center md:w-3/4 space-y-5'>
            <input
              className='flex h-10 w-full rounded-md border border-slate-100 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
              type='text'
              placeholder='Name'
            />
            <input
              className='flex h-10 w-full rounded-md border border-slate-100 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
              type='email'
              placeholder='Email'
            />
            <button
              type='button'
              className='mx-auto inline-block rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm '>
              Submit
            </button>
          </form>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3'>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className='mb-8 lg:mb-0'>
              <p className='mb-6 text-lg font-semibold  '>Company</p>
              <ul className='flex flex-col space-y-4 text-[14px] font-medium '>
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
          ))}
          <div>
            <h6 className='text-2xl mb-2'>Follow us on</h6>
            <div className='inline-flex gap-2'>
              <button className='p-2 rounded-full bg-black'>
                <Facebook />
              </button>
              <button className='p-2 rounded-full bg-black'>
                <Instagram />
              </button>
              <button className='p-2 rounded-full bg-black'>
                <Twitter />
              </button>
              <button className='p-2 rounded-full bg-black'>
                <Youtube />
              </button>
              <button className='p-2 rounded-full bg-black'>
                <Linkedin />
              </button>
            </div>
            <div className='flex pt-8 flex-col space-y-2 '>
              <div className='inline-flex items-center gap-2'>
                <MapPin className='h-5 w-5' />
                <p className='w-full text-xl font-semibold  '>Head office</p>
              </div>
              <p className='text-sm font-medium'>
                12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
              </p>
              <hr />
              <p className='w-full text-sm lg:text-base inline-flex items-center gap-2'>
                <Phone className='lg:h-5 lg:w-5' /> +91-999-999-9999
              </p>
              <p className='w-full text-sm lg:text-base inline-flex items-center gap-2'>
                <Mail className='lg:h-5 lg:w-5' /> contact@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
