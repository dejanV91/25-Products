const productDiv = document.querySelector(".product");
const url = 'https://course-api.com/javascript-store-single-product';

const fetchFunction = async () => {
    productDiv.innerHTML = `<div class="load-single">
                                <h2>loading...</h2>            
                            </div>`;

    const urlRem = new URLSearchParams(window.location.search);
    const id = urlRem.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data
};

const displayProduct = (product) => {
   const {
    company, description,colors, name:title, price
   } = product.fields;
   const formatPrice = price / 100;
   const {url : img} = product.fields.image[0];
   
   const colorList = colors
    .map((singleClr) => {
        return `<div class="product-color" style="background-color:${singleClr}"></div>`
    }).join("");

    productDiv.innerHTML = 
            `<div class="images images-single">
                <img id="img-single" src="${img}" alt="${title}">
            </div>
            <div class="single-content">
                <h2 class="single-title">${title}</h2>
                <h4 class="single-company">${company}</h4>
                <p class="single-price">${formatPrice}</p>
                <div class="color-section">
                    ${colorList}
                </div>
                <article class="single-text">
                    <p>${description}</p>
                </article>
                <div class="button">
                    <button class="btn" id="add-to-cart">add to cart</button>
                </div>
            </div>`
};


const display = async () => {
    const data = await fetchFunction();
    displayProduct(data);
}

display();