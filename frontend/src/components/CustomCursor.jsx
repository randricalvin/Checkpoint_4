import React, { useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return (
    <div
      className="cursor"
      style={{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
      }}
    />
  );
}

export default CustomCursor;
