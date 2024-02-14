'use strict';

const gifArea = $('#gifs');

$("#giphy-form").on("submit", function (evt) {
  evt.preventDefault();
  getKeyword();

});

/** Gets user entered keyword from form */

async function getKeyword() {
  let keyword = $("#keyword").val();

  const key = 'As4tMmZIYRlRryZXDDKGjSWhqSMm5Qh5';
  const params = new URLSearchParams({ q: keyword, api_key: key });
  // response is the response object
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?${params}`);

  appendGif(response);
}

/** generates a url  */

async function appendGif(responseObj) {
  const img = await responseObj.json();
  const imgUrl = img.data[0].images.original.url;

  $("#gifs").append($(`<img src=${imgUrl}>`));
}

// function removeButton() {
//   $("#gifs").empty();
// }

/** remove button should remove all images  */

$("#remove").on("click", function() {
  $("#gifs").empty();
})
