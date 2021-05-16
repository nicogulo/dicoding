import CONFIG from "../../globals/config";

// Detail Content
const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.restaurant.name}</h2>
  <img class="resto__poster" src="${`${CONFIG.BASE_IMAGE_URL}/${restaurant.restaurant.pictureId}`}" alt="${
  restaurant.restaurant.name
}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address</h4>
      <p>${restaurant.restaurant.address}</p>
      <h4>Categories</h4>
      <p>${restaurant.restaurant.categories
        .map((category) => category.name)
        .join(" - ")}</p>
          
      <h4>Rating</h4>
      <p>${restaurant.restaurant.rating}</p>
  </div>
  
  <div class="resto__overview">
    <h4>Food Menu</h4>
      <p>${restaurant.restaurant.menus.foods
        .map(
          (food) => `
                  <li>${food.name}</li>`
        )
        .join("")}
      </p>

    <h4>Drinks Menu</h4>
      <p>${restaurant.restaurant.menus.drinks
        .map(
          (drink) => `
                    <li>${drink.name}</li>`
        )
        .join("")}
      </p>
 
    <h4>Description</h4>
    <p>${restaurant.restaurant.description}</p>
    <p>${restaurant.restaurant.customerReviews
      .map(
        (review) => `
      <div class="review-container">
      <h3>Reviews</h3>
     
      <div class="cards">
        <div class="card">
          <div class="card-top">
            <div class="name">
              <div class="img one" alt="">NF</div>
               <p>${review.name}</p>
            </div>
          </div>
          
          <div class="card-content">
            <p>${review.review}</p>
          </div>
          
          <div class="card-action">
            <span>${review.date}</span>
          </div>    
        </div>
      </div>
    </div>
              `
      )
      .join("")}
      </p>

  </div>
`;

// Content Item
const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${restaurant.name}"
            src="${
              restaurant.pictureId
                ? `${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}`
                : "https://restaurant-api.dicoding.dev/images/medium/12"
            }">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${
              restaurant.rating
            }</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
        <h3>${restaurant.city}</h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
