let selectedDay = null;
let selectedTime = null;
let isDragging = false;
let dragStartCell = null;
let dragEndCell = null;
let draggedCells = [];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

    draggedCells.forEach(cell => {
        cell.classList.remove("highlight");
    });
    draggedCells = [];
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


calendarBody.addEventListener("mousedown", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return;
    isDragging = true;
    dragStartCell = cell;
    draggedCells = [cell]; // start with the first cell
    cell.classList.add("highlight"); // optional visual cue
});

calendarBody.addEventListener("mouseover", (e) => {
    if (!isDragging) return;
    const cell = e.target.closest(".cell");
    if (!cell || draggedCells.includes(cell)) return;

    if (cell.dataset.day === dragStartCell.dataset.day) {
        draggedCells.push(cell);
        cell.classList.add("highlight");
    }
});

calendarBody.addEventListener("mouseup", () => {
    if (!isDragging || draggedCells.length === 0) return;
    isDragging = false;

    selectedDay = dragStartCell.dataset.day;

    // Sort by time to find earliest and latest time
    draggedCells.sort((a, b) => a.dataset.time.localeCompare(b.dataset.time));
    selectedTime = draggedCells[0].dataset.time;

    document.getElementById("startTime").value = draggedCells[0].dataset.time;
    document.getElementById("endTime").value = getTimeAfter(
        draggedCells[draggedCells.length - 1].dataset.time
    );

    // Show popup to name class
    document.getElementById("classForm").classList.remove("hidden");
});



function getTimeAfter(timeStr) {
    let [hour, minute] = timeStr.split(":").map(Number);
    hour += 1;  // TO-DO: customize to 30 or 15 min increments later
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}





function renderClubs(clubsToRender = clubs) {
  const clubList = document.getElementById("clubList");
  clubList.innerHTML = ""; // clear previous

  clubsToRender.forEach((club, index) => {
    const card = document.createElement("div");
    card.className = "club-card";
    card.dataset.index = index;

    card.innerHTML = `
      <h3>${club.name}</h3>
      <p>${club.meetings.map(m => `${m.day}, ${m.start} - ${m.end}`).join("<br>")}</p>
      <input type="checkbox" class="club-select" data-index="${index}">
    `;

    clubList.appendChild(card);
  });
}


function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function getBusySlots() {
  const busy = [];

  const classBlocks = document.querySelectorAll(".class-block");
  classBlocks.forEach(block => {
    const cell = block.parentElement;
    busy.push({
      day: cell.dataset.day,
      time: timeToMinutes(cell.dataset.time)
    });
  });

  return busy;
}

function isClubAvailable(club, busySlots) {
  return club.meetings.every(meeting => {
    const meetingStart = timeToMinutes(meeting.start);
    const meetingEnd = timeToMinutes(meeting.end);
    
    return !busySlots.some(slot => {
      return (
        slot.day === meeting.day &&
        slot.time >= meetingStart &&
        slot.time < meetingEnd
      );
    });
  });
}

document.getElementById("filterButton").addEventListener("click", () => {
  const busySlots = getBusySlots();
  const filtered = clubs.filter(club => isClubAvailable(club, busySlots));
  renderClubs(filtered);
});

document.getElementById("commitButton").addEventListener("click", () => {
  const selectedIndexes = Array.from(document.querySelectorAll(".club-select:checked"))
    .map(input => parseInt(input.dataset.index));
  
  const selectedClubs = selectedIndexes.map(i => clubs[i]);

  const list = document.getElementById("committedClubsList");
  list.innerHTML = "";

    selectedClubs.forEach(club => {
    const li = document.createElement("li");
    const timeInfo = club.meetings
      .map(m => `${capitalize(m.day)}: ${m.start}–${m.end}`)
      .join(", ");
    li.innerHTML = `<strong>${club.name}</strong><br><span class="club-time">${timeInfo}</span>`;
    list.appendChild(li);
  });

});

function cancelClass() {
    // Hide the class input form
    document.getElementById("classForm").classList.add("hidden");

    // Clear any highlighted cells from dragging
    draggedCells.forEach(cell => {
        cell.classList.remove("highlight");
    });

    draggedCells = [];

    // Clear the form values
    document.getElementById("className").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
}



// Run after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  generateTimeRows();
  renderClubs(clubs); // render all clubs at first
});


// Global array for created clubs
const createdClubs = [];

// Function to render created clubs
function renderCreatedClubs() {
  const createdList = document.getElementById("createdClubList");
  createdList.innerHTML = ""; // Clear old

  if (createdClubs.length === 0) {
    createdList.innerHTML = "<p>No clubs created yet.</p>";
    return;
  }

  createdClubs.forEach((club, index) => {
    const card = document.createElement("div");
    card.className = "club-card";
    card.dataset.index = index;

    const meetingTime = `${capitalize(club.day)}: ${club.startTime} - ${club.endTime}`;

    card.innerHTML = `
      <h3>${club.name}</h3>
      <p><strong>Category:</strong> ${capitalize(club.category)}</p>
      <p><strong>Meeting:</strong> ${meetingTime}</p>
      <p>${club.description}</p>
      <p><strong>Contact:</strong> <a href="mailto:${club.contact}" style="color:inherit;">${club.contact}</a></p>
    `;

    createdList.appendChild(card);
  });
}

// Modified handleAddClub to add to createdClubs and re-render
function handleAddClub(event) {
  event.preventDefault();
  
  // Get form data
  const clubName = document.getElementById('clubName').value;
  const clubCategory = document.getElementById('clubCategory').value;
  const clubDay = document.getElementById('clubDay').value;
  const clubStart = document.getElementById('clubStart').value;
  const clubEnd = document.getElementById('clubEnd').value;
  const clubDescription = document.getElementById('clubDescription').value;
  const contactEmail = document.getElementById('contactEmail').value;
  
  // Create new club object
  const newClub = {
    name: clubName,
    category: clubCategory,
    day: clubDay,
    startTime: clubStart,
    endTime: clubEnd,
    description: clubDescription || 'No description provided.',
    contact: contactEmail
  };
  
  // Add to createdClubs array
  createdClubs.push(newClub);
  
  // Refresh created clubs list
  renderCreatedClubs();
  
  // Show success message
  document.getElementById('clubCreatedMessage').classList.remove('hidden');
  
  // Reset form
  document.getElementById('addClubForm').reset();
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    document.getElementById('clubCreatedMessage').classList.add('hidden');
  }, 5000);
  
  // Scroll to success message
  document.getElementById('clubCreatedMessage').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// Helper function for capitalization
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Call this once on DOM ready to initialize the created clubs section empty message
document.addEventListener("DOMContentLoaded", () => {
  renderCreatedClubs();
});



