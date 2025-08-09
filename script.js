const button = document.getElementById("uselessButton");

const funnyMessages = [
  "You were told NOT to press it!",
  "Now look what you've done!",
  "Nothing happened. Happy?",
  "You broke the internet... Just kidding.",
  "Why are you still pressing this?",
  "Error 404: Usefulness not found."
];

const randomColors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251"];

button.addEventListener("click", () => {
  // Change background to a random color
  document.body.style.backgroundColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  // Show random message
  alert(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);

  // Spin the button
  button.classList.add("spin");
  setTimeout(() => {
    button.classList.remove("spin");
  }, 1000);

  // Move button to a random position on screen
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});
