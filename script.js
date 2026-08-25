const theme = document.getElementById("theme");


// =========================================================
// APPLY INITIAL THEME
// =========================================================

if (theme.value === "Dark") {
  document.body.classList.add("dark-mode");
}


// =========================================================
// CHANGE THEME
// =========================================================

theme.addEventListener("change", function () {
  if (theme.value === "Dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});