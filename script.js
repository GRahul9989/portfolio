/**
 * ========================================================
 * PORTFOLIO JAVASCRIPT INTERACTIONS
 * Author: Rahul
 * Features:
 *   1. Dark / Light Theme Toggle (with localStorage persistence)
 *   2. Mobile Hamburger Navigation (with a11y aria-expanded)
 *   3. Active Navigation Highlighting on Scroll (ScrollSpy)
 *   4. Client-side Form Validation & Feedback
 *   5. Dynamic Copyright Year
 * ========================================================
 */

// Wait until the DOM is fully parsed and loaded
document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================
     1. THEME TOGGLE (DARK / LIGHT MODE)
     ======================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  // Function to apply a given theme ('dark' or 'light')
  function applyTheme(theme) {
    if (theme === 'dark') {
      rootElement.setAttribute('data-theme', 'dark');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to light theme');
    } else {
      rootElement.removeAttribute('data-theme');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to dark theme');
    }
    // Save preference to localStorage so it persists across page refreshes
    localStorage.setItem('portfolio-theme', theme);
  }

  // Determine initial theme:
  // Check localStorage first; if not set, check user's system OS preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersDark) {
    applyTheme('dark');
  }

  // Handle click event on theme toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = rootElement.getAttribute('data-theme') === 'dark';
      const newTheme = isCurrentlyDark ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }


  /* ========================================================
     2. MOBILE NAVIGATION HAMBURGER MENU
     ======================================================== */
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu visibility
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    navMenu.classList.add('open');
    menuToggleBtn.classList.add('active');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    menuToggleBtn.setAttribute('aria-label', 'Close mobile navigation menu');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    menuToggleBtn.classList.remove('active');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    menuToggleBtn.setAttribute('aria-label', 'Open mobile navigation menu');
  }

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when a link inside the mobile menu is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          closeMobileMenu();
        }
      });
    });

    // Close menu if user clicks outside of nav menu & button
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on pressing the 'Escape' key for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }


  /* ========================================================
     3. ACTIVE NAVIGATION LINK ON SCROLL (SCROLLSPY)
     Highlights the current section in the navbar as you scroll.
     ======================================================== */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; // 120px offset for sticky header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Listen for scroll events with passive performance optimization
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  // Initial check on load
  updateActiveNavLink();


  /* ========================================================
     4. CONTACT FORM VALIDATION & INTERACTIVE FEEDBACK
     ======================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('form-status');

  // Simple email pattern verification helper
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(inputElement, isValid) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;

    if (!isValid) {
      formGroup.classList.add('has-error');
    } else {
      formGroup.classList.remove('has-error');
    }
  }

  if (contactForm) {
    // Remove errors as soon as the user starts typing
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group')?.classList.remove('has-error');
          if (formStatus) formStatus.textContent = '';
        });
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput?.value.trim() || '';
      const emailVal = emailInput?.value.trim() || '';
      const messageVal = messageInput?.value.trim() || '';

      const isNameValid = nameVal.length > 0;
      const isEmailValid = isValidEmail(emailVal);
      const isMessageValid = messageVal.length > 0;

      validateField(nameInput, isNameValid);
      validateField(emailInput, isEmailValid);
      validateField(messageInput, isMessageValid);

      if (isNameValid && isEmailValid && isMessageValid) {
        // Success feedback
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '✨ Message sent successfully! Thanks for reaching out.';
        }
        contactForm.reset();

        // Clear notification after 5 seconds
        setTimeout(() => {
          if (formStatus) formStatus.textContent = '';
        }, 5000);
      } else {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields correctly.';
        }
      }
    });
  }


  /* ========================================================
     5. DYNAMIC COPYRIGHT YEAR
     ======================================================== */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});
