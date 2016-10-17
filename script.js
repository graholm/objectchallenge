var person = {
  name: "Grace",
  representation: "http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg",
  height: "100px",	
  favoriteColor: "blue",
  catchphrase: "Get pumped!"
}

drawperson()
function drawperson() {  
document.write(person.name)
console.log("name")
var img = document.createElement("img");
  img.src = (person.representation);
  $(img).css({height: person.height})
  document.body.appendChild(img);
  
}