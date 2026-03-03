//All info about products
const products = [
    {   
        name: "small tent", 
        category: "Tent", 
        price: 150, 
        image: "images/tent1.jpg", 
        description: "Small hiking tent for 2 person." 
    },{ 
        name: "Big tent", 
        category: "Tent", 
        price: 250, 
        image: "images/tent2.jpg", 
        description: "Big tent for 3-4 person." 
    },{ 
        name: "Tiny tent", 
        category: "Tent", 
        price: 130, 
        image: "images/tent3.jpg", 
        description: "Super small tent for 1 person." 
    },{
        name: "Car tent", 
        category: "Tent", 
        price: 220, 
        image: "images/tent4.jpg", 
        description: "This tent can be used with your car. Tent for 2 person." 
    },{ 
        name: "Giant tent", 
        category: "Tent", 
        price: 320, 
        image: "images/tent5.jpg", 
        description: "Tent for 5-6 person. Comfortable for a big company." 
    },{ 
        name: "Dark brown boots", 
        category: "Footwear", 
        price: 120, 
        image: "images/boots1.jpg", 
        description: "Comfortable and stylish dark brown boots." 
    },{ 
        name: "Red backpack", 
        category: "Gear", 
        price: 65, 
        image: "images/backpack1.jpg", 
        description: "Comfortable big backpack." 
    },{ 
        name: "Red sleeping bag", 
        category: "Camping", 
        price: 66, 
        image: "images/sleep1.jpg", 
        description: "Warm sleeping bag for. In a perect red colour." 
    },{ 
        name: "Light brown boots", 
        category: "Footwear", 
        price: 139, 
        image: "images/boots2.jpg", 
        description: "Lightweight hiking boots." 
    },{ 
        name: "Black backpack", 
        category: "Gear", 
        price: 35, 
        image: "images/backpack2.jpg", 
        description: "Small backpack." 
    },{ 
        name: "Black boots", 
        category: "Footwear", 
        price: 120, 
        image: "images/boots3.jpg", 
        description: "Stylish boots. The are suitable for hike also." 
    },{ 
        name: "Black sleeping bag", 
        category: "Camping", 
        price: 90, 
        image: "images/sleep2.jpg", 
        description: "Lightweight sleeping bag." 
    },{ 
        name: "Huge backpack", 
        category: "Gear", 
        price: 85, 
        image: "images/backpack3.jpg", 
        description: "black-gray backpack." 
    },{ 
        name: "boots with fur", 
        category: "Footwear", 
        price: 150, 
        image: "images/boots4.jpg", 
        description: "Perfect boots for winter." 
    },{ 
        name: "Stove for camping", 
        category: "Gear", 
        price: 60, 
        image: "images/stove.jpg", 
        description: "Portable camping stove for outdoor cooking." 
    }
];

//Show all products when page is loaded
document.addEventListener("DOMContentLoaded", function () {
    renderProducts("All");
});

//recieve category from dropdown
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.classList[0];
        renderProducts(category);
    });
});

//render products depends on category
function renderProducts(category) {

    const productList = document.getElementById('product-list');
    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        if (category === "All") {
            productList.innerHTML += createCard(products[i]);
        }

        if (category === "Tent" && products[i].category === "Tent") {
            productList.innerHTML += createCard(products[i]);
        }

        if (category === "Footwear" && products[i].category === "Footwear") {
            productList.innerHTML += createCard(products[i]);
        }

        if (category === "Gear" && products[i].category === "Gear") {
            productList.innerHTML += createCard(products[i]);
        }

        if (category === "Camping" && products[i].category === "Camping") {
            productList.innerHTML += createCard(products[i]);
        }
    }
}

//enter card in html using data from array
function createCard(product) {
    return `<div class="col-md-4 mb-4">
                <div class=card h-100>
                    <img class="card-img-top" src="${product.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5  class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p>€ ${product.price}</p>
                        <a href="#" class="btn btn-primary">Buy product</a>
                    </div>
                </div>
            </div>`;
}

/* Sources of information that I used:
https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://www.w3schools.com/howto/howto_js_dropdown.asp
*/