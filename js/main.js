// Variables
const fruitIcons = document.querySelectorAll("#fruits svg");

// Functions
function logId() {
    console.log(this.id);
}

// Event Listeners
fruitIcons.forEach(function(icon){
    icon.addEventListener("click", logId);
});