const courses = document.getElementById("courses");
const forum = document.getElementById("forum");
const dropdowncontainer1 = document.getElementById("dropdowncontainer1");
const dropdowncontainer2 = document.getElementById("dropdowncontainer2");

courses.addEventListener("click", () => {
  if (dropdowncontainer1.className === "dropdown-container d-none") {
    dropdowncontainer1.className = "dropdown-container d-flex flex-column";
  } else {
    dropdowncontainer1.className = "dropdown-container d-none";
  }
});

forum.addEventListener("click", () => {
  if (dropdowncontainer2.className === "dropdown-container d-none") {
    dropdowncontainer2.className = "dropdown-container d-flex flex-column";
  } else {
    dropdowncontainer2.className = "dropdown-container d-none";
  }
});
