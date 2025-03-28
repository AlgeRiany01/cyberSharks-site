document.addEventListener('DOMContentLoaded', function () {
    let progress = 0;
    const progressBar = document.querySelector('.loader-progress-bar');
    const loaderMessages = [
        "جاري تحميل المكتبات...",
        "جاري تحميل المحتوى...",
        "جاري تهيئة الواجهة...",
        "جاري التحميل النهائي..."
    ];
    const loaderMessage = document.querySelector('.loader-message');

    function createLoaderElements() {
        const loader = document.getElementById('loader');
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'loader-bubble';
            const size = Math.random() * 40 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            loader.appendChild(bubble);
        }
        for (let i = 0; i < 3; i++) {
            const robot = document.createElement('div');
            robot.className = 'loader-robot';
            robot.style.left = `${Math.random() * 100}%`;
            robot.style.top = `${Math.random() * 100}%`;
            robot.style.animationDuration = `${Math.random() * 20 + 20}s`;
            robot.style.animationDelay = `${Math.random() * 10}s`;
            loader.appendChild(robot);
        }
    }

    createLoaderElements();

    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        if (progress < 25) {
            loaderMessage.textContent = loaderMessages[0];
        } else if (progress < 50) {
            loaderMessage.textContent = loaderMessages[1];
        } else if (progress < 75) {
            loaderMessage.textContent = loaderMessages[2];
        } else {
            loaderMessage.textContent = loaderMessages[3];
        }
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 200);

    new Typed('#typed-text', {
        strings: [
            "فريق CyberSharks يقدم لك",
            "روبوتات ذكية، حلول متطورة",
            "نغير مستقبل ",
            "نحو عالم رقمي أكثر أمانًا",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    function createDataBubbles() {
        const container = document.getElementById('data-bubbles-container');
        const characters = ['0101', '1010', '0011', '1100', '0110', '1001'];
        for (let i = 0; i < 20; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'data-bubble';
            const size = Math.random() * 30 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            bubble.textContent = characters[Math.floor(Math.random() * characters.length)];
            container.appendChild(bubble);
        }
    }

    createDataBubbles();

    const teamSwiper = new Swiper('.team-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });

    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        document.querySelector('.scroll-progress-bar').style.width = scrollProgress + '%';
        if (scrollTop > 100) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars toggle-color"  ></i>';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // gsap.utils.toArray('.section-title, .section-subtitle').forEach(element => {
    //     gsap.from(element, {
    //         scrollTrigger: {
    //             trigger: element,
    //             start: "top 80%",
    //             toggleActions: "play none none none"
    //         },
    //         y: 50,
    //         opacity: 0,
    //         duration: 1,
    //         ease: "power2.out"
    //     });
    // });

    // const underwaterLights = document.querySelectorAll('.underwater-light');
    // underwaterLights.forEach(light => {
    //     gsap.to(light, {
    //         scrollTrigger: {
    //             trigger: light.parentElement,
    //             start: "top center",
    //             end: "bottom top",
    //             scrub: true
    //         },
    //         x: 50,
    //         y: -50,
    //         ease: "none"
    //     });
    // });

    // const sharkFins = document.querySelectorAll('.shark-fin');
    // sharkFins.forEach(fin => {
    //     gsap.to(fin, {
    //         scrollTrigger: {
    //             trigger: fin.parentElement,
    //             start: "top center",
    //             end: "bottom top",
    //             scrub: true
    //         },
    //         y: -100,
    //         rotation: 5,
    //         ease: "none"
    //     });
    // });

    function addFloatingRobots() {
        if (window.innerWidth > 768) {
            const heroSection = document.querySelector('.hero');
            const contactSection = document.querySelector('.contact-section');
            for (let i = 0; i < 3; i++) {
                const robot = document.createElement('div');
                robot.className = 'floating-robot';
                robot.style.top = `${Math.random() * 70 + 10}%`;
                robot.style.left = `${Math.random() * 20 - 20}%`;
                robot.style.width = `${Math.random() * 50 + 50}px`;
                robot.style.height = `${Math.random() * 50 + 50}px`;
                robot.style.animationDelay = `${Math.random() * 15}s`;
                robot.style.animationDuration = `${Math.random() * 20 + 20}s`;
                heroSection.appendChild(robot);
                contactSection.appendChild(robot);
            }
        }
    }

    addFloatingRobots();

    function createTechElements() {
        const sections = [
            document.querySelector('.hero'),
            document.querySelector('.team-section'),
            document.querySelector('.projects-section'),
            document.querySelector('.contact-section')
        ];
        sections.forEach(section => {
            if (!section) return;
            for (let i = 0; i < 3; i++) {
                const chip = document.createElement('div');
                chip.className = 'floating-chip';
                chip.style.top = `${Math.random() * 80 + 10}%`;
                chip.style.left = `${Math.random() * 100}%`;
                chip.style.width = `${Math.random() * 40 + 30}px`;
                chip.style.height = `${Math.random() * 40 + 30}px`;
                chip.style.animationDuration = `${Math.random() * 30 + 20}s`;
                chip.style.animationDelay = `${Math.random() * 10}s`;
                section.appendChild(chip);
            }
            for (let i = 0; i < 2; i++) {
                const circuit = document.createElement('div');
                circuit.className = 'floating-circuit';
                circuit.style.top = `${Math.random() * 80 + 10}%`;
                circuit.style.left = `${Math.random() * 100}%`;
                circuit.style.width = `${Math.random() * 50 + 40}px`;
                circuit.style.height = `${Math.random() * 50 + 40}px`;
                circuit.style.animationDuration = `${Math.random() * 40 + 20}s`;
                circuit.style.animationDelay = `${Math.random() * 15}s`;
                section.appendChild(circuit);
            }
            if (section.classList.contains('hero') || section.classList.contains('contact-section')) {
                for (let i = 0; i < 4; i++) {
                    const fish = document.createElement('div');
                    fish.className = 'robot-fish';
                    fish.style.top = `${Math.random() * 80 + 10}%`;
                    fish.style.left = `${Math.random() * 100}%`;
                    fish.style.width = `${Math.random() * 60 + 40}px`;
                    fish.style.height = `${Math.random() * 30 + 20}px`;
                    fish.style.animationDuration = `${Math.random() * 40 + 20}s`;
                    fish.style.animationDelay = `${Math.random() * 10}s`;
                    section.appendChild(fish);
                }
            }
            if (section.classList.contains('hero') || section.classList.contains('contact-section')) {
                const light = document.createElement('div');
                light.className = 'underwater-light';
                light.style.top = `${Math.random() * 70 + 15}%`;
                light.style.left = `${Math.random() * 70 + 15}%`;
                section.appendChild(light);
            }
        });
    }

    createTechElements();
});