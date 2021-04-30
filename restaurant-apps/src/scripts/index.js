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
    <div class="posts">
    <article class="post-item">
      <img class="post-item__thumbnail" src="${restaurants.pictureId}" alt="Gambar Restorant">
      <div class="post-item__content">
        <p class="post-item__title">${restaurants.name}</p>
        <p class="post-item__city">${restaurants.city}</p>
        <div class="post-item__description">${restaurants.description}</div>
      </div>
      </article>
    </div>
  `;
});

document.getElementById("posts").innerHTML = restoData;
