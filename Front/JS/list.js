console.log('bonjour');

const listparent = document.getElementById('list_container');

fetch('http://localhost:3000/api/teddies')
.then(function(response) {
    return response.json()
}).then(function(json){
    json.forEach(teddie => {
        createTeddieHtml(teddie)
    });
})

function createTeddieHtml (teddieObject){
    
    let article = document.createElement('article')
    let myh3 = document.createElement('h3');
    console.log(myh3);
    myh3.innerHTML = teddieObject.name;
    console.log(myh3);
    article.appendChild(myh3)
    
    let mycolor = document.createElement('p');
    console.log(mycolor);
    mycolor.innerHTML = teddieObject.colors;
    console.log(mycolor);
    article.appendChild(mycolor)

    let myDescription = document.createElement('p');
    console.log(mycolor);
    myDescription.innerHTML = teddieObject.description;
    console.log(myDescription);
    article.appendChild(myDescription)

    let myPrice = document.createElement('p');
    console.log(myPrice);
    myPrice.innerHTML = teddieObject.price;
    myPrice.textContent = teddieObject.price / 100 + " euros";
    console.log(myPrice);
    article.appendChild(myPrice)

    let myImage = document.createElement('img');
    myImage.innerHTML = teddieObject.imageUrl;
    myImage.src = teddieObject.imageUrl;
    console.log(myImage);
    article.appendChild(myImage) 

    let link = document.createElement('a');
    link.innerHTML = 'voir le produit';
    link.href = 'ours_en_peluche.html?id='+teddieObject._id

    article.appendChild(link)

   


    link.classList.add('voir_produit')
    article.classList.add('nounours')
    listparent.appendChild(article)


    
}







