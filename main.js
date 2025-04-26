
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });
  }
  
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation to elements when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe section headings and cards
  document.querySelectorAll('section h2, .service-card, .feature-card').forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
  
  // Simple CSS animation class
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .opacity-0 {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
  `);
  
  // Create a showreel modal when clicking on video play button
  const playButton = document.querySelector('.btn-play');
  
  if (playButton) {
    playButton.addEventListener('click', function() {
      // Create modal elements
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-midnight-80 flex items-center justify-center z-50';
      modal.style.backdropFilter = 'blur(8px)';
      
      const modalContent = document.createElement('div');
      modalContent.className = 'relative bg-darkgray p-4 rounded-xl max-w-4xl w-full mx-4';
      
      const closeButton = document.createElement('button');
      closeButton.className = 'absolute top-4 right-4 text-white hover-text-cyan';
      closeButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
      closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
      });
      
      const videoContainer = document.createElement('div');
      videoContainer.className = 'aspect-ratio-16-9 w-full bg-black';
      videoContainer.style.paddingBottom = '56.25%';
      videoContainer.style.position = 'relative';
      
      // Placeholder for video (in a real project, this would be a real video)
      const videoPlaceholder = document.createElement('div');
      videoPlaceholder.className = 'absolute inset-0 flex items-center justify-center';
      videoPlaceholder.innerHTML = `
        <div class="text-center">
          <i class="fas fa-film text-4xl text-cyan mb-4"></i>
          <p class="text-white">Demo Showreel Video</p>
          <p class="text-gray-300 text-sm mt-2">(Video would play here in a real implementation)</p>
        </div>
      `;
      
      // Assemble modal
      videoContainer.appendChild(videoPlaceholder);
      modalContent.appendChild(closeButton);
      modalContent.appendChild(videoContainer);
      modal.appendChild(modalContent);
      
      // Add to DOM
      document.body.appendChild(modal);
    });
  }
});
