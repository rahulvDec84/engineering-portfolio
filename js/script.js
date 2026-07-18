// Rahul Kumar Verma Portfolio

console.log("Portfolio Loaded Successfully");

// Smooth fade effect (Future Enhancement)
window.addEventListener("scroll", function () {

    // Future animation code

});

// Project Expand / Collapse
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
