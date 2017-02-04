var croc = {
  
    name: "Crocodill-E",
    description: "Crcodile with a kung fu grip",
    price:  "$20",
    url:  "/images/crocodile.jpg",
}

var wiggly = {
  
    name: "Piggly wiggly",
    description: "This little piggy went to the market",
    price:  "$20",
    url:  "/images/piggy.jpg",
}

var rat = {
  
    name: "Ratatouille",
    description: "Rat tat tat tat tat",
    price:  "$20",
    url:  "/images/rat.jpg",
}

var monkey = {
  
    name: "TRNK Monkey",
    description: "Our official toyTRNK mascot ",
    price:  "$20",
    url:  "/images/monkey.jpg",
}

var rintin = {
  
    name: "Rin Tin Tin",
    description: "A house is not a home without Rin",
    price:  "$20",
    url:  "/images/puppy.jpg",
}

var stardust = {
  
    name: "Stardust",
    description: "Cleo kitten with a dusty surprise",
    price:  "$20",
    url:  "/images/Cleo-kitten.jpg",
}

var rhino = {
  
    name: "elephant",
    description: "TRNK that monkey",
    price:  "$20",
    url:  "/images/elephant.jpg",
}

var bear = {
  
    name: "Pumpkin",
    description: "Pumkin spiced kitty",
    price:  "$20",
    url:  "/images/pumpkin-kitty.jpg", 
}

var shark = {
  
    name: "Lion",
    description: "King of the Java",
    price:  "$20",
    url:  "/images/lion.jpg",
}
  


var products = [croc, wiggly, rat, monkey, rintin, stardust, rhino, bear, shark];
var info = document.getElementsByClassName("info"); // divs where objects plugin 

console.log(info, "info");
//console.log(products[8].name);


// Loop


for (var i = 0; i < products.length; i++) {
  
       var cardContent = ""; // Stores the += and writes objects into the cardholder
  
       cardContent += '<img src="' + products[i].url + '"/>';
       cardContent += '<h3>' + products[i].name + '</h3>';
       cardContent += '<p class="animal-description">' + products[i].description + '</p>';
       cardContent += '<p class="animal-price">' + products[i].price + '</p>';
       info[i].innerHTML = cardContent;
       
       console.log(cardContent);
}

// console.log(cardContent);


// Only works for hard keyed IDs, great as a test.

//  for (var i = 0; i < products.length; i++) {
  
//        document.getElementById("a").innerHTML = products[i].name;  
//        document.getElementById("b").innerHTML = products[i].description;  
//        document.getElementById("c").innerHTML = products[i].price;  
//        document.getElementById("d").innerHTML = products[i].url;
  
// }