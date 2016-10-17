var person = {
  name: "Grace",
  representation: "http://i.dailymail.co.uk/i/pix/2016/03/14/19/322C3FA100000578-0-image-a-13_1457982438669.jpg",
  height: "500px",	
  favoriteColor: "blue",
  catchphrase: "Get pumped!"
}

drawperson()
function drawperson() {  
document.write(person.name)
console.log("name")
document.write("img src="+this.link+">");


}