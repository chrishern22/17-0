/* ============================================
   17-0 SQUAD BUILDER - APP
   ============================================ */

// ============================================
// DATABASE
// ============================================

const playerDatabase = {
    quarterbacks: [
        // Legendary (very rare)
        { name: "Tom Brady", ovr: 99, team: "Patriots", era: "historic", legendary: true, rarity: "legendary", passingYards: 5000, tds: 45 },
        { name: "Joe Montana", ovr: 99, team: "49ers", era: "historic", legendary: true, rarity: "legendary", passingYards: 4800, tds: 42 },
        { name: "Peyton Manning", ovr: 98, team: "Colts", era: "historic", legendary: true, rarity: "legendary", passingYards: 4900, tds: 44 },
        // Elite (rare)
        { name: "Josh Allen", ovr: 99, team: "Bills", era: "modern", legendary: false, rarity: "elite", passingYards: 4800, tds: 42 },
        { name: "Matthew Stafford", ovr: 99, team: "Rams", era: "modern", legendary: false, rarity: "elite", passingYards: 4700, tds: 40 },
        { name: "Joe Burrow", ovr: 97, team: "Bengals", era: "modern", legendary: false, rarity: "elite", passingYards: 4600, tds: 38 },
        { name: "Patrick Mahomes", ovr: 94, team: "Chiefs", era: "modern", legendary: false, rarity: "elite", passingYards: 4500, tds: 38 },
        { name: "Lamar Jackson", ovr: 93, team: "Ravens", era: "modern", legendary: false, rarity: "elite", passingYards: 3800, tds: 30 },
        { name: "Jalen Hurts", ovr: 92, team: "Eagles", era: "modern", legendary: false, rarity: "elite", passingYards: 3900, tds: 32 },
        // Rare
        { name: "Dak Prescott", ovr: 91, team: "Cowboys", era: "modern", legendary: false, rarity: "rare", passingYards: 4100, tds: 33 },
        { name: "Tua Tagovailoa", ovr: 90, team: "Dolphins", era: "modern", legendary: false, rarity: "rare", passingYards: 4200, tds: 34 },
        { name: "CJ Stroud", ovr: 89, team: "Texans", era: "modern", legendary: false, rarity: "rare", passingYards: 4000, tds: 30 },
        { name: "Jordan Love", ovr: 88, team: "Packers", era: "modern", legendary: false, rarity: "rare", passingYards: 3700, tds: 28 },
        { name: "Trevor Lawrence", ovr: 87, team: "Jaguars", era: "modern", legendary: false, rarity: "rare", passingYards: 3600, tds: 26 },
        { name: "Kirk Cousins", ovr: 86, team: "Falcons", era: "modern", legendary: false, rarity: "rare", passingYards: 3500, tds: 25 },
        // Common
        { name: "Bryce Young", ovr: 76, team: "Panthers", era: "modern", legendary: false, rarity: "common", passingYards: 2800, tds: 18 },
        { name: "Mac Jones", ovr: 75, team: "Patriots", era: "modern", legendary: false, rarity: "common", passingYards: 2700, tds: 17 },
        { name: "Sam Howell", ovr: 74, team: "Commanders", era: "modern", legendary: false, rarity: "common", passingYards: 2600, tds: 16 },
        { name: "Malik Willis", ovr: 73, team: "Titans", era: "modern", legendary: false, rarity: "common", passingYards: 2500, tds: 15 },
        { name: "Desmond Ridder", ovr: 72, team: "Cardinals", era: "modern", legendary: false, rarity: "common", passingYards: 2400, tds: 14 },
        { name: "Tyrod Taylor", ovr: 71, team: "Jets", era: "modern", legendary: false, rarity: "common", passingYards: 2300, tds: 13 },
        { name: "Gardner Minshew", ovr: 70, team: "Colts", era: "modern", legendary: false, rarity: "common", passingYards: 2200, tds: 12 }
    ],
    runningBacks: [
        // Legendary (very rare)
        { name: "Barry Sanders", ovr: 99, team: "Lions", era: "historic", legendary: true, rarity: "legendary", rushingYards: 2000, tds: 18 },
        { name: "Jim Brown", ovr: 99, team: "Browns", era: "historic", legendary: true, rarity: "legendary", rushingYards: 1900, tds: 17 },
        { name: "Emmitt Smith", ovr: 98, team: "Cowboys", era: "historic", legendary: true, rarity: "legendary", rushingYards: 1800, tds: 16 },
        // Elite (rare)
        { name: "Bijan Robinson", ovr: 98, team: "Falcons", era: "modern", legendary: false, rarity: "elite", rushingYards: 1600, tds: 14 },
        { name: "Christian McCaffrey", ovr: 97, team: "49ers", era: "modern", legendary: false, rarity: "elite", rushingYards: 1500, tds: 15 },
        { name: "Jahmyr Gibbs", ovr: 97, team: "Lions", era: "modern", legendary: false, rarity: "elite", rushingYards: 1400, tds: 12 },
        { name: "Jonathan Taylor", ovr: 96, team: "Colts", era: "modern", legendary: false, rarity: "elite", rushingYards: 1300, tds: 11 },
        { name: "Kenneth Walker", ovr: 95, team: "Chiefs", era: "modern", legendary: false, rarity: "elite", rushingYards: 1250, tds: 11 },
        { name: "Derrick Henry", ovr: 94, team: "Ravens", era: "modern", legendary: false, rarity: "elite", rushingYards: 1800, tds: 18 },
        // Rare
        { name: "James Cook", ovr: 92, team: "Bills", era: "modern", legendary: false, rarity: "rare", rushingYards: 1100, tds: 9 },
        { name: "Saquon Barkley", ovr: 91, team: "Eagles", era: "modern", legendary: false, rarity: "rare", rushingYards: 1600, tds: 14 },
        { name: "Kyren Williams", ovr: 90, team: "Rams", era: "modern", legendary: false, rarity: "rare", rushingYards: 1200, tds: 10 },
        { name: "Josh Jacobs", ovr: 89, team: "Packers", era: "modern", legendary: false, rarity: "rare", rushingYards: 1100, tds: 9 },
        { name: "De'Von Achane", ovr: 87, team: "Dolphins", era: "modern", legendary: false, rarity: "rare", rushingYards: 1000, tds: 8 },
        { name: "Rachaad White", ovr: 86, team: "Buccaneers", era: "modern", legendary: false, rarity: "rare", rushingYards: 950, tds: 7 },
        // Common
        { name: "Rasheen Green", ovr: 75, team: "Seahawks", era: "modern", legendary: false, rarity: "common", rushingYards: 700, tds: 5 },
        { name: "Zamir White", ovr: 74, team: "Raiders", era: "modern", legendary: false, rarity: "common", rushingYards: 650, tds: 4 },
        { name: "Jaleel McLaughlin", ovr: 73, team: "Broncos", era: "modern", legendary: false, rarity: "common", rushingYards: 600, tds: 4 },
        { name: "Tank Bigsby", ovr: 72, team: "Jaguars", era: "modern", legendary: false, rarity: "common", rushingYards: 550, tds: 3 },
        { name: "Israel Abanikanda", ovr: 71, team: "Jets", era: "modern", legendary: false, rarity: "common", rushingYards: 500, tds: 3 },
        { name: "Keaton Mitchell", ovr: 70, team: "Ravens", era: "modern", legendary: false, rarity: "common", rushingYards: 450, tds: 2 }
    ],
    wideReceivers: [
        // Legendary (very rare)
        { name: "Jerry Rice", ovr: 99, team: "49ers", era: "historic", legendary: true, rarity: "legendary", receivingYards: 2000, tds: 18 },
        { name: "Randy Moss", ovr: 98, team: "Vikings", era: "historic", legendary: true, rarity: "legendary", receivingYards: 1900, tds: 16 },
        { name: "Terrell Owens", ovr: 97, team: "49ers", era: "historic", legendary: true, rarity: "legendary", receivingYards: 1800, tds: 15 },
        // Elite (rare)
        { name: "Ja'Marr Chase", ovr: 99, team: "Bengals", era: "modern", legendary: false, rarity: "elite", receivingYards: 1800, tds: 14 },
        { name: "Jaxon Smith-Njigba", ovr: 99, team: "Seahawks", era: "modern", legendary: false, rarity: "elite", receivingYards: 1700, tds: 13 },
        { name: "Puka Nacua", ovr: 98, team: "Rams", era: "modern", legendary: false, rarity: "elite", receivingYards: 1650, tds: 12 },
        { name: "Justin Jefferson", ovr: 97, team: "Vikings", era: "modern", legendary: false, rarity: "elite", receivingYards: 1700, tds: 13 },
        { name: "Amon-Ra St. Brown", ovr: 96, team: "Lions", era: "modern", legendary: false, rarity: "elite", receivingYards: 1550, tds: 11 },
        { name: "CeeDee Lamb", ovr: 95, team: "Cowboys", era: "modern", legendary: false, rarity: "elite", receivingYards: 1600, tds: 11 },
        // Rare
        { name: "Drake London", ovr: 93, team: "Falcons", era: "modern", legendary: false, rarity: "rare", receivingYards: 1400, tds: 10 },
        { name: "DeVonta Smith", ovr: 92, team: "Eagles", era: "modern", legendary: false, rarity: "rare", receivingYards: 1350, tds: 9 },
        { name: "Davante Adams", ovr: 91, team: "Raiders", era: "modern", legendary: false, rarity: "rare", receivingYards: 1300, tds: 9 },
        { name: "Mike Evans", ovr: 91, team: "Buccaneers", era: "modern", legendary: false, rarity: "rare", receivingYards: 1250, tds: 8 },
        { name: "Nico Collins", ovr: 90, team: "Texans", era: "modern", legendary: false, rarity: "rare", receivingYards: 1200, tds: 8 },
        { name: "Tee Higgins", ovr: 88, team: "Bengals", era: "modern", legendary: false, rarity: "rare", receivingYards: 1100, tds: 7 },
        // Common
        { name: "Marvin Mims", ovr: 75, team: "Jets", era: "modern", legendary: false, rarity: "common", receivingYards: 600, tds: 4 },
        { name: "Rashid Shaheed", ovr: 74, team: "Saints", era: "modern", legendary: false, rarity: "common", receivingYards: 550, tds: 3 },
        { name: "Trey Palmer", ovr: 73, team: "Buccaneers", era: "modern", legendary: false, rarity: "common", receivingYards: 500, tds: 3 },
        { name: "Jalen Nailor", ovr: 72, team: "Vikings", era: "modern", legendary: false, rarity: "common", receivingYards: 450, tds: 2 },
        { name: "Quentin Johnston", ovr: 71, team: "Chargers", era: "modern", legendary: false, rarity: "common", receivingYards: 400, tds: 2 },
        { name: "Michael Wilson", ovr: 70, team: "Cardinals", era: "modern", legendary: false, rarity: "common", receivingYards: 350, tds: 2 }
    ],
    tightEnds: [
        // Legendary (very rare)
        { name: "Rob Gronkowski", ovr: 98, team: "Patriots", era: "historic", legendary: true, rarity: "legendary", receivingYards: 1300, tds: 12 },
        { name: "Tony Gonzalez", ovr: 97, team: "Chiefs", era: "historic", legendary: true, rarity: "legendary", receivingYards: 1200, tds: 11 },
        // Elite (rare)
        { name: "Trey McBride", ovr: 99, team: "Cardinals", era: "modern", legendary: false, rarity: "elite", receivingYards: 1200, tds: 10 },
        { name: "Travis Kelce", ovr: 93, team: "Chiefs", era: "modern", legendary: false, rarity: "elite", receivingYards: 1100, tds: 9 },
        { name: "George Kittle", ovr: 91, team: "49ers", era: "modern", legendary: false, rarity: "elite", receivingYards: 1000, tds: 8 },
        { name: "Mark Andrews", ovr: 89, team: "Ravens", era: "modern", legendary: false, rarity: "elite", receivingYards: 900, tds: 7 },
        { name: "Sam LaPorta", ovr: 88, team: "Lions", era: "modern", legendary: false, rarity: "elite", receivingYards: 850, tds: 7 },
        // Rare
        { name: "Dallas Goedert", ovr: 86, team: "Eagles", era: "modern", legendary: false, rarity: "rare", receivingYards: 750, tds: 6 },
        { name: "David Njoku", ovr: 85, team: "Browns", era: "modern", legendary: false, rarity: "rare", receivingYards: 700, tds: 5 },
        { name: "Kyle Pitts", ovr: 84, team: "Falcons", era: "modern", legendary: false, rarity: "rare", receivingYards: 650, tds: 5 },
        { name: "Evan Engram", ovr: 83, team: "Jaguars", era: "modern", legendary: false, rarity: "rare", receivingYards: 600, tds: 4 },
        { name: "Jake Ferguson", ovr: 82, team: "Cowboys", era: "modern", legendary: false, rarity: "rare", receivingYards: 550, tds: 4 },
        // Common
        { name: "Isaiah Likely", ovr: 75, team: "Ravens", era: "modern", legendary: false, rarity: "common", receivingYards: 400, tds: 3 },
        { name: "Cade Otton", ovr: 74, team: "Buccaneers", era: "modern", legendary: false, rarity: "common", receivingYards: 350, tds: 2 },
        { name: "Noah Gray", ovr: 73, team: "Chiefs", era: "modern", legendary: false, rarity: "common", receivingYards: 300, tds: 2 },
        { name: "Austin Hooper", ovr: 72, team: "Raiders", era: "modern", legendary: false, rarity: "common", receivingYards: 250, tds: 2 },
        { name: "MyCole Pruitt", ovr: 71, team: "Saints", era: "modern", legendary: false, rarity: "common", receivingYards: 200, tds: 1 },
        { name: "C.J. O'Grady", ovr: 70, team: "Cardinals", era: "modern", legendary: false, rarity: "common", receivingYards: 150, tds: 1 }
    ],
    kickers: [
        // Legendary (very rare)
        { name: "Justin Tucker", ovr: 95, team: "Ravens", era: "historic", legendary: true, rarity: "legendary", fgMade: 40 },
        { name: "Adam Vinatieri", ovr: 94, team: "Colts", era: "historic", legendary: true, rarity: "legendary", fgMade: 39 },
        // Elite (rare)
        { name: "Brandon Aubrey", ovr: 87, team: "Cowboys", era: "modern", legendary: false, rarity: "elite", fgMade: 38 },
        { name: "Chris Boswell", ovr: 86, team: "Steelers", era: "modern", legendary: false, rarity: "elite", fgMade: 36 },
        { name: "Jason Myers", ovr: 84, team: "Seahawks", era: "modern", legendary: false, rarity: "elite", fgMade: 35 },
        { name: "Nick Folk", ovr: 84, team: "Falcons", era: "modern", legendary: false, rarity: "elite", fgMade: 35 },
        { name: "Will Reichard", ovr: 83, team: "Vikings", era: "modern", legendary: false, rarity: "elite", fgMade: 34 },
        // Rare
        { name: "Cameron Dicker", ovr: 82, team: "Chargers", era: "modern", legendary: false, rarity: "rare", fgMade: 33 },
        { name: "Evan McPherson", ovr: 82, team: "Bengals", era: "modern", legendary: false, rarity: "rare", fgMade: 33 },
        { name: "Chase McLaughlin", ovr: 81, team: "Buccaneers", era: "modern", legendary: false, rarity: "rare", fgMade: 32 },
        { name: "Harrison Butker", ovr: 81, team: "Chiefs", era: "modern", legendary: false, rarity: "rare", fgMade: 32 },
        { name: "Ka'imi Fairbairn", ovr: 81, team: "Texans", era: "modern", legendary: false, rarity: "rare", fgMade: 32 },
        // Common
        { name: "Jake Moody", ovr: 75, team: "49ers", era: "modern", legendary: false, rarity: "common", fgMade: 28 },
        { name: "Anders Carlson", ovr: 74, team: "Packers", era: "modern", legendary: false, rarity: "common", fgMade: 27 },
        { name: "Chad Ryland", ovr: 73, team: "Cardinals", era: "modern", legendary: false, rarity: "common", fgMade: 26 },
        { name: "Riley Patterson", ovr: 72, team: "Lions", era: "modern", legendary: false, rarity: "common", fgMade: 25 },
        { name: "Blake Grupe", ovr: 71, team: "Saints", era: "modern", legendary: false, rarity: "common", fgMade: 24 },
        { name: "Kendall Thompson", ovr: 70, team: "Commanders", era: "modern", legendary: false, rarity: "common", fgMade: 23 }
    ]
};

const unitDatabase = {
    offensiveLines: [
        { name: "2020s Philadelphia Eagles OL", ovr: 95, description: "Elite run-blocking unit", rarity: "elite" },
        { name: "2020s San Francisco 49ers OL", ovr: 94, description: "Elite protection and run game", rarity: "elite" },
        { name: "2020s Detroit Lions OL", ovr: 93, description: "Dominant interior line", rarity: "elite" },
        { name: "2020s Dallas Cowboys OL", ovr: 92, description: "Strong pass protection", rarity: "rare" },
        { name: "2020s Kansas City Chiefs OL", ovr: 91, description: "Solid all-around unit", rarity: "rare" },
        { name: "2020s Cleveland Browns OL", ovr: 90, description: "Power running game", rarity: "rare" },
        { name: "2020s Buffalo Bills OL", ovr: 89, description: "Mobile QB protection", rarity: "common" },
        { name: "2020s Baltimore Ravens OL", ovr: 88, description: "Physical run blocking", rarity: "common" },
        { name: "2020s New York Giants OL", ovr: 75, description: "Developing unit", rarity: "common" },
        { name: "2020s Arizona Cardinals OL", ovr: 74, description: "Building foundation", rarity: "common" }
    ],
    defensiveUnits: [
        { name: "2020s San Francisco 49ers Defense", ovr: 95, description: "Elite pass rush and coverage", sacks: 55, rarity: "elite" },
        { name: "2020s Cleveland Browns Defense", ovr: 94, description: "Dominant front seven", sacks: 52, rarity: "elite" },
        { name: "2020s Dallas Cowboys Defense", ovr: 93, description: "High-pressure unit", sacks: 50, rarity: "elite" },
        { name: "2020s Buffalo Bills Defense", ovr: 92, description: "Playmaking secondary", sacks: 48, rarity: "rare" },
        { name: "2020s Miami Dolphins Defense", ovr: 91, description: "Explosive pass rush", sacks: 45, rarity: "rare" },
        { name: "2020s New York Jets Defense", ovr: 90, description: "Young and aggressive", sacks: 42, rarity: "rare" },
        { name: "2020s Pittsburgh Steelers Defense", ovr: 89, description: "Traditionally strong", sacks: 40, rarity: "common" },
        { name: "2020s Baltimore Ravens Defense", ovr: 88, description: "Athletic and fast", sacks: 38, rarity: "common" },
        { name: "2020s Tennessee Titans Defense", ovr: 75, description: "Rebuilding unit", sacks: 25, rarity: "common" },
        { name: "2020s Carolina Panthers Defense", ovr: 74, description: "Young defense", sacks: 24, rarity: "common" }
    ]
};

const coachDatabase = [
    { name: "Andy Reid", ovr: 97, description: "Offensive genius, 3x Super Bowl Champion", team: "Chiefs", rarity: "elite" },
    { name: "John Harbaugh", ovr: 94, description: "Super Bowl Champion", team: "Ravens", rarity: "elite" },
    { name: "Kyle Shanahan", ovr: 93, description: "Offensive innovator", team: "49ers", rarity: "elite" },
    { name: "Sean McVay", ovr: 92, description: "Modern offensive mind", team: "Rams", rarity: "elite" },
    { name: "Mike Tomlin", ovr: 91, description: "Consistent contender", team: "Steelers", rarity: "rare" },
    { name: "Dan Campbell", ovr: 90, description: "High energy leader", team: "Lions", rarity: "rare" },
    { name: "Jim Harbaugh", ovr: 89, description: "Championship pedigree", team: "Chargers", rarity: "rare" },
    { name: "DeMeco Ryans", ovr: 88, description: "Defensive mastermind", team: "Texans", rarity: "rare" },
    { name: "Antonio Pierce", ovr: 75, description: "First-time head coach", team: "Raiders", rarity: "common" },
    { name: "Jerod Mayo", ovr: 74, description: "Young leader", team: "Patriots", rarity: "common" }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let squad = {
    qb: null,
    rb: null,
    wr1: null,
    wr2: null,
    te: null,
    kicker: null,
    ol: null,
    defense: null,
    coach: null
};

let currentSelection = null;
let currentSelectionType = null;

// ============================================
// RARITY SYSTEM
// ============================================

function getRandomPlayers(playerPool, count = 5) {
    const rarityWeights = {
        legendary: 0.05,  // 5% chance
        elite: 0.15,      // 15% chance
        rare: 0.30,       // 30% chance
        common: 0.50      // 50% chance
    };

    const selected = [];
    const available = [...playerPool];

    for (let i = 0; i < count && available.length > 0; i++) {
        const rand = Math.random();
        let targetRarity;

        if (rand < rarityWeights.legendary) {
            targetRarity = 'legendary';
        } else if (rand < rarityWeights.legendary + rarityWeights.elite) {
            targetRarity = 'elite';
        } else if (rand < rarityWeights.legendary + rarityWeights.elite + rarityWeights.rare) {
            targetRarity = 'rare';
        } else {
            targetRarity = 'common';
        }

        // Find players with target rarity
        const matchingPlayers = available.filter(p => p.rarity === targetRarity);

        if (matchingPlayers.length > 0) {
            // Randomly select from matching players
            const randomIndex = Math.floor(Math.random() * matchingPlayers.length);
            const selectedPlayer = matchingPlayers[randomIndex];
            selected.push(selectedPlayer);

            // Remove from available pool
            const availableIndex = available.findIndex(p => p.name === selectedPlayer.name);
            if (availableIndex !== -1) {
                available.splice(availableIndex, 1);
            }
        } else {
            // If no players of target rarity, pick from any remaining
            const randomIndex = Math.floor(Math.random() * available.length);
            const selectedPlayer = available[randomIndex];
            selected.push(selectedPlayer);
            available.splice(randomIndex, 1);
        }
    }

    // Sort by OVR descending for better UI
    return selected.sort((a, b) => b.ovr - a.ovr);
}

// ============================================
// DOM ELEMENTS
// ============================================

const positionSlots = document.querySelectorAll('.position-slot');
const modal = document.getElementById('selection-modal');
const modalTitle = document.getElementById('modal-title');
const selectionList = document.getElementById('selection-list');
const modalClose = document.getElementById('modal-close');
const simulateBtn = document.getElementById('simulate-btn');
const resultsSection = document.getElementById('results-section');
const resetBtn = document.getElementById('reset-btn');
const slotCount = document.getElementById('slot-count');
const welcomeScreen = document.getElementById('welcome-screen');
const appContainer = document.getElementById('app-container');
const startBtn = document.getElementById('start-btn');

// ============================================
// WELCOME SCREEN
// ============================================

startBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    appContainer.style.display = 'block';
});

// ============================================
// SLOT SELECTION
// ============================================

positionSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        const position = slot.dataset.position;
        const type = slot.dataset.type;

        currentSelection = position;
        currentSelectionType = type;

        openModal(position, type);
    });
});

function openModal(position, type) {
    let title = '';
    let items = [];

    switch (type) {
        case 'player':
            switch (position) {
                case 'qb':
                    title = 'SELECT QUARTERBACK';
                    items = getRandomPlayers(playerDatabase.quarterbacks, 5);
                    break;
                case 'rb':
                    title = 'SELECT RUNNING BACK';
                    items = getRandomPlayers(playerDatabase.runningBacks, 5);
                    break;
                case 'wr1':
                case 'wr2':
                    title = 'SELECT WIDE RECEIVER';
                    items = getRandomPlayers(playerDatabase.wideReceivers, 5);
                    break;
                case 'te':
                    title = 'SELECT TIGHT END';
                    items = getRandomPlayers(playerDatabase.tightEnds, 5);
                    break;
                case 'kicker':
                    title = 'SELECT KICKER';
                    items = getRandomPlayers(playerDatabase.kickers, 5);
                    break;
            }
            break;
        case 'unit':
            switch (position) {
                case 'ol':
                    title = 'SELECT OFFENSIVE LINE UNIT';
                    items = getRandomPlayers(unitDatabase.offensiveLines, 5);
                    break;
                case 'defense':
                    title = 'SELECT DEFENSIVE UNIT';
                    items = getRandomPlayers(unitDatabase.defensiveUnits, 5);
                    break;
            }
            break;
        case 'coach':
            title = 'SELECT HEAD COACH';
            items = getRandomPlayers(coachDatabase, 5);
            break;
    }

    modalTitle.textContent = title;
    renderSelectionList(items, type);
    modal.classList.add('active');
}

function renderSelectionList(items, type) {
    selectionList.innerHTML = items.map(item => {
        let rarityTag = '';
        if (item.rarity === 'legendary') {
            rarityTag = '<span class="legendary-tag">★ LEGENDARY</span>';
        } else if (item.rarity === 'elite') {
            rarityTag = '<span class="elite-tag">● ELITE</span>';
        }

        let description = item.description || '';
        let teamInfo = item.team ? `${item.team} • ${item.era || 'modern'}` : '';

        return `
        <div class="selection-item" data-name="${item.name}" data-ovr="${item.ovr}">
            <div>
                <div class="selection-item-name">${item.name} ${rarityTag}</div>
                ${description ? `<div class="selection-item-desc">${description}</div>` : ''}
                ${teamInfo ? `<div class="selection-item-desc">${teamInfo}</div>` : ''}
            </div>
            <div class="selection-item-ovr">${item.ovr}</div>
        </div>
    `}).join('');

    // Add click handlers
    document.querySelectorAll('.selection-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.name;
            const ovr = parseInt(item.dataset.ovr);
            selectPlayer(name, ovr);
        });
    });
}

function selectPlayer(name, ovr) {
    // Find the full player data including stats
    let fullData = { name, ovr };

    if (currentSelectionType === 'player') {
        const allPlayers = [
            ...playerDatabase.quarterbacks,
            ...playerDatabase.runningBacks,
            ...playerDatabase.wideReceivers,
            ...playerDatabase.tightEnds
        ];
        const player = allPlayers.find(p => p.name === name);
        if (player) {
            fullData = { ...player };
        }
    } else if (currentSelectionType === 'unit') {
        const allUnits = [
            ...unitDatabase.offensiveLines,
            ...unitDatabase.defensiveUnits
        ];
        const unit = allUnits.find(u => u.name === name);
        if (unit) {
            fullData = { ...unit };
        }
    } else if (currentSelectionType === 'coach') {
        const coach = coachDatabase.find(c => c.name === name);
        if (coach) {
            fullData = { ...coach };
        }
    }

    squad[currentSelection] = fullData;
    updateSlotDisplay(currentSelection);
    closeModal();
    updateSlotCount();
    checkSimulateButton();
}

function updateSlotDisplay(position) {
    const slot = document.querySelector(`[data-position="${position}"]`);
    const player = squad[position];

    if (player) {
        slot.classList.add('filled');
        slot.querySelector('.slot-empty').style.display = 'none';
        slot.querySelector('.slot-content').style.display = 'block';
        slot.querySelector('.player-name').textContent = player.name;
        slot.querySelector('.player-ovr').textContent = player.ovr;

        // Remove any existing stats
        const existingStats = slot.querySelector('.player-stats');
        if (existingStats) {
            existingStats.remove();
        }
    } else {
        slot.classList.remove('filled');
        slot.querySelector('.slot-empty').style.display = 'block';
        slot.querySelector('.slot-content').style.display = 'none';
        const existingStats = slot.querySelector('.player-stats');
        if (existingStats) {
            existingStats.remove();
        }
    }
}

function closeModal() {
    modal.classList.remove('active');
    currentSelection = null;
    currentSelectionType = null;
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ============================================
// SLOT COUNT
// ============================================

function updateSlotCount() {
    const filled = Object.values(squad).filter(v => v !== null).length;
    const total = Object.keys(squad).length;
    slotCount.textContent = `${filled}/${total} SLOTS FILLED`;
}

function checkSimulateButton() {
    const filled = Object.values(squad).filter(v => v !== null).length;
    const total = Object.keys(squad).length;
    simulateBtn.disabled = filled !== total;
}

// ============================================
// SIMULATION ENGINE
// ============================================

simulateBtn.addEventListener('click', () => {
    const results = simulateSeason();
    displayResults(results);
});

function simulateSeason() {
    // Calculate team overall rating
    const playerRatings = [
        squad.qb.ovr,
        squad.rb.ovr,
        squad.wr1.ovr,
        squad.wr2.ovr,
        squad.te.ovr,
        squad.kicker.ovr,
        squad.ol.ovr,
        squad.defense.ovr
    ];

    const coachBonus = squad.coach.ovr * 0.1;
    const baseRating = playerRatings.reduce((a, b) => a + b, 0) / playerRatings.length;
    const teamOVR = Math.round(baseRating + coachBonus);

    // Simulate season record based on team OVR
    let wins, losses;

    if (teamOVR >= 97) {
        wins = Math.floor(Math.random() * 3) + 14; // 14-16 wins
    } else if (teamOVR >= 94) {
        wins = Math.floor(Math.random() * 4) + 11; // 11-14 wins
    } else if (teamOVR >= 90) {
        wins = Math.floor(Math.random() * 4) + 9; // 9-12 wins
    } else if (teamOVR >= 85) {
        wins = Math.floor(Math.random() * 4) + 7; // 7-10 wins
    } else {
        wins = Math.floor(Math.random() * 5) + 4; // 4-8 wins
    }

    losses = 17 - wins; // 17 game season

    // Determine playoff result
    let playoffResult = '';
    let championshipStatus = '';

    if (teamOVR >= 97) {
        const outcomes = ['Super Bowl Champions', 'Lost in Super Bowl', 'Lost in Conference Championship'];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        playoffResult = outcome;
        championshipStatus = outcome === 'Super Bowl Champions' ? 'WINNER' : 'RUNNER-UP';
    } else if (teamOVR >= 94) {
        const outcomes = ['Lost in Super Bowl', 'Lost in Conference Championship', 'Lost in Divisional Round'];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        playoffResult = outcome;
        championshipStatus = outcome === 'Lost in Super Bowl' ? 'RUNNER-UP' : 'ELIMINATED';
    } else if (teamOVR >= 90) {
        const outcomes = ['Lost in Divisional Round', 'Lost in Wild Card Round', 'Missed Playoffs'];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        playoffResult = outcome;
        championshipStatus = 'ELIMINATED';
    } else if (teamOVR >= 85) {
        const outcomes = ['Lost in Wild Card Round', 'Missed Playoffs'];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        playoffResult = outcome;
        championshipStatus = 'ELIMINATED';
    } else {
        playoffResult = 'Missed Playoffs';
        championshipStatus = 'ELIMINATED';
    }

    return {
        teamOVR,
        wins,
        losses,
        playoffResult,
        championshipStatus
    };
}

function displayResults(results) {
    document.getElementById('team-ovr').textContent = results.teamOVR;
    document.getElementById('season-record').innerHTML = `
        <span class="record-wins">${results.wins}</span>
        <span class="record-sep">-</span>
        <span class="record-losses">${results.losses}</span>
    `;
    document.getElementById('playoff-result').textContent = results.playoffResult;
    document.getElementById('championship-status').textContent = results.championshipStatus;

    // Add stats to the slots after simulation
    Object.keys(squad).forEach(position => {
        const player = squad[position];
        if (player) {
            const slot = document.querySelector(`[data-position="${position}"]`);
            let statsHtml = '';

            if (player.passingYards) {
                statsHtml = `<div class="player-stats">${player.passingYards} PASS YDS • ${player.tds} TD</div>`;
            } else if (player.receivingYards) {
                statsHtml = `<div class="player-stats">${player.receivingYards} REC YDS • ${player.tds} TD</div>`;
            } else if (player.rushingYards) {
                statsHtml = `<div class="player-stats">${player.rushingYards} RUSH YDS • ${player.tds} TD</div>`;
            } else if (player.fgMade) {
                statsHtml = `<div class="player-stats">${player.fgMade} FG MADE</div>`;
            } else if (player.sacks) {
                statsHtml = `<div class="player-stats">${player.sacks} TEAM SACKS</div>`;
            }

            if (statsHtml) {
                slot.querySelector('.slot-content').insertAdjacentHTML('beforeend', statsHtml);
            }
        }
    });

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// RESET
// ============================================

resetBtn.addEventListener('click', () => {
    squad = {
        qb: null,
        rb: null,
        wr1: null,
        wr2: null,
        te: null,
        kicker: null,
        ol: null,
        defense: null,
        coach: null
    };

    Object.keys(squad).forEach(position => {
        updateSlotDisplay(position);
    });

    updateSlotCount();
    checkSimulateButton();
    resultsSection.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// INITIALIZATION
// ============================================

updateSlotCount();
