'use strict';

const gifArea = $('#gifs');

$("#giphy-form").on("submit", function (evt) {
  evt.preventDefault();
  getKeyword();

});

/** Gets keyword from form */
async function getKeyword() {
  let keyword = $("#keyword").val();

  const key = 'As4tMmZIYRlRryZXDDKGjSWhqSMm5Qh5';
  const params = new URLSearchParams({ keyword, api_key: key });
  // response is the response object
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?${params}`);
  const jsonthing = await response.json()
  console.log(jsonthing);
  console.log(response)
}

function appendGif(responseObj) {
  const retrievedGif =  responseObj.images.
  gifArea.append(retrievedGif)
}