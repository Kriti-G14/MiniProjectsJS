#  JavaScript Mini Projects

### Building the fundamentals. One project at a time.

A growing collection of interactive web projects built using **HTML5, CSS3, and JavaScript** to strengthen my understanding of frontend development, DOM manipulation, event-driven programming, and core JavaScript concepts.

This repository documents my hands-on learning journey — from fundamental JavaScript concepts to building interactive, functional, and user-friendly web applications. New projects, features, and improvements will be added as I continue learning and exploring the JavaScript ecosystem.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure, forms, input fields, and content organization. |
| **CSS3** | Layouts, styling, visual design, and interactive presentation. |
| **JavaScript (ES6+)** | Application logic, DOM manipulation, events, validation, and dynamic updates. |
| **Git** | Version control and tracking changes throughout development. |
| **GitHub** | Source code hosting and project version history. |

---

##  Projects

### 01.  Color Scheme Switcher

**Category:** DOM Manipulation · Event Handling · Interactive UI

An interactive web application that allows users to change the page's background color by clicking on different color options.

**Key Features**
- Interactive color selection.
- Dynamically updates the background color of the page.
- Uses element IDs to associate color options with their corresponding colors.
- Provides immediate visual feedback without reloading the page.

**Core Concepts**
- `querySelectorAll()` and DOM selection.
- `forEach()` for iterating through elements.
- `addEventListener()` for handling click events.
- Accessing element properties through `id`.
- Dynamic CSS manipulation using `style.backgroundColor`.

**Technologies:** HTML5 · CSS3 · JavaScript

---

### 02.  BMI Calculator

**Category:** Form Handling · Input Validation · Conditional Logic

A web-based calculator that computes Body Mass Index (BMI) from a user's height and weight and displays the corresponding BMI category.

**Key Features**
- Accepts height in centimeters and weight in kilograms.
- Calculates BMI and displays the result to two decimal places.
- Classifies results into underweight, normal weight, overweight, and obesity categories.
- Validates inputs to prevent invalid or non-positive measurements.
- Displays results dynamically without refreshing the page.

**Core Concepts**
- Form submission and `preventDefault()`.
- DOM selection and input value retrieval.
- Numeric conversion using `parseFloat()`.
- Input validation using `isNaN()` and conditional statements.
- Mathematical calculations and `toFixed()`.
- Dynamic output using `innerHTML` and template literals.
- Nested conditional expressions for BMI classification.

**Technologies:** HTML5 · CSS3 · JavaScript

---

### 03.  Digital Clock

**Category:** Date and Time · Timers · Real-Time UI Updates

A live digital clock that displays the user's local time and updates automatically every second.

**Key Features**
- Displays the current local time.
- Updates every second without requiring a manual refresh.
- Formats time using the browser's locale-aware time formatting.
- Presents the time through a simple, styled interface.

**Core Concepts**
- JavaScript `Date` object.
- `setInterval()` for repeated execution.
- `toLocaleTimeString()` for time formatting.
- DOM selection using `getElementById()`.
- Dynamic content updates through `innerHTML`.

**Technologies:** HTML5 · CSS3 · JavaScript

---

### 04.  Number Guessing Game

**Category:** Game Logic · Randomization · State Management

An interactive number guessing game in which the player attempts to identify a randomly generated number between 1 and 100 within ten attempts.

**Key Features**
- Generates a random target number.
- Accepts and validates user guesses.
- Provides feedback when a guess is too high or too low.
- Tracks previous guesses and remaining attempts.
- Detects successful guesses and game-over conditions.
- Disables input when the game ends.
- Allows the player to start a new game.

**Core Concepts**
- Random number generation using `Math.random()` and `Math.floor()`.
- Functions for validation, checking guesses, displaying feedback, and restarting the game.
- Arrays for storing previous guesses.
- Conditional logic and comparison operators.
- Event handling and `preventDefault()`.
- DOM manipulation and dynamic element creation.
- Updating element attributes and CSS styles.
- Managing game state using variables and Boolean flags.

**Technologies:** HTML5 · CSS3 · JavaScript

---

##  Skills & Concepts Practiced

These projects provide hands-on practice with the following frontend development fundamentals:

| Area | Concepts |
|---|---|
| **JavaScript Fundamentals** | Variables, functions, operators, arrays, conditionals, and loops. |
| **DOM Manipulation** | `querySelector()`, `querySelectorAll()`, `getElementById()`, and dynamic content updates. |
| **Event-Driven Programming** | Click events, form submission, event listeners, and `preventDefault()`. |
| **Input Handling** | Reading values, converting data types, and validating user input. |
| **Control Flow** | Conditional statements, nested conditions, and game-state transitions. |
| **Browser APIs** | `Date`, `setInterval()`, and dynamic CSS styling. |
| **UI Development** | HTML structure, CSS styling, and interactive browser experiences. |
| **Version Control** | Git commits, repository management, and tracking development progress. |

---

##  Getting Started

Follow these steps to run the projects on your local machine.

### Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the repository**

```bash
cd <repository-folder>
```

**3. Open the project in VS Code**

```bash
code .
```

**4. Run a project**

Open the desired project's HTML file and launch it using Live Server, or open the HTML file directly in your browser.

> Replace the placeholder repository URL and folder name with your actual details.

---

##  Repository Structure

The repository is organized into separate project folders to keep the code modular and easy to navigate.

```text
JavaScript-Mini-Projects/
│
├── Project1-color Changer/
│   ├── index.html
│   ├── style.css
│   └── project1.js
│
├── Project2-BMI Generator/
│   ├── index.html
│   ├── style.css
│   └── project2.js
│
├── Project3-Digital Clock/
│   ├── index.html
│   └── project3.js
│
├── Project4-Number Guess/
│   ├── index.html
│   ├── style.css
│   └── project4.js
│
├── styles.css
└── README.md
```

*Note: The directory names above are illustrative. Update them to match your actual repository structure.*

---

##  Development Roadmap

This repository is an ongoing project. The goal is to progressively build more complex applications while strengthening core programming skills.

- [x] Color Scheme Switcher
- [x] BMI Calculator
- [x] Digital Clock
- [x] Number Guessing Game
- [ ] Improve validation and edge-case handling.
- [ ] Add more DOM manipulation projects.
- [ ] Build applications using browser storage.
- [ ] Explore asynchronous JavaScript, Promises, and `async/await`.
- [ ] Integrate external APIs using `fetch()`.
- [ ] Build more responsive and feature-rich web applications.

*The roadmap will evolve as new concepts are explored and new projects are added.*

---

## Objective

To develop a strong foundation in JavaScript through consistent hands-on practice, problem-solving, and iterative project development.

Rather than learning concepts in isolation, this repository focuses on applying them to practical use cases and gradually progressing towards more advanced frontend development.

---

##  Repository Status

**Status:** Actively maintained

This repository is a work in progress. More projects and improvements will be added as my JavaScript skills grow.

If you find this repository useful, feel free to explore the code, share suggestions, or use it as inspiration for your own learning journey.

---

*Built with curiosity, consistency, and a commitment to continuous learning.* 
