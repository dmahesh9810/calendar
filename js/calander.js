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

  setHeaderYear() {
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
  setHeaderMonth(getMonth) {
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
      console.log(months[oldMonth]);
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;

      return months[oldMonth];
    } else {
      oldMonth = 11;
      console.log(months[oldMonth]);

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
      oldMonth = 0; 
    }
    if (oldMonth >= 0) {
      topMonth.innerHTML = months[oldMonth];
      topDay.innerHTML = 1;
      return months[oldMonth];
    } else {
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
      let poyaDays = 0;
      var cheakPoya = {};

      if (year === 2000) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [21, 19, 20, 18, 18, 17, 16, 15, 14, 13, 12, 11],
        };
      }
      if (year === 2001) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [10, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
        };
      }
      if (year === 2002) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [29, 27, 29, 27, 26, 25, 24, 23, 21, 21, 20, 20],
        };
      }
      if (year === 2003) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [18, 17, 18, 17, 16, 14, 14, 12, 10, 10, 9, 9],
        };
      }
      if (year === 2004) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [7, 6, 7, 5, 5, 3, 2, 1, 28, 28, 27, 26],
        };
      }
      if (year === 2005) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [24, 23, 25, 23, 23, 21, 21, 19, 17, 17, 15, 15],
        };
      }
      if (year === 2006) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [13, 12, 14, 13, 12, 11, 10, 9, 7, 6, 5, 4],
        };
      }
      if (year === 2007) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [18, 17, 18, 16, 16, 14, 14, 12, 11, 10, 9, 9],
        };
      }
      if (year === 2008) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [22, 20, 21, 19, 19, 18, 17, 16, 14, 14, 12, 12],
        };
      }
      if (year === 2009) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [10, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 31],
        };
      }

      if (year === 2010) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [30, 28, 30, 28, 28, 26, 26, 24, 23, 23, 21, 21],
        };
      }
      if (year === 2011) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [20, 18, 19, 18, 17, 16, 15, 14, 12, 12, 11, 10],
        };
      }
      if (year === 2012) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [9, 8, 8, 7, 6, 4, 4, 2, 30, 30, 28, 28],
        };
      }
      if (year === 2013) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [27, 26, 27, 26, 25, 23, 22, 21, 19, 19, 17, 17],
        };
      }
      if (year === 2014) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [16, 15, 16, 15, 15, 13, 12, 10, 9, 8, 7, 6],
        };
      }
      if (year === 2015) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [5, 4, 5, 4, 4, 2, 2, 30, 28, 27, 26, 25],
        };
      }
      if (year === 2016) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [24, 22, 23, 22, 22, 20, 20, 18, 17, 16, 14, 14],
        };
      }
      if (year === 2017) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [12, 11, 12, 11, 11, 9, 9, 7, 6, 6, 4, 3],
        };
      }
      if (year === 2018) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [31, , 2, 30, 29, 28, 28, 26, 25, 24, 23, 22],
        };
      }
      if (year === 2019) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [21, 19, 21, 19, 19, 17, 17, 15, 14, 14, 12, 12],
        };
      }
      if (year === 2020) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [11, 9, 9, 8, 7, 6, 5, 3, 2, 31, 30, 30],
        };
      }
      if (year === 2021) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [28, 26, 28, 26, 26, 24, 23, 22, 20, 20, 18, 18],
        };
      }

      if (year === 2022) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],
          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [17, 16, 17, 16, 15, 14, 13, 11, 10, 9, 7, 7],
        };
      }
      if (year === 2023) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],

          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [6, 5, 6, 5, 5, 3, 3, 30, 29, 28, 26, 26],
        };
      }

      if (year === 2024) {
        cheakPoya = {
          year: [
            2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
            2022, 2023, 2024, 2025,
          ],

          month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          day: [25, 23, 24, 23, 23, 21, 20, 19, 17, 17, 15, 14],
        };
      }
      if (month === 0) {
        for (let i = 0; i < 25; i++) {
          if (year === cheakPoya.year[i]) {
            for (let y = 0; y < 13; y++) {
              poyaDays = cheakPoya.day[0];
            }
          }
        }
      } else {
        for (let i = 0; i < 25; i++) {
          if (year === cheakPoya.year[i]) {
            for (let y = 0; y < 13; y++) {
              if (month === cheakPoya.month[y]) {
                poyaDays = cheakPoya.day[month];
              }
            }
          }
        }
      }

      let day = poyaDays;

      let className = "";
      if (i === day) {
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
      if (i === 1) className += " ";
      html += '<div class="' + className + '">' + i + "</div>";
    }
    this.daysElement.innerHTML = html;
  }
}

const calendar = new Calendard("days", "monthYear", "left-btn", "right-btn");
calendar.renderCalendar();

// Get all div elements with class "dd"
const Day = document.querySelectorAll(".day");


