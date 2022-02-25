const forum = document.getElementById("forum");
const dropdowncontainer2 = document.getElementById("dropdowncontainer2");

forum.addEventListener("click", () => {
  if (dropdowncontainer2.className === "dropdown-container d-none") {
    dropdowncontainer2.className = "dropdown-container d-flex flex-column";
  } else {
    dropdowncontainer2.className = "dropdown-container d-none";
  }
});
