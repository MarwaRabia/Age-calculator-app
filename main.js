// const btn = document.getElementById("enter");

function calculateAge(birthDate) {
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

function animateCountUp(element, endValue, duration = 3000) {
  let start = 0;
  const increment = Math.max(1, Math.ceil(endValue / (duration / 30))); // ~30fps
  const timer = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(timer);
    }
    element.textContent = start;
  }, 60);
}

function isValidDate(day, month, year) {
  const testDate = new Date(year, month - 1, day);
  return (
    testDate.getFullYear() === year &&
    testDate.getMonth() === month - 1 &&
    testDate.getDate() === day
  );
}

function showError(input, message) {
  input.nextElementSibling.textContent = message; // <p class="text-error">...</p>
  input.nextElementSibling.style.display = "block";
  input.previousElementSibling.style.color = "red"; // <p class="title">
  input.style.borderColor = "red";
}

function clearErrors() {
  document.querySelectorAll(".text-error").forEach((el) => {
    el.style.display = "none";
    el.textContent = "";
  });

  document.querySelectorAll("input").forEach((input) => {
    input.style.borderColor = "";
    if (input.previousElementSibling) {
      input.previousElementSibling.style.color = "";
    }
  });
}

document
  .getElementById("birthday-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let hasError = false;

    const dday = document.getElementById("dd");
    const mmonth = document.getElementById("mm");
    const yyear = document.getElementById("yy");

    const day = parseInt(dday.value);
    const month = parseInt(mmonth.value) - 1;
    const year = parseInt(yyear.value);

  
    const birthDate = new Date(year, month, day);

    // Hide all errors first
    clearErrors();

    if (!day) {
      showError(dday, "This field is required");
      hasError = true;
    } else if (day < 1 || day > 31) {
      showError(dday, "Must be a valid day");
      hasError = true;
    }
    console.log(month);
    if (!(month + 1)) {
      showError(mmonth, "This field is required");
      hasError = true;
    } else if (month + 1 < 1 || month + 1 > 12) {
      showError(mmonth, "Must be a valid month");
      hasError = true;
    }

    if (!year) {
      showError(yyear, "This field is required");
      hasError = true;
    } else if (year < 1 || year > new Date().getFullYear()) {
      showError(yyear, "Must be a valid year");
      hasError = true;
    }
    if (hasError) return;
    else {
      const { years, months, days } = calculateAge(birthDate);
      animateCountUp(document.querySelector(".output-years span"), years);
      animateCountUp(document.querySelector(".output-months span"), months);
      animateCountUp(document.querySelector(".output-days span"), days);
    }
  });
