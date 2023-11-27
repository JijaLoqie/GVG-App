const builds = [
  { id: "123", name: "Build #1", icon: "", description: "Description of build 1", 
    componentsInfo: [{type: "hdd", name: "name of component 1 (bool)", description: "description of component" },
    {type: "ram", name: "name of component 1 (str)", description: "description of component" }, {type: "ssd", name: "name of component 1 (int)", description: "description of component" }] },
  { id: "234", name: "Build #2", icon: "", description: "Description of build 2", 
    componentsInfo: [{type: "ram", name: "name of component 1 (str)", description: "description of component" }] },
  { id: "345", name: "Build #3", icon: "", description: "Description of build 3", 
    componentsInfo: [{type: "ssd", name: "name of component 1 (int)", description: "description of component" }] },
  { id: "456", name: "Build #4", icon: "", description: "Description of build 4", 
    componentsInfo: [{type: "cpu", name: "name of component 1 (float)", description: "description of component" }] },
  { id: "567", name: "Build #5", icon: "", description: "Description of build 5", 
    componentsInfo: [{type: "graphics_card", name: "name of component 1 (enum)", description: "description of component" }] },

];
const dumbBuilds = {
  "123": builds[0],
  "234": builds[1],
  "345": builds[2],
  "456": builds[3],
  "567": builds[4],
  "678": builds[5],
}

export async function getBuildById(buildId) {
  if (!(buildId in dumbBuilds)) {
    throw Error("Build not found")
  } else {
    return await dumbBuilds[buildId]
  }
}


export async function BuildLoader({ params }) {
  const build = await getBuildById(params.buildId);
  return { build };
}


export function getBuildList() {
  return builds
}
