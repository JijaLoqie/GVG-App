export function getBuildById(buildId) {
  var buildFound = []

  loadBuildList((data) => {
    console.log(data[0].id === Number(buildId))
    buildFound = data.filter(build => Number(build.id) == Number(buildId))
    console.log(buildFound.length)
  })
  if (buildFound.length === 0) {
    return {name: "unknown", description: "no description", price: "404"}
  } else {
    return buildFound[0]
  }
}


export async function BuildLoader({ params }) {
  const build = getBuildById(params.buildId);
  return { build };
}


export function loadBuildList(handlerFill) {
  fetch("/builds/api/get-builds").then((data) => {
    return data.json()
  }).then(data => {
    handlerFill(data)
  })
}
export function getRecomendedBuildList() {
  return ''
}
