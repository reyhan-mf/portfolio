
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
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

const projectData = {
  eunoia: {
    title: "Eunoia: Mental Health Mobile Application Enhanced with AI",
    image: "./assets/images/eunoia.png",
    description: "Eunoia is a comprehensive mental health application that leverages artificial intelligence to provide personalized support and resources for users struggling with mental health challenges. The app uses advanced NLP techniques to understand user emotions and provide appropriate interventions.",
    technologies: [
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "NLP", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
    ],
    features: [
      "AI-powered mood tracking and analysis",
      "Personalized mental health recommendations",
      "Chat-based therapy support using NLP",
      "Progress tracking and analytics dashboard",
      "Crisis intervention detection and alerts",
      "Community support features and forums",
      "Meditation and mindfulness exercises",
      "Professional therapist booking system"
    ],
    challenges: [
      "Implementing accurate sentiment analysis for mood detection",
      "Ensuring user privacy and data security compliance",
      "Creating an intuitive and calming user interface design",
      "Training AI models with diverse mental health datasets",
      "Handling real-time crisis intervention scenarios"
    ],
    results: [
      "Successfully deployed to 1000+ beta users",
      "Achieved 85% accuracy in mood prediction algorithms",
      "Received positive feedback for user experience (4.7/5 rating)",
      "Winner of 2nd place in ITConvert Software Development Competition",
      "Reduced user reported anxiety levels by 40% after 30 days of use"
    ],
    contributors: [
      { name: "Reyhan Mochamad Fabian", image: "./assets/images/mountea-cat2.png", role: "AI/ML Engineer & Backend" },
      // { name: "Fahmi Nursafaaat", image: "./assets/images/fahmi.jpg", role: "Mobile Developer & Security" },
      // { name: "Firda Rosela S", image: "./assets/images/FirdaRS.jpg", role: "UI/UX Designer" },

    ],
    github: "https://github.com/reyhan-mf/eunoia",
  }
};

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
  const project = projectData[projectId];
  if (!project) {
    console.error('Project not found:', projectId);
    return;
  }

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  
  // Build modal content with title inside
  const content = `
    <div class="mb-4">
      <h3 style="color: #dbeafe; font-weight: 600; font-size: 1.75rem; margin-bottom: 20px;">${project.title}</h3>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-4" style="width: 100%; height: 250px; object-fit: fill;">
      </div>
      <div class="col-md-6">
        <h6 style="color: #93c5fd; margin-bottom: 15px;">Technologies Used</h6>
        <div class="d-flex flex-wrap gap-3 mb-4">
          ${project.technologies.map(tech => `
            <div class="d-flex flex-column align-items-center text-center" style="min-width: 80px;">
              <img src="${tech.logo}" alt="${tech.name}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 5px;">
              <span style="color: #dbeafe; font-size: 0.8rem;">${tech.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="mb-4">
      <h6 style="color: #93c5fd;">Project Overview</h6>
      <p style="color: #dbeafe; line-height: 1.6;">${project.description}</p>
    </div>

    <div class="mb-4">
      <h6 style="color: #93c5fd;">Key Features</h6>
      <ul style="color: #dbeafe;">
        ${project.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
      </ul>
    </div>

    <div class="mb-4">
      <h6 style="color: #93c5fd;">Technical Challenges</h6>
      <ul style="color: #dbeafe;">
        ${project.challenges.map(challenge => `<li style="margin-bottom: 8px;">${challenge}</li>`).join('')}
      </ul>
    </div>

    <div class="mb-4">
      <h6 style="color: #93c5fd;">Results & Impact</h6>
      <ul style="color: #dbeafe;">
        ${project.results.map(result => `<li style="margin-bottom: 8px;">${result}</li>`).join('')}
      </ul>
    </div>

    <div class="mb-4">
      <h6 style="color: #93c5fd;">Contributors</h6>
      <div class="row ${project.contributors.length > 1 && project.contributors.length <= 4 ? 'justify-content-center' : ''}">
        ${project.contributors.map(contributor => `
          <div class="col-md-6 col-lg-3 mb-3">
            <div class="text-center">
              <img src="${contributor.image}" alt="${contributor.name}" 
                   class="rounded-circle mb-2" 
                   style="width: 60px; height: 60px; object-fit: cover;">
              <h6 style="color: #dbeafe; font-size: 0.9rem; margin-bottom: 2px;">${contributor.name}</h6>
              <p style="color: #93c5fd; font-size: 0.8rem; margin-bottom: 0;">${contributor.role}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mt-4">
      ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-outline-light btn-sm">
        <i class="fab fa-github me-2"></i>View Code
      </a>` : ''}
    </div>
  `;
  
  document.getElementById('projectContent').innerHTML = content;
  
  modal.show();
}