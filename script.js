// Get the current time in UTC
const currentTimeUTC = new Date();
const formattedTime = currentTimeUTC.toLocaleString("en-US", { timeZone: "UTC" });
document.getElementById("currentTimeUTC").textContent = formattedTime;

// Get the current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
document.getElementById("currentDay").textContent = daysOfWeek[currentDay];