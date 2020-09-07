import React, { useState } from "react";
import RubberSlider from "@shwilliam/react-rubber-slider";

import "@shwilliam/react-rubber-slider/dist/styles.css";
import "./style.css";

export default function App() {
  const [value, setValue] = useState(50);

  return (
    <div className="App">
      <RubberSlider
        width={100}
        height={1}
        value={value}
        onChange={setValue}
        min={1}
        max={100}
        style={{ position: "absolute", right: 50 }}
      />
      <a
        aria-label="Circle Button"
        data-balloon-pos="down-right"
        onclick="showrandomimages()"
        style={{fontSize: 32, position: "absolute", right: 175, color:"#2f1dfc", margin:-10} }
      >
      &#9677;
      </a>
    </div>
  );
}
