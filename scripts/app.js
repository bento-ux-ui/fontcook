// ===== FONTCOOK - APPLICATION PRINCIPALE =====

class FontCookApp {
  constructor() {
    this.initialized = false;
    this.components = {
      themeManager: null,
      fontAPI: null,
      searchManager: null
    };
    
    this.init();
  }

  async init() {
    if (this.initialized) return;
    
    try {
      // Wait for DOM to be ready
      await this.waitForDOM();
      
      // Initialize core components
      await this.initializeComponents();
      
      // Setup global event listeners
      this.setupGlobalEventListeners();
      
      // Setup smooth scrolling
      this.setupSmoothScrolling();
      
      // Add CSS for dynamic components
      this.addDynamicStyles();
      
      // Initialize popular fonts display
      this.initializePopularFonts();
      
      // Mark as initialized
      this.initialized = true;
      
      console.log('🍳 FontCook initialisé avec succès !');
      
      // Dispatch initialization event
      window.dispatchEvent(new CustomEvent('fontcookInitialized'));
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation de FontCook:', error);
    }
  }

  waitForDOM() {
    return new Promise((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  async initializeComponents() {
    // Components are initialized by their respective modules
    // We just need to wait for them to be available
    const fontAPI = await this.waitForGlobal('fontAPI');
    const themeManager = await this.waitForGlobal('themeManager');
    const fontSearch = await this.waitForGlobal('fontSearch');
    
    this.components.fontAPI = fontAPI || window.fontAPI;
    this.components.themeManager = themeManager || window.themeManager;
    this.components.searchManager = fontSearch || window.fontSearch;
    
    // Log which components loaded successfully
    console.log('🍳 FontCook components status:', {
      fontAPI: !!this.components.fontAPI,
      themeManager: !!this.components.themeManager,
      searchManager: !!this.components.searchManager
    });
  }

  waitForGlobal(globalName, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      const checkGlobal = () => {
        if (window[globalName]) {
          console.log(`✅ ${globalName} loaded successfully`);
          resolve(window[globalName]);
        } else if (Date.now() - startTime > timeout) {
          console.warn(`⚠️ Timeout waiting for ${globalName}, continuing without it`);
          // Don't reject, just resolve with null to continue execution
          resolve(null);
        } else {
          setTimeout(checkGlobal, 100);
        }
      };
      
      checkGlobal();
    });
  }

  setupGlobalEventListeners() {
    // Theme change listener
    window.addEventListener('themeChanged', (event) => {
      this.handleThemeChange(event.detail.theme);
    });

    // Smooth scroll for navigation links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        this.handleSmoothScroll(e.target.getAttribute('href'));
      }
    });

    // Window resize handler
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });
  }

  setupSmoothScrolling() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToElement(targetId);
      });
    });
  }

  handleSmoothScroll(href) {
    const targetId = href.substring(1);
    this.scrollToElement(targetId);
  }

  scrollToElement(targetId) {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  handleThemeChange(theme) {
    // Update any theme-dependent components
    console.log(`🎨 Thème changé vers: ${theme}`);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
    }
  }

  handleResize() {
    // Handle responsive adjustments
    this.updateResponsiveElements();
  }

  updateResponsiveElements() {
    const isMobile = window.innerWidth < 768;
    
    // Update mobile-specific behaviors
    if (isMobile) {
      this.enableMobileOptimizations();
    } else {
      this.disableMobileOptimizations();
    }
  }

  enableMobileOptimizations() {
    // Add mobile-specific optimizations
    document.body.classList.add('mobile-optimized');
  }

  disableMobileOptimizations() {
    // Remove mobile-specific optimizations
    document.body.classList.remove('mobile-optimized');
  }

  handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
    
    // Escape: Close modals
    if (e.key === 'Escape') {
      this.closeModals();
    }
  }

  closeModals() {
    const modals = document.querySelectorAll('.font-preview-modal');
    modals.forEach(modal => modal.remove());
  }

  async initializePopularFonts() {
    try {
      const popularGrid = document.getElementById('popular-grid');
      if (!popularGrid) return;
      
      const popularFonts = await this.components.fontAPI.getPopularFonts();
      const topFonts = popularFonts.slice(0, 8);
      
      topFonts.forEach((font, index) => {
        const card = this.createFontCard(font);
        card.style.animationDelay = `${index * 0.1}s`;
        popularGrid.appendChild(card);
      });
      
    } catch (error) {
      console.error('Erreur lors du chargement des polices populaires:', error);
    }
  }

  createFontCard(font) {
    const card = document.createElement('div');
    card.className = 'font-card';
    card.style.opacity = '0';
    card.style.animation = 'fadeInUp 0.6s ease forwards';
    
    card.innerHTML = `
      <div class="font-preview" style="font-family: ${font.family}">
        ${font.preview}
      </div>
      <div class="font-name">${font.name}</div>
      <div class="font-category">${font.category}</div>
      <div class="font-popularity">
        <span class="popularity-label">Popularité:</span>
        <div class="popularity-bar">
          <div class="popularity-fill" style="width: ${font.popularity}%"></div>
        </div>
        <span class="popularity-score">${font.popularity}%</span>
      </div>
    `;
    
    return card;
  }

  addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Animation keyframes */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Font card enhancements */
      .font-popularity {
        margin-top: var(--space-md);
        padding-top: var(--space-md);
        border-top: 1px solid var(--light-gray);
      }
      
      .popularity-label {
        font-size: var(--text-sm);
        color: var(--gray);
        margin-bottom: var(--space-xs);
        display: block;
      }
      
      .popularity-bar {
        height: 4px;
        background: var(--light-gray);
        border-radius: var(--border-radius-full);
        overflow: hidden;
        margin-bottom: var(--space-xs);
      }
      
      .popularity-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-orange), var(--primary-red));
        transition: width 1s ease;
      }
      
      .popularity-score {
        font-size: var(--text-sm);
        color: var(--primary-brown);
        font-weight: 600;
      }
      
      /* Font action buttons */
      .font-actions {
        display: flex;
        gap: var(--space-sm);
        margin-top: var(--space-md);
      }
      
      .font-action-btn {
        flex: 1;
        padding: var(--space-sm);
        font-size: var(--text-sm);
      }
      
      /* Modal styles */
      .font-preview-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--z-modal);
        animation: fadeIn 0.3s ease;
      }
      
      .modal-content {
        background: var(--white);
        border-radius: var(--border-radius-lg);
        max-width: 90%;
        max-height: 90%;
        overflow: hidden;
        box-shadow: var(--shadow-xl);
      }
      
      .modal-header {
        padding: var(--space-lg);
        border-bottom: 1px solid var(--light-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-close {
        background: none;
        border: none;
        font-size: var(--text-2xl);
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .modal-body {
        padding: var(--space-lg);
      }
      
      .font-preview-large {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-xl);
        text-align: center;
      }
      
      .font-preview-sizes div {
        margin-bottom: var(--space-md);
      }
      
      .size-12 { font-size: 12px; }
      .size-16 { font-size: 16px; }
      .size-24 { font-size: 24px; }
      .size-32 { font-size: 32px; }
      
      /* Notification styles */
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: var(--space-md);
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-lg);
        z-index: var(--z-tooltip);
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        font-weight: 500;
      }
      
      .notification-success {
        background: var(--success);
        color: white;
      }
      
      .notification-error {
        background: var(--error);
        color: white;
      }
      
      .notification-info {
        background: var(--info);
        color: white;
      }
      
      /* No results / Error states */
      .no-results,
      .error-message {
        text-align: center;
        padding: var(--space-3xl);
        color: var(--gray);
        grid-column: 1 / -1;
      }
      
      .no-results-icon,
      .error-icon {
        font-size: var(--text-5xl);
        margin-bottom: var(--space-md);
        display: block;
      }
      
      .no-results h3,
      .error-message h3 {
        color: var(--primary-brown);
        margin-bottom: var(--space-md);
      }
      
      /* Mobile optimizations */
      .mobile-optimized .font-grid {
        grid-template-columns: 1fr;
      }
      
      .mobile-optimized .header-content {
        padding: var(--space-sm) 0;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    
    document.head.appendChild(style);
  }

  // Utility functions
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Public API
  getComponent(name) {
    return this.components[name];
  }

  isInitialized() {
    return this.initialized;
  }
}

// Initialize the application
const fontCookApp = new FontCookApp();

// Export for global access
window.fontCookApp = fontCookApp;