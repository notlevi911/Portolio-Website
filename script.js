document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function highlightNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust offset for navbar height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active"); // Remove active class from all links
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active"); // Add active class to the current section link
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});

function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}
var animation = lottie.loadAnimation({
    container: document.getElementById('developer-animation'),
    renderer: 'svg',
    
    autoplay: true,
    path: 'https://assets8.lottiefiles.com/packages/lf20_2omr5gpu.json' // Replace with your JSON file path
});
