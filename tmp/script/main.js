let bookmarkName = document.getElementById("bookmarkName");
let bookmarkUrl = document.getElementById("bookmarkUrl");
let addToColection = document.getElementById("addToCollection");
let addNewBookmark = document.getElementById("addNewBookmark");
let bookmarksSection = document.getElementById("bookmarksSection");

//Makes new bookmark form pop up on click
let addItem = document.getElementById("addItem");

addItem.addEventListener("click", function (){
    $(formAddItem).toggleClass("active");
    bookmarkName.focus()
});

//Sets the color inside the color picker

let formAddItem = document.getElementById("formAddItem");
const colorPicker = document.getElementById("colorPicker");
const colorPickerWrapper = document.getElementById("colorPickerWrapper");
colorPicker.onchange = function() { colorPickerWrapper.style.backgroundColor = colorPicker.value;
}; colorPickerWrapper.style.backgroundColor = colorPicker.value;

//Creating new bookmarks

addNewBookmark.addEventListener("click", function () {
    alert("dupa!")

});


