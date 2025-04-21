const data = [
{
    "image": "https://product-list-with-cart-front-end.netlify.app/images/image-waffle-desktop.jpg",
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": "6.50"
 },
 {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-creme-brulee-desktop.jpg",
     "name": "Vanilla Bean Crème Brûlée",
     "category": "Crème Brûlée",
     "price": "7.00"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-macaron-desktop.jpg",
     "name": "Macaron Mix of Five",
     "category": "Macaron",
     "price": "8.00"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-tiramisu-desktop.jpg",
     "name": "Classic Tiramisu",
     "category": "Tiramisu",
     "price": "5.50"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-baklava-desktop.jpg",
     "name": "Pistachio Baklava",
     "category": "Baklava",
     "price": "4.00"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-meringue-desktop.jpg",
     "name": "Lemon Meringue Pie",
     "category": "Pie",
     "price": "5.00"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-cake-desktop.jpg",
     "name": "Red Velvet Cake",
     "category": "Cake",
     "price": "4.50"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-brownie-desktop.jpg",
     "name": "Salted Caramel Brownie",
     "category": "Brownie",
     "price": "4.50"
  },
  {
     "image": "https://product-list-with-cart-front-end.netlify.app/images/image-panna-cotta-desktop.jpg",
     "name": "Vanilla Panna Cotta",
     "category": "Panna Cotta",
     "price": "6.50"
  }
]
let order_count = 0
let item_count = [0,0,0,0,0,0,0,0,0]
let total = 0
document.getElementsByTagName("H1")[1].innerHTML = `Your Cart (${order_count})`
const display = ()=>{
    const container = document.getElementsByClassName("desserts")[0]
    container.innerHTML=''
    let count=0
    for (i of data){
        let str = `
            <div class="item" id="item${count}">
                <img id="image${count}" src="${i.image}" alt="">
                <div id="add" onclick="Add(${count})"><div class="cart-logo"><img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg"></div><p>Add to Cart</p></div>
                <div class="details">
                    <span class="category">${i.category}</span>
                    <span class="name">${i.name}</span>
                    <span class="price">$${i.price}</span>
                </div>
            </div>`
        container.innerHTML += str
        count++
    }
}
display()



const Add = (i)=>{
    const item = document.getElementById(`item${i}`)
    const k = data[i]
    item.innerHTML = `<img id="image${i}" src="${k.image}" alt="">
    <div id="added">
    <div class="dec" onclick="Sub(${i})"><p>-</p></div>
    <p id="count${i}">${++item_count[i]}</p>
    <div class="inc" onclick="Add(${i})"><p>+</p></div>
    </div>
    <div class="details">
    <span class="category">${k.category}</span>
    <span class="name">${k.name}</span>
    <span class="price">$${k.price}</span>
    </div>`
    order_count++
    const img = document.getElementById(`image${i}`)
    img.style.border = "2px solid #c73b0f"
    addToCart()
}   
const Sub = (i)=>{
    const item = document.getElementById(`item${i}`)
    const k = data[i]
    item.innerHTML = `<img id="image${i}" src="${k.image}" alt="">
    <div id="added">
    <div class="dec" onclick="Sub(${i})"><p>-</p></div>
    <p id="count${i}">${--item_count[i]}</p>
    <div class="inc" onclick="Add(${i})"><p>+</p></div>
    </div>
    <div class="details">
    <span class="category">${k.category}</span>
    <span class="name">${k.name}</span>
    <span class="price">$${k.price}</span>
    </div>`
    order_count--
    const img = document.getElementById(`image${i}`)
    img.style.border = "2px solid #c73b0f"
    if (item_count[i] == 0){
        item.innerHTML = `<img id="image${i}" src="${k.image}" alt="">
                <div id="add" onclick="Add(${i})"><div class="cart-logo"><img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg"></div><p>Add to Cart</p></div>
                <div class="details">
                    <span class="category">${k.category}</span>
                    <span class="name">${k.name}</span>
                    <span class="price">$${k.price}</span>
                </div>`
                console.log("executed")
    }
    addToCart()
}
const addToCart = ()=>{
    const container = document.getElementById("cart")
    total=0
    let list_items = ``
    for(let i = 0;i<9;i++){
        total+=item_count[i]*parseFloat(data[i].price);
        if (item_count[i]){
            list_items+=`<div class="list-item">
            <div class="details-left">
            <div class="details-left-top">
            <p>${data[i].name}</p>
            </div>
            <div class="details-left-bottom">
            <div class="multiplier">
            <p>${item_count[i]}x</p>
            </div>
            <div class="price">
            <pre>@ </pre><p>$${data[i].price}<p>
            </div>
            <div class="item-total">
            <p>$${float(item_count[i]*parseFloat(data[i].price))}<p>
            </div>
            </div>
            </div>
            <div class="details-right">
            <div onclick="del(${i})"><p>+</p></div>
            </div>
            </div>`
        }
    }
    total = float(total)
    cart.innerHTML = `
    <h1>Your Cart (${order_count})</h1>

    <div id="list">${list_items}</div>

    <div id="total">
    <div class="left">Order Total</div>
    <div class="right">$${total}</div>
    </div>
    
    <div id="tag"><img src="https://product-list-with-cart-front-end.netlify.app/13953e5e1e4c166b4acd.svg">
    <p>This is a <b>carbon-neutral</b> delivery</p>
    </div>
    
    <div id="order" onclick="confirmed()"><p>Corfirm Order</p></div>
    `
    if (!order_count){
        cart.innerHTML=`<h1>Your Cart (0)</h1>
            <img src="https://product-list-with-cart-front-end.netlify.app/c2bca079754e885ead5d.svg" alt="">
            <p>Your added items will appear here</p>`
    }
}

const del = (i)=>{    
    const item = document.getElementById(`item${i}`)
    const k = data[i]
    order_count-=item_count[i]
    item_count[i]=0
    item.innerHTML = `<img id="image${i}" src="${k.image}" alt="">
    <div id="added">
    <div class="dec" onclick="Sub(${i})"><p>-</p></div>
    <p id="count${i}">${item_count[i]}</p>
    <div class="inc" onclick="Add(${i})"><p>+</p></div>
    </div>
    <div class="details">
    <span class="category">${k.category}</span>
    <span class="name">${k.name}</span>
    <span class="price">$${k.price}</span>
    </div>`
    const img = document.getElementById(`image${i}`)
    img.style.border = "2px solid #c73b0f"
    if (item_count[i] == 0){
        item.innerHTML = `<img id="image${i}" src="${k.image}" alt="">
                <div id="add" onclick="Add(${i})"><div class="cart-logo"><img src="https://product-list-with-cart-front-end.netlify.app/12141fdf0da9c38c6421.svg"></div><p>Add to Cart</p></div>
                <div class="details">
                    <span class="category">${k.category}</span>
                    <span class="name">${k.name}</span>
                    <span class="price">$${k.price}</span>
                </div>`
                console.log("executed")
    }
    addToCart()
}


function float(i_num){
    let o_num;
    if (i_num%1==0){
        o_num=""+i_num+".00"
    }else{
        o_num=""+i_num+"0"
    }
    return o_num
}

const confirmed = ()=>{
    const main = document.getElementById("main")
    let list_items = ``
    for(let i = 0;i<9;i++){
        if (item_count[i]){
            list_items+=`<div class="main-top-list-item">
            <div class="image">
            <img src="${data[i].image}"></div>
            <div class="main-top-list-item-details">
            <div class="main-top-list-item-details-top">${data[i].name}</div>
            <div class="main-top-list-item-details-bottom">
            <div class="left">${item_count[i]}x</div><div class="right"><pre>@ </pre><p>$${data[i].price}</p></div>
            </div>
            </div>
            <div class="price">$${float(parseFloat(data[i].price)*item_count[i])}</div>
            </div>`
        }
    }
    // total = float(total)
    main.innerHTML+=`<div id="main-back">
        <div id="main-top">
        <img id="check" src="https://media.istockphoto.com/id/1179670236/vector/check-mark-icon-green-tick-complete-done-accept-correct-approve-confirm-concepts-round.jpg?s=612x612&w=0&k=20&c=R3ELTuDSHiEw7WlW3mJndjf5JDt4Y-ER-9jEjhCxgJ4=">
        <div id="main-top-head">
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food.</p>
        </div>
        <div id="main-top-list"><div class="list">${list_items}</div>
        <div class="total">
        <pre>Order Total</pre>
        <p>$${total}<p>
        </div>
        </div>
        <div id="restart" onclick="restart()">
        <p>Start New Order</p>
        </div>
        </div>
    </div>`
    // order_count = 0
    // item_count = [0,0,0,0,0,0,0,0,0]
    // display()
    // addToCart()
}

const restart = ()=>{
    order_count = 0
    item_count = [0,0,0,0,0,0,0,0,0]
    display()
    document.getElementById("main-back").remove()
    addToCart()
}
