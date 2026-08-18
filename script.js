document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    /*
    =========================================================
    SMOOTH SCROLL
    =========================================================
    */

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /*
    =========================================================
    ACTIVE NAVIGATION
    =========================================================

    Changes the active sidebar item depending on the
    section currently visible on the screen.
    */

    const observerOptions = {
        root: null,

        /*
        This creates a smaller detection area in the middle
        of the screen.
        */

        rootMargin: "-35% 0px -55% 0px",

        threshold: 0
    };


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection = entry.target.id;


                    /*
                    Remove active class from every nav item
                    */

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                    });


                    /*
                    Add active class to the corresponding
                    navigation item
                    */

                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${currentSection}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },

        observerOptions
    );


    /*
    Observe every section
    */

    sections.forEach(section => {

        observer.observe(section);

    });


    /*
    =========================================================
    PROJECT LINKS
    =========================================================

    Prevent empty "#" Live Demo links from jumping to the
    top of the page.
    */

    const emptyLinks = document.querySelectorAll(
        '.project-links a[href="#"]'
    );


    emptyLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            alert("Live demo coming soon!");

        });

    });

});