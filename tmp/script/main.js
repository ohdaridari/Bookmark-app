//Makes new bookmark form pop up on click

let addItem = document.getElementById("addItem");

addItem.addEventListener("click", function (){
    alert("It works!");
});

//Sets the color inside the color picker

const color_picker = document.getElementById("colorPicker");
const color_picker_wrapper = document.getElementById("colorPickerWrapper");
color_picker.onchange = function() {
    color_picker_wrapper.style.backgroundColor = color_picker.value;
};
color_picker_wrapper.style.backgroundColor = color_picker.value;