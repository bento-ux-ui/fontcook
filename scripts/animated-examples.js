// ===== ANIMATED EXAMPLES SYSTEM =====

class AnimatedExamples {
  constructor() {
    this.examples = [
      "elegant wedding fonts",
      "tech startup branding",
      "restaurant menu design",
      "luxury beauty salon",
      "automotive garage logo",
      "modern fitness center",
      "vintage bakery sign",
      "professional law firm",
      "creative design agency",
      "children's toy store",
      "medical clinic design",
      "real estate branding",
      "organic food market",
      "gaming company logo",
      "jewelry boutique fonts",
      "construction company",
      "spa and wellness center",
      "financial advisory firm",
      "art gallery exhibition",
      "coffee shop aesthetic",
      "dance studio branding",
      "photography portfolio",
      "music festival poster",
      "travel agency design",
      "sustainable fashion brand"
    ];
    
    this.currentExampleIndex = 0;
    this.currentCharIndex = 0;
    this.isTyping = true;
    this.animatedTextElement = null;
    this.typewriterSpeed = 100; // ms per character
    this.deleteSpeed = 50; // ms per character deletion
    this.pauseBetweenExamples = 2000; // ms pause after typing complete
    this.pauseBeforeDelete = 1500; // ms pause before starting to delete
    
    this.init();
  }
  
  init() {
    this.animatedTextElement = document.getElementById('animated-text');
    if (this.animatedTextElement) {
      this.startAnimation();
    }
  }
  
  startAnimation() {
    this.animateText();
  }
  
  animateText() {
    const currentExample = this.examples[this.currentExampleIndex];
    
    if (this.isTyping) {
      // Typing animation
      if (this.currentCharIndex < currentExample.length) {
        this.animatedTextElement.textContent = currentExample.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        setTimeout(() => this.animateText(), this.typewriterSpeed);
      } else {
        // Finished typing, pause then start deleting
        this.isTyping = false;
        setTimeout(() => this.animateText(), this.pauseBeforeDelete);
      }
    } else {
      // Deleting animation
      if (this.currentCharIndex > 0) {
        this.currentCharIndex--;
        this.animatedTextElement.textContent = currentExample.substring(0, this.currentCharIndex);
        setTimeout(() => this.animateText(), this.deleteSpeed);
      } else {
        // Finished deleting, move to next example
        this.isTyping = true;
        this.currentExampleIndex = (this.currentExampleIndex + 1) % this.examples.length;
        setTimeout(() => this.animateText(), this.pauseBetweenExamples);
      }
    }
  }
  
  // Method to pause animation (e.g., when user is typing)
  pauseAnimation() {
    this.isPaused = true;
  }
  
  // Method to resume animation
  resumeAnimation() {
    this.isPaused = false;
    if (!this.isAnimating) {
      this.animateText();
    }
  }
  
  // Method to add new examples dynamically
  addExample(example) {
    if (example && !this.examples.includes(example)) {
      this.examples.push(example);
    }
  }
  
  // Method to set custom typing speed
  setTypingSpeed(speed) {
    this.typewriterSpeed = Math.max(50, Math.min(300, speed));
  }
  
  // Method to set custom deleting speed
  setDeletingSpeed(speed) {
    this.deleteSpeed = Math.max(25, Math.min(150, speed));
  }
}

// ===== INTEGRATION WITH SEARCH =====

class SearchIntegration {
  constructor(animatedExamples) {
    this.animatedExamples = animatedExamples;
    this.searchInput = null;
    this.isUserTyping = false;
    this.userTypingTimeout = null;
    
    this.init();
  }
  
  init() {
    this.searchInput = document.getElementById('search-input');
    
    if (this.searchInput) {
      this.setupSearchIntegration();
    }
  }
  
  setupSearchIntegration() {
    // Pause animation when user starts typing
    this.searchInput.addEventListener('focus', () => {
      this.pauseAnimationForUser();
    });
    
    this.searchInput.addEventListener('input', () => {
      this.pauseAnimationForUser();
    });
    
    // Resume animation when user stops typing for a while
    this.searchInput.addEventListener('blur', () => {
      this.resumeAnimationAfterDelay();
    });
    
    // Click on animated text to insert it into search
    const animatedTextElement = document.getElementById('animated-text');
    if (animatedTextElement) {
      animatedTextElement.addEventListener('click', () => {
        this.insertCurrentExampleIntoSearch();
      });
      
      // Make it look clickable
      animatedTextElement.style.cursor = 'pointer';
      animatedTextElement.title = 'Click to search this example';
    }
  }
  
  pauseAnimationForUser() {
    this.isUserTyping = true;
    this.animatedExamples.pauseAnimation();
    
    // Clear any existing timeout
    if (this.userTypingTimeout) {
      clearTimeout(this.userTypingTimeout);
    }
  }
  
  resumeAnimationAfterDelay(delay = 3000) {
    if (this.userTypingTimeout) {
      clearTimeout(this.userTypingTimeout);
    }
    
    this.userTypingTimeout = setTimeout(() => {
      if (this.searchInput.value.trim() === '') {
        this.isUserTyping = false;
        this.animatedExamples.resumeAnimation();
      }
    }, delay);
  }
  
  insertCurrentExampleIntoSearch() {
    const currentExample = this.animatedExamples.examples[this.animatedExamples.currentExampleIndex];
    if (this.searchInput && currentExample) {
      this.searchInput.value = currentExample;
      this.searchInput.focus();
      
      // Trigger search if search function exists
      if (typeof fontSearch !== 'undefined' && fontSearch.handleSearch) {
        fontSearch.handleSearch(currentExample);
      }
      
      // Pause animation since user is now searching
      this.pauseAnimationForUser();
    }
  }
}

// ===== INITIALIZATION =====

let animatedExamples;
let searchIntegration;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animated examples
  animatedExamples = new AnimatedExamples();
  
  // Initialize search integration
  searchIntegration = new SearchIntegration(animatedExamples);
  
  console.log('🎭 FontCook: Animated examples initialized');
});

// ===== EXPORT FOR GLOBAL ACCESS =====

if (typeof window !== 'undefined') {
  window.AnimatedExamples = AnimatedExamples;
  window.SearchIntegration = SearchIntegration;
  window.animatedExamples = animatedExamples;
  window.searchIntegration = searchIntegration;
}

// ===== RESPONSIVE BEHAVIOR =====

// Adjust animation speed based on screen size
function adjustAnimationForDevice() {
  if (!animatedExamples) return;
  
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    animatedExamples.setTypingSpeed(80); // Slightly faster on mobile
    animatedExamples.setDeletingSpeed(40);
  } else {
    animatedExamples.setTypingSpeed(100); // Normal speed on desktop
    animatedExamples.setDeletingSpeed(50);
  }
}

// Listen for resize events
window.addEventListener('resize', adjustAnimationForDevice);

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Reduce motion for users who prefer it
function respectMotionPreferences() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion && animatedExamples) {
    // Speed up animations significantly for reduced motion
    animatedExamples.setTypingSpeed(20);
    animatedExamples.setDeletingSpeed(10);
    animatedExamples.pauseBetweenExamples = 500;
    animatedExamples.pauseBeforeDelete = 300;
  }
}

// Check motion preferences on load
document.addEventListener('DOMContentLoaded', respectMotionPreferences);

// Listen for changes in motion preferences
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', respectMotionPreferences);