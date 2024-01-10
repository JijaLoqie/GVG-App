export async function getComponentById(componentId) {
  var result = []
  return fetch(`/components/api/get-component-by-id/${componentId}`).then((data) => {
    return data.json()
  }).then(data => {
    result = data
    if (result['Component not found']) {
      return { title: "unknown", description: "no description", price: "404" }
    } else {
      return result
    }
  })
}



let recommendedComponents = null



export function loadComponentList(handlerFill) {
  fetch("/components/api/get-components").then((data) => {
    return data.json()
  }).then(data => {
    handlerFill(data)
  })
}

export async function loadRecommendedComponentList() {
  return await fetch("/components/api/get-recommended").then((data) => {
    return data.json()
  }).then(data => {
    return data[0]?.components
  })
}


export async function getRecommendedComponents() {
  if (recommendedComponents === null) {
    recommendedComponents = loadRecommendedComponentList()
  }
  return await recommendedComponents
}

