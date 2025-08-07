const carousel = document.getElementById('carousel');
carousel.innerHTML += carousel.innerHTML; // duplikat gambar

const speed = 2;
let rafId = null;

// Auto-scroll function
function autoScroll() {
    carousel.scrollLeft += speed;

    // Reset scroll jika sudah setengah (karena kita duplikasi)
    const originalWidth = carousel.scrollWidth / 2;
    if (carousel.scrollLeft >= originalWidth) {
        carousel.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(autoScroll);
}

// Pause and resume
function pauseScroll() {
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
}

function resumeScroll() {
    if (!rafId) {
        rafId = requestAnimationFrame(autoScroll);
    }
}

// Event listeners
carousel.addEventListener('pointerdown', () => {
    pauseScroll();
});

carousel.addEventListener('pointerup', () => {
    // Tunggu sebentar agar scroll manual selesai
    setTimeout(resumeScroll, 300);
});

carousel.addEventListener('pointercancel', () => {
    setTimeout(resumeScroll, 300);
});

// Untuk hover di desktop
carousel.addEventListener('mouseenter', pauseScroll);
carousel.addEventListener('mouseleave', resumeScroll);

// Mulai auto-scroll
autoScroll();
