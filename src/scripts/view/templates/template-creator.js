import CONFIG from '../../globals/config';

const createRestDetailTemplate = (rest) => `
  <h2 class="resto__title">${rest.restaurant.name}</h2>
  <picture>
    <source media="max-width: 300px" data-srcset="${CONFIG.BASE_IMAGE_URL + rest.restaurant.pictureId}">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + rest.restaurant.pictureId}" alt="${rest.restaurant.name}" />
    </picture>
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${rest.restaurant.name}</p>
    <h4>City</h4>
    <p>${rest.restaurant.city}</p>
    <h4>Address</h4>
    <p>${rest.restaurant.address}</p>
    <h4>Rating</h4>
    <p>${rest.restaurant.rating}</p>
    <div class="menu">
     <div class="food-categories">
          <h4>Food Categories:</h4>
          <ul>
            ${rest.restaurant.menus.foods.map((food) => `<li aria-label="${food.name}">${food.name}</li>`).join('')}
          </ul>
      </div>
      <div class="drink">
          <h4>Drink Categories:</h4>
          <ul>
            ${rest.restaurant.menus.drinks.map((drink) => `<li aria-label="${drink.name}">${drink.name}</li>`).join('')}
          </ul>
      </div>
    </div>
  </div>
  <div class="customer__riview">
    <h3 aria-label="riview customer,">Customer Reviews</h3>
    ${rest.restaurant.customerReviews.map((review) => `
    <p aria-label="${review.name}"><span>${review.name}</span</p>
    <p class="date__review" aria-label="${review.date}">${review.date}</p>
    <p class="review__value" aria-label="${review.review}">${(review.review)}</p>
    <hr>
    `).join('')}
    <div class="resto__overview">
      <h3>Overview</h3>
      <p>${rest.restaurant.description}</p>
    </div>
`;
function generateStarRating(rating) {
  const maxRating = 5;
  const roundedRating = Math.round(rating * 2) / 2;
  let starHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= maxRating; i++) {
    if (i <= roundedRating) {
      starHTML += '<span class="star filled">★</span>';
    } else {
      starHTML += '<span class="star">☆</span>';
    }
  }
  return starHTML;
}
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createRestItemTemplate = (rest) => `
      <article class="card" tabindex="0">
        <p class="city" aria-label="Kota ${rest.city},">${rest.city}</p>
        <picture>
          <source media="(max-width:600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + rest.pictureId}">
          <img data-src="${CONFIG.BASE_IMAGE_URL + rest.pictureId}" alt="${rest.name}" class="lazyload">
        </picture>
        <div class="card-content">
            <h3 class="restaurant__title" aria-label="Nama restoraunt ${rest.name},">${rest.name}</h3>
            <div class="rating" >
              <p aria-label="rating ${rest.rating},">${generateStarRating(rest.rating)} ${rest.rating}</p>
            <p class="full"><a href="/#/detail/${rest.id}" aria-label="detail restaurant ${rest.name}," class="detail">Detail</a></p>
            </div>
            <p class="description" aria-label="Description restaurant ${rest.description},">${rest.description}</p>
        </div>
 </article>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestDetailTemplate,
  createRestItemTemplate,
};
