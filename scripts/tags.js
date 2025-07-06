// ===== TAGS & SYNONYMES SYSTEM =====

class TagsManager {
  constructor() {
    this.tagsData = this.initializeTagsData();
    this.synonymsMap = this.initializeSynonymsMap();
    this.suggestions = [];
    this.init();
  }

  init() {
    this.setupTagButtons();
    this.setupAutoSuggestions();
    this.generateSuggestions();
  }

  initializeTagsData() {
    return {
      vintage: {
        keywords: ['vintage', 'rétro', 'ancienne', 'classique', 'old-style', 'nostalgique'],
        fonts: ['Playfair Display', 'Merriweather', 'Crimson Text', 'Libre Baskerville'],
        category: 'style'
      },
      moderne: {
        keywords: ['moderne', 'contemporary', 'actuel', 'nouveau', 'fresh', 'trendy'],
        fonts: ['Inter', 'Roboto', 'Open Sans', 'Lato'],
        category: 'style'
      },
      élégant: {
        keywords: ['élégant', 'sophisticated', 'refined', 'classy', 'chic', 'luxe'],
        fonts: ['Playfair Display', 'Cormorant Garamond', 'Crimson Text'],
        category: 'style'
      },
      playful: {
        keywords: ['playful', 'fun', 'amusant', 'joyeux', 'coloré', 'enfantin'],
        fonts: ['Dancing Script', 'Pacifico', 'Righteous'],
        category: 'mood'
      },
      professional: {
        keywords: ['professional', 'business', 'corporate', 'sérieux', 'formel', 'pro'],
        fonts: ['Inter', 'Roboto', 'Open Sans', 'Source Sans Pro'],
        category: 'usage'
      },
      script: {
        keywords: ['script', 'cursive', 'handwriting', 'manuscrit', 'écrit', 'calligraphie'],
        fonts: ['Dancing Script', 'Pacifico'],
        category: 'type'
      },
      serif: {
        keywords: ['serif', 'empattement', 'traditional', 'readable', 'book'],
        fonts: ['Playfair Display', 'Merriweather', 'Crimson Text', 'Libre Baskerville'],
        category: 'type'
      },
      'sans-serif': {
        keywords: ['sans-serif', 'sans', 'clean', 'minimal', 'simple', 'moderne'],
        fonts: ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'],
        category: 'type'
      },
      display: {
        keywords: ['display', 'titre', 'heading', 'decorative', 'accent', 'impact'],
        fonts: ['Righteous', 'Oswald', 'Montserrat'],
        category: 'usage'
      },
      monospace: {
        keywords: ['monospace', 'code', 'programming', 'tech', 'mono', 'fixed-width'],
        fonts: ['Fira Code'],
        category: 'type'
      },
      light: {
        keywords: ['light', 'thin', 'léger', 'fin', 'subtle', 'délicat'],
        fonts: ['Inter', 'Roboto', 'Lato', 'Montserrat'],
        category: 'weight'
      },
      bold: {
        keywords: ['bold', 'gras', 'strong', 'heavy', 'thick', 'impactant'],
        fonts: ['Oswald', 'Montserrat', 'Roboto'],
        category: 'weight'
      },
      condensed: {
        keywords: ['condensed', 'narrow', 'étroit', 'compact', 'compressed'],
        fonts: ['Oswald', 'Roboto'],
        category: 'width'
      },
      expanded: {
        keywords: ['expanded', 'wide', 'large', 'extended', 'étendu'],
        fonts: ['Montserrat'],
        category: 'width'
      }
    };
  }

  initializeSynonymsMap() {
    const synonyms = {};
    
    // Build synonyms map from tags data
    Object.entries(this.tagsData).forEach(([tag, data]) => {
      data.keywords.forEach(keyword => {
        if (!synonyms[keyword.toLowerCase()]) {
          synonyms[keyword.toLowerCase()] = [];
        }
        synonyms[keyword.toLowerCase()].push(tag);
      });
    });
    
    return synonyms;
  }

  generateSuggestions() {
    this.suggestions = [];
    
    // Add all tags as suggestions
    Object.keys(this.tagsData).forEach(tag => {
      this.suggestions.push({
        text: tag,
        type: 'tag',
        category: this.tagsData[tag].category,
        icon: this.getCategoryIcon(this.tagsData[tag].category)
      });
    });
    
    // Add font names as suggestions
    const allFonts = new Set();
    Object.values(this.tagsData).forEach(data => {
      data.fonts.forEach(font => allFonts.add(font));
    });
    
    allFonts.forEach(font => {
      this.suggestions.push({
        text: font,
        type: 'font',
        category: 'font',
        icon: '🔤'
      });
    });
    
    // Add common search terms
    const commonTerms = [
      { text: 'heading font', type: 'usage', category: 'usage', icon: '📰' },
      { text: 'body text', type: 'usage', category: 'usage', icon: '📝' },
      { text: 'logo design', type: 'usage', category: 'usage', icon: '🎨' },
      { text: 'web design', type: 'usage', category: 'usage', icon: '💻' },
      { text: 'print design', type: 'usage', category: 'usage', icon: '🖨️' }
    ];
    
    this.suggestions.push(...commonTerms);
  }

  getCategoryIcon(category) {
    const icons = {
      style: '🎨',
      mood: '😊',
      usage: '💼',
      type: '🔤',
      weight: '💪',
      width: '↔️'
    };
    return icons[category] || '🏷️';
  }

  setupTagButtons() {
    const tagButtons = document.querySelectorAll('.tag-btn');
    
    tagButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const tag = e.target.getAttribute('data-tag');
        this.selectTag(tag, button);
      });
    });
  }

  selectTag(tag, buttonElement) {
    // Toggle tag selection
    buttonElement.classList.toggle('active');
    
    // Update search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      const currentValue = searchInput.value.trim();
      const tags = currentValue.split(',').map(t => t.trim()).filter(t => t);
      
      if (buttonElement.classList.contains('active')) {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      } else {
        const index = tags.indexOf(tag);
        if (index > -1) {
          tags.splice(index, 1);
        }
      }
      
      searchInput.value = tags.join(', ');
      
      // Trigger search
      if (window.fontSearch) {
        window.fontSearch.handleSearch(searchInput.value);
      }
    }
  }

  setupAutoSuggestions() {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (!searchInput || !suggestionsContainer) return;
    
    let currentHighlight = -1;
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      currentHighlight = -1;
      
      if (query.length < 2) {
        this.hideSuggestions();
        return;
      }
      
      const filteredSuggestions = this.filterSuggestions(query);
      this.showSuggestions(filteredSuggestions, suggestionsContainer);
    });
    
    searchInput.addEventListener('keydown', (e) => {
      const suggestionItems = suggestionsContainer.querySelectorAll('.suggestion-item');
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentHighlight = Math.min(currentHighlight + 1, suggestionItems.length - 1);
        this.highlightSuggestion(suggestionItems, currentHighlight);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentHighlight = Math.max(currentHighlight - 1, -1);
        this.highlightSuggestion(suggestionItems, currentHighlight);
      } else if (e.key === 'Enter') {
        if (currentHighlight >= 0 && suggestionItems[currentHighlight]) {
          e.preventDefault();
          suggestionItems[currentHighlight].click();
        }
      } else if (e.key === 'Escape') {
        this.hideSuggestions();
      }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
        this.hideSuggestions();
      }
    });
  }

  filterSuggestions(query) {
    const queryLower = query.toLowerCase();
    const queryTerms = queryLower.split(',').map(t => t.trim()).filter(t => t);
    const lastTerm = queryTerms[queryTerms.length - 1] || '';
    
    return this.suggestions
      .filter(suggestion => {
        const textLower = suggestion.text.toLowerCase();
        
        // Check if suggestion matches the last term being typed
        if (textLower.includes(lastTerm)) {
          return true;
        }
        
        // Check synonyms
        if (this.synonymsMap[lastTerm]) {
          return this.synonymsMap[lastTerm].some(tag => 
            suggestion.text.toLowerCase().includes(tag.toLowerCase())
          );
        }
        
        return false;
      })
      .slice(0, 8); // Limit to 8 suggestions
  }

  showSuggestions(suggestions, container) {
    if (suggestions.length === 0) {
      this.hideSuggestions();
      return;
    }
    
    container.innerHTML = '';
    
    suggestions.forEach((suggestion, index) => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.innerHTML = `
        <span class="suggestion-icon">${suggestion.icon}</span>
        <span class="suggestion-text">${suggestion.text}</span>
        <span class="suggestion-tag">${suggestion.category}</span>
      `;
      
      item.addEventListener('click', () => {
        this.selectSuggestion(suggestion);
      });
      
      container.appendChild(item);
    });
    
    container.classList.add('show');
  }

  hideSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
      suggestionsContainer.classList.remove('show');
    }
  }

  highlightSuggestion(items, index) {
    items.forEach((item, i) => {
      item.classList.toggle('highlighted', i === index);
    });
  }

  selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const currentValue = searchInput.value.trim();
    const terms = currentValue.split(',').map(t => t.trim()).filter(t => t);
    
    // Replace the last term with the selected suggestion
    if (terms.length > 0) {
      terms[terms.length - 1] = suggestion.text;
    } else {
      terms.push(suggestion.text);
    }
    
    searchInput.value = terms.join(', ');
    this.hideSuggestions();
    
    // Update tag buttons
    this.updateTagButtons(terms);
    
    // Trigger search
    if (window.fontSearch) {
      window.fontSearch.handleSearch(searchInput.value);
    }
    
    searchInput.focus();
  }

  updateTagButtons(selectedTerms) {
    const tagButtons = document.querySelectorAll('.tag-btn');
    
    tagButtons.forEach(button => {
      const tag = button.getAttribute('data-tag');
      const isSelected = selectedTerms.some(term => 
        term.toLowerCase() === tag.toLowerCase() ||
        (this.synonymsMap[term.toLowerCase()] && 
         this.synonymsMap[term.toLowerCase()].includes(tag))
      );
      
      button.classList.toggle('active', isSelected);
    });
  }

  // Public API
  getTagsByQuery(query) {
    const queryLower = query.toLowerCase();
    const tags = new Set();
    
    // Direct tag matches
    Object.keys(this.tagsData).forEach(tag => {
      if (queryLower.includes(tag.toLowerCase())) {
        tags.add(tag);
      }
    });
    
    // Synonym matches
    Object.entries(this.synonymsMap).forEach(([synonym, tagList]) => {
      if (queryLower.includes(synonym)) {
        tagList.forEach(tag => tags.add(tag));
      }
    });
    
    return Array.from(tags);
  }

  getFontsByTags(tags) {
    const fonts = new Set();
    
    tags.forEach(tag => {
      if (this.tagsData[tag]) {
        this.tagsData[tag].fonts.forEach(font => fonts.add(font));
      }
    });
    
    return Array.from(fonts);
  }

  expandQuery(query) {
    const terms = query.toLowerCase().split(',').map(t => t.trim()).filter(t => t);
    const expandedTerms = new Set(terms);
    
    terms.forEach(term => {
      // Add synonyms
      if (this.synonymsMap[term]) {
        this.synonymsMap[term].forEach(tag => {
          expandedTerms.add(tag);
          // Add all keywords for this tag
          if (this.tagsData[tag]) {
            this.tagsData[tag].keywords.forEach(keyword => {
              expandedTerms.add(keyword);
            });
          }
        });
      }
      
      // Add keywords if the term is a tag
      if (this.tagsData[term]) {
        this.tagsData[term].keywords.forEach(keyword => {
          expandedTerms.add(keyword);
        });
      }
    });
    
    return Array.from(expandedTerms);
  }
}

// Initialize tags manager
let tagsManager;

document.addEventListener('DOMContentLoaded', () => {
  tagsManager = new TagsManager();
});

// Export for global access
window.tagsManager = tagsManager;