
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
    