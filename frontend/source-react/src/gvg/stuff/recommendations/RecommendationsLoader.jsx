import { getRecommendedComponents } from "../components/ComponentLoader"
import { getRecommendedBuilds } from "../builds/BuildLoader"


export async function getRecommendedStuff(typeStuff) {
  const components = await getRecommendedComponents() ?? []
  const builds = await getRecommendedBuilds() ?? []
  
  switch (typeStuff) {
    case "components":
      return components
    case "builds":
      return builds
    case "all":
      return [...components, ...builds]
    default:
      return undefined
  }

}

