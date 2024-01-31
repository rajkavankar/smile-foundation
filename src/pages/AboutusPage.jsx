import AboutMissionSection from "../components/AboutMissionSection"
import AboutPhilosophySection from "../components/AboutPhilosophySection"
import { cn } from "../utils"

const AboutusPage = () => {
  return (
    <div>
      <Cover>
        <h5 className='font-medium text-center'>
          REAL WORK
          <br /> REAL CHANGE
        </h5>
      </Cover>
      <section className='p-8 bg-slate-100 text-justify lg:p-24 text-lg lg:text-center space-y-5'>
        <h1 className='text-2xl lg:text-5xl font-bold mb-10 lg:mb-20 text-center'>
          OUR STORY
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          recusandae vero, odio tempora ipsum temporibus veritatis
          necessitatibus officiis voluptatibus alias totam perferendis odit
          incidunt voluptatum consequuntur ratione tenetur beatae repellendus
          corrupti suscipit numquam itaque doloremque reiciendis mollitia?
          Mollitia, iste nisi consectetur placeat dolor sequi ipsum fugiat
          eligendi quo officiis fuga!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil
          omnis iste. Dolorem aliquid molestiae omnis. Ipsam possimus eligendi,
          ipsum fuga ullam explicabo nostrum eveniet voluptatem, cum repudiandae
          minima pariatur repellendus ducimus quod? Dicta est soluta dolore nam
          deserunt, repudiandae ratione molestiae officia esse molestias
          similique natus asperiores saepe harum.
        </p>
      </section>

      <Cover className="bg-[url('./images/card-imgs/school.jpg')] h-[35vh] lg:h-[50vh]">
        <h5 className='font-medium text-center'>OUR VISON</h5>
      </Cover>

      <section className='p-8 bg-slate-100 text-justify lg:p-24 text-lg lg:text-center space-y-5'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          recusandae vero, odio tempora ipsum temporibus veritatis
          necessitatibus officiis voluptatibus alias totam perferendis odit
          incidunt voluptatum consequuntur ratione tenetur beatae repellendus
          corrupti suscipit numquam itaque doloremque reiciendis mollitia?
          Mollitia, iste nisi consectetur placeat dolor sequi ipsum fugiat
          eligendi quo officiis fuga!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil
          omnis iste. Dolorem aliquid molestiae omnis. Ipsam possimus eligendi,
          ipsum fuga ullam explicabo nostrum eveniet voluptatem, cum repudiandae
          minima pariatur repellendus ducimus quod? Dicta est soluta dolore nam
          deserunt, repudiandae ratione molestiae officia esse molestias
          similique natus asperiores saepe harum.
        </p>
      </section>
      <AboutMissionSection />
      <AboutPhilosophySection />
    </div>
  )
}

export default AboutusPage

const Cover = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-[url('./images/card-imgs/boys-water.jpg')] h-[80vh] lg:h-screen w-full bg-cover bg-center bg-no-repeat ",
        className
      )}>
      <div className='w-full h-full flex justify-center items-center  backdrop-brightness-50 '>
        <span className='text-slate-200 text-center inline-block text-4xl font-roboto lg:text-6xl '>
          {children}
        </span>
      </div>
    </div>
  )
}
