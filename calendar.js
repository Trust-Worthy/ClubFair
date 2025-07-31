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

    // Find all relevant cells and add class block

    const cells = document.querySelectorAll(`.cell[data-day="${selectedDay}"]`);
    cells.forEach(cell => {
        const time = cell.dataset.time;
        if (time >= start && time < end) {
            const block = document.createElement("div");
            block.className = "class-block";
            block.innerText = name;
            cell.appendChild(block)
        }
    });

    document.getElementById("classForm").classList.add("hidden");
    document.getElementById("className").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
}

