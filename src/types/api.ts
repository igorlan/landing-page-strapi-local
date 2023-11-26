export type ImageProps = {
  data: {
    attributes: {
      alternativeText?: string
      url: string
    }
  }
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: ImageProps
  button: ButtonProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: [
    {
      icon: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      title: string
    }
  ]
}

export type SectionConceptsProps = {
  title: string
  concepts: [
    {
      title: string
      id: number
    }
  ]
}

export type SectionModulesProps = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: Array<{
      attributes: {
        name: string
        role: string
        description: string
        photo?: {
          data: Array<{
            attributes: {
              alternativeText: string
              url: string
            }
          }>
        }
        socialLinks: Array<{
          title: string
          url: string
        }>
      }
    }>
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: [
    {
      name: string
      image?: ImageProps
      description: string
    }
  ]
}

export type SectionFaqProps = {
  title: string
  faq: [
    {
      answer: string
      question: string
    }
  ]
}

export type LandingPageProps = {
  landingPage: {
    data: {
      attributes: {
        logo: ImageProps
        header: HeaderProps
        sectionAboutProject: SectionAboutProjectProps
        sectionTech: SectionTechProps
        sectionConcepts: SectionConceptsProps
        sectionModules: SectionModulesProps
        sectionAgenda: SectionAgendaProps
        pricingBox: PricingBoxProps
        sectionAboutUs: SectionAboutUsProps
        sectionReviews: SectionReviewsProps
        sectionFaq: SectionFaqProps
      }
    }
  }
}
