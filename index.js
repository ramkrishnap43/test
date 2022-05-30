// Add the coffee to local storage with key "coffee"
let count = 0;




menuFood()
async function menuFood(){

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`);

        let data = await res.json();

        let final = data.menu.data

        //console.log(final)

        appendData(final)
    }
    catch(error){
        console.log(error)
    }


}

let cardArray =  [];



function appendData(final){

   final.map(function(elem){

   
        let div = document.createElement("div");
        div.style.border = "1px solid blue";
        div.style.padding= "40px"

        let name = document.createElement("h3")
        name.innerText = elem.title;

        let price = document.createElement("h3")
        price.innerText = elem.price;

        let image = document.createElement("img");
        image.src = elem.image;
        image.style.height = "200px"
        image.style.width = "250px"

        let btn = document.createElement("button");
        btn.innerText = "Add To Bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click", function(){
            
            addToCart(elem)
           

        })

         div.append(image,name,price,btn);
         
        

         document.getElementById("menu").append(div)

         
         
         
         
        
    })
    
}

function addToCart(elem){

    count++;
    document.getElementById("coffee_count").innerText  = count;
   
  
    cardArray.push(elem)

   


    localStorage.setItem("coffee",JSON.stringify(cardArray))
    

}


