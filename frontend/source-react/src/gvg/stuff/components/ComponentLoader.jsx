const components = [
  { id: "123", type:"hdd", name: "Component #1", icon: "", description: "Description of component 1", 
    params: [
      {type: "param_name_1", name: "param_value_1" },
      {type: "param_name_2", name: "param_value_2" },
      {type: "param_name_3", name: "param_value_3" },
      {type: "param_name_4", name: "param_value_4" },
    ] },
  { id: "234", type:"hdd", name: "Component #2", icon: "", description: "Description of component 2", 
    params: [{type: "param_name_1", name: "param_value_1" }] },
  { id: "345", type:"hdd", name: "Component #3", icon: "", description: "Description of component 3", 
    params: [{type: "param_name_1", name: "param_value_1" }] },
  { id: "456", type:"hdd", name: "Component #4", icon: "", description: "Description of component 4", 
    params: [{type: "param_name_1", name: "param_value_1" }] },
  { id: "567", type:"hdd", name: "Component #5", icon: "", description: "Description of component 5", 
    params: [{type: "param_name_1", name: "param_value_1" }] },

];

export async function ComponentLoader({ params }) {
  const componentResult = await getComponentById(params.componentId);
  var result = []
  
//    typeVariants.forEach(typeVariant => {
//      if (componentResult[typeVariant.name]) {
//        result.push({type: typeVariant.rus_name, name: componentResult[typeVariant.name]})
//      }
//    }) 
  return { componentResult, params: result };
}


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

export function loadComponentList(handlerFill) {
  fetch("/components/api/get-components").then((data) => {
    return data.json()
  }).then(data => {
    handlerFill(data)
  })
}


export function getRecomendedComponentList() {
  return ''
}

