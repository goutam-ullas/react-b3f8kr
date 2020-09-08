import React, { useRef, useEffect, useState } from "react";
import RubberSlider from "@shwilliam/react-rubber-slider";

import "@shwilliam/react-rubber-slider/dist/styles.css";
import "./style.css";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ";

export default function App() {
  const [set_value, setValue] = useState(50);

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nnikita/ckd7n4m5b04e31ip8ai5a1xfj",
      center:  [78.4735, 17.3758],
      zoom: (17+(set_value/100)),
      attributionControl: false
    });
    // clean up on unmount
    return () => map.remove();
  }, [set_value]);

  return (
    <div className="App">
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ position: "absolute", left:0, right: 0, top:0, bottom:0 }}
      />
      <p style={{ position: "absolute", right: 50 }}> {set_value}</p>
      <div>
        <RubberSlider
          width={100}
          height={1}
          value={set_value}
          onChange={setValue}
          min={1}
          max={100}
          style={{ position: "absolute", right: 50 }}
        />
        <a
          aria-label="Circle Button"
          data-balloon-pos="down-right"
          onclick="showrandomimages()"
          style={{
            fontSize: 32,
            position: "absolute",
            right: 175,
            color: "#2f1dfc",
            margin: -10
          }}
        >
          &#9677;
        </a>
      </div>
    </div>
  );
}
