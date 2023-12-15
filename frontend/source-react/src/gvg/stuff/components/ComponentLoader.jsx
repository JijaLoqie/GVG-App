export async function getComponentById(componentId) {
  var result = []
  return fetch(`/components/api/get-component-by-id/${componentId}`).then((data) => {
    return data.json()
  }).then(data => {
      result = data
      if (result['Component not found']) {
        return {title: "unknown", description: "no description", price: "404"}
      } else {
        return result
      }
    })
}




export async function ComponentLoader({ params }) {
  const componentResult = await getComponentById(params.componentId);

  return { componentResult };
}



export function loadComponentList(handlerFill) {
  fetch("/components/api/get-components").then((data) => {
    return data.json()
  }).then(data => {
    handlerFill(data)
  })
}

async function loadRecommendedComponentList() {
  return await fetch("/components/api/get-recommended").then((data) => {
    return data.json()
  }).then(data => {
      return data[0]?.components
    })
}


export async function getRecommendedComponents() {
  return await loadRecommendedComponentList()
}

