import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const ContactFaqSection = () => {
  return (
    <section className='bg-slate-50'>
      <h1 className='text-center text-3xl lg:text-5xl pt-8 lg:pt-10 font-roboto'>
        FAQ
      </h1>
      <div className='px-2 py-10 lg:px-14'>
        <Question />
      </div>
    </section>
  )
}

export default ContactFaqSection

const Question = () => {
  const items = [
    {
      id: 1,
      heading: "Shome random question",
      content: "Answer of random answer",
    },
    {
      id: 2,
      heading: "Shome random question",
      content: "Answer of random answer",
    },
    {
      id: 3,
      heading: "Shome random question",
      content: "Answer of random answer",
    },
  ]
  return (
    <Accordion allowZeroExpanded>
      {items.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
