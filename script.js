$(document).ready(function () {

    // =========================
    // Current Year
    // =========================

    $("#year").text(new Date().getFullYear());


    // =========================
    // Mobile Menu
    // =========================

    $("#menuToggle").click(function () {

        $("#navLinks").toggleClass("show");

    });


    // =========================
    // Close Mobile Menu
    // =========================

    $(".nav-link").click(function () {

        $("#navLinks").removeClass("show");

    });


    // =========================
    // Smooth Scrolling
    // =========================

    $(".nav-link, .logo, .footer-content a").click(function (event) {

        let target = $(this).attr("href");

        if (target && target.startsWith("#")) {

            event.preventDefault();

            let targetElement = $(target);

            if (targetElement.length) {

                $("html, body").animate({

                    scrollTop: targetElement.offset().top - 70

                }, 600);

            }

        }

    });


    // =========================
    // Active Navbar
    // =========================

    $(window).scroll(function () {

        let scrollPosition = $(window).scrollTop() + 100;

        $("section").each(function () {

            let sectionTop = $(this).offset().top;

            let sectionBottom =
                sectionTop + $(this).outerHeight();

            let sectionId = $(this).attr("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                $(".nav-link").removeClass("active");

                $('.nav-link[href="#' + sectionId + '"]')
                    .addClass("active");

            }

        });

    });


    // =========================
    // Dark / Light Mode
    // =========================

    $("#themeToggle").click(function () {

        $("body").toggleClass("light-mode");

        if ($("body").hasClass("light-mode")) {

            $(this).text("☀");

        } else {

            $(this).text("☾");

        }

    });


    // =========================
    // Scroll Animation
    // =========================

    function revealElements() {

        $(".reveal").each(function () {

            let elementTop = $(this).offset().top;

            let windowBottom =
                $(window).scrollTop() +
                $(window).height() -
                60;

            if (elementTop < windowBottom) {

                $(this).addClass("show");

            }

        });

    }

    revealElements();

    $(window).scroll(function () {

        revealElements();

    });


    // =========================
    // Contact Form Validation
    // =========================

    $("#contactForm").submit(function (event) {

        event.preventDefault();

        $(".error").text("");

        $("#formSuccess").text("");


        let name = $("#name").val().trim();

        let email = $("#email").val().trim();

        let message = $("#message").val().trim();


        let valid = true;


        // Name Validation

        if (name === "") {

            $("#nameError").text(
                "Please enter your name."
            );

            valid = false;

        }


        // Email Validation

        if (email === "") {

            $("#emailError").text(
                "Please enter your email."
            );

            valid = false;

        } else {

            let emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                $("#emailError").text(
                    "Please enter a valid email address."
                );

                valid = false;

            }

        }


        // Message Validation

        if (message === "") {

            $("#messageError").text(
                "Please enter your message."
            );

            valid = false;

        }


        // Success

        if (valid) {

            $("#formSuccess").text(
                "Thank you! Your message has been submitted successfully."
            );

            $("#contactForm")[0].reset();

        }

    });

});