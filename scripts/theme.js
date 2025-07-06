// ===== THEME MANAGEMENT =====

class ThemeManager {
  constructor() {
    this.theme = 'light';
    this.toggleButton = null;
    this.themeIcon = null;
    this.init();
  }

  init() {
    this.setupElements();
    this.loadTheme();
    this.setupEventListeners();
  }

  setupElements() {
    this.toggleButton = document.getElementById('theme-toggle');
    this.themeIcon = document.querySelector('.theme-icon');
  }

  setupEventListeners() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('fontcook-theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  loadTheme() {
    // Check for saved theme or default to system preference
    const savedTheme = localStorage.getItem('fontcook-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    this.theme = savedTheme || systemTheme;
    this.applyTheme();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
    
    // Add cooking animation
    this.animateToggle();
  }

  setTheme(theme) {
    this.theme = theme;
    this.applyTheme();
  }

  applyTheme() {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', this.theme);
    
    // Update toggle button icon
    if (this.themeIcon) {
      this.themeIcon.textContent = this.theme === 'light' ? '🌙' : '☀️';
    }
    
    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: this.theme }
    }));
  }

  saveTheme() {
    localStorage.setItem('fontcook-theme', this.theme);
  }

  animateToggle() {
    if (this.toggleButton) {
      this.toggleButton.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.toggleButton.style.transform = 'scale(1)';
      }, 150);
    }
  }

  getCurrentTheme() {
    return this.theme;
  }
}

// Initialize theme manager when DOM is loaded
let themeManager;

document.addEventListener('DOMContentLoaded', () => {
  themeManager = new ThemeManager();
});

// Export for use in other modules
window.ThemeManager = ThemeManager;