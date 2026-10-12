// Data structures
let roommates = [];
let chores = [];
let currentWeek = 1;

// Load from localStorage on startup
function loadData() {
    const savedRoommates = localStorage.getItem('roommates');
    const savedChores = localStorage.getItem('chores');
    const savedWeek = localStorage.getItem('currentWeek');

    if (savedRoommates) roommates = JSON.parse(savedRoommates);
    if (savedChores) chores = JSON.parse(savedChores);
    if (savedWeek) currentWeek = parseInt(savedWeek);

    renderRoommates();
    renderChores();
    document.getElementById('currentWeek').textContent = currentWeek;
    generateSchedule();
}

// Save to localStorage
function saveData() {
    localStorage.setItem('roommates', JSON.stringify(roommates));
    localStorage.setItem('chores', JSON.stringify(chores));
    localStorage.setItem('currentWeek', currentWeek);
}

// Add roommate
function addRoommate() {
    const input = document.getElementById('roommateInput');
    const name = input.value.trim();

    if (name && !roommates.includes(name)) {
        roommates.push(name);
        input.value = '';
        saveData();
        renderRoommates();
        generateSchedule();
    }
}

// Remove roommate
function removeRoommate(index) {
    roommates.splice(index, 1);
    saveData();
    renderRoommates();
    generateSchedule();
}

// Render roommates list
function renderRoommates() {
    const list = document.getElementById('roommateList');
    list.innerHTML = roommates.map((r, i) => 
        `<li>
            <span>${r}</span>
            <button class="delete-btn" onclick="removeRoommate(${i})">Remove</button>
        </li>`
    ).join('');
}

// Add chore
function addChore() {
    const input = document.getElementById('choreInput');
    const name = input.value.trim();

    if (name && !chores.includes(name)) {
        chores.push(name);
        input.value = '';
        saveData();
        renderChores();
        generateSchedule();
    }
}

// Remove chore
function removeChore(index) {
    chores.splice(index, 1);
    saveData();
    renderChores();
    generateSchedule();
}

// Render chores list
function renderChores() {
    const list = document.getElementById('choreList');
    list.innerHTML = chores.map((c, i) => 
        `<li>
            <span>${c}</span>
            <button class="delete-btn" onclick="removeChore(${i})">Remove</button>
        </li>`
    ).join('');
}

// Generate rotating schedule
function generateSchedule() {
    const scheduleDiv = document.getElementById('schedule');

    if (roommates.length === 0 || chores.length === 0) {
        scheduleDiv.innerHTML = '<p style="color: #666; text-align: center;">Add roommates and chores first</p>';
        return;
    }

    const schedule = chores.map((chore, index) => {
        // Rotate through roommates based on week number and chore index
        const roommateIndex = (index + currentWeek - 1) % roommates.length;
        return {
            chore: chore,
            roommate: roommates[roommateIndex]
        };
    });

    scheduleDiv.innerHTML = schedule.map(item => 
        `<div class="schedule-item">
            <div class="chore">${item.chore}</div>
            <div class="roommate">Assigned to: ${item.roommate}</div>
        </div>`
    ).join('');
}

// Move to next week
function nextWeek() {
    currentWeek++;
    document.getElementById('currentWeek').textContent = currentWeek;
    saveData();
    generateSchedule();
}

// Reset weeks
function resetWeeks() {
    currentWeek = 1;
    document.getElementById('currentWeek').textContent = currentWeek;
    saveData();
    generateSchedule();
}

// Handle Enter key for inputs
document.getElementById('roommateInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addRoommate();
});

document.getElementById('choreInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addChore();
});

// Initialize
loadData();
