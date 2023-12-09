import { getRecommendedComponents } from "../components/ComponentLoader"
import { getRecommendedBuilds } from "../builds/BuildLoader"


export function getRecommendedComponentList() {
  return getRecommendedComponents()
}

export function getRecommendedBuildList() {
  return getRecommendedBuilds()
}


export function getRecommendedStuff(typeStuff) {
  const components = getRecommendedComponentList()
  const builds = getRecommendedBuildList()
  
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

