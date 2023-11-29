/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorit');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.dontSee('Tidak ada restaurant untuk ditampilkan', '.resto-item_not_found');
});
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('#restaurantList');
  I.seeElement('.card .card-content .full');
  const firstRestaurant = locate('.card .card-content p.full a').first();
  const firstRestaurantTitle = locate(
    '.card .card-content .restaurant__title',
  ).first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurantTitle);
  I.click(firstRestaurant);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorit');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
Scenario('unliking one restaurant', async ({ I }) => {
  // Menyukai restoran pertama
  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurant__title');
  I.seeElement('#restaurantList');
  I.seeElement('.card .card-content .full');
  const firstRestaurant = locate('.card .card-content p.full a').first();
  const firstRestaurantTitle = locate(
    '.card .card-content .restaurant__title',
  ).first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurantTitle);
  I.forceClick(firstRestaurant);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorit');
  I.seeElement('.card');

  // // Mengambil elemen restoran yang disukai
  const likedRestaurants = locate('.restaurant__title').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurants);

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  I.forceClick(firstRestaurant);

  // Menunggu tombol suka muncul di halaman detail
  I.waitForElement('#likeButton', 10);

  // Membatalkan suka restoran
  I.forceClick('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorit');

  // Memastikan restoran tidak lagi ditampilkan di halaman favorit
  I.dontSeeElement('.restaurant__title');
  I.see('Tidak ada Restaurant yang anda cari ya', '.resto-item_not_found');
});
