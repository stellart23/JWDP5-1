const listparent = document.getElementById('choixProduit');

let id = window.location.search.substring(4)



fetch('http://localhost:3000/api/teddies/'+ id)
.then(function(response) {
    return response.json()
}).then(function(json){
   console.log(json)
    createTeddieHtml(json)
})

function createTeddieHtml (teddieObject){
    


    let myh3 = document.createElement('h3');
    console.log(myh3);
    myh3.innerHTML = teddieObject.name;
    console.log(myh3);
    listparent.appendChild(myh3)
    
    let mycolor = document.createElement('p');
    console.log(mycolor);
    mycolor.innerHTML = teddieObject.colors;
    console.log(mycolor);
    listparent.appendChild(mycolor)

    let myDescription = document.createElement('p');
    console.log(mycolor);
    myDescription.innerHTML = teddieObject.description;
    console.log(myDescription);
    listparent.appendChild(myDescription)

    let myPrice = document.createElement('p');
    console.log(myPrice);
    myPrice.innerHTML = teddieObject.price;
    myPrice.textContent = teddieObject.price / 100 + " euros";
    console.log(myPrice);
    listparent.appendChild(myPrice)

    let myImage = document.createElement('img');
    myImage.innerHTML = teddieObject.imageUrl;
    myImage.src = teddieObject.imageUrl;
    console.log(myImage);
    listparent.appendChild(myImage)  

    let detailOption = document.getElementsByTagName('option')
    console.log(detailOption);

    let optionContainer = document.getElementById('colors_select')
    teddieObject.colors.forEach(color => {
        let option = document.createElement("option");
    option.innerHTML= color
    option.setAttribute('value', color)
    optionContainer.appendChild(option)
    });
    

}

