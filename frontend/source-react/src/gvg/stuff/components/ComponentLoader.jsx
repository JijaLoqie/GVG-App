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
const dumbComponents = {
  "123": components[0],
  "234": components[1],
  "345": components[2],
  "456": components[3],
  "567": components[4],
  "678": components[5],
}

export async function getComponentById(componentId) {
  if (!(componentId in dumbComponents)) {
    throw Error("Component not found")
  } else {
    return await dumbComponents[componentId]
  }
}


export async function ComponentLoader({ params }) {
  const component = await getComponentById(params.componentId);
  return { component };
}



export function getComponentList() {
  return components
}

