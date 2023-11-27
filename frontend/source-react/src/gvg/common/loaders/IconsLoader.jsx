import { Box } from "@mui/material"

const components = [
  { type: "hdd", rus_type: "Жёсткий диск", path: "/static/builds/parts/hdd.svg" },
  { type: "ram", rus_type: "Оперативная память", path: "/static/builds/parts/ram.svg", },
  { type: "ssd", rus_type: "SSD накопитель", path: "/static/builds/parts/ssd.svg", },
  { type: "cpu", rus_type: "Процессор", path: "/static/builds/parts/cpu.svg", },
  { type: "graphics_card", rus_type: "Видеокарта", path: "/static/builds/parts/graphics-card.svg", },
]

export function getComponentList() {
  return components
}

export function getComponentIconPathByType(searchType) {
  for (const component of components) {
    if (component.type === searchType) {
      return component.path
    }
  }
  return null
}
export function ComponentTypeIcon({ type, ...props }) {
  const iconPath = components.filter(component => component.type === type)[0]?.path 

  return (
    <Box {...props} component="img" height="30px" marginRight="15px" src={`${iconPath}`} width="30px" />
  )
}
