document.getElementById("car").style.height = "40px";
document.getElementById("car").style.width = "50px";
const felixDiv = document.getElementById("main");
function createCar(name,brand,price,year,img){
    this.name = ('<h3>'+name+'</h3>');
    this.brand = ('<p>'+brand+'</p>');
    this.price = ('<p>'+price+'</p>');
    this.year = ('<p>'+year+'</p>');
    this.img = ('<img style="width: 100%;" src='+img+' alt="bil">');
    console.log(this.name,this.brand,this.price,this.year)
    var car = ('<div style="border:2px black inset; width:300px; height 350px; background:blue; text-align:center; float:left; margin-left:50px; color:white; text-shadow:2px 2px #ff0000;"">'+this.img+this.name+this.brand+this.price+this.year+'</div>');
    this.printCar = function(){
        felixDiv.innerHTML += car;
    }
    return this;
}
function loadPrompt(){
var name = prompt("Iput car name");
var brand = prompt("Input car brand");
var price = prompt("Input car price");
var year = prompt("Input year car was made");
var img = prompt("Input img of car");

var car = createCar(name,brand,price,year,img);
car.printCar();
}