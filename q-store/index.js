/*global fetch checkStatus*/
"use strict";
(function(){
    
    function $(id){ return document.getElementById(id) }
    function qs(selector){ return document.querySelector(selector) }
    function qsa(selector){ return document.querySelectorAll(selector) }
    
    window.onload = function(){
        loadProducts();
        
        qs("header").onclick = showProductsView;
    }
    
    function loadProducts(){
        fetch("products.json", {credentials: "include"})
            .then(checkStatus) 
            .then(JSON.parse)
            .then(displayProducts)
            .catch(alert);
    }
    
    function displayProducts(productJson){
        for(let i = 0; i < productJson.products.length; i++){
            let productData = productJson.products[i];
            
            let section = document.createElement("section");
            
            let title = document.createElement("h4");
            title.innerHTML = productData.name;
            
            let imgParagraph = document.createElement("p");
            let img = document.createElement("img");
            img.src = "img/" + productData.img;
            imgParagraph.appendChild(img);
            
            let description = document.createElement("p");
            description.innerHTML = productData.description;
            
            section.appendChild(title);
            section.appendChild(imgParagraph);
            section.appendChild(description);
            
            section.onclick = function(){
                showProductView(productData);
            }
            
            $("product_container").appendChild(section);
        }
    }
    
    function showProductView(productData) {
        //insert product information
        
        qs("#product h4").innerHTML = productData.name;
        qs("#product img").src = "img/" + productData.img;
        $("product_view_description").innerHTML = productData.description;
        
        $("reviews").innerHTML = "Loading...";
        
        fetch("reviews/" + productData.reviews_file, {credentials: "include"})
            .then(checkStatus) 
            .then(JSON.parse)
            .then(displayReviews)
            .catch(alert);
        

        
        $("products").classList.add("hidden");
        $("product").classList.remove("hidden");
    }
    
    function displayReviews(reviewJson){
        $("reviews").innerHTML = "";
        
        let title = document.createElement("h2");
        title.innerHTML = "Reviews";
        $("reviews").append(title);
        
        for(let i = 0; i < reviewJson.reviews.length; i++){
            let quote = document.createElement("blockquote");
            quote.innerHTML = reviewJson.reviews[i];
            $("reviews").append(quote);
        }
    }
    
    function showProductsView() {
        $("product").classList.add("hidden");
        $("products").classList.remove("hidden");
    }
})();