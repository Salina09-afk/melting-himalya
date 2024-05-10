import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Search from "@arcgis/core/widgets/Search";
import "@arcgis/core/assets/esri/themes/light/main.css";

const MapComponent = () => {
  const mapDiv = useRef(null);
  const view = useRef(null);
  const searchWidget = useRef(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({
      basemap: "streets-navigation-vector",
    });

    view.current = new MapView({
      container: mapDiv.current,
      map: map,
      center: [-98, 38],
      zoom: 5,
    });

    searchWidget.current = new Search({
      view: view.current,
    });

    view.current.ui.add(searchWidget.current, {
      position: "top-right",
    });

    return () => {
      if (view.current) {
        // Clean up resources
        if (searchWidget.current) {
          view.current.ui.remove(searchWidget.current);
          searchWidget.current.destroy();
        }
        view.current.container = null;
        view.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={mapDiv} style={{ height: "100vh", margin: 0, padding: 0 }}></div>
  );
};

export default MapComponent;
