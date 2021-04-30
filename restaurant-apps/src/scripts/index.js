import "regenerator-runtime"; /* for async await transpile */
import "../scripts/component/drawer.js";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

import myFunction from "./component/drawer.js";

// const data = require("../DATA.json");
let restoData = "";
data.restaurants.forEach((restaurants) => {
  restoData += `
    <div class="card">
      <div class="card-img">
        <img src="${restaurants.pictureId}" alt="">
      </div>
      <div class="card-content">
        <div class="card-title">${restaurants.name}</div>
        <div class="card-description">${restaurants.description}</div>
      </div>
    </div>
  `;
});

document.getElementById("card-container").innerHTML = restoData;
