const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productID = params.get("id");
const APIUrl = `https://successful-wing.flywheelsites.com/wp-json/wc/store/products/${productID}`;
const detailsContainer = document.querySelector(".details-container");
async function getDetails() {
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
        const gameDescription = responseJSON.description;
        const gamePrice = responseJSON.prices.price;
        const gameName = responseJSON.name;
        const gameImg = responseJSON.images[0].src;
        detailsContainer.innerHTML = `
        <div>description: ${gameDescription} </div>
        <div>price: ${gamePrice}</div>
        <div>name: ${gameName}</div>
        <img src=“${gameImg}”>
        `
    } catch (error) {
        console.log(error)
    }
}
getDetails();