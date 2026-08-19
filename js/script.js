/* =========================================================
   PART 4
   HEADER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const themeToggle = document.getElementById("themeToggle");
    const rtlToggle = document.getElementById("rtlToggle");

    const mobileThemeToggle =
        document.getElementById("mobileThemeToggle");

    const mobileRtlToggle =
        document.getElementById("mobileRtlToggle");


    /* =====================================================
       HAMBURGER MENU
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            /* Change hamburger icon */

            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }
            }

        });
    }


    /* =====================================================
       HOME DROPDOWN - MOBILE
    ===================================================== */

    const dropdown = document.querySelector(".dropdown");

    const dropdownLink =
        document.querySelector(".dropdown > .nav-link");


    if (dropdown && dropdownLink) {

        dropdownLink.addEventListener("click", function (event) {

            /* Only activate click dropdown on responsive */

            if (window.innerWidth <= 1024) {

                event.preventDefault();

                dropdown.classList.toggle("active");

            }

        });
    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    function enableDarkMode() {

        body.classList.add("dark-mode");

        localStorage.setItem("theme", "dark");

        updateThemeIcons();

    }


    function disableDarkMode() {

        body.classList.remove("dark-mode");

        localStorage.setItem("theme", "light");

        updateThemeIcons();

    }


    function toggleDarkMode() {

        if (body.classList.contains("dark-mode")) {

            disableDarkMode();

        } else {

            enableDarkMode();

        }

    }


    /* =====================================================
       UPDATE MOON / SUN ICON
    ===================================================== */

    function updateThemeIcons() {

        const icons =
            document.querySelectorAll(
                "#themeToggle i, #mobileThemeToggle i"
            );

        icons.forEach(function (icon) {

            if (body.classList.contains("dark-mode")) {

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");

            }

        });


        /* Update mobile button text */

        if (mobileThemeToggle) {

            if (body.classList.contains("dark-mode")) {

                mobileThemeToggle.innerHTML =
                    '<i class="fas fa-sun"></i> Light Mode';

            } else {

                mobileThemeToggle.innerHTML =
                    '<i class="fas fa-moon"></i> Dark Mode';

            }

        }

    }


    /* =====================================================
       DESKTOP DARK MODE BUTTON
    ===================================================== */

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            toggleDarkMode();

        });

    }


    /* =====================================================
       MOBILE DARK MODE BUTTON
    ===================================================== */

    if (mobileThemeToggle) {

        mobileThemeToggle.addEventListener("click", function () {

            toggleDarkMode();

        });

    }


    /* =====================================================
       LOAD SAVED THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        body.classList.add("dark-mode");

    } else {

        body.classList.remove("dark-mode");

    }


    updateThemeIcons();


    /* =====================================================
       RTL MODE
    ===================================================== */

    function enableRTL() {

        body.classList.add("rtl");

        document.documentElement.setAttribute("dir", "rtl");

        localStorage.setItem("direction", "rtl");

    }


    function disableRTL() {

        body.classList.remove("rtl");

        document.documentElement.setAttribute("dir", "ltr");

        localStorage.setItem("direction", "ltr");

    }


    function toggleRTL() {

        if (body.classList.contains("rtl")) {

            disableRTL();

        } else {

            enableRTL();

        }

    }


    /* =====================================================
       DESKTOP RTL BUTTON
    ===================================================== */

    if (rtlToggle) {

        rtlToggle.addEventListener("click", function () {

            toggleRTL();

        });

    }


    /* =====================================================
       MOBILE RTL BUTTON
    ===================================================== */

    if (mobileRtlToggle) {

        mobileRtlToggle.addEventListener("click", function () {

            toggleRTL();

        });

    }


    /* =====================================================
       LOAD SAVED RTL
    ===================================================== */

    const savedDirection =
        localStorage.getItem("direction");


    if (savedDirection === "rtl") {

        enableRTL();

    } else {

        disableRTL();

    }


    /* =====================================================
       CLOSE MENU AFTER CLICKING NORMAL LINK
    ===================================================== */

    const normalLinks =
        document.querySelectorAll(
            ".nav-menu a:not(.dropdown > .nav-link)"
        );


    normalLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 1024) {

                mainNav.classList.remove("active");

                if (menuToggle) {

                    const icon =
                        menuToggle.querySelector("i");

                    if (icon) {

                        icon.classList.remove("fa-xmark");

                        icon.classList.add("fa-bars");

                    }

                }

            }

        });

    });


    /* =====================================================
       CLOSE MENU AFTER DASHBOARD / LOGIN
    ===================================================== */

    const mobileButtons =
        document.querySelectorAll(
            ".mobile-buttons .header-btn"
        );


    mobileButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (window.innerWidth <= 1024) {

                mainNav.classList.remove("active");

            }

        });

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (!mainNav || !menuToggle) {
            return;
        }


        if (
            mainNav.classList.contains("active") &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mainNav.classList.remove("active");


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /* =====================================================
       RESET MOBILE MENU WHEN RESIZING TO DESKTOP
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1024) {

            mainNav.classList.remove("active");

            dropdown.classList.remove("active");


            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }

        }

    });

});




/* =========================================================
   HOME 1 - HERO SLIDER
   PART 4: JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    const heroDots =
        document.querySelectorAll(".hero-dot");

    const heroSlider =
        document.querySelector(".hero-slider");


    /* Stop if hero section does not exist */

    if (
        !heroSlides.length ||
        !heroDots.length ||
        !heroSlider
    ) {
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    let currentSlide = 0;

    let slideInterval;

    const slideDuration = 5000;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        /* Remove active from all slides */

        heroSlides.forEach(function (slide) {
            slide.classList.remove("active");
        });


        /* Remove active from all dots */

        heroDots.forEach(function (dot) {
            dot.classList.remove("active");
        });


        /* Make index safe */

        if (index >= heroSlides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = heroSlides.length - 1;
        }

        else {
            currentSlide = index;
        }


        /* Activate slide */

        heroSlides[currentSlide]
            .classList.add("active");


        /* Activate dot */

        if (heroDots[currentSlide]) {

            heroDots[currentSlide]
                .classList.add("active");

        }

    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= heroSlides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }


    /* =====================================================
       START AUTO SLIDER
    ===================================================== */

    function startSlider() {

        clearInterval(slideInterval);

        slideInterval =
            setInterval(nextSlide, slideDuration);

    }


    /* =====================================================
       STOP AUTO SLIDER
    ===================================================== */

    function stopSlider() {

        clearInterval(slideInterval);

    }


    /* =====================================================
       DOT CLICK
    ===================================================== */

    heroDots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            currentSlide = index;

            showSlide(currentSlide);

            startSlider();

        });

    });


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    heroSlider.addEventListener(
        "mouseenter",
        stopSlider
    );


    /* =====================================================
       RESUME AFTER MOUSE LEAVES
    ===================================================== */

    heroSlider.addEventListener(
        "mouseleave",
        startSlider
    );


    /* =====================================================
       TOUCH SUPPORT
    ===================================================== */

    heroSlider.addEventListener(
        "touchstart",
        stopSlider,
        { passive: true }
    );


    heroSlider.addEventListener(
        "touchend",
        startSlider,
        { passive: true }
    );


    /* =====================================================
       INITIAL SLIDE
    ===================================================== */

    showSlide(0);

    startSlider();

});








/* =========================================================
   HOME 1 - STATS COUNTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) {
        return;
    }


    let counterStarted = false;


    /* =========================================
       START COUNTER
    ========================================= */

    function startCounters() {

        if (counterStarted) {
            return;
        }

        counterStarted = true;


        counters.forEach(function (counter) {

            const target =
                parseFloat(counter.getAttribute("data-target"));

            const isDecimal =
                target % 1 !== 0;

            const duration = 1800;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(elapsed / duration, 1);


                /* Smooth animation */

                const easeOut =
                    1 - Math.pow(1 - progress, 3);


                const currentValue =
                    target * easeOut;


                if (isDecimal) {

                    counter.textContent =
                        currentValue.toFixed(1);

                } else {

                    counter.textContent =
                        Math.floor(currentValue)
                        .toLocaleString();

                }


                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    if (isDecimal) {

                        counter.textContent =
                            target.toFixed(1);

                    } else {

                        counter.textContent =
                            target.toLocaleString();

                    }

                }

            }


            requestAnimationFrame(updateCounter);

        });

    }


    /* =========================================
       INTERSECTION OBSERVER
    ========================================= */

    const statsSection =
        document.querySelector(".stats-section");


    if (!statsSection) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounters();

                        observer.unobserve(
                            statsSection
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    observer.observe(statsSection);

});





/* =========================================================
   HOME 1 - FAQ ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems =
        document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");


        question.addEventListener("click", function () {

            const isOpen =
                item.classList.contains("active");


            /* Close all other FAQ items */

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                }

            });


            /* Toggle selected FAQ */

            if (isOpen) {

                item.classList.remove("active");

            } else {

                item.classList.add("active");

            }

        });

    });

});





const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }

});

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});