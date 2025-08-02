const defaultClubs = [
  {
    name: "Overcaffeinated Programmers United",
    meetings: [
      { day: "monday", start: "18:00", end: "20:00", duration: 2 }
    ]
  },
  {
    name: "Procrastination Research Society",
    meetings: [
      { day: "tuesday", start: "20:00", end: "21:30", duration: 1.5 }
    ]
  },
  {
    name: "Midnight Snack Enthusiasts",
    meetings: [
      { day: "thursday", start: "19:30", end: "21:00", duration: 1.5 }
    ]
  },
  {
    name: "Avoiding Eye Contact Club",
    meetings: [
      { day: "friday", start: "14:00", end: "15:30", duration: 1.5 }
    ]
  },
  {
    name: "Group Project Survivors Anonymous",
    meetings: [
      { day: "monday", start: "13:00", end: "14:30", duration: 1.5 },
      { day: "wednesday", start: "13:00", end: "14:30", duration: 1.5 }
    ]
  },
  {
    name: "WIFI Strugglers Support Group",
    meetings: [
      { day: "tuesday", start: "11:00", end: "12:30", duration: 1.5 }
    ]
  },
  {
    name: "Syllabus Skimmers Society",
    meetings: [
      { day: "friday", start: "12:00", end: "13:00", duration: 1 }
    ]
  },
  {
    name: "Nap Scheduling Committee",
    meetings: [
      { day: "thursday", start: "14:30", end: "16:00", duration: 1.5 }
    ]
  },
  {
    name: "The I Thought This Was Optional Club",
    meetings: [
      { day: "wednesday", start: "16:00", end: "17:30", duration: 1.5 }
    ]
  },
  {
    name: "Free Pizza Freeloaders",
    meetings: [
      { day: "friday", start: "17:00", end: "19:00", duration: 2 }
    ]
  },
  {
    name: "Microwave Queue Philosophers",
    meetings: [
      { day: "tuesday", start: "15:00", end: "16:30", duration: 1.5 }
    ]
  },
  {
    name: "Crying in the Library Club",
    meetings: [
      { day: "sunday", start: "18:00", end: "20:00", duration: 2 }
    ]
  },
  {
    name: "Too Many Tabs Open Society",
    meetings: [
      { day: "wednesday", start: "11:00", end: "12:30", duration: 1.5 }
    ]
  },
  {
    name: "The Existential Dread Circle",
    meetings: [
      { day: "monday", start: "17:00", end: "18:30", duration: 1.5 }
    ]
  },
  {
    name: "Burnt Popcorn Advocacy Group",
    meetings: [
      { day: "thursday", start: "13:00", end: "14:00", duration: 1 }
    ]
  },
  {
    name: "Dungeons & Debt",
    meetings: [
      { day: "saturday", start: "13:00", end: "15:00", duration: 2 }
    ]
  },
  {
    name: "No Sleep Just Vibes",
    meetings: [
      { day: "friday", start: "20:00", end: "21:30", duration: 1.5 }
    ]
  },
  {
    name: "Overcommitters Anonymous",
    meetings: [
      { day: "tuesday", start: "16:00", end: "17:00", duration: 1 },
      { day: "thursday", start: "16:00", end: "17:00", duration: 1 }
    ]
  },
  {
    name: "Coffee Before Commitments Club",
    meetings: [
      { day: "monday", start: "10:00", end: "11:00", duration: 1 }
    ]
  },
  {
    name: "Schedule Avoiders Union",
    meetings: [
      { day: "wednesday", start: "12:00", end: "13:30", duration: 1.5 }
    ]
  },
  {
    name: "Zoom Zombies",
    meetings: [
      { day: "tuesday", start: "18:30", end: "20:00", duration: 1.5 }
    ]
  },
  {
    name: "Career Crisis Collective",
    meetings: [
      { day: "saturday", start: "11:00", end: "12:30", duration: 1.5 }
    ]
  },
  {
    name: "Internship Desperation Society",
    meetings: [
      { day: "thursday", start: "17:00", end: "18:30", duration: 1.5 }
    ]
  },
  {
    name: "Improv Club (We Wing It)",
    meetings: [
      { day: "friday", start: "13:30", end: "15:00", duration: 1.5 }
    ]
  },
  {
    name: "Late Assignment Apologists",
    meetings: [
      { day: "monday", start: "14:00", end: "15:00", duration: 1 }
    ]
  },
  {
    name: "Cursed GroupMe Historians",
    meetings: [
      { day: "saturday", start: "16:00", end: "17:30", duration: 1.5 }
    ]
  },
  {
    name: "Can’t Code, Still Applied",
    meetings: [
      { day: "wednesday", start: "10:00", end: "11:30", duration: 1.5 }
    ]
  },
  {
    name: "The Meeting About the Meeting Club",
    meetings: [
      { day: "tuesday", start: "12:30", end: "14:00", duration: 1.5 }
    ]
  },
  {
    name: "LinkedIn Influencers Circle",
    meetings: [
      { day: "friday", start: "11:00", end: "12:00", duration: 1 }
    ]
  },
  {
    name: "Campus Pigeons Enthusiasts",
    meetings: [
      { day: "thursday", start: "15:30", end: "17:00", duration: 1.5 }
    ]
  },
  {
    name: "Clubs We Don’t Go To Anymore Club",
    meetings: [
      { day: "sunday", start: "13:00", end: "14:00", duration: 1 }
    ]
  },
  {
    name: "Too Broke for Textbooks Club",
    meetings: [
      { day: "tuesday", start: "14:00", end: "15:30", duration: 1.5 }
    ]
  },
  {
    name: "Tote Bag Collectors Collective",
    meetings: [
      { day: "monday", start: "15:30", end: "17:00", duration: 1.5 }
    ]
  },
  {
    name: "Quoting The Office Club",
    meetings: [
      { day: "wednesday", start: "18:00", end: "19:00", duration: 1 }
    ]
  },
  {
    name: "Student Loan Realists",
    meetings: [
      { day: "saturday", start: "12:00", end: "13:30", duration: 1.5 }
    ]
  },
  {
    name: "Library Whisperers",
    meetings: [
      { day: "sunday", start: "11:00", end: "12:30", duration: 1.5 }
    ]
  },
  {
    name: "The Planner Hoarders",
    meetings: [
      { day: "monday", start: "11:30", end: "13:00", duration: 1.5 }
    ]
  },
  {
    name: "Outfit Anxiety Association",
    meetings: [
      { day: "thursday", start: "12:00", end: "13:30", duration: 1.5 }
    ]
  },
  {
    name: "Professor Email Rereaders Club",
    meetings: [
      { day: "friday", start: "10:30", end: "12:00", duration: 1.5 }
    ]
  },
  {
    name: "Overthinking Typers Anonymous",
    meetings: [
      { day: "tuesday", start: "17:30", end: "19:00", duration: 1.5 }
    ]
  },
  {
    name: "Never Been to Office Hours Club",
    meetings: [
      { day: "wednesday", start: "13:00", end: "14:30", duration: 1.5 }
    ]
  },
  {
    name: "The 12 Tabs Open Gang",
    meetings: [
      { day: "sunday", start: "17:00", end: "18:30", duration: 1.5 }
    ]
  },
  {
    name: "The Definitely Not Just Here for Snacks Club",
    meetings: [
      { day: "thursday", start: "18:30", end: "20:00", duration: 1.5 }
    ]
  },
  {
    name: "Laundry Procrastinators Association",
    meetings: [
      { day: "saturday", start: "14:00", end: "15:30", duration: 1.5 }
    ]
  },
  {
    name: "Student Org Email Ignorers",
    meetings: [
      { day: "monday", start: "12:00", end: "13:00", duration: 1 }
    ]
  },
  {
    name: "Petting Dogs on Campus Club",
    meetings: [
      { day: "friday", start: "15:00", end: "16:30", duration: 1.5 }
    ]
  },
  {
    name: "Accidental Nappers Union",
    meetings: [
      { day: "tuesday", start: "13:30", end: "15:00", duration: 1.5 }
    ]
  },
  {
    name: "The I Changed My Major 3x Club",
    meetings: [
      { day: "wednesday", start: "15:00", end: "16:30", duration: 1.5 }
    ]
  }
];


const storedClubs = JSON.parse(localStorage.getItem("clubs"));
const clubs = storedClubs || defaultClubs;