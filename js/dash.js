/* =========================================================
   CUSTOMER DASHBOARD SIDEBAR
========================================================= */

const customerMenuToggle =
    document.getElementById("customerMenuToggle");

const customerSidebar =
    document.getElementById("customerSidebar");

const customerSidebarClose =
    document.getElementById("customerSidebarClose");

const customerSidebarOverlay =
    document.getElementById("customerSidebarOverlay");


function openCustomerSidebar() {

    if (!customerSidebar) return;

    customerSidebar.classList.add("active");

    if (customerSidebarOverlay) {
        customerSidebarOverlay.classList.add("active");
    }

    if (customerMenuToggle) {
        customerMenuToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    document.body.classList.add("sidebar-open");
}


function closeCustomerSidebar() {

    if (!customerSidebar) return;

    customerSidebar.classList.remove("active");

    if (customerSidebarOverlay) {
        customerSidebarOverlay.classList.remove("active");
    }

    if (customerMenuToggle) {
        customerMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    document.body.classList.remove("sidebar-open");
}


if (customerMenuToggle) {

    customerMenuToggle.addEventListener(
        "click",
        openCustomerSidebar
    );

}


if (customerSidebarClose) {

    customerSidebarClose.addEventListener(
        "click",
        closeCustomerSidebar
    );

}


if (customerSidebarOverlay) {

    customerSidebarOverlay.addEventListener(
        "click",
        closeCustomerSidebar
    );

}


/* Close after clicking a sidebar link on mobile */

document
    .querySelectorAll(".customer-nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 1024) {
                closeCustomerSidebar();
            }

        });

    });


/* Close when resizing back to desktop */

window.addEventListener("resize", () => {

    if (window.innerWidth > 1024) {
        closeCustomerSidebar();
    }

});




/* =========================================================
   CUSTOMER DASHBOARD
   DARK MODE + RTL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const rtlToggle =
        document.getElementById("rtlToggle");


    /* =====================================================
       DARK MODE
    ===================================================== */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    function updateThemeIcon() {

        if (!themeToggle) return;

        const icon =
            themeToggle.querySelector("i");

        if (!icon) return;


        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }


    updateThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "theme",
                    isDark ? "dark" : "light"
                );


                updateThemeIcon();

            }
        );

    }


    /* =====================================================
       RTL
    ===================================================== */

    const savedDirection =
        localStorage.getItem("direction");


    if (savedDirection === "rtl") {

        document.body.classList.add("rtl");

    }


    function updateRTLIcon() {

        if (!rtlToggle) return;

        const icon =
            rtlToggle.querySelector("i");

        if (!icon) return;


        if (document.body.classList.contains("rtl")) {

            rtlToggle.setAttribute(
                "aria-label",
                "Switch to LTR"
            );

        } else {

            rtlToggle.setAttribute(
                "aria-label",
                "Switch to RTL"
            );

        }

    }


    updateRTLIcon();


    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "rtl"
                );


                const isRTL =
                    document.body.classList.contains(
                        "rtl"
                    );


                localStorage.setItem(
                    "direction",
                    isRTL ? "rtl" : "ltr"
                );


                updateRTLIcon();

            }
        );

    }

});






/* =========================================================
   LOGOUT CONFIRMATION POPUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");
    const logoutModal = document.getElementById("logoutModal");
    const logoutConfirm = document.getElementById("logoutConfirm");
    const logoutCancel = document.getElementById("logoutCancel");


    /* =====================================================
       OPEN POPUP
    ===================================================== */

    if (logoutBtn && logoutModal) {

        logoutBtn.addEventListener("click", function () {

            logoutModal.classList.add("show");

            document.body.classList.add("logout-open");

        });

    }


    /* =====================================================
       YES - GO TO LOGIN PAGE
    ===================================================== */

    if (logoutConfirm) {

        logoutConfirm.addEventListener("click", function () {

            window.location.href = "login.html";

        });

    }


    /* =====================================================
       NO - CLOSE POPUP
    ===================================================== */

    if (logoutCancel && logoutModal) {

        logoutCancel.addEventListener("click", function () {

            logoutModal.classList.remove("show");

            document.body.classList.remove("logout-open");

        });

    }


    /* =====================================================
       CLICK OUTSIDE POPUP - CLOSE
    ===================================================== */

    if (logoutModal) {

        logoutModal.addEventListener("click", function (event) {

            if (event.target === logoutModal) {

                logoutModal.classList.remove("show");

                document.body.classList.remove("logout-open");

            }

        });

    }


    /* =====================================================
       ESC KEY - CLOSE POPUP
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            logoutModal &&
            logoutModal.classList.contains("show")
        ) {

            logoutModal.classList.remove("show");

            document.body.classList.remove("logout-open");

        }

    });

});