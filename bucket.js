// On clicking remove button the item should be removed from DOM as well as localstorage.


let cardArray = JSON.parse(localStorage.getItem("coffee")) || [];




document.getElementById("bucket").innerHTML = ""


cardArray.map(function(elem,index){

    let div = document.createElement("div");

    let name = document.createElement("h3");
    name.innerText = elem.title;

    
    let price = document.createElement("h3")
    price.innerText = elem.price;

    let image = document.createElement("img");
    image.src = elem.image;
    image.style.height = "200px"
    image.style.width = "200px";

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove_coffee")
    btn.addEventListener("click", function(){
        
        removeElem(elem,index)
    })

    div.append(image,name,price,btn)

    document.getElementById("bucket").append(div)




})

let sum = cardArray.reduce(function(acc,elem){
    return acc + (elem.price)
},0)


document.getElementById("total_amount").innerText = sum;

function  removeElem(index){

    cardArray.splice(index,1);

    JSON.parse(localStorage.getItem("coffee"))

    window.location.reload()
}