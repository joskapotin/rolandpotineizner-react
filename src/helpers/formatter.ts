import type { WorkInterface } from "../hooks/useWork"

const fallbackWork: WorkInterface = {
  id: 0,
  slug: "fallback-slug",
  title: "This is a fallback",
  year: "NC",
  height: "NC",
  width: "NC",
  filename: "attitude_politique-2001-46x61.jpg", // TODO: replace with real fallback image
  blurhash: "UBGIGx^%0h9x?wrpRoJ80O9Y=^$i0MIqVXjD",
  imageWidth: 400,
  imageHeight: 400,
  order: 1,
  visible: true,
}

const workFactory = (work?: WorkInterface) => {
  if (work) return { ...fallbackWork, ...work }
  return fallbackWork
}

export default workFactory
