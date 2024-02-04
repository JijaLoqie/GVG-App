import HddLogo from "./hdd.svg?react"
import SSDLogo from "./ssd.svg?react"
import CpuLogo from "./cpu.svg?react"
import GraphicsLogo from "./graphics-card.svg?react"
import RamLogo from "./ram.svg?react"
import OtherLogo from "./other.png?react"
import { GridView } from "@mui/icons-material"
const componentTypes = [
  { type: "graphics_card", rus_type: "Видеокарта", path: "/static/builds/parts/graphics-card.svg", },
  { type: "cpu", rus_type: "Процессор", path: "/static/builds/parts/cpu.svg", },
  { type: "ram", rus_type: "Оперативная память", path: "/static/builds/parts/ram.svg", },
  { type: "motherboard", rus_type: "Материнская плата", path: "/static/builds/parts/hdd.svg" },
  { type: "hdd", rus_type: "Жёсткий диск", path: "/static/builds/parts/hdd.svg" },
  { type: "ssd", rus_type: "SSD накопитель", path: "/static/builds/parts/ssd.svg", },
  { type: "power_supply", rus_type: "Блок питания", path: "/static/builds/parts/hdd.svg" },
  { type: "body", rus_type: "Корпус", path: "/static/builds/parts/hdd.svg" },
  { type: "cpu_cooler", rus_type: "Куллер", path: "/static/builds/parts/hdd.svg" },
]


export function getComponentPartsList() {
  return componentTypes
}

export function getComponentIconPathByType(searchType) {
  for (const component of componentTypes) {
    if (component.type === searchType) {
      return component.path
    }
  }
  return null
}
export function ComponentTypeIcon({ type, ...props }) {

  switch (type) {
    case 'hdd':
      return <HddLogo {...props} />
    case 'ram':
      return <RamLogo {...props} />
    case 'ssd':
      return <SSDLogo {...props} />
    case 'cpu':
      return <CpuLogo {...props} />
    case 'graphics_card':
      return <GraphicsLogo {...props} />
    default:
      return <GridView {...props} />
  }
}
