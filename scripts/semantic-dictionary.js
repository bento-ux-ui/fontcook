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
    fonts: ['Playfair Display', 'Cormorant Garamond', 'EB Garamond', 'Crimson Text', 'Libre Baskerville', 'Montserrat', 'Lora', 'Raleway']
  },

  'modern': {
    synonyms: ['modern', 'contemporary', 'clean', 'minimal', 'simple', 'fresh', 'current', 'trendy', 'sleek', 'streamlined', 'crisp', 'sharp', 'geometric', 'futuristic', 'progressive', 'innovative', 'cutting-edge', 'state-of-the-art', 'latest', 'new', 'updated', 'current'],
    contexts: ['tech', 'startup', 'design', 'architecture', 'digital', 'web', 'app', 'software'],
    fonts: ['Inter', 'Roboto', 'Poppins', 'Montserrat', 'Work Sans', 'Source Sans Pro', 'Nunito', 'Sora', 'Ubuntu', 'Fira Sans']
  },

  'playful': {
    synonyms: ['playful', 'fun', 'cheerful', 'happy', 'joyful', 'colorful', 'amusing', 'dynamic', 'energetic', 'vibrant', 'lively', 'spirited', 'whimsical', 'quirky', 'bouncy', 'bubbly', 'animated', 'festive', 'celebratory', 'upbeat', 'jovial', 'merry'],
    contexts: ['kids', 'children', 'game', 'animation', 'event', 'party', 'celebration', 'entertainment'],
    fonts: ['display', 'rounded', 'decorative', 'comic', 'playful', 'cartoon']
  },

  'bold': {
    synonyms: ['bold', 'strong', 'heavy', 'thick', 'fat', 'powerful', 'robust', 'solid', 'massive', 'impactful', 'striking', 'dramatic', 'intense', 'forceful', 'dominant', 'commanding', 'assertive', 'confident', 'aggressive', 'punchy', 'weighty', 'substantial'],
    contexts: ['headlines', 'title', 'poster', 'advertising', 'branding', 'logo', 'impact'],
    fonts: ['Oswald', 'Montserrat', 'Roboto', 'bold', 'black', 'heavy', 'strong', 'condensed', 'impact']
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
    fonts: ['Playfair Display', 'Merriweather', 'Lora', 'Crimson Text', 'Libre Baskerville', 'Source Serif Pro', 'PT Serif']
  },

  'tech': {
    synonyms: ['technology', 'digital', 'software', 'app', 'web', 'startup', 'innovation', 'code', 'programming', 'development', 'AI', 'artificial-intelligence', 'machine-learning', 'data', 'analytics', 'cloud', 'blockchain', 'cryptocurrency', 'fintech', 'edtech', 'healthtech', 'biotech', 'nanotech', 'robotics', 'automation', 'cybersecurity', 'networking'],
    contexts: ['modern', 'clean', 'professional', 'futuristic', 'innovative', 'efficient', 'scalable'],
    fonts: ['Inter', 'Roboto', 'Lato', 'Source Sans Pro', 'Fira Sans', 'Work Sans', 'IBM Plex Sans', 'JetBrains Mono']
  },

  'beauty': {
    synonyms: ['beauty', 'cosmetics', 'makeup', 'skincare', 'perfume', 'spa', 'wellness', 'care', 'treatment', 'salon', 'aesthetic', 'glamour', 'gorgeous', 'stunning', 'beautiful', 'pretty', 'attractive', 'alluring', 'charming', 'radiant', 'glowing', 'flawless', 'rejuvenating', 'anti-aging'],
    contexts: ['elegant', 'feminine', 'soft', 'premium', 'luxury', 'delicate', 'sophisticated'],
    fonts: ['Playfair Display', 'Cormorant Garamond', 'Dancing Script', 'Great Vibes', 'Poppins', 'Montserrat', 'Lato']
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
  },

  // === UNIVERSAL & READABLE ===
  'universal': {
    synonyms: ['universal', 'versatile', 'adaptable', 'flexible', 'multi-purpose', 'all-purpose', 'general', 'standard', 'default', 'neutral', 'balanced', 'harmonious', 'reliable', 'consistent', 'stable', 'solid', 'dependable', 'trustworthy', 'readable', 'legible', 'clear'],
    contexts: ['web', 'interface', 'document', 'application', 'system', 'platform', 'global'],
    fonts: ['Open Sans', 'Lato', 'Source Sans Pro', 'Roboto', 'Nunito']
  },

  // === BUSINESS-SPECIFIC SECTORS ===
  'fast-food': {
    synonyms: ['fast-food', 'fastfood', 'quick-service', 'burger', 'pizza', 'takeaway', 'casual-dining', 'family-restaurant', 'cheerful', 'affordable', 'american', 'fun'],
    contexts: ['restaurant', 'food', 'casual', 'family', 'quick', 'burger', 'pizza'],
    fonts: ['Poppins', 'Montserrat', 'Nunito', 'Open Sans', 'Roboto']
  },

  'fine-dining': {
    synonyms: ['fine-dining', 'upscale', 'gourmet', 'haute-cuisine', 'michelin', 'luxury-restaurant', 'sophisticated', 'premium', 'exclusive', 'french', 'expensive'],
    contexts: ['restaurant', 'luxury', 'elegant', 'sophisticated', 'premium', 'gourmet'],
    fonts: ['Playfair Display', 'Cormorant Garamond', 'Crimson Text', 'Lora', 'Libre Baskerville']
  },

  'bakery': {
    synonyms: ['bakery', 'patisserie', 'cake-shop', 'bread', 'pastry', 'dessert', 'handcrafted', 'artisan', 'sweet', 'delicate', 'homemade', 'organic', 'authentic'],
    contexts: ['food', 'artisan', 'handmade', 'sweet', 'traditional', 'organic'],
    fonts: ['Dancing Script', 'Lora', 'Libre Baskerville', 'Crimson Text']
  },

  'coffee': {
    synonyms: ['coffee', 'cafe', 'coffeehouse', 'espresso', 'roastery', 'barista', 'specialty-coffee', 'hipster', 'urban', 'minimal', 'scandinavian'],
    contexts: ['modern', 'urban', 'minimal', 'contemporary', 'sophisticated'],
    fonts: ['Raleway', 'Inter', 'Work Sans', 'Source Sans Pro', 'Montserrat']
  },

  'garage': {
    synonyms: ['garage', 'mechanic', 'auto-repair', 'car-service', 'workshop', 'industrial', 'masculine', 'tools', 'reliable', 'blue-collar', 'american'],
    contexts: ['automotive', 'industrial', 'masculine', 'workshop', 'reliable'],
    fonts: ['Oswald', 'Roboto', 'Montserrat', 'Source Sans Pro']
  },

  'luxury-cars': {
    synonyms: ['luxury-cars', 'premium-automotive', 'high-end-cars', 'exotic-cars', 'prestige', 'exclusive', 'powerful', 'german', 'italian', 'tesla'],
    contexts: ['automotive', 'luxury', 'premium', 'exclusive', 'sophisticated'],
    fonts: ['Montserrat', 'Playfair Display', 'Lato', 'Inter']
  },

  'woodworking': {
    synonyms: ['woodworking', 'carpenter', 'furniture', 'cabinetry', 'custom-wood', 'craft', 'handmade', 'natural', 'artisan', 'traditional', 'heritage', 'workshop'],
    contexts: ['craft', 'handmade', 'traditional', 'artisan', 'natural', 'heritage'],
    fonts: ['Crimson Text', 'Merriweather', 'Libre Baskerville', 'Lora']
  },

  'construction': {
    synonyms: ['construction', 'contractor', 'building', 'renovation', 'plumber', 'plumbing', 'electrician', 'industrial', 'heavy', 'reliable', 'professional', 'solid'],
    contexts: ['industrial', 'professional', 'reliable', 'technical', 'modern'],
    fonts: ['Roboto', 'Source Sans Pro', 'Oswald', 'Montserrat']
  },

  'spa': {
    synonyms: ['spa', 'wellness', 'massage', 'relaxation', 'zen', 'healing', 'calm', 'peaceful', 'serene', 'yoga', 'meditation', 'holistic'],
    contexts: ['wellness', 'calm', 'peaceful', 'healing', 'elegant', 'serene'],
    fonts: ['Lora', 'Crimson Text', 'Libre Baskerville', 'Cormorant Garamond']
  },

  'salon': {
    synonyms: ['salon', 'hair', 'beauty', 'stylist', 'barber', 'trendy', 'stylish', 'contemporary', 'modern', 'fashionable'],
    contexts: ['beauty', 'modern', 'stylish', 'trendy', 'contemporary'],
    fonts: ['Montserrat', 'Poppins', 'Raleway', 'Work Sans', 'Lato']
  },

  'startup': {
    synonyms: ['startup', 'tech-startup', 'digital', 'innovative', 'scalable', 'silicon-valley', 'app', 'saas', 'software', 'disruptive'],
    contexts: ['tech', 'modern', 'innovative', 'digital', 'professional'],
    fonts: ['Inter', 'Roboto', 'Work Sans', 'Source Sans Pro', 'Montserrat']
  },

  'law': {
    synonyms: ['law', 'legal', 'attorney', 'lawyer', 'jurisprudence', 'law-firm', 'notary', 'trustworthy', 'authoritative', 'serious', 'formal', 'established'],
    contexts: ['professional', 'formal', 'serious', 'traditional', 'trustworthy'],
    fonts: ['Crimson Text', 'Merriweather', 'Libre Baskerville', 'Source Sans Pro']
  },

  'accounting': {
    synonyms: ['accounting', 'finance', 'bookkeeping', 'tax', 'cpa', 'consulting', 'financial', 'business', 'professional', 'reliable', 'clean'],
    contexts: ['professional', 'business', 'financial', 'reliable', 'clean'],
    fonts: ['Source Sans Pro', 'Roboto', 'Lato', 'Open Sans']
  },

  'real-estate': {
    synonyms: ['real-estate', 'property', 'realty', 'homes', 'housing', 'property-management', 'trustworthy', 'professional', 'accessible'],
    contexts: ['professional', 'trustworthy', 'business', 'accessible'],
    fonts: ['Lato', 'Open Sans', 'Source Sans Pro', 'Montserrat']
  },

  'creative': {
    synonyms: ['creative', 'design', 'agency', 'design-agency', 'creative-studio', 'marketing', 'innovative', 'artistic', 'contemporary', 'trendy'],
    contexts: ['creative', 'design', 'artistic', 'innovative', 'modern'],
    fonts: ['Poppins', 'Montserrat', 'Work Sans', 'Inter', 'Raleway']
  },

  'photography': {
    synonyms: ['photography', 'photographer', 'art-gallery', 'visual', 'aesthetic', 'artistic', 'creative', 'sophisticated'],
    contexts: ['artistic', 'creative', 'visual', 'sophisticated', 'elegant'],
    fonts: ['Libre Baskerville', 'Lora', 'Playfair Display', 'Crimson Text']
  },

  // === ADDITIONAL BUSINESS SECTORS ===
  'fitness': {
    synonyms: ['fitness', 'gym', 'workout', 'training', 'crossfit', 'bodybuilding', 'yoga', 'pilates', 'wellness', 'health', 'exercise', 'strength', 'cardio', 'muscle', 'fit', 'athletic', 'personal-trainer'],
    contexts: ['health', 'strong', 'dynamic', 'energy', 'motivation', 'power'],
    fonts: ['Oswald', 'Montserrat', 'Roboto', 'Ubuntu', 'Source Sans Pro']
  },

  'dental': {
    synonyms: ['dental', 'dentist', 'orthodontic', 'teeth', 'smile', 'oral', 'hygiene', 'clinic', 'care', 'whitening', 'braces', 'implants', 'clean', 'healthy', 'medical'],
    contexts: ['medical', 'clean', 'professional', 'health', 'care', 'trust'],
    fonts: ['Open Sans', 'Lato', 'Source Sans Pro', 'Roboto', 'Nunito']
  },

  'veterinary': {
    synonyms: ['veterinary', 'vet', 'animal', 'pet', 'dog', 'cat', 'clinic', 'care', 'health', 'medical', 'compassionate', 'loving', 'friendly', 'animal-hospital'],
    contexts: ['medical', 'care', 'friendly', 'compassionate', 'professional'],
    fonts: ['Open Sans', 'Nunito', 'Lato', 'Poppins', 'Source Sans Pro']
  },

  'jewelry': {
    synonyms: ['jewelry', 'jewellery', 'diamond', 'gold', 'silver', 'precious', 'luxury', 'elegant', 'sparkle', 'ring', 'necklace', 'bracelet', 'watch', 'gemstone', 'refined', 'exclusive'],
    contexts: ['luxury', 'elegant', 'precious', 'sophisticated', 'exclusive'],
    fonts: ['Playfair Display', 'Cormorant Garamond', 'Crimson Text', 'Raleway', 'Montserrat']
  },

  'florist': {
    synonyms: ['florist', 'flowers', 'bouquet', 'wedding', 'arrangement', 'garden', 'botanical', 'natural', 'organic', 'fresh', 'beautiful', 'delicate', 'romantic', 'floral', 'petals'],
    contexts: ['natural', 'romantic', 'delicate', 'beautiful', 'organic'],
    fonts: ['Dancing Script', 'Lora', 'Libre Baskerville', 'Crimson Text', 'Cormorant Garamond']
  },

  'travel': {
    synonyms: ['travel', 'tourism', 'vacation', 'holiday', 'adventure', 'journey', 'explore', 'destination', 'wanderlust', 'trip', 'hotel', 'flight', 'booking', 'agency', 'exotic', 'discover'],
    contexts: ['adventure', 'exotic', 'exciting', 'global', 'discovery'],
    fonts: ['Montserrat', 'Poppins', 'Work Sans', 'Lato', 'Raleway']
  },

  'education': {
    synonyms: ['education', 'school', 'university', 'learning', 'academic', 'student', 'teacher', 'course', 'training', 'knowledge', 'study', 'research', 'scholarly', 'institutional', 'formal'],
    contexts: ['academic', 'formal', 'traditional', 'reliable', 'professional'],
    fonts: ['Crimson Text', 'Merriweather', 'Libre Baskerville', 'Source Sans Pro', 'Open Sans']
  },

  'nonprofit': {
    synonyms: ['nonprofit', 'charity', 'foundation', 'donation', 'volunteer', 'community', 'social', 'humanitarian', 'cause', 'help', 'support', 'giving', 'mission', 'impact', 'change'],
    contexts: ['community', 'trust', 'accessible', 'friendly', 'professional'],
    fonts: ['Open Sans', 'Lato', 'Source Sans Pro', 'Nunito', 'Ubuntu']
  },

  'gaming': {
    synonyms: ['gaming', 'esports', 'video-games', 'gamer', 'stream', 'twitch', 'youtube', 'console', 'pc', 'mobile', 'competitive', 'tournament', 'digital', 'interactive', 'fun'],
    contexts: ['digital', 'modern', 'tech', 'dynamic', 'entertainment'],
    fonts: ['Inter', 'Roboto', 'Oswald', 'Montserrat', 'Ubuntu']
  },

  'podcast': {
    synonyms: ['podcast', 'audio', 'show', 'broadcast', 'interview', 'talk', 'voice', 'storytelling', 'media', 'content', 'host', 'listen', 'episode', 'series', 'radio'],
    contexts: ['media', 'modern', 'communication', 'accessible', 'friendly'],
    fonts: ['Inter', 'Work Sans', 'Source Sans Pro', 'Lato', 'Open Sans']
  },

  // === STYLE & AESTHETIC CONCEPTS ===
  'rustic': {
    synonyms: ['rustic', 'countryside', 'farm', 'barn', 'wood', 'natural', 'organic', 'homemade', 'authentic', 'traditional', 'rural', 'cabin', 'folksy', 'earthy', 'handcrafted'],
    contexts: ['natural', 'traditional', 'authentic', 'handmade', 'organic'],
    fonts: ['Crimson Text', 'Merriweather', 'Libre Baskerville', 'Lora']
  },

  'futuristic': {
    synonyms: ['futuristic', 'sci-fi', 'space', 'cyber', 'digital', 'neon', 'electronic', 'robotic', 'artificial', 'synthetic', 'matrix', 'virtual', 'technological', 'advanced'],
    contexts: ['tech', 'digital', 'modern', 'innovative', 'advanced'],
    fonts: ['Inter', 'Roboto', 'Ubuntu', 'Fira Sans', 'Source Sans Pro']
  },

  'organic': {
    synonyms: ['organic', 'natural', 'eco', 'green', 'sustainable', 'earth', 'bio', 'pure', 'clean', 'healthy', 'environmental', 'ecological', 'fresh', 'wholesome'],
    contexts: ['natural', 'health', 'sustainable', 'clean', 'authentic'],
    fonts: ['Open Sans', 'Lato', 'Nunito', 'Source Sans Pro', 'Crimson Text']
  },

  'hipster': {
    synonyms: ['hipster', 'indie', 'alternative', 'artisan', 'craft', 'vintage', 'trendy', 'brooklyn', 'urban', 'cool', 'unique', 'authentic', 'underground', 'creative'],
    contexts: ['creative', 'urban', 'alternative', 'artisan', 'trendy'],
    fonts: ['Raleway', 'Montserrat', 'Work Sans', 'Dancing Script', 'Oswald']
  },

  'corporate': {
    synonyms: ['corporate', 'business', 'enterprise', 'company', 'professional', 'formal', 'office', 'executive', 'institutional', 'commercial', 'industry', 'firm', 'organization'],
    contexts: ['professional', 'formal', 'reliable', 'trustworthy', 'established'],
    fonts: ['Source Sans Pro', 'Roboto', 'Open Sans', 'Lato', 'Montserrat']
  },

  // === CULTURAL & GEOGRAPHIC ===
  'scandinavian': {
    synonyms: ['scandinavian', 'nordic', 'minimal', 'clean', 'simple', 'hygge', 'swedish', 'danish', 'norwegian', 'finnish', 'minimalist', 'functional', 'understated'],
    contexts: ['minimal', 'clean', 'modern', 'functional', 'sophisticated'],
    fonts: ['Inter', 'Work Sans', 'Source Sans Pro', 'Roboto', 'Lato']
  },

  'mediterranean': {
    synonyms: ['mediterranean', 'italian', 'greek', 'spanish', 'coastal', 'olive', 'sun', 'warm', 'relaxed', 'vacation', 'resort', 'villa', 'traditional'],
    contexts: ['warm', 'relaxed', 'traditional', 'elegant', 'vacation'],
    fonts: ['Playfair Display', 'Lora', 'Libre Baskerville', 'Crimson Text', 'Cormorant Garamond']
  },

  'asian': {
    synonyms: ['asian', 'japanese', 'chinese', 'korean', 'zen', 'minimal', 'balance', 'harmony', 'traditional', 'culture', 'eastern', 'oriental', 'sushi', 'tea'],
    contexts: ['minimal', 'balanced', 'traditional', 'zen', 'cultural'],
    fonts: ['Inter', 'Source Sans Pro', 'Lato', 'Roboto', 'Crimson Text']
  },

  // === EMOTIONS & MOODS ===
  'energetic': {
    synonyms: ['energetic', 'dynamic', 'vibrant', 'active', 'lively', 'powerful', 'strong', 'intense', 'exciting', 'passionate', 'motivated', 'driven', 'electric'],
    contexts: ['dynamic', 'strong', 'exciting', 'motivating', 'powerful'],
    fonts: ['Oswald', 'Montserrat', 'Roboto', 'Ubuntu', 'Poppins']
  },

  'calm': {
    synonyms: ['calm', 'peaceful', 'serene', 'tranquil', 'quiet', 'gentle', 'soft', 'relaxing', 'zen', 'meditative', 'soothing', 'harmonious', 'balanced'],
    contexts: ['peaceful', 'gentle', 'soft', 'balanced', 'healing'],
    fonts: ['Lora', 'Crimson Text', 'Libre Baskerville', 'Open Sans', 'Source Sans Pro']
  },

  'mysterious': {
    synonyms: ['mysterious', 'dark', 'gothic', 'enigmatic', 'secret', 'hidden', 'noir', 'shadow', 'occult', 'mystical', 'dramatic', 'intense', 'deep'],
    contexts: ['dramatic', 'dark', 'artistic', 'creative', 'sophisticated'],
    fonts: ['Playfair Display', 'Cormorant Garamond', 'Crimson Text', 'Oswald']
  }
}
};

// Export for use in search.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEMANTIC_DICTIONARY;
}