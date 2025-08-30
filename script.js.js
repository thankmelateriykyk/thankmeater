// Show loader until page loads
document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none"; // Hide loader
  document.body.classList.remove("loading"); // Show content
});
