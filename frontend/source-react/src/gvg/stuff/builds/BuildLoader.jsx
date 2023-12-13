export async function getBuildById(buildId) {
  var buildFound = []
  return fetch(`/builds/api/get-build-by-id/${buildId}`).then((data) => {
    return data.json()
  }).then(data => {
      buildFound = data
      if (buildFound['Room not found']) {
        return {title: "unknown", description: "no description", price: "404"}
      } else {
        return buildFound
      }
    })
}
const typeVariants = [
  { name: "hdd", rus_name: "Жёсткий диск", src: "/builds/parts/hdd.png" },
  { name: "ram", rus_name: "Оперативная память", src: "/builds/parts/ram.png", },
  { name: "ssd", rus_name: "SSD накопитель", src: "/builds/parts/ssd.png", },
  { name: "cpu", rus_name: "Процессор", src: "/builds/parts/cpu.png", },
  { name: "graphics_card", rus_name: "Видеокарта", src: "/builds/parts/graphics-card.png", },
]

export async function BuildLoader({ params }) {
  const build = await getBuildById(params.buildId);
  var buildParams = []
  
  typeVariants.forEach(typeVariant => {
    if (build[typeVariant.name]) {
      buildParams.push({type: typeVariant.rus_name, name: build[typeVariant.name]})
    }
  }) 
  return { build, params: buildParams };
}



export function loadBuildList(handlerFill) {
  fetch("/builds/api/get-builds").then((data) => {
    return data.json()
  }).then(data => {
    handlerFill(data)
  })
}

async function loadRecommendedBuildList() {
  return await fetch("/builds/api/get-recommended").then((data) => {
    return data.json()
  }).then(data => {
      return data[0].builds
    })
}


export function getRecommendedBuilds() {
  return loadRecommendedBuildList()
}
