# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](preview.jpg)

This is a simple and interactive **Age Calculator** built using **HTML, CSS, and JavaScript**.  
Users can input their date of birth and get their **exact age** in **years, months, and days** with animated output and real-time validation.

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help me improve my coding skills by building realistic projects.

## ✨ Features

- 🎂 Calculates age accurately from date of birth
- 🖍️ Validates:
  - Empty fields
  - Invalid day/month/year ranges
  - Future dates
  - Impossible dates (e.g., 31/04)
- ⚠️ Displays inline error messages per field
- 🎞️ Animates age count-up effect when result is displayed
- 📆 Fully client-side and responsive

## 🧠 How It Works

- Listens to form submit event
- Parses and validates the user input
- Calculates age using the `Date` object
- Uses `setInterval()` to animate each output number
- Shows styled error messages instantly as needed

## 🛠️ Technologies Used

- HTML5
- CSS3 (including transitions & layout)
- JavaScript (Vanilla, no frameworks)

##  📸 Demo

- [Live Site URL](https://age-calculator-app-one-sigma.vercel.app/)
