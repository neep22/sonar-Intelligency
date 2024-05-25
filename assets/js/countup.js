// Function to animate count-up
function animateCountUp(target, start, end, duration, suffix) {
    let startTime = null;

    function count(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Calculate current value and update the target element
        const currentValue = Math.floor(progress * (end - start) + start);
        target.textContent = `${currentValue}${suffix}`;

        // Continue the animation if progress is less than 1
        if (progress < 1) {
            requestAnimationFrame(count);
        }
    }

    requestAnimationFrame(count);
}

// Animate each count-up element
function startCountUps() {
    const elements = [
        { element: document.getElementById('countup1'), endValue: 20, suffix: '+' },
        { element: document.getElementById('countup2'), endValue: 25, suffix: 'x' },
        { element: document.getElementById('countup3'), endValue: 35, suffix: '%' },
        { element: document.getElementById('countup4'), endValue: 8, suffix: ':1' },
    ];

    // Animate each element
    elements.forEach((item) => {
        animateCountUp(item.element, 0, item.endValue, 3000, item.suffix);
    });
}

// Start the count-up animations when the page loads
window.addEventListener('load', startCountUps);
