const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".voilet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

// background-color:backgroundColor here in js it changes like this
// font-style:fontStyle



///here computed stle will give u the css styling use in our project for particular class
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

}
//console.log(getBGColor(pink));

// var Color = getBGColor(pink)
// pink.addEventListener("mouseenter", () => {
//     center.style.background = Color;
//     console.log("enter on color");
// })

const magicColorChanger=(element,color)=>{
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
        console.log("enter on color");
    });
}

magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(red,getBGColor(red));
magicColorChanger(voilet,getBGColor(voilet));
magicColorChanger(pink,getBGColor(pink));
magicColorChanger(orange,getBGColor(orange));