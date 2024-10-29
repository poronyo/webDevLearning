let numberOfDrumButtons =document.querySelectorAll(".drum").length ;

// for(let i=0;i < numberOfDrumButtons; i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    // let audio = new Audio("sounds/crash.mp3");
    // audio.play();
    // console.log("test")
// });



function functionW() {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}
function functionA() {
    let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}
function functionS() {
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}




document.querySelector(".w").addEventListener("click",functionW);
document.querySelector(".w").addEventListener("keydown",function (event) {
    if (event.key === "w"){
        functionW();
    } }
)

document.querySelector(".a").addEventListener("click",functionA);
document.querySelector(".a").addEventListener("keydown",function (event) {
    if (event.key === "a"){
        functionA();
    } }
)

document.querySelector(".s").addEventListener("click",functionS);
document.querySelector(".s").addEventListener("keydown",function (event) {
    if (event.key === "s"){
        functionS();
    }}
)
