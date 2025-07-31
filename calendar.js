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


const calendarBody = document.getElementById("calendarBody");
const days = ["monday", "tuesday", "wednesday","thursday", "friday", "saturday","sunday"];


function generateTimeRows(startHour = 8, endHour = 20) {
    for (let hour = startHour; hour < endHour; hour++) {
        const row = document.createElement("div");
        row.classList.add("calendar-row");

        // Create time label on the left 
        const timeLabel = document.createElement("div")
        timeLabel.classList.add("time-label");
        const displayHour = hour === 12 ? "12 PM"
                        : hour > 12 ? `${hour - 12} PM`
                        : `${hour} AM`;

        
    }
}