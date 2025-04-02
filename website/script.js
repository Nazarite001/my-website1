document.addEventListener("DOMContentLoaded", function () {
    // Background Image Slider
    const images = ["home 3.jpg", "home.png", "home 3.jpg"];
    let index = 0;
    const heroSection = document.querySelector(".hero");

    function changeImage() {
        heroSection.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 5000);

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const targetHref = this.getAttribute("href");

            // If the link is an external page (e.g., admission.html), navigate normally
            if (targetHref.includes(".html")) {
                return; // Allow default browser behavior (navigate to admission.html)
            }

            // Otherwise, perform smooth scrolling
            event.preventDefault();
            const targetId = targetHref.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Vision & Mission Modal
    const modal = document.getElementById("visionMissionModal");
    const closeBtn = document.querySelector(".close-btn");

    if (modal) {
        modal.style.display = "block"; // Show modal

        // Close modal when user clicks the close button
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });
        }

        // Close modal when user clicks outside of it
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Admission Form Validation & Submission
    const admissionForm = document.getElementById("admissionForm");

    if (admissionForm) {
        admissionForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            const studentName = document.getElementById("studentName").value.trim();
            const parentEmail = document.getElementById("parentEmail").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const gradeLevel = document.getElementById("gradeLevel").value.trim();

            if (studentName === "" || parentEmail === "" || phoneNumber === "" || gradeLevel === "") {
                alert("Please fill out all required fields.");
                return;
            }

            // Simulating form submission success
            alert("Application submitted successfully! We will contact you soon.");
            admissionForm.reset(); // Reset the form after submission
        });
    }
});
