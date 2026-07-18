
// Rahul Kumar Verma Portfolio

console.log("Portfolio Loaded Successfully");

// Smooth fade effect (future enhancement)

window.addEventListener("scroll",function(){

});
function toggleProject(id, button) {
    const details = document.getElementById(id);

    if (details.style.display === "block") {
        details.style.display = "none";
        button.innerHTML = "View Details ▼";
    } else {
        details.style.display = "block";
        button.innerHTML = "Hide Details ▲";
    }
}
