// Data Destinasi Wisata
const destinasiData = [
    {
        id: 1,
        name: "Paraga Stones",
        image: "wisata/paragastone.jpeg",
        description: "Formasi batuan artistik yang menyerupai bukit dengan sungai jernih berwarna kehijauan. Tempat tersembunyi yang masih alami dan menawan, cocok untuk petualangan alam yang tak terlupakan.",
        fullDescription: "Batu Paraga merupakan susunan batuan artistik yang berbentuk seperti balok berukuran besar dan menyerupai sebuah bukit. Formasinya pun sangat unik. Tempat wisata ini dinamakan Batu Paraga. Diantara Batu Paraga Juga Mengalir Sungai Yang Airnya Jernih Berwarna Kehijauan Dan Mempunyai Kedalaman Kurang Lebih 7 Meter. Jika Sedang Beruntung, Kita Bisa Melihat Monyet Ekor Panjang Berkeliaran Di Sekitar Tempat Ini. Wisata Batu Paraga Memang Belum Dikenal Banyak Orang, Oleh Karena Itu Wisata Alam Ini Masih Terlihat Alami Dan Begitu Menawan. Namun Sayang, Potensi Wisata Ini Belum Mendapat Perhatian Dari Pemerintah Setempat.",
        location: "Kampung Bambayang, Dusun Tamansari, Desa Mandalahayu"
    },
    {
        id: 2,
        name: "Curug Cimaranten",
        image: "wisata/curugcimaranten.png",
        description: "Air terjun dengan debit air yang sangat kuat, tinggi 3 meter dan lebar 10 meter. Keindahannya semakin memukau saat musim penghujan ketika air terbelah menjadi dua bagian.",
        fullDescription: "Air terjun yang memiliki tinggi 3 meter dan lebar sekitar 10 meter ini berada di muara yang menghubungkan antara sungai cimedang dan Cimaranten. Memiliki debit air yang sangat kuat, meskipun saat bulan kemarau debit airnya masih sangat kuat dan mampu mengalir. Sedangkan saat musim penghujan sendiri debit air semakin besar hingga terbelah menjadi dua bagian. Inilah yang membuat anda selalu ingin menyaksikan keindahan yang ada di Curug Cimaranten satu ini. Meskipun sejumlah fasilitas belum disediakan namun tak menghalangi niat para pengunjung untuk menyaksikan keindahan alam air terjun Cimaranten ini.",
        location: "Kp. Tamansari RT 002 RW 007, Desa Mandalahayu"
    },
    {
        id: 3,
        name: "Situ Palahlar",
        image: "wisata/situpalahlar.jpg",
        description: "Destinasi wisata yang sedang dikembangkan sebagai bagian dari visi Desa Mandalahahyu menjadi desa wisata. Tempat yang cocok untuk relaksasi dan menikmati keindahan alam.",
        fullDescription: "Situ Palahlar Terletak Di Dusun Sukahurip Desa Mandalahayu Kurang Lebih 2 Km Dari Kantor Desa Mandalahayu. Situ Palahlar Sendiri Di Bangun Di Atas Tanah Kas Desa Hasil Dari Tukar Guling Dengan Masjid Besar Salopa dan Gedung NU Salopa. Situ Palahlar Sekarang Masih Dalam Tahap Pembangunan dan Penataan, Sedangkan Anggaran Yang Di Gunakan Bersumber Dari Anggaran Dana Desa Tahun 2021 Sebesar Rp. 222.389.900,- Dan Tahun 2022 Sebesar Rp. 418.713.680,-",
        location: "Dusun Sukahurip, Desa Mandalahayu (2 km dari Kantor Desa)"
    }
];

// Data UMKM
const umkmData = [
    {
        id: 1,
        name: "Umus Farm",
        category: "makanan",
        image: "umkm/umusfarm.jpeg",
        description: "Menyediakan jamur segar dan olahan jamur berkualitas tinggi untuk kebutuhan rumah tangga & bisnis kuliner Anda. Segar setiap hari, higienis, dan terjangkau.",
        url: "https://umusfarm.netlify.app/",
        icon: "🍄"
    },
    {
        id: 2,
        name: "Umus Bordir",
        category: "jasa",
        image: "umkm/umusbordir.jpeg",
        description: "Solusi terpercaya untuk kebutuhan bordir komputer, bordir logo, bordir pakaian, dan berbagai kebutuhan konveksi bordir dengan hasil rapi dan berkualitas tinggi.",
        url: "https://umusbordir.netlify.app/",
        icon: "🧵"
    },
    {
        id: 3,
        name: "Alia Metring",
        category: "makanan",
        image: "umkm/aliametring.png",
        description: "Cemilan rumahan dari Alia Metring yang dibuat dengan resep turun-temurun. Setiap gigitan memberikan sensasi renyah dan gurih yang bikin ketagihan.",
        url: "https://aliametring.netlify.app/",
        icon: "🍪"
    },
    {
        id: 4,
        name: "Ratsa Snack",
        category: "makanan",
        image: "umkm/ratsasnack.png",
        description: "Camilan lokal dengan rasa juara! Menyediakan keripik serut, akar kelapa, dan sagon bakar yang renyah, fresh, cocok buat teman ngopi & oleh-oleh.",
        url: "https://ratsasnack.netlify.app/",
        icon: "🥨"
    },
    {
        id: 5,
        name: "Moring Lina",
        category: "makanan",
        image: "umkm/moringlina.png",
        description: "Nikmati kelezatan moringa berkualitas tinggi yang diproduksi dengan cinta dari Desa Mandalahahyu. Praktis untuk dikonsumsi, kaya nutrisi, dan pastinya nikmat.",
        url: "https://moringlina.netlify.app/",
        icon: "🌿"
    },
    {
        id: 6,
        name: "Kripik Mamah Azkia",
        category: "makanan",
        image: "umkm/kripikmamahazkia.png",
        description: "Kripik Renyah Khas Kampung! Kripik Talas & Singkong, cocok buat cemilan, oleh-oleh, dan teman ngopi. Homemade dengan cinta, fresh dan renyah setiap gigitan.",
        url: "https://kripikmamahazkia.netlify.app/",
        icon: "🥔"
    },
    {
        id: 7,
        name: "Rasa Kabita",
        category: "makanan",
        image: "umkm/rasakabita.png",
        description: "Keripik Renyah, Rasa Bikin Ketagihan! Keripik Talas & Pisang dengan cita rasa autentik yang menggugah selera, dibuat dengan bahan pilihan dan resep turun temurun.",
        url: "https://rasakabita.netlify.app/",
        icon: "🍌"
    }
];

// Category Labels
const categoryLabels = {
    makanan: "Makanan",
    jasa: "Jasa"
};

// Function to create Destinasi Card - Different Design
function createDestinasiCard(destinasi) {
    const card = document.createElement('div');
    card.className = 'destinasi-card group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-cream dark:border-gray-700 hover:border-accent/50 fade-in';
    card.setAttribute('data-aos', 'fade-up');
    
    const icons = ['🏞️', '🌊', '🏕️'];
    const icon = icons[destinasi.id - 1] || '📍';
    
    card.innerHTML = `
        <div class="relative">
            <div class="relative w-full h-64 overflow-hidden bg-gradient-to-br from-light via-accent/20 to-cream rounded-t-3xl">
                <img src="${destinasi.image}" alt="${destinasi.name}" class="destinasi-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent"></div>
                <div class="absolute top-6 left-6 z-20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float-rotate animate-glow-pulse">
                    <span class="text-2xl animate-float-up-down">${icon}</span>
                </div>
            </div>
            <div class="p-8 space-y-4 flex flex-col">
                <div class="flex-grow">
                    <h3 class="text-2xl font-black text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">${destinasi.name}</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">${destinasi.description}</p>
                </div>
                <button onclick="showDestinasiDetail('${destinasi.name.replace(/'/g, "\\'")}', '${destinasi.fullDescription.replace(/'/g, "\\'")}', '${destinasi.location.replace(/'/g, "\\'")}')" class="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden mt-auto">
                    <span class="relative z-10 flex items-center justify-center gap-2">
                        <span>Pelajari Lebih Lanjut</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-accent to-light opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Function to create UMKM Card
function createUMKMCard(umkm) {
    const card = document.createElement('div');
    card.className = `umkm-card group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-cream dark:border-gray-700 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 fade-in magnetic`;
    card.dataset.category = umkm.category;
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="relative w-full h-64 overflow-hidden bg-gradient-to-br from-light via-accent/20 to-cream">
            <div class="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10 group-hover:from-primary/60 transition-all duration-500"></div>
            <img src="${umkm.image}" alt="${umkm.name}" class="umkm-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
            <div class="absolute top-4 left-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float-rotate animate-glow-pulse">
                <span class="text-2xl animate-float-up-down">${umkm.icon}</span>
            </div>
            <div class="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
                <span class="text-xs font-bold text-white">${categoryLabels[umkm.category]}</span>
            </div>
        </div>
        <div class="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-cream/30 dark:from-gray-800 dark:to-gray-700/30">
            <h3 class="text-2xl font-black text-primary dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">${umkm.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">${umkm.description}</p>
            <a href="${umkm.url}" class="group/link relative block w-full px-6 py-4 bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] text-white rounded-2xl font-bold text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden" target="_blank" rel="noopener noreferrer">
                <span class="relative z-10 flex items-center justify-center gap-2">
                    <span>🌐 Kunjungi Website</span>
                    <span class="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-accent to-light opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
            </a>
        </div>
    `;
    
    return card;
}

// Function to render Destinasi
function renderDestinasi() {
    const grid = document.getElementById('destinasiGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    destinasiData.forEach((destinasi, index) => {
        const card = createDestinasiCard(destinasi);
        card.setAttribute('data-aos-delay', (index % 3) * 100);
        grid.appendChild(card);
    });
    
    // Refresh AOS after rendering
    setTimeout(() => AOS.refresh(), 100);
}

// Function to render UMKM
function renderUMKM(category = 'all') {
    const grid = document.getElementById('umkmGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const filteredData = category === 'all' 
        ? umkmData 
        : umkmData.filter(umkm => umkm.category === category);
    
    filteredData.forEach((umkm, index) => {
        const card = createUMKMCard(umkm);
        card.setAttribute('data-aos-delay', (index % 3) * 100);
        grid.appendChild(card);
    });
    
    // Refresh AOS after rendering
    setTimeout(() => AOS.refresh(), 100);
}

// Filter Functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.dataset.category || 'all';
            
            // Render filtered UMKM
            renderUMKM(category);
        });
    });
}

// Navigation Toggle
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Active Navigation Link on Scroll
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
}

// Smooth Scroll for Navigation Links (Handled by SmoothScroll library)
function setupSmoothScroll() {
    // SmoothScroll library handles this automatically
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Show Destinasi Detail
function showDestinasiDetail(name, description, location) {
    const modal = document.createElement('div');
    modal.className = 'detail-modal';
    modal.innerHTML = `
        <div class="detail-modal-content">
            <span class="detail-modal-close">&times;</span>
            <h2>${name}</h2>
            <p class="detail-location"><strong>Lokasi:</strong> ${location}</p>
            <div class="detail-description">${description}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.detail-modal-close');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Parallax Effect
function setupParallax() {
    const heroSection = document.getElementById('home');
    const parallaxBg = document.querySelector('#home .parallax-bg');
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset || window.scrollY;
        const heroRect = heroSection.getBoundingClientRect();
        const heroHeight = heroSection.offsetHeight;
        
        // Only apply parallax when hero section is visible
        if (scrollY <= heroHeight && heroRect.bottom > 0) {
            // Use slower parallax speed to prevent image cut-off
            const parallaxSpeed = scrollY * 0.5;
            
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${parallaxSpeed}px)`;
                parallaxBg.style.willChange = 'transform';
            }
            
            // Parallax for shapes
            parallaxShapes.forEach(shape => {
                const speed = shape.classList.contains('parallax-fast') ? 0.4 : 
                             shape.classList.contains('parallax-slow') ? 0.3 : 0.35;
                const yPos = scrollY * speed;
                shape.style.transform = `translateY(${yPos}px)`;
            });
        }
    });
}

// Initialize Smooth Scroll
function initSmoothScroll() {
    if (typeof SmoothScroll !== 'undefined') {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true,
            easing: 'easeInOutCubic',
            offset: 80
        });
    }
}

// Initialize Particles.js
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#40916C'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#40916C',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Scroll to Top Button
function setupScrollToTop() {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 2500);
    }
}

// GSAP Animations
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animations
    gsap.from('.hero-content > *', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Stats Cards Animation
    gsap.utils.toArray('.stats-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            scale: 0.5,
            rotation: -180,
            opacity: 0,
            ease: 'back.out(1.7)',
            delay: index * 0.1
        });
    });
    
    // Card Animations with ScrollTrigger
    gsap.utils.toArray('.destinasi-card, .umkm-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            y: 60,
            opacity: 0,
            ease: 'power2.out',
            delay: (index % 3) * 0.1
        });
    });
    
    // Floating Animation for Icons
    gsap.to('.animate-float', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
    });
}

// Magnetic Effect for Buttons
function setupMagneticEffect() {
    const magneticElements = document.querySelectorAll('a, button, .destinasi-card, .umkm-card');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// Dark Mode Toggle
function setupDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    if (!themeToggle || !themeIcon) return;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        html.classList.add('dark');
        themeIcon.textContent = '☀️';
    } else {
        html.classList.remove('dark');
        themeIcon.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        
        if (isDark) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll Progress Indicator
function setupScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Animate Counter Numbers
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    hideLoadingScreen();
    
    // Initialize Particles
    setTimeout(() => {
        initParticles();
    }, 500);
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out-cubic',
        mirror: false
    });
    
    // Initialize GSAP Animations
    setTimeout(() => {
        initGSAPAnimations();
        setupMagneticEffect();
    }, 3000);
    
    // Initialize Smooth Scroll
    initSmoothScroll();
    
    // Initialize Parallax
    setupParallax();
    
    // Setup Scroll to Top
    setupScrollToTop();
    
    // Setup Scroll Progress
    setupScrollProgress();
    
    // Setup Dark Mode
    setupDarkMode();
    
    // Animate Counters
    animateCounters();
    
    renderDestinasi();
    renderUMKM('all');
    setupFilters();
    setupNavigation();
    setupActiveNavLink();
    setupNavbarScroll();
    
    // Add AOS to dynamically rendered cards
    setTimeout(() => {
        document.querySelectorAll('.destinasi-card, .umkm-card').forEach((card, index) => {
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index % 3) * 100);
        });
        AOS.refresh();
    }, 100);
});
