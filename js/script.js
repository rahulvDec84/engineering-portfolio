// Rahul Kumar Verma Portfolio

console.log("Portfolio Loaded Successfully");

// Smooth fade effect (Future Enhancement)
window.addEventListener("scroll", function () {

    // Future animation code

});

// Project Expand / Collapse
function toggleProject(id, button) {

    const details = document.getElementById(id);

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
        button.innerHTML = "Hide Details ▲";
    } else {
        button.innerHTML = "View Details ▼";
    }

}
