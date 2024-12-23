document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },
        { threshold: 0.5 } 
    );

    sections.forEach((section) => observer.observe(section));
});
