
let selectedProducts = JSON.parse(localStorage.getItem("products"))

selectedProducts.map(function(elem){

    let div = document.createElement("div")
    
    let image = document.createElement("img");
    image.src = elem.image;


    let type = document.createElement("p");
    type.innerText = elem.type;

    let desc = document.createElement("p");
    desc.innerText = elem.desc;

    let price = document.createElement("p");
    price.innerText = elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove Products";
    btn.setAttribute = ("id", "btn")
    
    div.append(image,type,desc,price, btn);
    

    document.getElementById("all_products").append(div)




   

   

    

})




 

function addMore(){
    window.location.href = "index.html"
}
