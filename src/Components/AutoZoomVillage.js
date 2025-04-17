// import React, { useEffect } from 'react';
// import { useMap } from 'react-leaflet';
// import L from 'leaflet';

// const AutoZoomVillage = ({ geoData, selectedVillage }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!geoData || !selectedVillage) return;

//     const feature = geoData.find(
//       (f) => f.properties?.NAME === selectedVillage
//     );

//     if (feature) {
//       const layer = L.geoJSON(feature);
//       map.fitBounds(layer.getBounds(), { padding: [50, 50] });
//     }
//   }, [geoData, selectedVillage, map]);

//   return null;
// };

// export default AutoZoomVillage;
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const AutoZoomVillage = ({ geoData, selectedVillage }) => {
    const map = useMap();

    useEffect(() => {
        if (!geoData || !selectedVillage) return;

        const features = geoData?.features || geoData;

        const feature = features.find(
            (f) => f.properties?.NAME === selectedVillage
        );

        if (feature) {
            const layer = L.geoJSON(feature, {
                style: {
                    color: "blue",
                    weight: 2,
                    fillOpacity: 0,
                },
            });

            layer.addTo(map);
            map.fitBounds(layer.getBounds(), { padding: [50, 50] });

            return () => {
                map.removeLayer(layer);
            };
        }
    }, [geoData, selectedVillage, map]);

    return null;
};

export default AutoZoomVillage;
