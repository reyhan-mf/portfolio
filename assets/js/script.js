
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
      });

const easingFunctions = {
  easeOutQuart: t => 1 - Math.pow(1 - t, 4),
  easeOutCubic: t => 1 - Math.pow(1 - t, 3),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeOutCirc: t => Math.sqrt(1 - Math.pow(t - 1, 2))
};

function animateCounterEnhanced(element, target, duration = 2000, decimals = 0, suffix = '', easingType = 'easeOutQuart') {
  const start = 0;
  const startTime = performance.now();
  const easing = easingFunctions[easingType] || easingFunctions.easeOutQuart;
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    
    const current = start + (target - start) * easedProgress;
    
    if (decimals > 0) {
      element.textContent = current.toFixed(decimals) + suffix;
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      if (decimals > 0) {
        element.textContent = target.toFixed(decimals) + suffix;
      } else {
        element.textContent = target + suffix;
      }
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Initialize counter animations when elements come into view
function initCounterAnimations() {
  const statsNumbers = document.querySelectorAll('.stats-number[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseFloat(element.dataset.target);
        const decimals = parseInt(element.dataset.decimals) || 0;
        const suffix = element.dataset.suffix || '';
        
        // Start animation with a slight delay for better effect
        setTimeout(() => {
          animateCounterEnhanced(element, target, 2000, decimals, suffix);
        }, 200);
        
        // Stop observing this element
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.5
  });
  
  statsNumbers.forEach(element => {
    observer.observe(element);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  
  // Initialize counter animations
  initCounterAnimations();
});
      
      // Typing animation for the banner
      const phrases = [
        { text: "Developer", colorClass: "color-developer" },
        { text: "Data Scientist", colorClass: "color-data-scientist" },
        { text: "Machine Learning Engineer", colorClass: "color-ml-engineer" },
      ];

      let i = 0;
      let j = 0;
      let currentPhrase = [];
      let isDeleting = false;
      let isEnd = false;

      function loop() {
        const typedText = document.getElementById("typed-text");
        isEnd = false;
        typedText.innerHTML = currentPhrase.join("");

        // Set color based on the current phrase
        typedText.className = phrases[i].colorClass;

        if (i < phrases.length) {
          if (!isDeleting && j <= phrases[i].text.length) {
            currentPhrase.push(phrases[i].text[j]);
            j++;
            typedText.innerHTML = currentPhrase.join("");
          }

          if (isDeleting && j <= phrases[i].text.length) {
            currentPhrase.pop(phrases[i].text[j]);
            j--;
            typedText.innerHTML = currentPhrase.join("");
          }

          if (j == phrases[i].text.length) {
            isEnd = true;
            isDeleting = true;
          }

          if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
              i = 0;
            }
          }
        }
        const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
        setTimeout(loop, speed);
      }

      loop();

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            });

            // Update active class in navbar
            document.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.remove("active");
            });
            this.classList.add("active");
          }
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar-main");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

// Function to load project modal content from external HTML file
function loadProjectModal(projectId) {
  return fetch(`./pages/${projectId}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Project file not found: ${projectId}.html`);
      }
      return response.text();
    })
    .catch(error => {
      console.error('Error loading project content:', error);
      return `<div class="text-center">
        <h3 style="color: #dbeafe;">Project Not Found</h3>
        <p style="color: #93c5fd;">Sorry, the project content could not be loaded.</p>
      </div>`;
    });
}

function loadModals() {
        fetch('modals.html')
          .then(response => response.text())
          .then(html => {
            // Create a temporary div to hold the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // Append all modals to the body
            while (tempDiv.firstChild) {
              document.body.appendChild(tempDiv.firstChild);
            }
          })
          .catch(error => {
            console.error('Error loading modals:', error);
          });
      }

      // Load modals when page loads
      document.addEventListener('DOMContentLoaded', function() {
        loadModals();
      });

      function openImageModal(imageElement) {
        const modal = new bootstrap.Modal(
          document.getElementById("imageModal")
        );
        const modalImage = document.getElementById("modalImage");

        modalImage.src = imageElement.src;
        modalImage.alt = imageElement.alt;

        modal.show();
      }

      // filepath: d:\Projek\web_portfolio\portfolio\assets\js\script.js
// ...existing code...

    function openImageInsideProject(imageSrc) {
      const modal = new bootstrap.Modal(document.getElementById("imageModal"));
      const modalImage = document.getElementById("modalImage");

      modalImage.src = imageSrc;
      modalImage.alt = "Image Preview";

      modal.show();
    }

// ...existing code...
      // Close modal when clicking on the backdrop
      document
        .getElementById("imageModal")
        .addEventListener("click", function (e) {
          if (e.target === this) {
            const modal = bootstrap.Modal.getInstance(this);
            modal.hide();
          }
        });

      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar-main");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        // Get all sections
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        
        // Find which section is currently in view
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          // Adjust offset to account for navbar height
          if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
          }
        });
        
        // Update active class on navigation links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });



function openProjectModal(projectId) {
  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  const projectContent = document.getElementById('projectContent');
  
  // Show loading state
  projectContent.innerHTML = `
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p style="color: #dbeafe; margin-top: 15px;">Loading project details...</p>
    </div>
  `;
  
  modal.show();
  
  // Load project content
  loadProjectModal(projectId).then(content => {
    projectContent.innerHTML = content;
  });
}