import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading">My favorite foods</h1>
      <img
        className="food-img"
        alt="ramen"
        src="https://static.ah.nl/static/recepten/img_RAM_PRD139053_445x297_JPG.jpg"
      />
      <img
        className="food-img"
        alt="sushi"
        src="https://s3.eu-west-3.amazonaws.com/media.cdn.brusselslife.be/81410/1082-article-image.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
