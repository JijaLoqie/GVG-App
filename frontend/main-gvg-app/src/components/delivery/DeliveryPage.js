import React, { useMemo, useState } from "react";

import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";
import { Box, Typography } from '@mui/material';

const pointerCoords = [55.8, 37.8];
const mapState = { center: [55.8, 37.8], zoom: 20 };


export default DeliveryPage = () => {
  return (
    <Box>
      <Typography fontSize="1.5rem">Самовывоз</Typography>
      <YMaps>
        <Map defaultState={mapState}>
          <GeoObject
            // The geometry description.
            defaultGeometry={{
              type: "Point",
              coordinates: pointerCoords,
            }}
            // Properties.
            properties={{
              // The placemark content.
              iconContent: "Мы здесь",
            }}
            // Options.
            options={{
              // The placemark's icon will stretch to fit its contents.
              preset: "islands#blackStretchyIcon",
              // The placemark can be moved.
              draggable: true,
            }}
          />
          {/* <Placemark defaultGeometry={pointerCoords} /> */}
        </Map>
      </YMaps>
    </Box>
  );
};
