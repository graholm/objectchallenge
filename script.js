var person = {
  name: "Grace",
  representation: "http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg",
  height: "50px",	
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