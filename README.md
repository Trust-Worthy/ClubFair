# ClubFair

**ClubFair** is a web app that helps college students organize their weekly schedules and discover campus clubs that fit into their availability — removing the guesswork from getting involved.

---

## 🎯 Purpose

Between packed class schedules, part-time jobs, and extracurriculars, college students often struggle to figure out when they're actually free.

**ClubFair** solves this by letting students:

* Input and visualize their weekly schedule
* Filter campus clubs by their real availability
* Commit to clubs they want to join
* RSVP to events with a simple form

---

## 👥 Who Is It For?

* 🆕 **New students** who want to explore campus involvement
* 🎓 **Busy upperclassmen** juggling academics, jobs, and interests
* 👥 **Club leaders** who want to plan around members’ schedules

---

## ✅ Features Implemented

* 📅 **Interactive Weekly Schedule**

  * Click and drag to select time slots
  * Add custom class blocks with a name, start, and end time

* 🎯 **Smart Club Matching**

  * See a list of clubs with meeting times
  * Filter out clubs that conflict with your class schedule
  * Commit to clubs you're interested in

* 📝 **RSVP Form with Validation**

  * First name, year in school, and confirmation required
  * Invalid submissions are highlighted
  * Valid RSVPs show up in a list

* 🎉 **Animated Modal**

  * After RSVP submission, a thank-you modal pops up with animated visuals
  * Automatically disappears after a short delay

* 💡 **Responsive Club Card Layout**

  * Scrollable, card-styled display with meeting info and selection checkboxes

* 🔗 **Helpful Footer**

  * Includes curated links about time management and student involvement

---

## 🛠 Tech Stack

* **HTML5** — semantic layout
* **CSS3** — Flexbox, animations, and card-style layouts
* **JavaScript** — DOM manipulation, filtering logic, event handling
* **Google Fonts** — Roboto, Sriracha
* **No frameworks** — built from scratch for learning purposes

---

## 📁 Project Structure

```plaintext
clubfair/
├── index.html            # Main HTML file
├── calendar.js           # Dynamic calendar code and schedule management
├── clubs.js              # Fake club data for the project
├── main.js               # Core application logic (event handlers, filtering, RSVP, UI updates)
├── signup.js             # Signup form related logic (if applicable)
├── css/
│   ├── animations.css    # Animation styles
│   ├── base.css          # Base styles and resets
│   ├── calendar.css      # Calendar-specific styles
│   ├── components.css    # UI components styles
│   ├── layout.css        # Layout and grid styles
│   ├── sections.css      # Section-specific styles
│   └── style.css         # General styles
├── images/               # Project images (calendars, backgrounds, etc.)
│   ├── cal1.jpeg
│   ├── cal2.jpeg
│   ├── cal3.jpeg
│   ├── cal4.jpeg
│   ├── coffee-cal.jpeg
│   └── wall_calendar.jpeg
├── README.md             # This documentation file
└── test_cal.html         # Testing page for calendar features
```

---

## 🚀 Getting Started

### Prerequisites

* Modern web browser (Chrome, Firefox, Edge, Safari recommended)
* Code editor (VS Code, Sublime Text, etc.)

### Installation & Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/clubfair.git
   ```

2. Navigate into the project directory:

   ```bash
   cd clubfair
   ```

3. Open `index.html` directly in your browser by double-clicking, or serve it with a local HTTP server for full functionality:

   ```bash
   # Using Python 3
   python -m http.server
   ```

4. Visit [http://localhost:8000](http://localhost:8000) in your browser.

### Usage

* Input your availability using the interactive weekly schedule.
* Browse the list of campus clubs and filter out those conflicting with your schedule.
* Commit to clubs and RSVP to events through simple forms.

---

## 💬 Contributions & Feedback

This project is a front-end learning prototype. Feedback and contributions from students, club leaders, and developers are welcome!

To contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request explaining your changes

Please follow the existing code style and write clear commit messages.

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 📝 Notes

* Static front-end prototype — no backend or login functionality yet
* Data is stored temporarily in memory for the session (no persistence)
