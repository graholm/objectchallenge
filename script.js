var person = {
  name: "Grace",
  representation: "http://healthimpactnews.com/wp-content/uploads/sites/2/2014/09/goat-eating-weeds.jpg",
  height: "300px",	
  favoriteColor: "purple",
  catchphrase: "Get pumped!"
}

drawperson()
function drawperson() {  
document.write(person.name)
var img = document.createElement("img");
  img.src = (person.representation);
  $(img).css({"border-color": person.favoriteColor, 
              "border-style":"solid"});
  $(img).css ({height: person.height})
  
  document.body.appendChild(img);
  
}