import HomeImpactSection from "../components/HomeImpactSection"
import HomePrograms from "../components/HomePrograms"
import HomeSlider from "../components/HomeSlider"
import HomeStorySection from "../components/HomeStorySection"
import HomeSupportSection from "../components/HomeSupportSection"

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <section className='p-8 text-justify lg:p-24 text-lg lg:text-center space-y-5'>
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
      <HomeImpactSection />
      <HomePrograms />
      <HomeStorySection />
      <HomeSupportSection />
    </div>
  )
}

export default HomePage
