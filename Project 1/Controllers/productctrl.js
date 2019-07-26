//This JS use only for Print Product

window.addEventListener("load",init); //load is event and init is function

function bindEvents(){
    document.getElementById('searchBt').addEventListener('click',doSearch); // Calling function do search on click
    document.getElementById('loadBt').addEventListener('click',loadIt); // Calling function loadit on click
}
function doSearch(){
    var price = document.getElementById('price').value;
    var result = productOperations.search(price);
    loadProducts(result);
}  
const viewCart=()=>document.getElementById('viewcart').innerText = productOperations.countItemInCarts();

function loadIt(){
    document.getElementById('price').value=''; // assign input value blank
    document.getElementById('price').focus(); // focus on input
    var products = productOperations.read();
    loadProducts(products);
}
function loadProducts(products){
    var ul = document.getElementById('products');
    ul.innerHTML = '';
    for(let product of products){
        printProduct(product);
    }
}
function addToCartButton(id){
    var button = document.createElement('button');
    button.innerText = 'Add to Cart';
    button.addEventListener('click',addToCart);
    button.setAttribute('product-id',id); 
    return button;
}
function addToCart(){
    var id= this.getAttribute('product-id');
    productOperations.toggleCart(id);
    var isAdded = productOperations.searchById(id).isAdded;
    this.innerText = isAdded?"Remove From Cart":"Add to Cart";
    console.log(id);
    viewCart();
}
function createImage(url){  // create function createImage and pass parameetar url
    var img= document.createElement('img');
    img.src = url;
    img.className = 'size';
    return img;
}
function createSpan(name, price){
    var span = document.createElement('span');
    span.innerText = name + " "+price;
    return span;
}

function printProduct(product){  // create function prientproduct
    var ul = document.getElementById('products'); // create variable ul and pass value of products('products is id of html ul Tag')
    var li = document.createElement("li"); // create variable li and also create li tag in in html
    li.appendChild(createImage(product.url)); // create variable li and pass value of products
    li.appendChild(createSpan(product.name,product.price));
    li.appendChild(addToCartButton(product.id)); 
    ul.appendChild(li);
}
function init(){
    bindEvents();
    viewCart();
    loadIt();
}