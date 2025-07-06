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
    this.resultsPerPage = 20; // Augmenté pour plus de résultats
    this.currentPage = 1;
    this.currentPreviewText = 'The quick brown fox jumps over the lazy dog';
    this.currentSize = 18;
    
    // Use the massive semantic dictionary (5000+ words!)
    try {
      this.semanticDictionary = (typeof SEMANTIC_DICTIONARY !== 'undefined' && SEMANTIC_DICTIONARY) ? SEMANTIC_DICTIONARY : {};
      this.keywordCollections = (typeof KEYWORD_COLLECTIONS !== 'undefined' && KEYWORD_COLLECTIONS) ? KEYWORD_COLLECTIONS : {};
      this.phraseProcessor = new PhraseProcessor();
      console.log('🍳 FontCook: Enhanced semantic dictionary loaded:', Object.keys(this.semanticDictionary).length, 'concepts');
      console.log('🍳 FontCook: Keyword collections loaded:', Object.keys(this.keywordCollections).length, 'categories');
    } catch (error) {
      console.warn('🍳 FontCook: Error loading semantic dictionary:', error);
      this.semanticDictionary = {};
      this.keywordCollections = {};
      this.phraseProcessor = null;
    }

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

    // Score basé sur les polices directement recommandées dans le dictionnaire
    searchContext.fontTypes.forEach(fontType => {
      // Vérifier si le nom de la police correspond exactement à ceux du dictionnaire
      if (this.normalizeString(fontType) === fontName.replace(/'/g, '').toLowerCase()) {
        score += 50; // Score très élevé pour correspondance exacte
      }
      // Vérifier si le nom partiel correspond
      else if (fontName.includes(this.normalizeString(fontType)) || 
               this.normalizeString(fontType).includes(fontName.replace(/'/g, ''))) {
        score += 25;
      }
      // Score basé sur les catégories génériques
      else if (fontCategory.includes(fontType)) {
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
      
      let expandedQuery, searchContext;
      
      // Use intelligent search if available, fallback to legacy
      if (this.phraseProcessor && typeof intelligentFontSearch !== 'undefined') {
        const intelligentResults = intelligentFontSearch(query);
        
        // Extract all synonyms from intelligent results for API search
        const allSynonyms = new Set();
        intelligentResults.results.forEach(result => {
          if (result.data.synonyms) {
            result.data.synonyms.forEach(synonym => allSynonyms.add(synonym));
          }
        });
        
        expandedQuery = Array.from(allSynonyms).slice(0, 20).join(' '); // Limit to prevent API overload
        searchContext = {
          intelligence: intelligentResults,
          confidence: intelligentResults.confidence,
          interpretation: intelligentResults.interpretation
        };
        
        // Debug: Show intelligent search results
        console.log('🧠 Intelligent Search Results:', {
          query: query,
          interpretation: intelligentResults.interpretation,
          confidence: intelligentResults.confidence,
          concepts: intelligentResults.results.map(r => r.concept),
          expandedQuery: expandedQuery.slice(0, 100) + '...'
        });
        
        // Show search interpretation to user
        if (intelligentResults.confidence > 50) {
          this.showSearchInterpretation(intelligentResults.interpretation);
        }
        
      } else {
        // Fallback to legacy search
        const expandedTerms = this.expandQuery(query);
        expandedQuery = expandedTerms.join(' ');
        searchContext = this.lastSearchContext;
        
        console.log('🔍 Legacy Search:', {
          query: query,
          expandedTerms: expandedTerms.slice(0, 10)
        });
      }
      
      const results = await window.fontAPI.searchFonts(expandedQuery, this.currentFilters);
      this.displayResults(results, null, searchContext);
      
    } catch (error) {
      console.error('Search error:', error);
      this.showError('Error during search. Please try again.');
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
      this.showError('Error during filtering. Please try again.');
    } finally {
      this.hideLoader();
    }
  }

  async loadPopularFonts() {
    this.showLoader();
    
    try {
      const popularFonts = await window.fontAPI.getPopularFonts();
      this.displayResults(popularFonts, 'Popular fonts');
    } catch (error) {
      console.error('Popular fonts error:', error);
      this.showError('Error loading popular fonts.');
    } finally {
      this.hideLoader();
    }
  }

  displayResults(results, title = null, searchContext = null) {
    // Apply intelligent scoring if available, fallback to legacy
    if (searchContext) {
      if (searchContext.intelligence) {
        // Use intelligent search scoring
        results = results.map(font => ({
          ...font,
          relevanceScore: this.scoreIntelligentRelevance(font, searchContext.intelligence)
        })).sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
      } else if (this.lastSearchContext) {
        // Use legacy scoring
        results = results.map(font => ({
          ...font,
          relevanceScore: this.scoreFontRelevance(font, this.lastSearchContext)
        })).sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
      }
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
    
    // Get available font weights (default common weights if not specified)
    const availableWeights = font.variants || ['400'];
    const numericWeights = availableWeights
      .filter(weight => /^\d+$/.test(weight))
      .map(w => parseInt(w))
      .sort((a, b) => a - b);
    
    // Create weight selector buttons
    const weightButtons = numericWeights.map(weight => {
      const weightName = this.getWeightName(weight);
      return `
        <button class="weight-btn" data-weight="${weight}" data-font="${font.family.replace(/'/g, '&quot;')}" onclick="fontSearch.toggleWeight(this)">
          <span class="weight-number">${weight}</span>
          <span class="weight-name">${weightName}</span>
        </button>
      `;
    }).join('');
    
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
      
      <div class="font-weights">
        <div class="weights-label">Available weights:</div>
        <div class="weights-selector">
          ${weightButtons}
        </div>
      </div>
      
      <div class="font-actions-enhanced">
        <button class="font-action-btn-enhanced copy-css-btn" onclick="fontSearch.copyFontCodeWithWeights('${font.family}', '${font.name}')">
          {} Copy CSS
        </button>
      </div>
    `;
    
    return card;
  }

  getWeightName(weight) {
    const weightNames = {
      100: 'Thin',
      200: 'Extra Light',
      300: 'Light',
      400: 'Regular',
      500: 'Medium',
      600: 'Semi Bold',
      700: 'Bold',
      800: 'Extra Bold',
      900: 'Black'
    };
    return weightNames[weight] || 'Unknown';
  }

  toggleWeight(button) {
    button.classList.toggle('selected');
    
    // Update visual feedback
    if (button.classList.contains('selected')) {
      button.style.background = 'var(--accent)';
      button.style.color = 'var(--text)';
    } else {
      button.style.background = '';
      button.style.color = '';
    }
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
        const scoreInfo = this.lastSearchContext ? ' (sorted by relevance)' : '';
        this.resultsCount.textContent = `${count} font${count > 1 ? 's' : ''} found${scoreInfo}`;
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
      title: 'No fonts found',
      message: 'FontCook couldn\'t find any fonts matching your search. Try different ingredients!'
    };
    
    if (this.fontGrid) {
      this.fontGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">${emptyState.icon}</div>
          <h3>${emptyState.title}</h3>
          <p>${emptyState.message}</p>
          <div class="no-results-actions">
            <button class="btn btn-primary" onclick="fontSearch.loadPopularFonts()">
              🍳 View popular fonts
            </button>
          </div>
        </div>
      `;
    }
  }

  showError(message, errorType = 'error') {
    const errorState = window.fontAPI ? window.fontAPI.getEmptyStateMessage(errorType) : {
      icon: '🔥',
      title: 'Oops! Something went wrong',
      message: message || 'An error occurred in the kitchen. The chef is trying to fix it!'
    };
    
    if (this.fontGrid) {
      this.fontGrid.innerHTML = `
        <div class="error-message">
          <div class="error-icon">${errorState.icon}</div>
          <h3>${errorState.title}</h3>
          <p>${errorState.message}</p>
          <div class="error-actions">
            <button class="btn btn-secondary" onclick="location.reload()">
              🔄 Restart
            </button>
            <button class="btn btn-primary" onclick="fontSearch.loadPopularFonts()">
              🍳 Fallback mode
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

  copyFontCodeWithWeights(fontFamily, fontName = '') {
    const fontFamilyClean = fontFamily.split(',')[0].trim().replace(/['"]/g, '');
    
    // Find the font card that contains the clicked button
    const fontCards = document.querySelectorAll('.font-card-enhanced');
    let selectedWeights = [];
    
    for (let card of fontCards) {
      const cardTitle = card.querySelector('h3').textContent;
      if (cardTitle === fontName) {
        const selectedButtons = card.querySelectorAll('.weight-btn.selected');
        selectedWeights = Array.from(selectedButtons).map(btn => btn.dataset.weight);
        break;
      }
    }
    
    // Default to 400 if no weights selected
    if (selectedWeights.length === 0) {
      selectedWeights = ['400'];
    }
    
    // Generate CSS with selected weights
    const weightsString = selectedWeights.join(';');
    const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamilyClean)}:wght@${selectedWeights.join(';')}&display=swap`;
    
    const code = `/* ${fontName || fontFamilyClean} - Generated by FontCook */

/* Google Fonts Import */
@import url('${googleFontsUrl}');

/* Base font family */
.${fontFamilyClean.toLowerCase().replace(/\s+/g, '-')}-font {
  font-family: ${fontFamily};
  font-size: ${this.currentSize}px;
  line-height: 1.4;
}

/* Weight variations */
${selectedWeights.map(weight => {
  const weightName = this.getWeightName(parseInt(weight));
  return `.${fontFamilyClean.toLowerCase().replace(/\s+/g, '-')}-${weight} {
  font-family: ${fontFamily};
  font-weight: ${weight}; /* ${weightName} */
}`;
}).join('\n\n')}`;

    // Create success message with weights info
    const weightsText = selectedWeights.map(w => `${w} (${this.getWeightName(parseInt(w))})`).join(', ');
    const message = `CSS copied for ${fontName || fontFamilyClean} with weights: ${weightsText}`;
    
    this.copyToClipboard(code, message);
  }

  copyFontCode(fontFamily, fontName = '', buttonElement = null) {
    // Fallback for old function calls
    this.copyFontCodeWithWeights(fontFamily, fontName);
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
      this.showNotification('CSS copied!', 'success');
    } catch (err) {
      this.showNotification('Copy error', 'error');
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
    // Stack notifications by adjusting positions
    const existingNotifications = document.querySelectorAll('.notification');
    const stackOffset = existingNotifications.length * 80; // 80px spacing between notifications
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.top = `calc(var(--space-lg) + ${stackOffset}px)`;
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
    
    // Auto-remove after 5 seconds for success messages (longer for better readability)
    const duration = type === 'success' ? 5000 : 4000;
    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => {
        notification.remove();
        // Restack remaining notifications
        this.restackNotifications();
      }, 300);
    }, duration);
  }

  restackNotifications() {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach((notification, index) => {
      notification.style.top = `calc(var(--space-lg) + ${index * 80}px)`;
    });
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

  // === INTELLIGENT SEARCH FUNCTIONS ===

  // Score font relevance using intelligent search results
  scoreIntelligentRelevance(font, intelligentResults) {
    let score = 0;
    const fontName = this.normalizeString(font.family);
    const fontCategory = this.normalizeString(font.category);

    intelligentResults.results.forEach(result => {
      const conceptScore = result.score || 0;
      const conceptData = result.data;

      // Direct font name matches from concept
      if (conceptData.fonts) {
        conceptData.fonts.forEach(recommendedFont => {
          const normalizedRecommended = this.normalizeString(recommendedFont);
          
          // Exact match
          if (normalizedRecommended === fontName.replace(/'/g, '')) {
            score += conceptScore * 2; // Double score for exact matches
          }
          // Partial match
          else if (fontName.includes(normalizedRecommended) || normalizedRecommended.includes(fontName.replace(/'/g, ''))) {
            score += conceptScore;
          }
          // Category match
          else if (fontCategory.includes(normalizedRecommended)) {
            score += conceptScore * 0.5;
          }
        });
      }

      // Context-based scoring
      if (conceptData.contexts) {
        conceptData.contexts.forEach(context => {
          if (fontName.includes(this.normalizeString(context))) {
            score += conceptScore * 0.3;
          }
        });
      }

      // Synonym-based scoring
      if (conceptData.synonyms) {
        conceptData.synonyms.forEach(synonym => {
          if (fontName.includes(this.normalizeString(synonym))) {
            score += conceptScore * 0.2;
          }
        });
      }
    });

    return Math.round(score);
  }

  // Show search interpretation to user
  showSearchInterpretation(interpretation) {
    // Remove any existing interpretation
    const existingInterpretation = document.querySelector('.search-interpretation');
    if (existingInterpretation) {
      existingInterpretation.remove();
    }

    // Create interpretation display
    const interpretationDiv = document.createElement('div');
    interpretationDiv.className = 'search-interpretation';
    interpretationDiv.innerHTML = `
      <div class="interpretation-content">
        <span class="interpretation-icon">🧠</span>
        <span class="interpretation-text">${interpretation}</span>
        <button class="interpretation-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;

    // Insert before results
    const resultsSection = document.querySelector('.results-section .container');
    if (resultsSection) {
      resultsSection.insertBefore(interpretationDiv, resultsSection.firstChild);
    }

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (interpretationDiv.parentNode) {
        interpretationDiv.remove();
      }
    }, 10000);
  }
}

// Initialize search manager
let fontSearch;

document.addEventListener('DOMContentLoaded', () => {
  fontSearch = new SearchManager();
});

// Export for global access
window.fontSearch = fontSearch;