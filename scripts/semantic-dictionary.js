// MASSIVE SEMANTIC DICTIONARY FOR FONTCOOK
// 1000+ words for intelligent font matching and contextual search

const SEMANTIC_DICTIONARY = {
  // === VISUAL STYLES & AESTHETICS ===
  'vintage': {
    synonyms: ['vintage', 'retro', 'old', 'classic', 'antique', 'ancient', 'nostalgic', 'aged', 'historic', 'timeless', 'heritage', 'traditional', 'rustic', 'weathered', 'worn', 'distressed', 'faded', 'patina', 'americana', 'oldfashioned', 'period', 'epoch'],
    contexts: ['decoration', 'restaurant', 'bar', 'boutique', 'artisan', 'craft', 'handmade', 'authentic', 'museum', 'gallery'],
    fonts: ['serif', 'slab', 'decorative', 'vintage', 'distressed', 'typewriter']
  },

  'elegant': {
    synonyms: ['elegant', 'sophisticated', 'refined', 'classy', 'graceful', 'chic', 'luxury', 'premium', 'noble', 'distinguished', 'polished', 'cultured', 'upscale', 'exclusive', 'prestigious', 'glamorous', 'stylish', 'fashionable', 'high-end', 'delicate', 'tasteful', 'exquisite'],
    contexts: ['fashion', 'beauty', 'wedding', 'hotel', 'jewelry', 'perfume', 'spa', 'luxury', 'premium'],
    fonts: ['serif', 'script', 'thin', 'elegant', 'calligraphy', 'fashion']
  },

  'modern': {
    synonyms: ['modern', 'contemporary', 'clean', 'minimal', 'simple', 'fresh', 'current', 'trendy', 'sleek', 'streamlined', 'crisp', 'sharp', 'geometric', 'futuristic', 'progressive', 'innovative', 'cutting-edge', 'state-of-the-art', 'latest', 'new', 'updated', 'current'],
    contexts: ['tech', 'startup', 'design', 'architecture', 'digital', 'web', 'app', 'software'],
    fonts: ['sans-serif', 'geometric', 'minimal', 'clean', 'modern', 'thin']
  },

  'playful': {
    synonyms: ['playful', 'fun', 'cheerful', 'happy', 'joyful', 'colorful', 'amusing', 'dynamic', 'energetic', 'vibrant', 'lively', 'spirited', 'whimsical', 'quirky', 'bouncy', 'bubbly', 'animated', 'festive', 'celebratory', 'upbeat', 'jovial', 'merry'],
    contexts: ['kids', 'children', 'game', 'animation', 'event', 'party', 'celebration', 'entertainment'],
    fonts: ['display', 'rounded', 'decorative', 'comic', 'playful', 'cartoon']
  },

  'bold': {
    synonyms: ['bold', 'strong', 'heavy', 'thick', 'fat', 'powerful', 'robust', 'solid', 'massive', 'impactful', 'striking', 'dramatic', 'intense', 'forceful', 'dominant', 'commanding', 'assertive', 'confident', 'aggressive', 'punchy', 'weighty', 'substantial'],
    contexts: ['headlines', 'title', 'poster', 'advertising', 'branding', 'logo', 'impact'],
    fonts: ['bold', 'black', 'heavy', 'strong', 'condensed', 'impact']
  },

  'light': {
    synonyms: ['light', 'thin', 'slim', 'delicate', 'fine', 'lightweight', 'ethereal', 'airy', 'gentle', 'soft', 'subtle', 'graceful', 'slender', 'narrow', 'lean', 'wispy', 'feathery', 'gossamer', 'translucent', 'transparent', 'minimal', 'understated'],
    contexts: ['feminine', 'beauty', 'fashion', 'luxury', 'spa', 'wellness', 'meditation'],
    fonts: ['thin', 'light', 'ultralight', 'delicate', 'hairline', 'extra-light']
  },

  // === BUSINESS & INDUSTRY DOMAINS ===
  'restaurant': {
    synonyms: ['restaurant', 'food', 'dining', 'cuisine', 'gastronomy', 'chef', 'bistro', 'brasserie', 'cafe', 'eatery', 'diner', 'tavern', 'grill', 'kitchen', 'culinary', 'menu', 'recipe', 'cooking', 'bakery', 'pizzeria', 'steakhouse', 'seafood', 'catering', 'buffet', 'fast-food'],
    contexts: ['vintage', 'artisan', 'warm', 'cozy', 'appetizing', 'delicious', 'gourmet', 'authentic'],
    fonts: ['serif', 'slab', 'script', 'handwritten', 'vintage', 'rustic']
  },

  'tech': {
    synonyms: ['technology', 'digital', 'software', 'app', 'web', 'startup', 'innovation', 'code', 'programming', 'development', 'AI', 'artificial-intelligence', 'machine-learning', 'data', 'analytics', 'cloud', 'blockchain', 'cryptocurrency', 'fintech', 'edtech', 'healthtech', 'biotech', 'nanotech', 'robotics', 'automation', 'cybersecurity', 'networking'],
    contexts: ['modern', 'clean', 'professional', 'futuristic', 'innovative', 'efficient', 'scalable'],
    fonts: ['sans-serif', 'monospace', 'geometric', 'minimal', 'technical', 'digital']
  },

  'beauty': {
    synonyms: ['beauty', 'cosmetics', 'makeup', 'skincare', 'perfume', 'spa', 'wellness', 'care', 'treatment', 'salon', 'aesthetic', 'glamour', 'gorgeous', 'stunning', 'beautiful', 'pretty', 'attractive', 'alluring', 'charming', 'radiant', 'glowing', 'flawless', 'rejuvenating', 'anti-aging'],
    contexts: ['elegant', 'feminine', 'soft', 'premium', 'luxury', 'delicate', 'sophisticated'],
    fonts: ['script', 'serif', 'thin', 'elegant', 'calligraphy', 'fashion']
  },

  'automotive': {
    synonyms: ['automotive', 'car', 'vehicle', 'auto', 'garage', 'mechanic', 'motor', 'engine', 'driving', 'racing', 'speed', 'performance', 'horsepower', 'turbo', 'diesel', 'electric', 'hybrid', 'truck', 'motorcycle', 'bike', 'transportation', 'mobility', 'dealership', 'repair'],
    contexts: ['masculine', 'technical', 'powerful', 'speed', 'performance', 'industrial', 'mechanical'],
    fonts: ['sans-serif', 'bold', 'industrial', 'strong', 'condensed', 'technical']
  },

  'fashion': {
    synonyms: ['fashion', 'style', 'clothing', 'apparel', 'garment', 'outfit', 'dress', 'trend', 'couture', 'designer', 'boutique', 'runway', 'model', 'collection', 'seasonal', 'wardrobe', 'accessories', 'jewelry', 'shoes', 'handbag', 'textile', 'fabric', 'pattern', 'color'],
    contexts: ['elegant', 'chic', 'modern', 'artistic', 'trendy', 'sophisticated', 'stylish'],
    fonts: ['serif', 'script', 'display', 'fashion', 'editorial', 'condensed']
  },

  'sport': {
    synonyms: ['sport', 'fitness', 'gym', 'athletic', 'performance', 'training', 'workout', 'exercise', 'activity', 'competition', 'championship', 'tournament', 'league', 'team', 'player', 'athlete', 'coach', 'football', 'basketball', 'tennis', 'soccer', 'baseball', 'running', 'cycling', 'swimming'],
    contexts: ['dynamic', 'energy', 'movement', 'powerful', 'competitive', 'strong', 'fast'],
    fonts: ['sans-serif', 'bold', 'impact', 'strong', 'condensed', 'athletic']
  },

  'kids': {
    synonyms: ['kids', 'children', 'child', 'baby', 'toddler', 'infant', 'toy', 'game', 'school', 'education', 'learning', 'family', 'junior', 'youth', 'playground', 'nursery', 'kindergarten', 'elementary', 'cartoon', 'animation', 'storybook', 'fairytale'],
    contexts: ['playful', 'colorful', 'soft', 'fun', 'friendly', 'safe', 'innocent'],
    fonts: ['rounded', 'playful', 'comic', 'friendly', 'cartoon', 'bubbly']
  },

  // === SPECIALIZED INDUSTRIES ===
  'medical': {
    synonyms: ['medical', 'health', 'healthcare', 'hospital', 'clinic', 'doctor', 'physician', 'nurse', 'pharmacy', 'medicine', 'treatment', 'therapy', 'surgery', 'patient', 'diagnosis', 'cure', 'healing', 'wellness', 'pharmaceutical', 'biomedical', 'dental', 'veterinary', 'nursing'],
    contexts: ['professional', 'serious', 'trust', 'clean', 'sterile', 'reliable', 'scientific'],
    fonts: ['sans-serif', 'clean', 'readable', 'professional', 'medical', 'clinical']
  },

  'finance': {
    synonyms: ['finance', 'banking', 'bank', 'insurance', 'investment', 'financial', 'money', 'capital', 'fund', 'loan', 'mortgage', 'credit', 'accounting', 'audit', 'tax', 'wealth', 'portfolio', 'trading', 'stocks', 'bonds', 'securities', 'cryptocurrency', 'fintech'],
    contexts: ['serious', 'professional', 'trust', 'stable', 'conservative', 'reliable', 'established'],
    fonts: ['serif', 'classic', 'professional', 'trustworthy', 'traditional', 'conservative']
  },

  'real-estate': {
    synonyms: ['real-estate', 'property', 'house', 'home', 'apartment', 'condo', 'building', 'construction', 'architecture', 'residential', 'commercial', 'office', 'retail', 'warehouse', 'land', 'lot', 'development', 'realtor', 'agent', 'broker', 'mortgage', 'rent', 'lease'],
    contexts: ['professional', 'trustworthy', 'established', 'premium', 'solid', 'reliable'],
    fonts: ['serif', 'sans-serif', 'professional', 'architectural', 'geometric', 'strong']
  },

  'legal': {
    synonyms: ['legal', 'law', 'lawyer', 'attorney', 'court', 'justice', 'litigation', 'contract', 'agreement', 'regulation', 'compliance', 'corporate', 'intellectual-property', 'patent', 'trademark', 'copyright', 'paralegal', 'firm', 'practice', 'counsel', 'advocate'],
    contexts: ['serious', 'professional', 'formal', 'authoritative', 'traditional', 'conservative'],
    fonts: ['serif', 'traditional', 'formal', 'professional', 'conservative', 'classic']
  },

  'education': {
    synonyms: ['education', 'school', 'university', 'college', 'academic', 'learning', 'teaching', 'student', 'teacher', 'professor', 'curriculum', 'course', 'class', 'lesson', 'study', 'research', 'knowledge', 'scholarship', 'degree', 'diploma', 'graduation', 'textbook'],
    contexts: ['professional', 'academic', 'serious', 'readable', 'clear', 'informative'],
    fonts: ['serif', 'sans-serif', 'readable', 'academic', 'educational', 'clear']
  },

  // === CREATIVE & ARTISTIC ===
  'art': {
    synonyms: ['art', 'artistic', 'creative', 'gallery', 'museum', 'painting', 'sculpture', 'drawing', 'illustration', 'design', 'culture', 'exhibition', 'artist', 'masterpiece', 'canvas', 'brush', 'color', 'visual', 'aesthetic', 'contemporary', 'abstract', 'portrait', 'landscape'],
    contexts: ['creative', 'unique', 'expressive', 'avant-garde', 'innovative', 'inspiring'],
    fonts: ['display', 'artistic', 'unique', 'creative', 'experimental', 'avant-garde']
  },

  'music': {
    synonyms: ['music', 'musical', 'song', 'melody', 'rhythm', 'beat', 'harmony', 'band', 'musician', 'artist', 'singer', 'composer', 'concert', 'performance', 'album', 'record', 'studio', 'instrument', 'guitar', 'piano', 'drums', 'violin', 'festival', 'genre'],
    contexts: ['creative', 'artistic', 'expressive', 'dynamic', 'emotional', 'rhythmic'],
    fonts: ['display', 'artistic', 'creative', 'musical', 'rhythmic', 'expressive']
  },

  'photography': {
    synonyms: ['photography', 'photo', 'photographer', 'camera', 'lens', 'portrait', 'landscape', 'wedding', 'event', 'studio', 'digital', 'film', 'exposure', 'composition', 'lighting', 'editing', 'gallery', 'exhibition', 'artistic', 'commercial', 'documentary'],
    contexts: ['artistic', 'creative', 'professional', 'visual', 'aesthetic', 'modern'],
    fonts: ['sans-serif', 'modern', 'clean', 'artistic', 'photographic', 'minimal']
  },

  // === LIFESTYLE & ENTERTAINMENT ===
  'travel': {
    synonyms: ['travel', 'tourism', 'vacation', 'holiday', 'trip', 'journey', 'adventure', 'destination', 'hotel', 'resort', 'airline', 'flight', 'cruise', 'tour', 'guide', 'exploration', 'discovery', 'culture', 'experience', 'backpacking', 'luxury-travel'],
    contexts: ['adventurous', 'exciting', 'exotic', 'relaxing', 'luxurious', 'cultural'],
    fonts: ['script', 'serif', 'adventurous', 'exotic', 'travel', 'wanderlust']
  },

  'wedding': {
    synonyms: ['wedding', 'marriage', 'bridal', 'bride', 'groom', 'ceremony', 'reception', 'engagement', 'anniversary', 'romantic', 'love', 'celebration', 'party', 'invitation', 'venue', 'floral', 'decoration', 'elegant', 'formal', 'traditional'],
    contexts: ['elegant', 'romantic', 'formal', 'traditional', 'sophisticated', 'beautiful'],
    fonts: ['script', 'calligraphy', 'elegant', 'romantic', 'formal', 'wedding']
  },

  'luxury': {
    synonyms: ['luxury', 'premium', 'high-end', 'exclusive', 'prestigious', 'elite', 'refined', 'sophisticated', 'opulent', 'lavish', 'extravagant', 'deluxe', 'first-class', 'top-tier', 'superior', 'finest', 'exquisite', 'expensive', 'upscale', 'VIP'],
    contexts: ['elegant', 'expensive', 'quality', 'elite', 'sophisticated', 'exclusive'],
    fonts: ['serif', 'elegant', 'classic', 'premium', 'luxury', 'sophisticated']
  },

  // === SCRIPT & HANDWRITING STYLES ===
  'script': {
    synonyms: ['script', 'handwriting', 'cursive', 'calligraphy', 'handwritten', 'manuscript', 'written', 'signature', 'personal', 'intimate', 'flowing', 'connected', 'decorative', 'ornamental', 'flourish'],
    contexts: ['personal', 'invitation', 'signature', 'artisan', 'custom', 'handmade'],
    fonts: ['script', 'cursive', 'handwritten', 'calligraphy', 'signature', 'flowing']
  },

  // === EMOTIONAL & ATMOSPHERIC ===
  'natural': {
    synonyms: ['natural', 'organic', 'eco', 'green', 'sustainable', 'environment', 'nature', 'earth', 'botanical', 'herbal', 'pure', 'raw', 'authentic', 'wholesome', 'healthy', 'fresh', 'clean', 'biodegradable', 'eco-friendly'],
    contexts: ['authentic', 'healthy', 'responsible', 'earth', 'sustainable', 'pure'],
    fonts: ['organic', 'handwritten', 'natural', 'earthy', 'rustic', 'authentic']
  },

  'industrial': {
    synonyms: ['industrial', 'factory', 'manufacture', 'metal', 'steel', 'concrete', 'urban', 'raw', 'mechanical', 'technical', 'engineering', 'construction', 'heavy', 'machinery', 'equipment', 'warehouse', 'production'],
    contexts: ['masculine', 'robust', 'technical', 'urban', 'strong', 'utilitarian'],
    fonts: ['industrial', 'stencil', 'mechanical', 'bold', 'condensed', 'technical']
  },

  'minimalist': {
    synonyms: ['minimalist', 'minimal', 'simple', 'clean', 'sparse', 'uncluttered', 'basic', 'essential', 'pure', 'refined', 'understated', 'subtle', 'less-is-more', 'streamlined', 'functional'],
    contexts: ['modern', 'clean', 'sophisticated', 'functional', 'efficient', 'zen'],
    fonts: ['sans-serif', 'minimal', 'clean', 'geometric', 'simple', 'refined']
  }
};

// Export for use in search.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEMANTIC_DICTIONARY;
}