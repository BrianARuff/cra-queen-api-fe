import * as React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="line-container">
      <div data-testid="loader-line" className="line"></div>
    </div>
  );
}
