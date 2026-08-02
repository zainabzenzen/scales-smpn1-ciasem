/* ==========================================================================
   SCALES - DIGITAL ECOSYSTEM SCRIPT
   Interactive Functionalities & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    const loaderProgress = document.getElementById('loaderProgress');

    if (loaderProgress) {
        loaderProgress.style.width = '100%';
    }

    window.addEventListener('load', () => {
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 600);
        }
    });

    // 2. Interactive Mouse Glow Movement
    const mouseGlow = document.getElementById('mouseGlow');
    if (mouseGlow) {
        document.addEventListener('mousemove', (e) => {
            // Menggunakan requestAnimationFrame untuk performa visual yang mulus
            requestAnimationFrame(() => {
                mouseGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            });
        });
    }

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 4. Mobile Navigation Menu Toggle & Auto-Close
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Tutup menu otomatis saat salah satu link navigasi di-klik (khusus di HP)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 5. Stat Counter Animation on Scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        const statsSection = document.getElementById('stats');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !animated) {
            animated = true;
            statNumbers.forEach(num => {
                const target = +num.getAttribute('data-target');
                let count = 0;
                const speed = target / 40;

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        num.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        num.innerText = target;
                    }
                };
                updateCount();
            });
        }
    };

    window.addEventListener('scroll', animateStats);

    // 6. Parallax Backdrop Effect (Optional Enhancements)
    const backdropImg = document.querySelector('.backdrop-img');
    if (backdropImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            backdropImg.style.transform = `translateY(${scrolled * 0.15}px)`;
        });
    }

});