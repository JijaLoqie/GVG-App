import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"


export function CustomYandexMap({ selected }) {
  return (
    <YMaps
      onApiAvaliable={(ymaps) => {
        setYmaps(ymaps)
      }}
    >
      <Map
        height="100%"
        modules={[ "geocode", "control.ZoomControl", "control.FullscreenControl", ]}
        state={{ center: selected.coord, zoom: 9, controls: ["zoomControl", "fullscreenControl"], }}
        width="100%"
      >
        <Placemark
          geometry={selected.coord}
          modules={["geoObject.addon.balloon"]}
          properties={{
            balloonContentBody: selected.title,
          }}
        />
      </Map>
    </YMaps>
  )
}
