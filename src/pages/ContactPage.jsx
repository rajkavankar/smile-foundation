import ContactAddresSection from "../components/ContactAddresSection"
import ContactFaqSection from "../components/ContactFaqSection"
import ContactMainSection from "../components/ContactMainSection"

const ContactPage = () => {
  return (
    <div>
      <ContactFaqSection />
      <ContactMainSection />
      <ContactAddresSection />
    </div>
  )
}

export default ContactPage
