import React, { useEffect, useMemo, useState } from "react"

import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps"
import { Box } from "@mui/material"

const pointerCoords = [55.8, 37.8]
const mapState = { center: [55.8, 37.8], zoom: 20 }

export default CustomYandexMap = function({ selected }) {
  const [ymaps, setYmaps] = useState()
  const [coords, setCoords] = useState([0, 0])

  //   useEffect(() => {
  // 	console.log(`trying to fetch coords...(${selected.title})`)
  //     if (ymaps) {
  //       ymaps
  //         .geocode("Москва")
  //         .then((result) =>
  //           setCoords(result.geoObjects.get(0).geometry.getCoordinates())
  //         );
  // 		console.log("ymaps is reached!");
  //     } else {
  // 		console.log("can't reach ymaps!")
  // 	}
  //   }, [selected]);

  return (
    <YMaps
      onApiAvaliable={(ymaps) => {
        setYmaps(ymaps)
      }}
    >
      <Map
        height="100%"
        modules={[
          "geocode",
          "control.ZoomControl",
          "control.FullscreenControl",
        ]}
        state={{
          center: selected.coord,
          zoom: 9,
          controls: ["zoomControl", "fullscreenControl"],
        }}
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
