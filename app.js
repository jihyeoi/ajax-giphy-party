$("#retrieve").on("submit", function(evt) {
  evt.preventDefault();

  async function getKeyword() {
    let keyword = $("#keyword").val();

    const key = As4tMmZIYRlRryZXDDKGjSWhqSMm5Qh5;
    const params = new URLSearchParams({keyword});
    let response = await fetch(`api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${key}`)

    console.log(response)

  }

  getKeyword();
})