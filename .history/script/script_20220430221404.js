//successful - wing.flywheelsites.com

const baseUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'
const getproduct = document.querySelector(".container")

async function getProductsName() {
    try {
        const response = await fetch(baseUrl);
        console.log(response);
    }
}

