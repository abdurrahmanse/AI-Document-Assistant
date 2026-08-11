import { ContactFeature } from '@/features/contact/ContactFeature'
import { contactPage } from '@/data'

export const metadata = {
  title: contactPage.page.title,
  description: contactPage.page.metaDescription,
}

export default function Contact() {
  const { sections, contactInfo, socialLinks } = contactPage

  const data = {
    hero: sections.hero,
    cta: sections.cta,
    contactInfo,
    socialLinks,
  }

  return <ContactFeature data={data} />
}
