const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
const image5 = document.getElementById("img5");
const image6 = document.getElementById("img6");
const image7 = document.getElementById("img7");
const image8 = document.getElementById("img8");
// Dark or Light Images
function imageMode(color) {
  image1.src = `undraw_organizing_projects_${color}.svg`;
  image2.src = `undraw_design_feedback_${color}.svg`;
  image3.src = `undraw_work_time_${color}.svg`;
  image4.src = `undraw_code_typing_${color}.svg`;
  image5.src = `undraw_responsive_${color}.svg`;
  image6.src = `undraw_complete_design_${color}.svg`;
  image7.src = `undraw_static_assets_${color}.svg`;
  image8.src = `undraw_react_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
