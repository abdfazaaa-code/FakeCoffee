document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");

  if (!greeting) return;

  const hour = new Date().getHours();
  let text = "";

  if (hour >= 5 && hour <= 11) {
    text = "Good Morning";
  } else if (hour >= 12 && hour <= 14) {
    text = "Good Afternoon";
  } else if (hour >= 15 && hour <= 17) {
    text = "Good Evening";
  } else {
    text = "Good Night";
  }

  greeting.textContent = text;
});
