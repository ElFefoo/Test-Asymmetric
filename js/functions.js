let currentProjectIndex = 0;
let currentImageIndex = 0;

// Modales de servicios
function openServiceModal(index) {
    const service = services[index];
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalBody').innerHTML = `
        <p>${service.description}</p>
        <h4 style="margin-top: 1.5rem; color: var(--text-dark);">Nuestras capacidades:</h4>
        <ul>
            ${service.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    document.getElementById('serviceModal').classList.add('active');
}

// Cerrar modal de servicios
function closeServiceModal() {
    document.getElementById('serviceModal').classList.remove('active');
}

// Renderizar portafolio
function renderPortfolio(items) {
    const grid = document.getElementById('portfolioGrid');
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




// Renderizar equipo
function renderTeam() {
    const grid = document.getElementById('teamGrid');
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

// Filtros de portafolio
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

// Cerrar modales al hacer clic afuera
window.addEventListener('click', (event) => {
    const modal = document.getElementById('serviceModal');
    const lightbox = document.getElementById('lightbox');

    if (event.target === modal) modal.classList.remove('active');
    if (event.target === lightbox) closeLightbox();
});

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    renderPortfolio(portfolio);
    renderTeam();
});

function updateGallery() {
    const project = portfolio[currentProjectIndex];
    const total = project.images.length;
    document.getElementById('lightboxImage').src = `images/portfolio/${project.images[currentImageIndex]}`;
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${total}`;
}


function openGallery(index) {
    currentProjectIndex = index;
    currentImageIndex = 0;
    const project = portfolio[index];

    // Actualiza el contenido del lightbox/modal
    document.getElementById('lightboxTitle').textContent = project.title;
    document.getElementById('lightboxDesc').textContent = project.description;
    updateGallery();
    document.getElementById('lightbox').classList.add('active');
}
// Funciones de Lightbox (para futuras implementaciones con galería)

function nextImage() {
    const project = portfolio[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateGallery();
}

function prevImage() {
    const project = portfolio[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateGallery();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.getElementById('telefono').addEventListener('input', function() {
    const t = this;
    const patt = /^9\s?\d{4}\s?\d{4}$/;
    if(!patt.test(t.value.trim()) && t.value.trim() !== '') {
        t.setCustomValidity("El teléfono debe ser con formato 9 9999 9999");
    } else {
        t.setCustomValidity("");
    }
});


document.getElementById('telefono').addEventListener('input', function(e) {
    // Elimina todo salvo números
    let value = e.target.value.replace(/\D/g, '');
    // Solo permite máximo 9 dígitos
    if (value.length > 9) value = value.slice(0,9);
    // Formatea a "9 9999 9999"
    if (value.length >= 5) {
        value = value.replace(/^(\d{1})(\d{4})(\d{0,4})$/, '$1 $2 $3');
    } else if (value.length >= 2) {
        value = value.replace(/^(\d{1})(\d{0,4})$/, '$1 $2');
    }
    e.target.value = value.trim();
});
