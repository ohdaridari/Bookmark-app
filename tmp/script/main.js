let formAddItem = document.getElementById("formAddItem");


//Makes new bookmark form pop up on click
let addItem = document.getElementById("addItem");

addItem.addEventListener("click", function (){
    $(formAddItem).toggleClass("active");
    console.log("dupa")
});

//Sets the color inside the color picker

const colorPicker = document.getElementById("colorPicker");
const colorPickerWrapper = document.getElementById("colorPickerWrapper"); colorPicker.onchange = function() { colorPicker_wrapper.style.backgroundColor = colorPicker.value;
}; colorPickerWrapper.style.backgroundColor = colorPicker.value;



let bookmarkName = document.getElementById("bookmarkName");
let bookmarkUrl = document.getElementById("bookmarkUrl");