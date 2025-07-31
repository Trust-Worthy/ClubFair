let selectedDay = null;
let selectedTime = null;

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {
    selectedDay = cell.dataset.day;
    selectedTime = cell.dataset.time;
    document.getElementById("classForm").classList.remove("hidden");

    });
});


function submitClass() {
    const name = document.getElementById("className").value;
    const start = document.getElementById("startTime").value;
    const end = document.getElementById("endTime").value;

    if (!name || !start || !end) {
        alert("Please fill all fields");
        return;
    }
}

