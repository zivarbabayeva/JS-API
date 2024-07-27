
let container = document.querySelector(".container")
async function getItems() {
    let result = await fetch('https://dummyjson.com/products?limit=194').then((res) => res.json())
    console.log(result.products);
    let products = result.products
    for (let i = 0; i < products.length; i++) {
        let newProduct = document.createElement("div")
        newProduct.classList.add("item")
        newProduct.innerHTML =
            `
    <div class="image">
                <img src=${products[i].images[0]} alt="">
            </div>
            <div class="info">
                <h1>${products[i].title}</h1>
            </div>
            <p>Price:${products[i].price}</p>
            <p>Rating:${products[i].rating}</p>
            <p>In Stock:${products[i].stock}</p>
        </div>
    </div>
            <div class="button">Buy</div>
    `
        container.appendChild(newProduct)
    }
}