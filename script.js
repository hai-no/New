const dropdownMenus = document.querySelectorAll(".navigasi");

dropdownMenus.forEach((dropdownMenu) => {
  const navSelect = dropdownMenu.querySelector(".nav-select"),
    dropdownSection = dropdownMenu.querySelectorAll(".dropdown"),
    nav_text = dropdownMenu.querySelector(".nav-text");

  navSelect.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
  });

  dropdownSection.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      let selectedDropdown = dropdown.querySelector(".drop-text").innerText;
      nav_text.innerText = selectedDropdown;
      dropdownMenu.classList.remove("active");
    });
  });
});
