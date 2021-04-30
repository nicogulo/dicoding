import "regenerator-runtime"; /* for async await transpile */
import "./component/drawer";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";
import { myFunction } from "./component/drawer";

// const data = require("../DATA.json");
let restoData = "";
data.restaurants.forEach((restaurants) => {
  restoData += `
    
    <article class="post-item">
      <img class="post-item__thumbnail" src="${restaurants.pictureId}" alt="Gambar Restorant">
      <div class="post-item__content">
      <p class="post-item__city">
      <i class="fas fa-city"></i> ${restaurants.city}
      </p>
      <p>Rating ${restaurants.rating} <i class="fas fa-star"></i></p>
        <p class="post-item__title">${restaurants.name}</p>
        
        <div class="post-item__description"> ${restaurants.description}</div>
      </div>
      </article>
    
  `;
});

document.getElementById("posts").innerHTML = restoData;
