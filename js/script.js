// Dark mode toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const images = document.querySelectorAll("img"); // Select all images to update

// Function to update images based on the theme
const updateImagesForTheme = (theme) => {
  images.forEach((img) => {
    const src = img.getAttribute("data-" + theme); // Get the source for the current theme
    if (src) {
      img.setAttribute("src", src); // Update the image source
    }
  });

  // Update favicon based on theme
  const faviconLight = document.getElementById("favicon-light");
  const faviconDark = document.getElementById("favicon-dark");
  if (theme === "dark") {
    faviconLight.setAttribute("disabled", "true");
    faviconDark.removeAttribute("disabled");
  } else {
    faviconLight.removeAttribute("disabled");
    faviconDark.setAttribute("disabled", "true");
  }

  // Update Discord button based on theme
  const discordIconLight = document.getElementById("discord-icon-light");
  const discordIconDark = document.getElementById("discord-icon-dark");
  if (theme === "dark") {
    discordIconLight.classList.remove("visible");
    discordIconDark.classList.add("visible");
  } else {
    discordIconLight.classList.add("visible");
    discordIconDark.classList.remove("visible");
  }
};

// Default to dark mode
htmlElement.setAttribute("data-theme", "dark");
updateImagesForTheme("dark"); // Set the images to dark mode

// Toggle between light and dark mode
themeToggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light"; // Toggle theme

  htmlElement.setAttribute("data-theme", newTheme);
  updateImagesForTheme(newTheme); // Update images for the new theme
});
