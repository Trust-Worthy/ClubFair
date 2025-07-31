let selectedDay = null;
let selectedTime = null;


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

calendarBody.addEventListener("click", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return; // clicked outside a cell

    selectedDay = cell.dataset.day;
    selectedTime = cell.dataset.time;
    document.getElementById("classForm").classList.remove("hidden");
});


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

        timeLabel.textContent = displayHour;
        row.appendChild(timeLabel);

        // Create a cell for each day of the week
        days.forEach(day => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.day = day;
            cell.dataset.time = `${hour.toString().padStart(2,'0')}:00`; // e.g., "08:00"
            // Add this line for debugging so you can see the cell's day and time
            // cell.textContent = `${day} ${hour}:00`;
            row.appendChild(cell);
        });

        calendarBody.appendChild(row);
    }

    console.log("Rows generated");
}

// Run after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  generateTimeRows();
});
