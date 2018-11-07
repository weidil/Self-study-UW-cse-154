"use strict";
(function(){
    
    function $(id){ return document.getElementById(id) }
    function qs(selector){ return document.querySelector(selector) }
    function qsa(selector){ return document.querySelectorAll(selector) }
    
    window.onload = function(){
        
        let prodBoxes = qsa("#product_container section");
        for(let i = 0; i < prodBoxes.length; i++) {
            prodBoxes[i].onclick = showProductView;
        }
        
        qs("header").onclick = showProductsView;
    }
    
    function showProductView() {
        //insert product information
        console.log(this.id);
        if(this.id === "quilt_1"){
            quilt_1_details();
        } else if (this.id === "quartz_1"){
            quartz_1_details();
        }
        
        $("products").classList.add("hidden");
        $("product").classList.remove("hidden");
    }
    
    function showProductsView() {
        $("product").classList.add("hidden");
        $("products").classList.remove("hidden");
    }
    
    function quilt_1_details(){
        qs("#product h4").innerHTML = "Quilt #1";
        qs("#product img").src = "img/quilt1.jpg";
        $("product_view_description").innerHTML = "This is a lovely quilt!";
        
        $("reviews").innerHTML = "";
        
        let title = document.createElement("h2");
        title.innerHTML = "Reviews";
        let quote1 = document.createElement("blockquote");
        quote1.innerHTML = "A perfect quilt! 5 stars!";
        let quote2 = document.createElement("blockquote");
        quote2.innerHTML = " It was just scraps of cloth stitched together. " +
                "Why not make it all one material! 0 stars!";
        $("reviews").append(title);
        $("reviews").append(quote1);
        $("reviews").append(quote2);
        
    }
    
    function quartz_1_details(){
        qs("#product h4").innerHTML = "Quarz #1";
        qs("#product img").src = "img/quartz1.jpg";
        $("product_view_description").innerHTML = "A nice piece of quartz!";
        
        $("reviews").innerHTML = "";
        
        let title = document.createElement("h2");
        title.innerHTML = "Reviews";
        let quote1 = document.createElement("blockquote");
        quote1.innerHTML = "Meh. 2.5 stars";
        let quote2 = document.createElement("blockquote");
        quote2.innerHTML = "These quartz were not magical! 0 stars!";
        $("reviews").append(title);
        $("reviews").append(quote1);
        $("reviews").append(quote2);
    }
})();