import "regenerator-runtime"; /* for async await transpile */
import "./component/drawer";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

// const data = require("../DATA.json");
let restoData = "";
data.restaurants.forEach((restaurants) => {
  restoData += `
    
    <article class="post-item">
      <img class="post-item__thumbnail" src="${restaurants.pictureId}" alt="Gambar Restorant">
      <div class="post-item__content">
        <p class="post-item__title">${restaurants.name}</p>
        
        <p class="post-item__city">
          <i class="fa fa-building"> ${restaurants.city}</i>
        </p>
        <i class="fa fa-star"> Rating ${restaurants.rating}</i>
        <div class="post-item__description"> ${restaurants.description}</div>
      </div>
      </article>
    
  `;
});

document.getElementById("posts").innerHTML = restoData;
