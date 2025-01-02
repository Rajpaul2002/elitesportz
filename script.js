// document.addEventListener("DOMContentLoaded", () => {
//     // Select all navigation links
//     const navLinks = document.querySelectorAll(".nav-link");
  
//     // Select all content sections
//     const contents = document.querySelectorAll(".content");
  
//     // Add click event listener to each link
//     navLinks.forEach(link => {
//       link.addEventListener("click", event => {
//         event.preventDefault(); // Prevent default link behavior
  
//         // Get the target section ID from data-bs-target attribute
//         const targetId = link.getAttribute("data-bs-target");
  
//         // Hide all sections
//         contents.forEach(content => content.classList.remove("active"));
  
//         // Show the target section
//         document.getElementById(targetId).classList.add("active");
//       });
//     });
//   });
//   document.querySelectorAll(".nav-link").forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault(); // Stops the default navigation
//       // Other logic here
//     });
//   });

document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Select all content sections
    const contents = document.querySelectorAll(".content");
  
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        const target = link.getAttribute("href");
  
        // If the link is an external link (e.g., "./registration.html"), let it navigate normally
        if (target.includes(".html")) {
          return; // Skip JavaScript handling for external links
        }
  
        event.preventDefault(); // Prevent default link behavior for internal navigation
  
        // Hide all sections
        contents.forEach(content => content.classList.remove("active"));
  
        // Get the target section ID from data-bs-target attribute
        const sectionId = link.getAttribute("data-bs-target");
  
        // Show the target section if it exists
        if (sectionId) {
          document.getElementById(sectionId).classList.add("active");
        }
      });
    });
  });
  
  