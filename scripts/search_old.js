// ===== SEARCH FUNCTIONALITY =====

class SearchManager {
  constructor() {
    this.searchInput = null;
    this.searchButton = null;
    this.categoryFilter = null;
    this.weightFilter = null;
    this.fontGrid = null;
    this.resultsCount = null;
    this.cookingLoader = null;
    this.loadMoreButton = null;
    this.previewTextInput = null;
    this.sizeButtons = null;
    
    this.currentQuery = '';
    this.currentFilters = {
      category: '',
      weight: ''
    };
    this.currentResults = [];
    this.displayedResults = [];
    this.resultsPerPage = 8; // Limité à 8 fonts max
    this.currentPage = 1;
    this.currentPreviewText = 'The quick brown fox jumps over the lazy dog';
    this.currentSize = 18;
    
    // Use the massive semantic dictionary
    this.semanticDictionary = typeof SEMANTIC_DICTIONARY !== 'undefined' ? SEMANTIC_DICTIONARY : {
      // === STYLES VISUELS ===
      'vintage': {
        synonyms: ['vintage', 'retro', 'old', 'classic', 'antique', 'ancient', 'nostalgic', 'aged', 'historic'],
        contexts: ['decoration', 'restaurant', 'bar', 'boutique', 'artisanat'],
        fonts: ['serif', 'slab', 'decorative']
      },
      'elegant': {
        synonyms: ['elegant', 'sophisticated', 'refined', 'classy', 'graceful', 'chic', 'luxe', 'premium', 'noble'],
        contexts: ['mode', 'beaute', 'mariage', 'hotel', 'bijouterie', 'parfum'],
        fonts: ['serif', 'script', 'thin']
      },
      'modern': {
        synonyms: ['modern', 'contemporary', 'clean', 'minimal', 'simple', 'fresh', 'actuel', 'tendance'],
        contexts: ['tech', 'startup', 'design', 'architecture', 'digital'],
        fonts: ['sans-serif', 'geometric', 'minimal']
      },
      'playful': {
        synonyms: ['playful', 'fun', 'cheerful', 'happy', 'joyful', 'coloré', 'amusant', 'dynamique'],
        contexts: ['enfant', 'jeu', 'animation', 'evenement', 'fete'],
        fonts: ['display', 'rounded', 'decorative']
      },

      // === DOMAINES D'ACTIVITÉ ===
      'cosmetique': {
        synonyms: ['cosmétique', 'beauté', 'maquillage', 'skincare', 'parfum', 'spa', 'wellness', 'soin'],
        contexts: ['elegant', 'feminin', 'doux', 'premium'],
        fonts: ['script', 'serif', 'thin', 'elegant']
      },
      'cuisine': {
        synonyms: ['cuisine', 'restaurant', 'food', 'gastronomie', 'chef', 'bistrot', 'brasserie', 'cafe'],
        contexts: ['vintage', 'artisanal', 'chaleureux', 'gourmand'],
        fonts: ['serif', 'slab', 'script', 'handwritten']
      },
      'automobile': {
        synonyms: ['automobile', 'voiture', 'garage', 'mécanique', 'motor', 'auto', 'véhicule', 'conduite'],
        contexts: ['masculin', 'technique', 'puissant', 'vitesse'],
        fonts: ['sans-serif', 'bold', 'industrial', 'strong']
      },
      'tech': {
        synonyms: ['technologie', 'digital', 'software', 'app', 'web', 'startup', 'innovation', 'code'],
        contexts: ['modern', 'clean', 'professionnel', 'futuriste'],
        fonts: ['sans-serif', 'monospace', 'geometric', 'minimal']
      },
      'mode': {
        synonyms: ['mode', 'fashion', 'vêtement', 'style', 'tendance', 'couture', 'prêt-à-porter'],
        contexts: ['elegant', 'chic', 'moderne', 'artistique'],
        fonts: ['serif', 'script', 'display', 'fashion']
      },
      'sport': {
        synonyms: ['sport', 'fitness', 'gym', 'athlétique', 'performance', 'training', 'workout'],
        contexts: ['dynamique', 'energie', 'mouvement', 'puissant'],
        fonts: ['sans-serif', 'bold', 'impact', 'strong']
      },
      'enfant': {
        synonyms: ['enfant', 'kids', 'bébé', 'jouet', 'école', 'éducation', 'famille', 'junior'],
        contexts: ['playful', 'coloré', 'doux', 'amusant'],
        fonts: ['rounded', 'playful', 'comic', 'friendly']
      },
      'medical': {
        synonyms: ['médical', 'santé', 'hôpital', 'docteur', 'clinique', 'pharmacie', 'soin', 'thérapie'],
        contexts: ['professionnel', 'serieux', 'confiance', 'clean'],
        fonts: ['sans-serif', 'clean', 'readable', 'professional']
      },
      'finance': {
        synonyms: ['finance', 'banque', 'assurance', 'investissement', 'conseil', 'comptable', 'audit'],
        contexts: ['serieux', 'professionnel', 'confiance', 'stable'],
        fonts: ['serif', 'classic', 'professional', 'trustworthy']
      },
      'art': {
        synonyms: ['art', 'artistique', 'créatif', 'galerie', 'peinture', 'sculpture', 'design', 'culture'],
        contexts: ['créatif', 'unique', 'expressif', 'avant-garde'],
        fonts: ['display', 'artistic', 'unique', 'creative']
      },

      // === CARACTÉRISTIQUES TYPOGRAPHIQUES ===
      'bold': {
        synonyms: ['bold', 'strong', 'heavy', 'thick', 'fat', 'gras', 'épais', 'puissant'],
        contexts: ['impact', 'titre', 'masculine', 'force'],
        fonts: ['bold', 'black', 'heavy', 'strong']
      },
      'light': {
        synonyms: ['light', 'thin', 'slim', 'delicate', 'fine', 'léger', 'délicat'],
        contexts: ['elegant', 'feminin', 'subtil', 'raffiné'],
        fonts: ['thin', 'light', 'ultralight', 'delicate']
      },
      'script': {
        synonyms: ['script', 'handwriting', 'cursive', 'calligraphy', 'handwritten', 'manuscrit', 'écrit'],
        contexts: ['personnel', 'invitation', 'signature', 'artisanal'],
        fonts: ['script', 'cursive', 'handwritten', 'calligraphy']
      },

      // === AMBIANCES & ÉMOTIONS ===
      'luxe': {
        synonyms: ['luxe', 'premium', 'haut-de-gamme', 'prestige', 'exclusif', 'raffiné'],
        contexts: ['elegant', 'cher', 'qualite', 'elite'],
        fonts: ['serif', 'elegant', 'classic', 'premium']
      },
      'naturel': {
        synonyms: ['naturel', 'bio', 'écologique', 'vert', 'organic', 'nature', 'environnement'],
        contexts: ['authentique', 'sain', 'responsable', 'terre'],
        fonts: ['organic', 'handwritten', 'natural', 'earthy']
      },
      'industriel': {
        synonyms: ['industriel', 'factory', 'manufacture', 'métal', 'béton', 'urbain', 'brut'],
        contexts: ['masculin', 'robuste', 'technique', 'urban'],
        fonts: ['industrial', 'stencil', 'mechanical', 'bold']
      }
    };
    
    this.init();
  }

  init() {
    this.setupElements();
    this.setupEventListeners();
    this.loadPopularFonts();
  }

  setupElements() {
    this.searchInput = document.getElementById('search-input');
    this.searchButton = document.getElementById('search-btn');
    this.fontGrid = document.getElementById('font-grid');
    this.resultsCount = document.getElementById('results-count');
    this.cookingLoader = document.getElementById('cooking-loader');
    this.loadMoreButton = document.getElementById('load-more');
    this.previewTextInput = document.getElementById('preview-text');
    this.fontSizeInput = document.getElementById('font-size-input');
    this.tagButtons = document.querySelectorAll('.tag-btn-large');
    this.previewToggle = document.getElementById('preview-toggle');
    this.previewControls = document.getElementById('preview-controls');
    this.previewContent = document.getElementById('preview-content');
    this.sizeUpButton = document.querySelector('.size-up');
    this.sizeDownButton = document.querySelector('.size-down');
  }

  setupEventListeners() {
    // Main search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
      
      this.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleSearch(e.target.value);
        }
      });
    }

    // Search button
    if (this.searchButton) {
      this.searchButton.addEventListener('click', () => {
        this.handleSearch(this.searchInput.value);
      });
    }

    // Filters
    if (this.categoryFilter) {
      this.categoryFilter.addEventListener('change', (e) => {
        this.currentFilters.category = e.target.value;
        this.applyFilters();
      });
    }

    if (this.weightFilter) {
      this.weightFilter.addEventListener('change', (e) => {
        this.currentFilters.weight = e.target.value;
        this.applyFilters();
      });
    }

    // Load more button
    if (this.loadMoreButton) {
      this.loadMoreButton.addEventListener('click', () => {
        this.loadMoreResults();
      });
    }

    // Hero CTA button
    const startCookingBtn = document.getElementById('start-cooking');
    if (startCookingBtn) {
      startCookingBtn.addEventListener('click', () => {
        this.scrollToSearch();
      });
    }

    // Preview text control
    if (this.previewTextInput) {
      this.previewTextInput.addEventListener('input', (e) => {
        this.currentPreviewText = e.target.value || 'The quick brown fox jumps over the lazy dog';
        this.updateAllPreviews();
      });
    }

    // Font size input
    if (this.fontSizeInput) {
      this.fontSizeInput.addEventListener('input', (e) => {
        const size = parseInt(e.target.value);
        if (size >= 8 && size <= 72) {
          this.currentSize = size;
          this.updateAllPreviews();
        }
      });
      
      this.fontSizeInput.addEventListener('change', (e) => {
        const size = parseInt(e.target.value);
        if (size < 8) {
          e.target.value = 8;
          this.currentSize = 8;
        } else if (size > 72) {
          e.target.value = 72;
          this.currentSize = 72;
        } else {
          this.currentSize = size;
        }
        this.updateAllPreviews();
      });
    }

    // Tag buttons
    this.tagButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Remove active from all tag buttons
        this.tagButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to clicked button
        e.target.classList.add('active');
        
        const tag = e.target.getAttribute('data-tag');
        this.searchInput.value = tag;
        this.handleSearch(tag);
      });
    });

    // Preview toggle button
    if (this.previewToggle) {
      this.previewToggle.addEventListener('click', () => {
        this.togglePreviewControls();
      });
    }

    // Custom size arrows
    if (this.sizeUpButton) {
      this.sizeUpButton.addEventListener('click', () => {
        this.adjustFontSize(1);
      });
    }

    if (this.sizeDownButton) {
      this.sizeDownButton.addEventListener('click', () => {
        this.adjustFontSize(-1);
      });
    }
  }

  // Fonction pour normaliser une chaîne (supprime accents et met en minuscules)
  normalizeString(str) {
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  // Fonction avancée pour expandre une query avec croisement sémantique
  expandQuery(query) {
    const normalizedQuery = this.normalizeString(query);
    const terms = normalizedQuery.split(/\s+|,/).filter(term => term.length > 0);
    let expandedTerms = [...terms];
    let matchedContexts = new Set();
    let matchedFontTypes = new Set();

    // Phase 1: Expansion directe des synonymes
    terms.forEach(term => {
      Object.keys(this.semanticDictionary).forEach(conceptKey => {
        const concept = this.semanticDictionary[conceptKey];
        
        // Si le terme correspond à un synonyme
        if (concept.synonyms.some(synonym => 
          this.normalizeString(synonym).includes(term) || 
          term.includes(this.normalizeString(synonym))
        )) {
          // Ajouter tous les synonymes
          expandedTerms = [...expandedTerms, ...concept.synonyms];
          
          // Collecter les contextes associés
          concept.contexts.forEach(context => matchedContexts.add(context));
          
          // Collecter les types de fonts recommandés
          concept.fonts.forEach(fontType => matchedFontTypes.add(fontType));
        }
      });
    });

    // Phase 2: Expansion contextuelle croisée
    // Si on a trouvé des contextes, chercher d'autres concepts liés
    matchedContexts.forEach(context => {
      Object.keys(this.semanticDictionary).forEach(conceptKey => {
        const concept = this.semanticDictionary[conceptKey];
        
        // Si ce concept partage des contextes ou si le contexte est dans ses synonymes
        if (concept.contexts.includes(context) || 
            concept.synonyms.includes(context) ||
            conceptKey === context) {
          
          // Ajouter une partie de ses synonymes (les plus pertinents)
          const relevantSynonyms = concept.synonyms.slice(0, 3);
          expandedTerms = [...expandedTerms, ...relevantSynonyms];
          
          // Ajouter ses types de fonts
          concept.fonts.forEach(fontType => matchedFontTypes.add(fontType));
        }
      });
    });

    // Phase 3: Ajouter les types de fonts comme termes de recherche
    matchedFontTypes.forEach(fontType => {
      expandedTerms.push(fontType);
    });

    // Retourner les termes uniques avec un score de pertinence implicite
    const uniqueTerms = [...new Set(expandedTerms)];
    
    // Garder une trace des contextes et types de fonts pour le scoring
    this.lastSearchContext = {
      contexts: Array.from(matchedContexts),
      fontTypes: Array.from(matchedFontTypes),
      originalTerms: terms
    };

    return uniqueTerms;
  }

  // Fonction pour scorer la pertinence d'une font selon le contexte
  scoreFontRelevance(font, searchContext) {
    let score = 0;
    const fontName = this.normalizeString(font.family);
    const fontCategory = this.normalizeString(font.category);

    if (!searchContext) return score;

    // Score basé sur les types de fonts recommandés
    searchContext.fontTypes.forEach(fontType => {
      if (fontCategory.includes(fontType) || fontName.includes(fontType)) {
        score += 10;
      }
    });

    // Score basé sur les contextes
    searchContext.contexts.forEach(context => {
      const contextConcept = this.semanticDictionary[context];
      if (contextConcept) {
        // Vérifier si le nom de la font contient des indices du contexte
        contextConcept.synonyms.forEach(synonym => {
          if (fontName.includes(this.normalizeString(synonym))) {
            score += 5;
          }
        });
      }
    });

    // Bonus pour les termes originaux de la recherche
    searchContext.originalTerms.forEach(term => {
      if (fontName.includes(term) || fontCategory.includes(term)) {
        score += 15;
      }
    });

    return score;
  }

  async handleSearch(query) {
    if (!query.trim()) {
      this.loadPopularFonts();
      return;
    }

    this.currentQuery = query;
    this.currentPage = 1;
    this.showLoader();
    
    try {
      // Simulate API call delay
      await this.delay(500);
      
      // Expand query with semantic dictionary
      const expandedTerms = this.expandQuery(query);
      const expandedQuery = expandedTerms.join(' ');
      
      // Debug: afficher les correspondances trouvées
      if (this.lastSearchContext) {
        console.log('🔍 Recherche sémantique:', {
          query: query,
          contextes: this.lastSearchContext.contexts,
          fontTypes: this.lastSearchContext.fontTypes,
          expandedTerms: expandedTerms.slice(0, 10) // Limiter l'affichage
        });
      }
      
      const results = await window.fontAPI.searchFonts(expandedQuery, this.currentFilters);
      this.displayResults(results);
    } catch (error) {
      console.error('Search error:', error);
      this.showError('Erreur lors de la recherche. Veuillez réessayer.');
    } finally {
      this.hideLoader();
    }
  }

  async applyFilters() {
    if (!this.currentQuery) {
      this.loadPopularFonts();
      return;
    }

    this.currentPage = 1;
    this.showLoader();

    try {
      await this.delay(500);
      const results = await window.fontAPI.searchFonts(this.currentQuery, this.currentFilters);
      this.displayResults(results);
    } catch (error) {
      console.error('Filter error:', error);
      this.showError('Erreur lors du filtrage. Veuillez réessayer.');
    } finally {
      this.hideLoader();
    }
  }

  async loadPopularFonts() {
    this.showLoader();
    
    try {
      const popularFonts = await window.fontAPI.getPopularFonts();
      this.displayResults(popularFonts, 'Polices populaires');
    } catch (error) {
      console.error('Popular fonts error:', error);
      this.showError('Erreur lors du chargement des polices populaires.');
    } finally {
      this.hideLoader();
    }
  }

  displayResults(results, title = null) {
    // Appliquer le scoring sémantique si on a un contexte de recherche
    if (this.lastSearchContext && results.length > 0) {
      results = results.map(font => ({
        ...font,
        relevanceScore: this.scoreFontRelevance(font, this.lastSearchContext)
      })).sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
    }
    
    this.currentResults = results;
    this.displayedResults = results.slice(0, this.resultsPerPage);
    
    if (this.fontGrid) {
      this.fontGrid.innerHTML = '';
      
      if (this.displayedResults.length === 0) {
        this.showNoResults();
        return;
      }
      
      this.displayedResults.forEach((font, index) => {
        const fontCard = this.createFontCard(font);
        // Add staggered animation
        setTimeout(() => {
          fontCard.style.opacity = '1';
          fontCard.style.transform = 'translateY(0)';
        }, index * 100);
        
        this.fontGrid.appendChild(fontCard);
      });
    }
    
    this.updateResultsCount(results.length, title);
    this.updateLoadMoreButton();
  }

  createFontCard(font) {
    const card = document.createElement('div');
    card.className = 'font-card-enhanced';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease';
    
    const previewText = this.currentPreviewText;
    const fontSize = this.currentSize;
    
    card.innerHTML = `
      <div class="font-preview-multi" style="font-family: ${font.family}">
        <div class="font-preview-size" style="font-size: ${fontSize}px;">
          ${previewText}
        </div>
      </div>
      
      <div class="font-meta">
        <div class="font-info">
          <h3 style="font-family: ${font.family}; font-weight: 400;">${font.name}</h3>
          <div class="font-category-enhanced">${font.category}</div>
        </div>
      </div>
      
      <div class="font-actions-enhanced">
        <button class="font-action-btn-enhanced preview-btn" onclick="fontSearch.previewFont('${font.family}', '${font.name}')">
          👁 Aperçu
        </button>
        <button class="font-action-btn-enhanced copy-css-btn" onclick="fontSearch.copyFontCode('${font.family}', '${font.name}')">
          {} CSS
        </button>
      </div>
    `;
    
    return card;
  }

  loadMoreResults() {
    const nextResults = this.currentResults.slice(
      this.displayedResults.length,
      this.displayedResults.length + this.resultsPerPage
    );
    
    if (nextResults.length === 0) return;
    
    this.displayedResults = [...this.displayedResults, ...nextResults];
    
    nextResults.forEach((font, index) => {
      const fontCard = this.createFontCard(font);
      setTimeout(() => {
        fontCard.style.opacity = '1';
        fontCard.style.transform = 'translateY(0)';
      }, index * 100);
      
      this.fontGrid.appendChild(fontCard);
    });
    
    this.updateLoadMoreButton();
  }

  updateResultsCount(count, title = null) {
    if (this.resultsCount) {
      if (title) {
        this.resultsCount.textContent = title;
      } else {
        const scoreInfo = this.lastSearchContext ? ' (triées par pertinence)' : '';
        this.resultsCount.textContent = `${count} police${count > 1 ? 's' : ''} trouvée${count > 1 ? 's' : ''}${scoreInfo}`;
      }
    }
  }

  updateLoadMoreButton() {
    if (this.loadMoreButton) {
      const hasMore = this.displayedResults.length < this.currentResults.length;
      this.loadMoreButton.style.display = hasMore ? 'block' : 'none';
    }
  }

  showLoader() {
    if (this.cookingLoader) {
      // Utiliser les messages sympas de l'API
      const loadingMessage = window.fontAPI ? window.fontAPI.getLoadingMessage() : 'Let FontCook cook... 👨‍🍳';
      this.cookingLoader.textContent = loadingMessage;
      this.cookingLoader.classList.remove('hidden');
    }
  }

  hideLoader() {
    if (this.cookingLoader) {
      this.cookingLoader.classList.add('hidden');
    }
  }

  showNoResults() {
    const emptyState = window.fontAPI ? window.fontAPI.getEmptyStateMessage('search') : {
      icon: '🍽️',
      title: 'Aucun plat trouvé',
      message: 'Le chef n\'a pas trouvé de police correspondant à votre recherche. Essayez avec d\'autres ingrédients !'
    };
    
    if (this.fontGrid) {
      this.fontGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">${emptyState.icon}</div>
          <h3>${emptyState.title}</h3>
          <p>${emptyState.message}</p>
          <div class="no-results-actions">
            <button class="btn btn-primary" onclick="fontSearch.loadPopularFonts()">
              🍳 Voir les polices populaires
            </button>
          </div>
        </div>
      `;
    }
  }

  showError(message, errorType = 'error') {
    const errorState = window.fontAPI ? window.fontAPI.getEmptyStateMessage(errorType) : {
      icon: '🔥',
      title: 'Oops ! Quelque chose a brûlé',
      message: message || 'Une erreur s\'est produite en cuisine. Le chef essaie de réparer ça !'
    };
    
    if (this.fontGrid) {
      this.fontGrid.innerHTML = `
        <div class="error-message">
          <div class="error-icon">${errorState.icon}</div>
          <h3>${errorState.title}</h3>
          <p>${errorState.message}</p>
          <div class="error-actions">
            <button class="btn btn-secondary" onclick="location.reload()">
              🔄 Recommencer
            </button>
            <button class="btn btn-primary" onclick="fontSearch.loadPopularFonts()">
              🍳 Mode dégradé
            </button>
          </div>
        </div>
      `;
    }
  }

  scrollToSearch() {
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.focus();
        }
      }, 500);
    }
  }

  updateAllPreviews() {
    const fontCards = document.querySelectorAll('.font-card-enhanced');
    fontCards.forEach(card => {
      const previewElement = card.querySelector('.font-preview-size');
      if (previewElement) {
        previewElement.textContent = this.currentPreviewText;
        previewElement.style.fontSize = `${this.currentSize}px`;
      }
    });
    
    // Update the font size input if it exists and is different
    if (this.fontSizeInput && parseInt(this.fontSizeInput.value) !== this.currentSize) {
      this.fontSizeInput.value = this.currentSize;
    }
  }

  previewFont(fontFamily, fontName = '') {
    // Create comprehensive preview modal
    const modal = document.createElement('div');
    modal.className = 'font-preview-modal';
    
    const cleanFontFamily = fontFamily.replace(/'/g, '');
    const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(cleanFontFamily)}:wght@300;400;500;600;700&display=swap`;
    
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Aperçu complet de ${fontName || cleanFontFamily}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="font-preview-hero" style="font-family: ${fontFamily}; font-size: 48px; margin-bottom: 2rem; text-align: center;">
            ${this.currentPreviewText}
          </div>
          
          <div class="font-preview-samples">
            <div class="preview-sample">
              <h4>Alphabet</h4>
              <p style="font-family: ${fontFamily}; font-size: 24px;">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                abcdefghijklmnopqrstuvwxyz<br>
                0123456789 !@#$%^&*()
              </p>
            </div>
            
            <div class="preview-sample">
              <h4>Tailles courantes</h4>
              <div style="font-family: ${fontFamily};">
                <p style="font-size: 12px;"><strong>12px:</strong> Texte de note et mentions légales</p>
                <p style="font-size: 14px;"><strong>14px:</strong> Texte de corps standard</p>
                <p style="font-size: 16px;"><strong>16px:</strong> Texte de lecture confortable</p>
                <p style="font-size: 18px;"><strong>18px:</strong> Texte d'introduction</p>
                <p style="font-size: 24px;"><strong>24px:</strong> Sous-titres</p>
                <p style="font-size: 32px;"><strong>32px:</strong> Titres</p>
              </div>
            </div>
            
            <div class="preview-sample">
              <h4>Graisses disponibles</h4>
              <div style="font-family: ${fontFamily};">
                <p style="font-weight: 300;">Light (300): Texte léger et élégant</p>
                <p style="font-weight: 400;">Regular (400): Texte standard</p>
                <p style="font-weight: 500;">Medium (500): Texte semi-gras</p>
                <p style="font-weight: 600;">Semi-Bold (600): Texte accentué</p>
                <p style="font-weight: 700;">Bold (700): Texte gras pour les titres</p>
              </div>
            </div>
            
            <div class="preview-sample">
              <h4>Exemples d'usage</h4>
              <div style="font-family: ${fontFamily};">
                <div style="margin-bottom: 1rem;">
                  <h5 style="font-size: 28px; font-weight: 600; margin: 0;">Titre Principal</h5>
                  <p style="font-size: 16px; line-height: 1.6; margin: 0.5rem 0;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <small style="font-size: 12px; color: #666;">Publié le 15 janvier 2024</small>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-actions">
            <button class="btn btn-secondary" onclick="fontSearch.copyFontCode('${fontFamily}', '${fontName}')">
              📋 Copier le CSS
            </button>
            <button class="btn btn-primary" onclick="fontSearch.copyGoogleFontsIntegration('${cleanFontFamily}')">
              🔗 Copier l'intégration Google Fonts
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animation d'apparition
    setTimeout(() => {
      modal.classList.add('show');
    }, 100);
    
    // Close modal functionality
    const closeModal = () => {
      modal.remove();
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    // Escape key to close
    document.addEventListener('keydown', function escapeHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    });
  }

  copyFontCode(fontFamily, fontName = '', buttonElement = null) {
    // Enhanced CSS code with complete integration
    const fontFamilyClean = fontFamily.split(',')[0].trim().replace(/['"]/g, '');
    const code = `/* ${fontName || fontFamilyClean} - Generated by FontCook */

/* CSS styles */
.${fontFamilyClean.toLowerCase().replace(/\s+/g, '-')}-font {
  font-family: ${fontFamily};
  font-size: ${this.currentSize}px;
  line-height: 1.4;
}

/* Usage examples */
.title { 
  font-family: ${fontFamily}; 
  font-size: 32px; 
  font-weight: 600; 
}
.body { 
  font-family: ${fontFamily}; 
  font-size: 16px; 
  font-weight: 400; 
}`;

    this.copyToClipboard(code, `CSS de ${fontName || fontFamilyClean} copié !`, buttonElement);
  }

  copyGoogleFontsIntegration(fontFamily) {
    const cleanFamily = fontFamily.replace(/\s+/g, '+');
    const code = `<!-- Google Fonts Integration for ${fontFamily} -->

<!-- Option 1: HTML Link -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${cleanFamily}:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Option 2: CSS Import -->
<style>
@import url('https://fonts.googleapis.com/css2?family=${cleanFamily}:wght@300;400;500;600;700&display=swap');
</style>

<!-- Option 3: JavaScript -->
<script>
WebFont.load({
  google: {
    families: ['${fontFamily}:300,400,500,600,700']
  }
});
</script>

<!-- CSS Usage -->
<style>
body {
  font-family: '${fontFamily}', sans-serif;
}
</style>`;

    this.copyToClipboard(code, `Code d'intégration Google Fonts pour ${fontFamily} copié !`);
  }

  copyToClipboard(text, successMessage, buttonElement = null) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showNotification(successMessage, 'success');
        this.updateCopyButton(buttonElement, true);
      }).catch(() => {
        this.fallbackCopy(text);
        this.showNotification(successMessage, 'success');
        this.updateCopyButton(buttonElement, true);
      });
    } else {
      this.fallbackCopy(text);
      this.showNotification(successMessage, 'success');
      this.updateCopyButton(buttonElement, true);
    }
  }

  fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      this.showNotification('CSS copié !', 'success');
    } catch (err) {
      this.showNotification('Erreur lors de la copie', 'error');
    }
    
    document.body.removeChild(textArea);
  }

  updateCopyButton(buttonElement, copied) {
    if (!buttonElement) {
      // Find button by onclick attribute
      const buttons = document.querySelectorAll('.copy-css-btn');
      buttons.forEach(btn => {
        if (btn.onclick && btn.onclick.toString().includes('copyFontCode')) {
          buttonElement = btn;
        }
      });
    }
    
    if (buttonElement) {
      if (copied) {
        buttonElement.classList.add('copied');
        buttonElement.innerHTML = '✅ Copié';
        
        setTimeout(() => {
          buttonElement.classList.remove('copied');
          buttonElement.innerHTML = '📋 CSS';
        }, 2000);
      }
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="notification-text">${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Toggle preview controls visibility
  togglePreviewControls() {
    const toggleIcon = this.previewToggle.querySelector('.toggle-icon');
    
    if (this.previewControls.classList.contains('minimized')) {
      this.previewControls.classList.remove('minimized');
      toggleIcon.textContent = '−';
    } else {
      this.previewControls.classList.add('minimized');
      toggleIcon.textContent = '+';
    }
  }

  // Adjust font size with custom arrows
  adjustFontSize(direction) {
    const currentSize = parseInt(this.fontSizeInput.value);
    const newSize = Math.max(8, Math.min(72, currentSize + direction));
    
    this.fontSizeInput.value = newSize;
    this.currentSize = newSize;
    this.updateAllPreviews();
  }
}

// Initialize search manager
let fontSearch;

document.addEventListener('DOMContentLoaded', () => {
  fontSearch = new SearchManager();
});

// Export for global access
window.fontSearch = fontSearch;