// UMKM Data
const umkmData = [
    {
        id: 1,
        name: "Umus Farm",
        category: "Produk Pertanian",
        icon: "🍄",
        image: "umusfarm.jpeg",
        description: "Menyediakan jamur segar dan olahan jamur berkualitas tinggi untuk kebutuhan rumah tangga & bisnis kuliner Anda. Segar setiap hari, higienis, dan terjangkau.",
        features: [
            "Jamur segar berkualitas tinggi",
            "Olahan jamur siap saji",
            "Produk higienis dan fresh",
            "Harga terjangkau"
        ],
        url: "https://umusfarm.netlify.app/",
        color: "#10b981"
    },
    {
        id: 2,
        name: "Umus Bordir",
        category: "Jasa Bordir",
        icon: "🧵",
        image: "umusbordir.jpeg",
        description: "Solusi terpercaya untuk kebutuhan bordir komputer, bordir logo, bordir pakaian, dan berbagai kebutuhan konveksi bordir dengan hasil rapi dan berkualitas tinggi.",
        features: [
            "Bordir komputer profesional",
            "Bordir logo dan pakaian",
            "Hasil rapi dan berkualitas",
            "Layanan konveksi bordir"
        ],
        url: "https://umusbordir.netlify.app/",
        color: "#8b5cf6"
    },
    {
        id: 3,
        name: "Alia Metring",
        category: "Makanan Ringan",
        icon: "🍪",
        image: "aliametring.png",
        description: "Cemilan rumahan dari Alia Metring yang dibuat dengan resep turun-temurun. Setiap gigitan memberikan sensasi renyah dan gurih yang bikin ketagihan.",
        features: [
            "Resep turun-temurun",
            "Rasa original, pedas, dan balado",
            "Homemade dengan cinta",
            "Renyah dan gurih"
        ],
        url: "https://aliametring.netlify.app/",
        color: "#f59e0b"
    },
    {
        id: 4,
        name: "Ratsa Snack",
        category: "Makanan Ringan",
        icon: "🥨",
        image: "ratsasnack.png",
        description: "Camilan lokal dengan rasa juara! Menyediakan keripik serut, akar kelapa, dan sagon bakar yang renyah, fresh, cocok buat teman ngopi & oleh-oleh.",
        features: [
            "Keripik Serut",
            "Akar Kelapa",
            "Sagon Bakar",
            "Renyah dan fresh"
        ],
        url: "https://ratsasnack.netlify.app/",
        color: "#ef4444"
    },
    {
        id: 5,
        name: "Moring Lina",
        category: "Produk Kesehatan",
        icon: "🌿",
        image: "moringlina.png",
        description: "Nikmati kelezatan moringa berkualitas tinggi yang diproduksi dengan cinta dari Desa Mandalahahyu. Praktis untuk dikonsumsi, kaya nutrisi, dan pastinya nikmat.",
        features: [
            "Produk moringa berkualitas",
            "Kaya nutrisi dan sehat",
            "Praktis untuk dikonsumsi",
            "Dibuat dengan cinta"
        ],
        url: "https://moringlina.netlify.app/",
        color: "#10b981"
    },
    {
        id: 6,
        name: "Kripik Mamah Azkia",
        category: "Makanan Ringan",
        icon: "🥔",
        image: "kripikmamahazkia.png",
        description: "Kripik Renyah Khas Kampung! Kripik Talas & Singkong, cocok buat cemilan, oleh-oleh, dan teman ngopi. Homemade dengan cinta, fresh dan renyah setiap gigitan.",
        features: [
            "Kripik Talas",
            "Kripik Singkong",
            "Homemade dengan cinta",
            "Fresh dan renyah"
        ],
        url: "https://kripikmamahazkia.netlify.app/",
        color: "#f97316"
    },
    {
        id: 7,
        name: "Rasa Kabita",
        category: "Makanan Ringan",
        icon: "🍌",
        image: "rasakabita.png",
        description: "Keripik Renyah, Rasa Bikin Ketagihan! Keripik Talas & Pisang dengan cita rasa autentik yang menggugah selera, dibuat dengan bahan pilihan dan resep turun temurun.",
        features: [
            "Keripik Talas",
            "Keripik Pisang",
            "Cita rasa autentik",
            "Resep turun temurun"
        ],
        url: "https://rasakabita.netlify.app/",
        color: "#ec4899"
    }
];

// Function to create UMKM card
function createUMKMCard(umkm) {
    const card = document.createElement('div');
    card.className = 'umkm-card';
    
    const featuresHTML = umkm.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${umkm.image}" alt="${umkm.name}" class="card-image" loading="lazy">
            <div class="card-image-overlay">
                <span class="card-icon">${umkm.icon}</span>
            </div>
        </div>
        <div class="card-header">
            <h3 class="card-title">${umkm.name}</h3>
            <p class="card-category">${umkm.category}</p>
        </div>
        <div class="card-body">
            <p class="card-description">${umkm.description}</p>
            <ul class="card-features">
                ${featuresHTML}
            </ul>
        </div>
        <div class="card-footer">
            <a href="${umkm.url}" target="_blank" rel="noopener noreferrer" class="visit-btn">
                🌐 Kunjungi Website
            </a>
        </div>
    `;
    
    return card;
}

// Function to render all UMKM cards
function renderUMKMCards() {
    const grid = document.getElementById('umkmGrid');
    
    if (!grid) {
        console.error('UMKM grid element not found');
        return;
    }
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Create and append cards
    umkmData.forEach(umkm => {
        const card = createUMKMCard(umkm);
        grid.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderUMKMCards();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards when they're added
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.umkm-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});
