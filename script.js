const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
// const jamElement = document.getElementById("jam");
const liveTime = document.getElementById("live-time");

// // Toggle sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// // update jam
function updateLiveTime() {
  const jakartaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  liveTime.textContent = `Jakarta: ${jakartaTime}`;
}

// // Refresh time every second
setInterval(updateLiveTime, 1000);

updateLiveTime();

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
