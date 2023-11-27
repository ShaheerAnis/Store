let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name:'realme',
        tag:'realme Mobile',
        price: 200,
        inCart: 0
    },
    {
        name:'Oppo',
        tag:'Oppo Mobile',
        price: 150,
        inCart: 0
    }
]
for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>
    {
        cartNumbers(products[i]);
        totalCost(products[i]);
    }
    )
}

function onloadCartNumbers()  /*save the cart number*/
{
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers)
    {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products)
{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);/*convert string to nunber(int)*/

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;   
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    } 
    setItems(products);
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
    if(cartItems !=null)
    {
        if(cartItems[products.tag] == undefined)
        {
            cartItems={/*update cart itoms*/
                ...cartItems,
                [products.tag]:products/*add new cart itoms instead of over writing*/
            }
        }
        cartItems[products.tag].inCart += 1;/*increase cart by one to avoid over write*/
    }
    else
    {
        products.inCart = 1;
        cartItems = 
        {
            [products.tag]:products
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(products){
  //console.log("the price is: ", products.price);
  let cartCost = localStorage.getItem('totalCost');
  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost);
  localStorage.setItem("Total cost ", products.price);
}
onloadCartNumbers();




