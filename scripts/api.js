// ===== FONT API MANAGER =====

class FontAPI {
  constructor() {
    this.baseURL = 'https://fonts.googleapis.com/css2';
    this.apiURL = 'https://www.googleapis.com/webfonts/v1/webfonts';
    this.apiKey = 'AIzaSyCKNkX5hO0cOGJZ8VfSmdWtRGMVZIX7TWI';
    this.cache = new Map();
    this.cacheExpiry = 24 * 60 * 60 * 1000; // 24 heures
    this.localStorageKey = 'fontcook-cache';
    this.quotaKey = 'fontcook-quota';
    this.maxRequestsPerDay = 1000; // Limite quotidienne conservative
    this.fallbackFonts = [];
    this.quotaExceeded = false;
    
    this.init();
  }

  init() {
    this.loadFromLocalStorage();
    this.initializeFallbackFonts();
    this.checkQuotaStatus();
    this.loadGoogleFonts();
    this.showQuotaBanner();
  }

  // ===== CACHE & LOCALSTORAGE MANAGEMENT =====
  
  loadFromLocalStorage() {
    try {
      const cachedData = localStorage.getItem(this.localStorageKey);
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < this.cacheExpiry) {
          // Cache valide, charger les données
          data.forEach((font, key) => {
            this.cache.set(key, { data: font, timestamp });
          });
          console.log('🍳 FontCook: Cache localStorage chargé');
        } else {
          // Cache expiré
          localStorage.removeItem(this.localStorageKey);
          console.log('🍳 FontCook: Cache expiré, nettoyage effectué');
        }
      }
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors du chargement du cache:', error);
      localStorage.removeItem(this.localStorageKey);
    }
  }

  saveToLocalStorage() {
    try {
      const cacheData = {};
      this.cache.forEach((value, key) => {
        cacheData[key] = value.data;
      });
      
      const dataToStore = {
        data: cacheData,
        timestamp: Date.now()
      };
      
      localStorage.setItem(this.localStorageKey, JSON.stringify(dataToStore));
      console.log('🍳 FontCook: Cache sauvegardé dans localStorage');
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors de la sauvegarde du cache:', error);
      // Si localStorage est plein, nettoyer et réessayer
      this.clearOldCache();
    }
  }

  clearOldCache() {
    try {
      // Supprimer les anciens caches
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('fontcook-') && key !== this.quotaKey) {
          localStorage.removeItem(key);
        }
      });
      console.log('🍳 FontCook: Ancien cache nettoyé');
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors du nettoyage du cache:', error);
    }
  }

  // ===== QUOTA MANAGEMENT =====

  checkQuotaStatus() {
    try {
      const quotaData = localStorage.getItem(this.quotaKey);
      if (quotaData) {
        const { requests, date } = JSON.parse(quotaData);
        const today = new Date().toDateString();
        
        if (date === today) {
          if (requests >= this.maxRequestsPerDay) {
            this.quotaExceeded = true;
            console.log('🍳 FontCook: Quota API dépassé, mode dégradé activé');
          }
        } else {
          // Nouveau jour, reset du quota
          this.resetQuota();
        }
      }
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors de la vérification du quota:', error);
      this.resetQuota();
    }
  }

  incrementQuota() {
    try {
      const quotaData = localStorage.getItem(this.quotaKey);
      const today = new Date().toDateString();
      let requests = 1;
      
      if (quotaData) {
        const { requests: currentRequests, date } = JSON.parse(quotaData);
        if (date === today) {
          requests = currentRequests + 1;
        }
      }
      
      localStorage.setItem(this.quotaKey, JSON.stringify({
        requests,
        date: today
      }));
      
      if (requests >= this.maxRequestsPerDay) {
        this.quotaExceeded = true;
        this.showQuotaExceededMessage();
      }
      
      this.updateQuotaBanner(requests);
      
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors de l\'incrémentation du quota:', error);
    }
  }

  resetQuota() {
    const today = new Date().toDateString();
    localStorage.setItem(this.quotaKey, JSON.stringify({
      requests: 0,
      date: today
    }));
    this.quotaExceeded = false;
  }

  getCurrentQuotaUsage() {
    try {
      const quotaData = localStorage.getItem(this.quotaKey);
      if (quotaData) {
        const { requests, date } = JSON.parse(quotaData);
        const today = new Date().toDateString();
        return date === today ? requests : 0;
      }
    } catch (error) {
      console.warn('🍳 FontCook: Erreur lors de la lecture du quota:', error);
    }
    return 0;
  }

  // ===== FALLBACK FONTS =====

  initializeFallbackFonts() {
    this.fallbackFonts = [
      {
        family: 'Sora',
        category: 'sans-serif',
        variants: ['300', '400', '500', '600', '700'],
        subsets: ['latin'],
        popularity: 97,
        description: 'A clean, modern sans-serif perfect for headings'
      },
      {
        family: 'Work Sans',
        category: 'sans-serif',
        variants: ['300', '400', '500', '600', '700'],
        subsets: ['latin'],
        popularity: 95,
        description: 'A versatile, highly legible sans-serif typeface'
      },
      {
        family: 'Roboto',
        category: 'sans-serif',
        variants: ['100', '300', '400', '500', '700', '900'],
        subsets: ['latin'],
        popularity: 92,
        description: 'Google\'s signature family of fonts'
      },
      {
        family: 'Open Sans',
        category: 'sans-serif',
        variants: ['300', '400', '600', '700', '800'],
        subsets: ['latin'],
        popularity: 88,
        description: 'A humanist sans-serif typeface'
      },
      {
        family: 'Lato',
        category: 'sans-serif',
        variants: ['100', '300', '400', '700', '900'],
        subsets: ['latin'],
        popularity: 85,
        description: 'A humanist typeface family'
      },
      {
        family: 'Montserrat',
        category: 'sans-serif',
        variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        subsets: ['latin'],
        popularity: 82,
        description: 'Inspired by urban typography from Montserrat'
      },
      {
        family: 'Playfair Display',
        category: 'serif',
        variants: ['400', '500', '600', '700', '800', '900'],
        subsets: ['latin'],
        popularity: 75,
        description: 'A transitional design with high contrast'
      }
    ];
  }

  // Load Google Fonts dynamically
  loadGoogleFonts() {
    const fontsToLoad = [
      'Sora:wght@300;400;500;600;700',
      'Work+Sans:wght@300;400;500;600;700',
      'Fira+Code:wght@300;400;500',
      'Roboto:wght@300;400;500;700',
      'Open+Sans:wght@300;400;600;700',
      'Lato:wght@300;400;700',
      'Montserrat:wght@300;400;500;600;700',
      'Merriweather:wght@300;400;700',
      'Poppins:wght@300;400;500;600;700',
      'Nunito:wght@300;400;600;700',
      'Source+Sans+Pro:wght@300;400;600;700',
      'Raleway:wght@300;400;500;600;700'
    ];

    const link = document.createElement('link');
    link.href = `${this.baseURL}?family=${fontsToLoad.join('&family=')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // ===== API FUNCTIONS =====

  async makeAPIRequest(endpoint, params = {}) {
    if (this.quotaExceeded) {
      console.log('🍳 FontCook: API en mode dégradé');
      throw new Error('QUOTA_EXCEEDED');
    }

    try {
      const url = new URL(endpoint);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
      
      this.incrementQuota();
      
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 429) {
          this.quotaExceeded = true;
          throw new Error('QUOTA_EXCEEDED');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('🍳 FontCook: Erreur API:', error);
      throw error;
    }
  }

  // Get popular fonts
  async getPopularFonts() {
    const cacheKey = 'popular-fonts';
    const cached = this.getFromCache(cacheKey);
    
    if (cached) {
      return cached;
    }

    // Détecter l'environnement local et passer directement en mode fallback
    const isLocal = window.location.protocol === 'file:' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname === '';
    
    if (isLocal) {
      console.log('🍳 FontCook: Local environment detected, using fallback fonts');
      console.log('🍳 FontCook: Available fallback fonts:', this.fallbackFonts);
      
      if (!this.fallbackFonts || this.fallbackFonts.length === 0) {
        console.log('🍳 FontCook: Initializing fallback fonts...');
        this.initializeFallbackFonts();
      }
      
      const fallbackFonts = this.fallbackFonts.map(font => ({
        name: font.family,
        family: `'${font.family}', ${font.category}`,
        category: font.category,
        preview: 'The quick brown fox jumps over the lazy dog',
        popularity: font.popularity,
        variants: font.variants,
        subsets: font.subsets,
        description: font.description
      }));
      
      console.log('🍳 FontCook: Mapped fallback fonts:', fallbackFonts);
      this.saveToCache(cacheKey, fallbackFonts);
      return fallbackFonts;
    }

    try {
      if (!this.quotaExceeded) {
        // Essayer l'API Google Fonts
        const apiData = await this.makeAPIRequest(this.apiURL, {
          key: this.apiKey,
          sort: 'popularity',
          subset: 'latin'
        });
        
        if (apiData && apiData.items) {
          const popularFonts = apiData.items.slice(0, 20).map(font => ({
            name: font.family,
            family: `'${font.family}', ${font.category}`,
            category: font.category,
            preview: 'The quick brown fox jumps over the lazy dog',
            popularity: Math.max(60, 100 - apiData.items.indexOf(font) * 3),
            variants: font.variants || ['400'],
            subsets: font.subsets || ['latin'],
            description: font.menu || `A beautiful ${font.category} font`
          }));
          
          this.saveToCache(cacheKey, popularFonts);
          this.saveToLocalStorage();
          return popularFonts;
        }
      }
    } catch (error) {
      console.warn('🍳 FontCook: Utilisation du mode dégradé:', error.message);
    }

    // Mode dégradé : utiliser les polices fallback
    const fallbackFonts = this.fallbackFonts.map(font => ({
      name: font.family,
      family: `'${font.family}', ${font.category}`,
      category: font.category,
      preview: 'The quick brown fox jumps over the lazy dog',
      popularity: font.popularity,
      variants: font.variants,
      subsets: font.subsets,
      description: font.description
    }));

    this.saveToCache(cacheKey, fallbackFonts);
    return fallbackFonts;
  }

  // Search fonts with enhanced API integration
  async searchFonts(query, filters = {}) {
    const cacheKey = `search-${query}-${JSON.stringify(filters)}`;
    const cached = this.getFromCache(cacheKey);
    
    if (cached) {
      return cached;
    }

    // Détecter l'environnement local et passer directement en mode fallback
    const isLocal = window.location.protocol === 'file:' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname === '';
    
    if (isLocal) {
      console.log('🍳 FontCook: Local environment detected for search, using fallback fonts');
      
      if (!this.fallbackFonts || this.fallbackFonts.length === 0) {
        this.initializeFallbackFonts();
      }
      
      // Mode dégradé : recherche dans les polices fallback
      let results = this.fallbackFonts.filter(font => {
        // Normalisation pour recherche sans accents
        const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const normalizedQuery = normalizeText(query);
        const normalizedFamily = normalizeText(font.family);
        const normalizedCategory = normalizeText(font.category);
        
        const matchesQuery = normalizedFamily.includes(normalizedQuery) ||
                            normalizedCategory.includes(normalizedQuery) ||
                            normalizedQuery.split(' ').some(term => 
                              normalizedFamily.includes(term) || normalizedCategory.includes(term));
        
        const matchesCategory = !filters.category || 
                              font.category.toLowerCase() === filters.category.toLowerCase();
        
        const matchesWeight = !filters.weight || 
                            font.variants.some(variant => 
                              this.normalizeWeight(variant) === filters.weight);
        
        return matchesQuery && matchesCategory && matchesWeight;
      });
      
      // Transformer en format FontCook
      results = results.map(font => ({
        name: font.family,
        family: `'${font.family}', ${font.category}`,
        category: font.category,
        preview: 'The quick brown fox jumps over the lazy dog',
        popularity: font.popularity,
        variants: font.variants,
        subsets: font.subsets,
        description: font.description
      }));
      
      this.saveToCache(cacheKey, results);
      return results;
    }

    try {
      if (!this.quotaExceeded && query.trim()) {
        // Essayer l'API Google Fonts avec recherche
        const apiData = await this.makeAPIRequest(this.apiURL, {
          key: this.apiKey,
          sort: 'popularity',
          subset: 'latin'
        });
        
        if (apiData && apiData.items) {
          let results = apiData.items.filter(font => {
            // Normalisation pour recherche sans accents
            const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const normalizedQuery = normalizeText(query);
            const normalizedFamily = normalizeText(font.family);
            const normalizedCategory = normalizeText(font.category);
            
            const matchesQuery = normalizedFamily.includes(normalizedQuery) ||
                                normalizedCategory.includes(normalizedQuery) ||
                                normalizedQuery.split(' ').some(term => 
                                  normalizedFamily.includes(term) || normalizedCategory.includes(term));
            
            const matchesCategory = !filters.category || 
                                  font.category.toLowerCase() === filters.category.toLowerCase();
            
            const matchesWeight = !filters.weight || 
                                font.variants.some(variant => 
                                  this.normalizeWeight(variant) === filters.weight);
            
            return matchesQuery && matchesCategory && matchesWeight;
          });

          // Transformer en format FontCook (toutes les fonts trouvées)
          results = results.map(font => ({
            name: font.family,
            family: `'${font.family}', ${font.category}`,
            category: font.category,
            preview: 'The quick brown fox jumps over the lazy dog',
            popularity: Math.max(60, 100 - apiData.items.indexOf(font) * 2),
            variants: font.variants || ['400'],
            subsets: font.subsets || ['latin'],
            description: font.menu || `A beautiful ${font.category} font`
          }));

          this.saveToCache(cacheKey, results);
          this.saveToLocalStorage();
          return results;
        }
      }
    } catch (error) {
      console.warn('🍳 FontCook: Recherche en mode dégradé:', error.message);
    }

    // Mode dégradé : recherche dans les polices fallback
    let results = this.fallbackFonts.filter(font => {
      // Normalisation pour recherche sans accents
      const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const normalizedQuery = normalizeText(query);
      const normalizedFamily = normalizeText(font.family);
      const normalizedCategory = normalizeText(font.category);
      
      const matchesQuery = normalizedFamily.includes(normalizedQuery) ||
                          normalizedCategory.includes(normalizedQuery) ||
                          normalizedQuery.split(' ').some(term => 
                            normalizedFamily.includes(term) || normalizedCategory.includes(term));
      
      const matchesCategory = !filters.category || 
                            font.category.toLowerCase() === filters.category.toLowerCase();
      
      const matchesWeight = !filters.weight || 
                          font.variants.some(variant => 
                            this.normalizeWeight(variant) === filters.weight);
      
      return matchesQuery && matchesCategory && matchesWeight;
    });

    results = results.map(font => ({
      name: font.family,
      family: `'${font.family}', ${font.category}`,
      category: font.category,
      preview: 'The quick brown fox jumps over the lazy dog',
      popularity: font.popularity,
      variants: font.variants,
      subsets: font.subsets,
      description: font.description
    }));

    this.saveToCache(cacheKey, results);
    return results;
  }

  normalizeWeight(variant) {
    const weightMap = {
      '100': 'light',
      '200': 'light',
      '300': 'light',
      '400': 'regular',
      '500': 'medium',
      '600': 'medium',
      '700': 'bold',
      '800': 'bold',
      '900': 'bold'
    };
    return weightMap[variant] || 'regular';
  }

  // ===== UI MESSAGES & BANNERS =====

  showQuotaBanner() {
    const existingBanner = document.getElementById('quota-banner');
    if (existingBanner) return;

    const banner = document.createElement('div');
    banner.id = 'quota-banner';
    banner.className = 'quota-banner';
    
    const currentUsage = this.getCurrentQuotaUsage();
    const percentage = Math.round((currentUsage / this.maxRequestsPerDay) * 100);
    
    banner.innerHTML = `
      <div class="quota-content">
        <div class="quota-info">
          <span class="quota-icon">🍳</span>
          <div class="quota-text">
            <span class="quota-label">Daily searches</span>
            <div class="quota-progress">
              <div class="quota-bar">
                <div class="quota-fill" style="width: ${percentage}%"></div>
              </div>
              <span class="quota-numbers">${currentUsage}/${this.maxRequestsPerDay}</span>
            </div>
          </div>
        </div>
        <div class="quota-actions">
          <button class="btn btn-coffee" onclick="fontAPI.showCoffeeModal()">
            ☕ Buy me coffee
          </button>
          <button class="quota-close" onclick="fontAPI.hideBanner()">&times;</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    
    // Animation d'apparition
    setTimeout(() => {
      banner.classList.add('show');
    }, 1000);
  }

  updateQuotaBanner(currentUsage) {
    const banner = document.getElementById('quota-banner');
    if (!banner) return;

    const percentage = Math.round((currentUsage / this.maxRequestsPerDay) * 100);
    const fill = banner.querySelector('.quota-fill');
    const numbers = banner.querySelector('.quota-numbers');
    
    if (fill) fill.style.width = `${percentage}%`;
    if (numbers) numbers.textContent = `${currentUsage}/${this.maxRequestsPerDay}`;

    // Changer la couleur selon le pourcentage
    if (fill) {
      if (percentage > 90) {
        fill.style.background = 'var(--error)';
      } else if (percentage > 70) {
        fill.style.background = 'var(--warning)';
      } else {
        fill.style.background = 'linear-gradient(90deg, var(--primary-orange), var(--primary-red))';
      }
    }
  }

  showQuotaExceededMessage() {
    this.showNotification(
      '🍳 Quota quotidien atteint ! Passage en mode dégradé. Les polices de base restent disponibles.',
      'warning',
      8000
    );
  }

  showCoffeeModal() {
    const modal = document.createElement('div');
    modal.className = 'coffee-modal';
    modal.innerHTML = `
      <div class="coffee-content">
        <div class="modal-header">
          <h3>☕ Support FontCook</h3>
          <button class="modal-close" onclick="this.closest('.coffee-modal').remove()">&times;</button>
        </div>
        <div class="coffee-hero">
          <div class="chef-emoji">👨‍🍳</div>
        </div>
        
        <div class="coffee-benefits">
          <h5>Found it useful? ☕</h5>
          <p style="text-align: center; color: var(--text-muted); margin: var(--space-lg) 0;">
            If you'd like to buy me a coffee, that would be amazing!
          </p>
        </div>
        
        <div class="coffee-actions">
          <a href="#" class="btn btn-coffee-disabled">
            ☕ Buy me a coffee (Coming soon)
          </a>
          <button class="btn btn-coffee-alt" onclick="this.closest('.coffee-modal').remove()">
            Close
          </button>
        </div>
        
        <div class="coffee-thanks">
          <small>Thank you for your interest! 🙏</small>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    
    // Animation d'apparition
    setTimeout(() => {
      modal.classList.add('show');
    }, 100);

    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  hideBanner() {
    const banner = document.getElementById('quota-banner');
    if (banner) {
      banner.classList.add('hide');
      setTimeout(() => {
        banner.remove();
      }, 300);
    }
  }

  showNotification(message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="notification-text">${message}</span>
      <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'apparition
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    // Auto-suppression
    setTimeout(() => {
      if (notification.parentElement) {
        notification.classList.add('hide');
        setTimeout(() => {
          notification.remove();
        }, 300);
      }
    }, duration);
  }

  // ===== STATES & ERROR HANDLING =====

  getLoadingMessage() {
    const messages = [
      'Let FontCook cook... 👨‍🍳',
      'Cooking fonts... 🍳',
      'Preparing your typography... ⏰',
      'Chef is searching for the best fonts... 🔍',
      'Cooking characters... 🔥',
      'Typography seasoning... ✨'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  getEmptyStateMessage(context = 'search') {
    const messages = {
      search: {
        icon: '🍽️',
        title: 'No fonts found',
        message: 'FontCook couldn\'t find any fonts matching your search. Try different ingredients!'
      },
      error: {
        icon: '🔥',
        title: 'Oops! Something went wrong',
        message: 'An error occurred in the kitchen. The chef is trying to fix it!'
      },
      quota: {
        icon: '⏰',
        title: 'Daily quota reached',
        message: 'Daily quota is reached, but you can still enjoy our basic fonts!'
      },
      offline: {
        icon: '📡',
        title: 'Connection interrupted',
        message: 'Unable to connect to servers. Check your internet connection.'
      }
    };
    
    return messages[context] || messages.error;
  }

  // Cache management (updated methods)
  saveToCache(key, data) {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    this.cache.set(key, cacheData);
    
    // Auto-save to localStorage every 10 cache operations
    if (this.cache.size % 10 === 0) {
      this.saveToLocalStorage();
    }
  }

  getFromCache(key) {
    const cacheData = this.cache.get(key);
    
    if (!cacheData) {
      return null;
    }

    // Check if cache is expired
    if (Date.now() - cacheData.timestamp > this.cacheExpiry) {
      this.cache.delete(key);
      return null;
    }

    return cacheData.data;
  }

  clearCache() {
    this.cache.clear();
    localStorage.removeItem(this.localStorageKey);
    console.log('🍳 FontCook: Cache nettoyé');
  }

  // Get all fonts (fallback to local data)
  async getAllFonts() {
    const cacheKey = 'all-fonts';
    const cached = this.getFromCache(cacheKey);
    
    if (cached) {
      return cached;
    }

    try {
      if (!this.quotaExceeded) {
        const apiData = await this.makeAPIRequest(this.apiURL, {
          key: this.apiKey,
          sort: 'popularity',
          subset: 'latin'
        });
        
        if (apiData && apiData.items) {
          const allFonts = apiData.items.map(font => ({
            name: font.family,
            family: `'${font.family}', ${font.category}`,
            category: font.category,
            preview: 'The quick brown fox jumps over the lazy dog',
            popularity: Math.max(60, 100 - apiData.items.indexOf(font) * 1),
            variants: font.variants || ['400'],
            subsets: font.subsets || ['latin'],
            description: font.menu || `A beautiful ${font.category} font`
          }));
          
          this.saveToCache(cacheKey, allFonts);
          this.saveToLocalStorage();
          return allFonts;
        }
      }
    } catch (error) {
      console.warn('🍳 FontCook: getAllFonts en mode dégradé:', error.message);
    }

    // Fallback
    const fallbackFonts = this.fallbackFonts.map(font => ({
      name: font.family,
      family: `'${font.family}', ${font.category}`,
      category: font.category,
      preview: 'The quick brown fox jumps over the lazy dog',
      popularity: font.popularity,
      variants: font.variants,
      subsets: font.subsets,
      description: font.description
    }));

    this.saveToCache(cacheKey, fallbackFonts);
    return fallbackFonts;
  }
}

// Initialize API manager
const fontAPI = new FontAPI();

// Export for global access
window.fontAPI = fontAPI;
