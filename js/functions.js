let currentProjectIndex = 0;
let currentImageIndex = 0;

// ========== MODALES DE SERVICIOS ==========
function openServiceModal(index) {
    if (typeof services === 'undefined') return;
    const service = services[index];
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const serviceModal = document.getElementById('serviceModal');
    
    if (modalTitle && modalBody && serviceModal) {
        modalTitle.textContent = service.title;
        modalBody.innerHTML = `
            <p>${service.description}</p>
            <h4 style="margin-top: 1.5rem; color: var(--text-dark);">Nuestras capacidades:</h4>
            <ul>
                ${service.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        serviceModal.classList.add('active');
    }
}

function closeServiceModal() {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) serviceModal.classList.remove('active');
}

// ========== PORTAFOLIO ==========
function renderPortfolio(items) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map((item, idx) => `
        <div class="portfolio-item" data-category="${item.category}" style="animation-delay: ${idx * 0.1}s">
            <div class="portfolio-img" onclick="openGallery(${idx})">
                <img src="images/portfolio/${item.images[0]}" alt="${item.title}" style="width:100%;height:auto;border-radius:8px;cursor:pointer;">
            </div>
            <div class="portfolio-info">
                <span class="portfolio-category">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// ========== EQUIPO ==========
function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid || typeof team === 'undefined') return;
    
    grid.innerHTML = team.map((member, idx) => `
        <div class="team-member" style="animation-delay: ${idx * 0.1}s">
            <div class="member-avatar">${member.avatar}</div>
            <h3>${member.name}</h3>
            <p><strong>${member.role}</strong></p>
            <p>${member.experience} de experiencia</p>
            <p>${member.bio}</p>
        </div>
    `).join('');
}

// ========== FILTROS PORTAFOLIO ==========
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        const items = document.querySelectorAll('.portfolio-item');

        items.forEach(item => {
            if (filter === 'todos' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => { item.style.opacity = '1'; }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    });
});

// ========== CERRAR MODALES AL HACER CLICK AFUERA ==========
window.addEventListener('click', (event) => {
    const modal = document.getElementById('serviceModal');
    const lightbox = document.getElementById('lightbox');

    if (modal && event.target === modal) modal.classList.remove('active');
    if (lightbox && event.target === lightbox) closeLightbox();
});

// ========== INICIALIZACIÓN DE PORTAFOLIO Y EQUIPO ==========
document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolio !== 'undefined') renderPortfolio(portfolio);
    if (typeof team !== 'undefined') renderTeam();
});

// ========== GALERÍA LIGHTBOX ==========
function updateGallery() {
    if (typeof portfolio === 'undefined') return;
    const project = portfolio[currentProjectIndex];
    const total = project.images.length;
    const lightboxImage = document.getElementById('lightboxImage');
    const imageCounter = document.getElementById('imageCounter');
    
    if (lightboxImage && imageCounter) {
        lightboxImage.src = `images/portfolio/${project.images[currentImageIndex]}`;
        imageCounter.textContent = `${currentImageIndex + 1} / ${total}`;
    }
}

function openGallery(index) {
    if (typeof portfolio === 'undefined') return;
    currentProjectIndex = index;
    currentImageIndex = 0;
    const project = portfolio[index];
    
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightbox = document.getElementById('lightbox');
    
    if (lightboxTitle && lightboxDesc && lightbox) {
        lightboxTitle.textContent = project.title;
        lightboxDesc.textContent = project.description;
        updateGallery();
        lightbox.classList.add('active');
    }
}

function nextImage() {
    if (typeof portfolio === 'undefined') return;
    const project = portfolio[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateGallery();
}

function prevImage() {
    if (typeof portfolio === 'undefined') return;
    const project = portfolio[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateGallery();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
}

// ========== VALIDACIÓN Y FORMATO DE TELÉFONO ==========
const telefonoInput = document.getElementById('telefono');
if (telefonoInput) {
    telefonoInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 9) value = value.slice(0, 9);
        if (value.length >= 5) {
            value = value.replace(/^(\d{1})(\d{4})(\d{0,4})$/, '$1 $2 $3');
        } else if (value.length >= 2) {
            value = value.replace(/^(\d{1})(\d{0,4})$/, '$1 $2');
        }
        e.target.value = value.trim();
    });
}

// ========== MENÚ HAMBURGUESA ==========
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });
    
    document.querySelectorAll('.nav-list a').forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('open');
        });
    });
}

// ========== MODO OSCURO ==========
const darkModeBtn = document.getElementById('darkModeToggle');
const darkModeBtnText = document.getElementById('darkModeBtnText');
const darkModeIcon = document.getElementById('darkModeIcon');

if (darkModeBtn && darkModeBtnText && darkModeIcon) {
    function setDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            darkModeBtnText.textContent = 'Modo claro';
            darkModeIcon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>`;
        } else {
            document.body.classList.remove('dark-mode');
            darkModeBtnText.textContent = 'Modo oscuro';
            darkModeIcon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"></path>
                </svg>`;
        }
    }

    const stored = localStorage.getItem('darkMode');
    setDarkMode(stored === 'true');

    darkModeBtn.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        setDarkMode(isDark);
        localStorage.setItem('darkMode', isDark);
    });
}
