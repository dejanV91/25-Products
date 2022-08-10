const productsDiv = document.querySelector(".products");
const url = 'https://course-api.com/javascript-store-products';

const fetchFunction = async () => {
    const response = await fetch (url);
    const data = await response.json();
    return data
};

const displaProducts = (list) => {
    const productsAPI = list
    .map((product) => {
        const {id} = product;
        const {name, price} = product.fields;
        const {url : img} = product.fields.image[0];
        const formatPrice = price / 100;

        return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
                    <article class="item">
                        <div class="image">
                            <img src="${img}" alt="${name}">
                        </div>
                        <p class="title">${name}</p>
                        <p class="price">$${formatPrice}</p>
                    </article>
                </a>`
    }).join("");

    
    productsDiv.innerHTML= productsAPI;
};



const start = async () => {
    const data =await fetchFunction();
    displaProducts(data);
}

start();



