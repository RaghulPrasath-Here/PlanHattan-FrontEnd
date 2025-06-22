import { createContext, useContext, useState } from 'react';

const DEFAULT_VIEWPORT = {
  latitude: 40.7831,
  longitude: -73.9712,
  zoom: 12,
};

const MapContext = createContext();

export function MapProvider({ children }) {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);

  return (
    <MapContext.Provider value={{ viewport, setViewport }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  return useContext(MapContext);
}
