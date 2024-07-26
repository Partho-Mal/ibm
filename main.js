$(window).on('load', function (event) {
    // Hide preloader when everything is loaded
    $('.js-preloader').delay(500).fadeOut(500);
});

// Force preloader to hide after a certain time
/* window.addEventListener('load', function () {
    setTimeout(function () {
        $('.js-preloader').fadeOut(500); // Ensure the preloader fades out
    }, 3000); // Change 3000 to any duration you want in milliseconds
}); */
