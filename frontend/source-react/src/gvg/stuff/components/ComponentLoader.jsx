export async function getComponentById(componentId) {
  var result = []
  return fetch(`/components/api/get-component-by-id/${componentId}`).then((data) => {
    return data.json()
  }).then(data => {
      result = data
      if (result['Room not found']) {
        return {title: "unknown", description: "no description", price: "404"}
      } else {
        return result
      }
    })
}




const convertParameters = (data) => {
  return data.split(';').map((element => {
    var pair = element.split(": ")
    return {rus_name: pair[0], value: pair[1]}
  }))
}





export async function ComponentLoader({ params }) {
  const componentResult = await getComponentById(params.componentId);
  var componentParams = convertParameters(componentResult.params)
  .map(componentParameter => {
    return {rus_name: componentParameter.rus_name, value: componentParameter.value}
  })
  .filter(pair => { return pair.value !== undefined })

  return { componentResult, params: componentParams };
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
      return data
    })
}


export function getRecommendedComponents() {
  return loadRecommendedComponentList()
}

