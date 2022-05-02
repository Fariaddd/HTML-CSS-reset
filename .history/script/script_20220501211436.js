const API_URL = '/wp-json/wc/store/products';
const productsContainer = document.querySelector('.results');
async function getGamehubProducts() {
    try {
        const response = await fetch(API_URL);
        const responseJSON = await response.json();
        const productsData = responseJSON;
        productsContainer.innerHTML = '';
        for (let i = 0; i < productsData.length; i++) {
