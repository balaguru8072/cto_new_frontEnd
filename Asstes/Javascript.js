document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a', 'botton');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            scrollToSlowly(targetElement);
        });
    });

    function scrollToSlowly(target) {
        const startY = window.scrollY;
        const endY = target.getBoundingClientRect().top + window.scrollY;
        const distance = endY - startY;
        const duration = 2000; // duration in milliseconds
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startY, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Add the 'visible' class to the header after the page loads
    document.querySelector("header").classList.add("visible");
});