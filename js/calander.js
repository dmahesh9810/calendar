class Calendar {
  getCalanderYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return currentYear;
  }
  getCalanderMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();

    return currentMonth;
  }
  getCalanderDayName() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayName = daysOfWeek[currentDay];

    return { dayName: dayName, dayNumber: currentDay };
  }

  setHeaderYear(Year) {
    const topYear = document.getElementById("top-year");
    const topDay = document.getElementById("top-day");
    topDay.innerHTML = 1;

    var oldYear = parseInt(topYear.textContent) - 1;
    topYear.innerHTML = oldYear;

    return oldYear;
  }
  setHeaderYear2() {
    const topYear = document.getElementById("top-year");
    const topDay = document.getElementById("top-day");
    topDay.innerHTML = 1;

    var oldYear = parseInt(topYear.textContent) + 1;
    topYear.innerHTML = oldYear;

    return oldYear;
  }
  setHeaderMonth() {
    const topMonth = document.getElementById("top-month");
    const topDay = document.getElementById("top-day");
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var monthIndex = months.indexOf(topMonth.textContent);
    var oldMonth = monthIndex - 1;
    if (oldMonth >= 0) {
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;

      return months[oldMonth];
    } else {
      oldMonth = 11;
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;
      return months[oldMonth];
    }
  }
  setHeaderMonth2() {
    const topMonth = document.getElementById("top-month");
    const topDay = document.getElementById("top-day");
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var monthIndex = months.indexOf(topMonth.textContent);
    var oldMonth = monthIndex + 1;
    if (oldMonth > 11) {
      var oldMonth = 0;
    }
    if (oldMonth >= 0) {
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;

      return months[oldMonth];
    } else {
      oldMonth = 11;
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;
      return months[oldMonth];
    }
  }
}

const button = document.getElementById("left-btn");
button.addEventListener("click", function () {
  const calendar = new Calendar();
  let month = calendar.setHeaderMonth(calendar.getCalanderMonth());
  var pickYear = calendar.getCalanderYear();
  calendar.getCalanderDayName();

  if (month == "December") {
    pickYear = calendar.setHeaderYear(pickYear);
  }
});
const button2 = document.getElementById("right-btn");
button2.addEventListener("click", function () {
  const calendar = new Calendar();
  let month = calendar.setHeaderMonth2(calendar.getCalanderMonth());
  var pickYear = calendar.getCalanderYear();
  calendar.getCalanderDayName();

  if (month == "January") {
    pickYear = calendar.setHeaderYear2(pickYear);
  }
});

class Calendard {
  constructor(
    daysElementId,
    monthYearElementId,
    prevMonthButtonId,
    nextMonthButtonId
  ) {
    this.daysElement = document.getElementById(daysElementId);
    this.monthYearElement = document.getElementById(monthYearElementId);
    this.prevMonthButton = document.getElementById(prevMonthButtonId);
    this.nextMonthButton = document.getElementById(nextMonthButtonId);
    this.currentDate = new Date();

    this.prevMonthButton.addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.renderCalendar();
    });

    this.nextMonthButton.addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.renderCalendar();
    });
  }

  renderCalendar() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    ).getDay();

    this.monthYearElement.textContent =
      monthNames[this.currentDate.getMonth()] +
      " " +
      this.currentDate.getFullYear();

    let html = "";
    for (let i = 0; i < firstDayOfMonth; i++) {
      html += '<div class="day "></div>';
    }
    for (let i = 1; i <= daysInMonth; i++) {
      let month = this.currentDate.getMonth();
      let year = this.currentDate.getFullYear();
      let day = 15;

      let className = "";
      if (i === day && month == 2 - 1 && year === 2023) {
        console.log(month);
        className = "day poya";
      } else {
        className = "day";
      }
      const dayOfWeek = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        i
      ).getDay();
      if (dayOfWeek === 0) className += " red";
      else if (dayOfWeek === 6) className += " blue";
      if (i === 1) className += " green";
      html += '<div class="' + className + '">' + i + "</div>";
    }
    this.daysElement.innerHTML = html;
  }
}

const calendar = new Calendard("days", "monthYear", "left-btn", "right-btn");
calendar.renderCalendar();

// Get all div elements with class "dd"
const Day = document.querySelectorAll(".day");

// Add click event listener to each div
Day.forEach((div) => {
  div.addEventListener("click", function () {
    // Get the value of the clicked div
    const value = this.textContent.trim();

    // Save the value to local storage
    localStorage.setItem("day", value);

    console.log("Value saved to local storage: " + value);
  });
});
