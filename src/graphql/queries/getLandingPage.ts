import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment imageData on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          data {
            attributes {
              url
            }
          }
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallments
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        data {
          attributes {
            name
            role
            description
            socialLinks {
              title
              url
            }
            photo {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        image {
          ...imageData
        }
        description
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      faq {
        answer
        question
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
          ...sectionAgenda
          ...pricingBox
          ...sectionAboutUs
          ...sectionReviews
          ...sectionFaq
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
