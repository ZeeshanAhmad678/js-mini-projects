let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "https://i.pinimg.com/1200x/c3/6c/a6/c36ca6099db7297a3d42c2f9d34f267c.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "https://i.pinimg.com/1200x/67/76/89/6776894436d65c2b5f0a9548ff5b5e5b.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "https://i.pinimg.com/736x/e9/7f/8b/e97f8b43064dcb1941d6ac31f8953917.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "https://i.pinimg.com/1200x/72/5a/f0/725af0ab95cc62d3774b79ec015b2cc8.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "https://i.pinimg.com/1200x/b6/9c/ac/b69cac88b17ea24ee415440f53f7613c.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "https://i.pinimg.com/1200x/a2/ff/95/a2ff953cd8d30b9a14c7d9e86c341d8b.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "https://i.pinimg.com/736x/d6/5d/7a/d65d7aa78934461bca3e665257168d8d.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "https://i.pinimg.com/736x/45/39/78/453978cb631a905845a712c7be715b51.jpg",
    },
  ],
};


products.data.forEach(product => {
    //add a card
    let card = document.createElement("div");
    card.classList.add('card', product.category.toLowerCase(), 'hide');
    // image container
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    //image tag
    let image = document.createElement("img")
    image.setAttribute("src", product.image)

    imageContainer.appendChild(image)
    card.appendChild(imageContainer)
    // content container
    let container = document.createElement("div")
    container.classList.add('container')
    // add name
    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.innerText = product.productName.toUpperCase()
    container.appendChild(name)
    // add price
    let price = document.createElement("h6")
    price.innerText = "$" + product.price
    container.appendChild(price)

    card.appendChild(container)

    document.getElementById("products").appendChild(card)

})

function filterProduct (value){
    // adding active class to buttons
    let buttons = document.querySelectorAll('.button-value')
    buttons.forEach((button) =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active')
        }
        else{
            button.classList.remove('active')
        }
    });

    //filtering the products
    let elements = document.querySelectorAll('.card')

    elements.forEach((element) =>{
        if(value == 'all'){
            element.classList.remove('hide')
        }
        else{
            if(element.classList.contains(value.toLowerCase())){
                element.classList.remove('hide')
            }
            else{
                element.classList.add('hide')
            }
        }
    });
}


document.querySelector('#search-btn').addEventListener('click', () =>{
    let searchInput = document.getElementById('search-input').value
    let elements = document.querySelectorAll('.product-name')
    let cards = document.querySelectorAll('.card')

    elements.forEach((element,index) =>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove('hide');
        }
        else{
            cards[index].classList.add('hide')
        }
    })


})


window.onload = () =>{
    filterProduct('all')
}