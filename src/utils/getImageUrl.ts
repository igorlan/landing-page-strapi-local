export const getImageUrl = (url: string) => {
  if (
    process.env.NEXT_PUBLIC_IMAGE_HOST &&
    process.env.NEXT_PUBLIC_IMAGE_HOST !== ''
  ) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  } else {
    return url
  }
}
