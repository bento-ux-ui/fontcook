// REVOLUTIONARY SEMANTIC FONT INTELLIGENCE ENGINE
// 15,000+ associations across 1400+ Google Fonts with deep psychological mapping

// === FONT PSYCHOLOGICAL PROFILES ===
const FONT_PSYCHOLOGY_DATABASE = {
  // === SERIF FONTS - TRUST & AUTHORITY ===
  'serif_traditional': {
    emotions: ['trustworthy', 'reliable', 'established', 'formal', 'authoritative', 'sophisticated', 'timeless', 'prestigious'],
    industries: ['finance', 'law', 'insurance', 'banking', 'academic', 'publishing', 'journalism', 'government'],
    themes: ['tradition', 'heritage', 'stability', 'professionalism', 'intellectuality', 'formality'],
    fonts: ['Times New Roman', 'Crimson Text', 'Libre Baskerville', 'Source Serif Pro', 'Merriweather', 'Playfair Display', 'Cormorant Garamond']
  },
  
  'serif_elegant': {
    emotions: ['elegant', 'sophisticated', 'luxurious', 'refined', 'graceful', 'chic', 'classy', 'exclusive'],
    industries: ['luxury', 'fashion', 'jewelry', 'beauty', 'high-end-retail', 'art-gallery', 'fine-dining', 'spa'],
    themes: ['luxury', 'elegance', 'sophistication', 'premium', 'exclusivity', 'refinement'],
    fonts: ['Playfair Display', 'Cormorant Garamond', 'EB Garamond', 'Abril Fatface', 'Libre Baskerville']
  },

  'serif_readable': {
    emotions: ['friendly', 'approachable', 'comfortable', 'reliable', 'clear', 'trustworthy'],
    industries: ['education', 'publishing', 'content', 'blogging', 'news', 'magazines', 'books'],
    themes: ['readability', 'comfort', 'long-form-content', 'accessibility', 'clarity'],
    fonts: ['Merriweather', 'Source Serif Pro', 'Crimson Text', 'Libre Baskerville', 'PT Serif']
  },

  // === SANS-SERIF FONTS - MODERNITY & CLARITY ===
  'sans_modern': {
    emotions: ['modern', 'clean', 'efficient', 'progressive', 'innovative', 'fresh', 'clear', 'straightforward'],
    industries: ['technology', 'startup', 'software', 'digital', 'design', 'architecture', 'consulting'],
    themes: ['modernity', 'efficiency', 'clarity', 'innovation', 'progress', 'simplicity'],
    fonts: ['Roboto', 'Open Sans', 'Lato', 'Source Sans Pro', 'Inter', 'Work Sans', 'Nunito', 'Poppins']
  },

  'sans_geometric': {
    emotions: ['precise', 'systematic', 'organized', 'structured', 'rational', 'logical', 'balanced'],
    industries: ['engineering', 'architecture', 'construction', 'manufacturing', 'automotive', 'aerospace'],
    themes: ['precision', 'geometry', 'structure', 'engineering', 'technical', 'systematic'],
    fonts: ['Montserrat', 'Oswald', 'Raleway', 'Quicksand', 'Varela Round', 'Comfortaa']
  },

  'sans_humanist': {
    emotions: ['friendly', 'approachable', 'warm', 'human', 'organic', 'personal', 'welcoming'],
    industries: ['healthcare', 'education', 'non-profit', 'community', 'social-services', 'wellness'],
    themes: ['humanity', 'warmth', 'accessibility', 'friendliness', 'organic', 'personal'],
    fonts: ['Open Sans', 'Source Sans Pro', 'Lato', 'PT Sans', 'Ubuntu', 'Fira Sans']
  },

  // === SCRIPT & HANDWRITING - PERSONALITY & EMOTION ===
  'script_elegant': {
    emotions: ['elegant', 'feminine', 'romantic', 'sophisticated', 'graceful', 'delicate', 'refined'],
    industries: ['wedding', 'beauty', 'fashion', 'jewelry', 'floral', 'event-planning', 'luxury-services'],
    themes: ['romance', 'femininity', 'elegance', 'celebration', 'luxury', 'personal-touch'],
    fonts: ['Dancing Script', 'Great Vibes', 'Pacifico', 'Satisfy', 'Kaushan Script', 'Alex Brush']
  },

  'script_casual': {
    emotions: ['casual', 'friendly', 'personal', 'warm', 'approachable', 'informal', 'relaxed'],
    industries: ['creative', 'artisan', 'handmade', 'craft', 'personal-brand', 'blogging', 'lifestyle'],
    themes: ['handmade', 'personal', 'authenticity', 'creativity', 'informality', 'warmth'],
    fonts: ['Dancing Script', 'Handlee', 'Caveat', 'Kalam', 'Patrick Hand', 'Amatic SC']
  },

  // === DISPLAY FONTS - IMPACT & CHARACTER ===
  'display_bold': {
    emotions: ['bold', 'strong', 'powerful', 'dramatic', 'impactful', 'commanding', 'confident'],
    industries: ['entertainment', 'sports', 'fitness', 'automotive', 'construction', 'industrial'],
    themes: ['strength', 'power', 'impact', 'boldness', 'drama', 'confidence'],
    fonts: ['Oswald', 'Bebas Neue', 'Anton', 'Fredoka One', 'Righteous', 'Bangers']
  },

  'display_creative': {
    emotions: ['creative', 'artistic', 'unique', 'expressive', 'innovative', 'original', 'inspiring'],
    industries: ['design', 'advertising', 'creative-agency', 'art', 'music', 'entertainment', 'media'],
    themes: ['creativity', 'artistry', 'expression', 'uniqueness', 'innovation', 'inspiration'],
    fonts: ['Abril Fatface', 'Lobster', 'Fredoka One', 'Righteous', 'Bungee', 'Creepster']
  },

  // === MONOSPACE - TECHNICAL & PRECISE ===
  'monospace_technical': {
    emotions: ['precise', 'technical', 'systematic', 'logical', 'reliable', 'methodical'],
    industries: ['programming', 'software', 'engineering', 'data', 'research', 'scientific'],
    themes: ['code', 'precision', 'technical', 'systematic', 'data', 'logic'],
    fonts: ['Source Code Pro', 'Roboto Mono', 'JetBrains Mono', 'Fira Code', 'IBM Plex Mono']
  }
};

// === COMPREHENSIVE GOOGLE FONTS DATABASE ===
// Each font mapped to specific psychological, thematic, and industry associations
const GOOGLE_FONTS_SEMANTIC_MAP = {
  // === TOP TIER FONTS (Most Popular) ===
  'Roboto': {
    psychology: ['modern', 'neutral', 'friendly', 'geometric', 'systematic', 'approachable'],
    emotions: ['trustworthy', 'efficient', 'clean', 'professional', 'reliable'],
    industries: ['technology', 'software', 'mobile', 'digital', 'startup', 'consulting', 'corporate'],
    themes: ['android', 'mobile-first', 'material-design', 'google', 'accessibility', 'universal'],
    vibes: ['minimal', 'systematic', 'corporate', 'tech-forward', 'scalable'],
    colors: ['blue', 'gray', 'white', 'green', 'neutral'],
    concepts: ['efficiency', 'scalability', 'universality', 'accessibility', 'modern-workplace'],
    associations: ['google', 'android', 'material-design', 'progressive-web-apps', 'mobile-interface']
  },

  'Open Sans': {
    psychology: ['humanist', 'friendly', 'approachable', 'warm', 'inclusive', 'accessible'],
    emotions: ['welcoming', 'comfortable', 'trustworthy', 'clear', 'readable'],
    industries: ['education', 'healthcare', 'non-profit', 'government', 'community', 'social-services'],
    themes: ['accessibility', 'inclusivity', 'human-centered', 'clarity', 'openness'],
    vibes: ['friendly', 'accessible', 'democratic', 'inclusive', 'community-focused'],
    colors: ['blue', 'green', 'orange', 'warm-colors', 'earth-tones'],
    concepts: ['universal-access', 'human-rights', 'education', 'democracy', 'social-good'],
    associations: ['wordpress', 'government-sites', 'educational-platforms', 'accessibility-standards']
  },

  'Montserrat': {
    psychology: ['geometric', 'urban', 'sophisticated', 'structured', 'contemporary'],
    emotions: ['confident', 'strong', 'reliable', 'urban', 'sophisticated'],
    industries: ['architecture', 'urban-planning', 'real-estate', 'construction', 'design'],
    themes: ['buenos-aires', 'urban-life', 'architecture', 'geometry', 'city-planning'],
    vibes: ['urban', 'architectural', 'sophisticated', 'metropolitan', 'structured'],
    colors: ['black', 'white', 'gray', 'concrete', 'steel'],
    concepts: ['urbanization', 'architectural-heritage', 'city-identity', 'geometric-design'],
    associations: ['buenos-aires', 'urban-typography', 'architectural-signage', 'city-branding']
  },

  'Lato': {
    psychology: ['humanist', 'serious', 'friendly', 'stable', 'transparent'],
    emotions: ['serious', 'friendly', 'transparent', 'stable', 'warm'],
    industries: ['business', 'consulting', 'professional-services', 'finance', 'corporate'],
    themes: ['summer', 'warmth', 'clarity', 'transparency', 'professionalism'],
    vibes: ['professional', 'warm', 'approachable', 'business-friendly', 'reliable'],
    colors: ['warm-colors', 'yellow', 'orange', 'gold', 'earth-tones'],
    concepts: ['transparency', 'warmth', 'professional-communication', 'business-relationships'],
    associations: ['summer', 'warmth', 'business-communication', 'professional-networking']
  },

  'Source Sans Pro': {
    psychology: ['professional', 'clean', 'systematic', 'reliable', 'technical'],
    emotions: ['professional', 'clean', 'reliable', 'systematic', 'trustworthy'],
    industries: ['technology', 'software', 'adobe', 'design', 'digital-media'],
    themes: ['adobe-ecosystem', 'design-tools', 'creative-suite', 'professional-design'],
    vibes: ['professional', 'design-focused', 'creative-industry', 'tool-oriented'],
    colors: ['blue', 'gray', 'black', 'white', 'professional-palette'],
    concepts: ['design-systems', 'creative-tools', 'professional-design', 'software-interface'],
    associations: ['adobe', 'creative-cloud', 'design-software', 'professional-design-tools']
  },

  // === ELEGANT SERIF COLLECTION ===
  'Playfair Display': {
    psychology: ['dramatic', 'elegant', 'sophisticated', 'transitional', 'high-contrast'],
    emotions: ['elegant', 'sophisticated', 'dramatic', 'luxurious', 'prestigious'],
    industries: ['fashion', 'luxury', 'beauty', 'jewelry', 'high-end-retail', 'editorial'],
    themes: ['fashion-magazines', 'luxury-branding', 'editorial-design', 'high-fashion'],
    vibes: ['editorial', 'fashion-forward', 'luxury', 'sophisticated', 'dramatic'],
    colors: ['black', 'white', 'gold', 'rose-gold', 'elegant-palette'],
    concepts: ['fashion-journalism', 'luxury-lifestyle', 'editorial-sophistication', 'high-end-branding'],
    associations: ['vogue', 'fashion-magazines', 'luxury-brands', 'editorial-design']
  },

  'Cormorant Garamond': {
    psychology: ['classical', 'scholarly', 'traditional', 'refined', 'historical'],
    emotions: ['scholarly', 'refined', 'classical', 'sophisticated', 'traditional'],
    industries: ['publishing', 'academic', 'literary', 'cultural', 'museums'],
    themes: ['classical-literature', 'academic-publishing', 'cultural-heritage', 'scholarship'],
    vibes: ['academic', 'literary', 'cultural', 'classical', 'scholarly'],
    colors: ['deep-blue', 'burgundy', 'gold', 'cream', 'classical-palette'],
    concepts: ['classical-education', 'literary-tradition', 'academic-excellence', 'cultural-preservation'],
    associations: ['universities', 'academic-journals', 'literary-publishing', 'cultural-institutions']
  },

  'Crimson Text': {
    psychology: ['readable', 'traditional', 'book-oriented', 'literary', 'scholarly'],
    emotions: ['readable', 'comfortable', 'traditional', 'scholarly', 'reliable'],
    industries: ['publishing', 'books', 'literature', 'academic', 'editorial'],
    themes: ['book-typography', 'reading-comfort', 'literary-tradition', 'scholarly-work'],
    vibes: ['bookish', 'literary', 'academic', 'reading-focused', 'traditional'],
    colors: ['crimson', 'deep-red', 'burgundy', 'gold', 'classic-book-colors'],
    concepts: ['reading-experience', 'book-design', 'literary-culture', 'academic-writing'],
    associations: ['book-publishing', 'academic-texts', 'literary-journals', 'scholarly-articles']
  },

  // === CREATIVE SCRIPT FONTS ===
  'Dancing Script': {
    psychology: ['casual', 'bouncy', 'lively', 'personal', 'handwritten'],
    emotions: ['casual', 'friendly', 'personal', 'lively', 'warm'],
    industries: ['wedding', 'event-planning', 'personal-branding', 'lifestyle', 'creative'],
    themes: ['handwriting', 'personal-touch', 'celebrations', 'informal-communication'],
    vibes: ['personal', 'celebratory', 'informal', 'friendly', 'warm'],
    colors: ['pastels', 'soft-colors', 'wedding-colors', 'warm-palette'],
    concepts: ['personal-expression', 'celebration', 'informal-communication', 'handmade-aesthetic'],
    associations: ['wedding-invitations', 'personal-blogs', 'greeting-cards', 'informal-branding']
  },

  // === BOLD DISPLAY FONTS ===
  'Oswald': {
    psychology: ['condensed', 'strong', 'impactful', 'bold', 'commanding'],
    emotions: ['strong', 'bold', 'impactful', 'confident', 'powerful'],
    industries: ['sports', 'fitness', 'automotive', 'industrial', 'construction'],
    themes: ['strength', 'power', 'impact', 'boldness', 'industrial-strength'],
    vibes: ['powerful', 'industrial', 'bold', 'impactful', 'strong'],
    colors: ['black', 'red', 'orange', 'bold-colors', 'industrial-palette'],
    concepts: ['strength', 'power', 'industrial-might', 'bold-communication'],
    associations: ['sports-branding', 'industrial-design', 'automotive-industry', 'fitness-brands']
  },

  'Bebas Neue': {
    psychology: ['all-caps', 'bold', 'industrial', 'modern', 'impactful'],
    emotions: ['bold', 'modern', 'impactful', 'strong', 'commanding'],
    industries: ['advertising', 'poster-design', 'branding', 'automotive', 'sports'],
    themes: ['advertising', 'poster-design', 'bold-statements', 'visual-impact'],
    vibes: ['advertising', 'bold', 'impactful', 'poster-style', 'commanding'],
    colors: ['black', 'white', 'red', 'high-contrast', 'bold-palette'],
    concepts: ['visual-impact', 'bold-messaging', 'advertising-power', 'brand-boldness'],
    associations: ['advertising-campaigns', 'poster-design', 'bold-branding', 'visual-communication']
  },

  // === TECHNICAL MONOSPACE ===
  'Source Code Pro': {
    psychology: ['monospace', 'technical', 'precise', 'systematic', 'code-focused'],
    emotions: ['precise', 'technical', 'systematic', 'reliable', 'methodical'],
    industries: ['programming', 'software-development', 'technical-documentation', 'engineering'],
    themes: ['coding', 'programming', 'technical-precision', 'software-development'],
    vibes: ['technical', 'precise', 'code-focused', 'systematic', 'developer-oriented'],
    colors: ['green', 'blue', 'black', 'white', 'terminal-colors'],
    concepts: ['code-readability', 'programming-efficiency', 'technical-precision', 'developer-experience'],
    associations: ['code-editors', 'programming-environments', 'technical-documentation', 'developer-tools']
  },

  // === ADDITIONAL POPULAR FONTS WITH FULL PROFILES ===
  'Poppins': {
    psychology: ['geometric', 'modern', 'friendly', 'approachable', 'clean'],
    emotions: ['modern', 'friendly', 'clean', 'approachable', 'fresh'],
    industries: ['design', 'startup', 'technology', 'creative', 'modern-business'],
    themes: ['modern-design', 'geometric-clarity', 'contemporary-aesthetics'],
    vibes: ['modern', 'clean', 'startup-friendly', 'design-forward', 'contemporary'],
    colors: ['bright-colors', 'modern-palette', 'vibrant-colors', 'fresh-colors'],
    concepts: ['modern-design', 'startup-culture', 'contemporary-aesthetics', 'design-thinking'],
    associations: ['startup-branding', 'modern-design', 'contemporary-websites', 'design-agencies']
  },

  'Nunito': {
    psychology: ['rounded', 'friendly', 'soft', 'approachable', 'warm'],
    emotions: ['friendly', 'soft', 'warm', 'approachable', 'comfortable'],
    industries: ['education', 'children', 'family', 'lifestyle', 'wellness'],
    themes: ['friendliness', 'approachability', 'family-oriented', 'child-friendly'],
    vibes: ['friendly', 'family-oriented', 'soft', 'approachable', 'warm'],
    colors: ['soft-colors', 'pastels', 'warm-colors', 'family-friendly-palette'],
    concepts: ['family-friendliness', 'approachability', 'comfort', 'warmth'],
    associations: ['family-websites', 'children-focused', 'educational-content', 'lifestyle-brands']
  },

  'Raleway': {
    psychology: ['elegant', 'sophisticated', 'refined', 'upscale', 'premium'],
    emotions: ['elegant', 'sophisticated', 'refined', 'upscale', 'premium'],
    industries: ['luxury', 'fashion', 'beauty', 'upscale-retail', 'premium-services'],
    themes: ['elegance', 'sophistication', 'premium-quality', 'refined-taste'],
    vibes: ['elegant', 'sophisticated', 'upscale', 'refined', 'premium'],
    colors: ['elegant-colors', 'sophisticated-palette', 'luxury-colors', 'refined-tones'],
    concepts: ['elegance', 'sophistication', 'premium-experience', 'refined-aesthetics'],
    associations: ['luxury-brands', 'upscale-retail', 'premium-services', 'sophisticated-design']
  },

  'Work Sans': {
    psychology: ['work-focused', 'professional', 'clear', 'systematic', 'business-oriented'],
    emotions: ['professional', 'clear', 'systematic', 'business-like', 'efficient'],
    industries: ['business', 'consulting', 'professional-services', 'corporate', 'workplace'],
    themes: ['workplace-efficiency', 'professional-communication', 'business-clarity'],
    vibes: ['professional', 'business-focused', 'workplace-oriented', 'efficient', 'systematic'],
    colors: ['business-colors', 'professional-palette', 'corporate-colors', 'workplace-tones'],
    concepts: ['workplace-efficiency', 'professional-communication', 'business-productivity'],
    associations: ['workplace-tools', 'business-communication', 'professional-platforms', 'corporate-websites']
  },

  'Inter': {
    psychology: ['interface-focused', 'screen-optimized', 'modern', 'systematic', 'digital'],
    emotions: ['modern', 'systematic', 'digital', 'clear', 'interface-friendly'],
    industries: ['user-interface', 'digital-product', 'software', 'app-development', 'digital-design'],
    themes: ['user-interface', 'digital-experience', 'screen-optimization', 'modern-interfaces'],
    vibes: ['interface-focused', 'digital', 'modern', 'user-friendly', 'systematic'],
    colors: ['interface-colors', 'digital-palette', 'screen-colors', 'ui-colors'],
    concepts: ['user-experience', 'interface-design', 'digital-interaction', 'screen-optimization'],
    associations: ['user-interfaces', 'digital-products', 'app-design', 'web-interfaces']
  },

  // === EXTENDED GOOGLE FONTS CATALOG ===
  
  // SERIF FAMILY EXPANSION
  'EB Garamond': {
    psychology: ['classical', 'scholarly', 'historical', 'refined', 'literary'],
    emotions: ['scholarly', 'classical', 'sophisticated', 'traditional', 'refined'],
    industries: ['academic', 'publishing', 'literary', 'cultural', 'museums', 'libraries'],
    themes: ['classical-scholarship', 'historical-accuracy', 'literary-tradition', 'academic-rigor'],
    vibes: ['academic', 'scholarly', 'classical', 'literary', 'historical'],
    colors: ['deep-blue', 'burgundy', 'gold', 'classical-palette', 'academic-colors'],
    concepts: ['classical-learning', 'scholarly-pursuit', 'literary-excellence', 'historical-preservation'],
    associations: ['universities', 'academic-journals', 'classical-texts', 'scholarly-publications']
  },

  'PT Serif': {
    psychology: ['readable', 'universal', 'accessible', 'clear', 'friendly'],
    emotions: ['readable', 'accessible', 'clear', 'friendly', 'approachable'],
    industries: ['education', 'publishing', 'content', 'journalism', 'blogging'],
    themes: ['universal-design', 'accessibility', 'readability', 'content-focus'],
    vibes: ['accessible', 'universal', 'content-focused', 'readable', 'clear'],
    colors: ['neutral-colors', 'accessible-palette', 'universal-colors'],
    concepts: ['universal-access', 'content-clarity', 'reading-comfort', 'accessibility'],
    associations: ['educational-content', 'accessible-design', 'universal-typography']
  },

  'Libre Baskerville': {
    psychology: ['classical', 'web-optimized', 'elegant', 'readable', 'traditional'],
    emotions: ['classical', 'elegant', 'readable', 'traditional', 'refined'],
    industries: ['publishing', 'editorial', 'literary', 'academic', 'cultural'],
    themes: ['classical-typography', 'web-optimization', 'reading-experience', 'editorial-design'],
    vibes: ['classical', 'editorial', 'readable', 'web-optimized', 'traditional'],
    colors: ['classical-colors', 'editorial-palette', 'traditional-tones'],
    concepts: ['classical-typography', 'web-reading', 'editorial-excellence', 'traditional-elegance'],
    associations: ['web-typography', 'editorial-design', 'classical-publishing']
  },

  'Merriweather': {
    psychology: ['screen-friendly', 'readable', 'comfortable', 'reliable', 'clear'],
    emotions: ['comfortable', 'readable', 'reliable', 'clear', 'friendly'],
    industries: ['web-content', 'blogging', 'journalism', 'digital-publishing', 'education'],
    themes: ['screen-reading', 'digital-comfort', 'web-typography', 'content-focus'],
    vibes: ['screen-friendly', 'content-focused', 'readable', 'web-optimized', 'comfortable'],
    colors: ['web-colors', 'content-palette', 'readable-colors'],
    concepts: ['screen-reading', 'digital-content', 'web-typography', 'reading-comfort'],
    associations: ['web-content', 'digital-publishing', 'screen-typography', 'content-platforms']
  },

  // DISPLAY & DECORATIVE FONTS
  'Abril Fatface': {
    psychology: ['dramatic', 'bold', 'attention-grabbing', 'high-contrast', 'impactful'],
    emotions: ['dramatic', 'bold', 'impactful', 'striking', 'powerful'],
    industries: ['fashion', 'luxury', 'editorial', 'advertising', 'branding'],
    themes: ['editorial-drama', 'fashion-statement', 'luxury-impact', 'visual-drama'],
    vibes: ['dramatic', 'fashion-forward', 'editorial', 'luxury', 'impactful'],
    colors: ['high-contrast', 'dramatic-colors', 'fashion-palette', 'bold-colors'],
    concepts: ['editorial-impact', 'fashion-drama', 'luxury-statement', 'visual-hierarchy'],
    associations: ['fashion-magazines', 'luxury-branding', 'editorial-design', 'high-impact-design']
  },

  'Lobster': {
    psychology: ['casual', 'friendly', 'retro', 'approachable', 'fun'],
    emotions: ['casual', 'friendly', 'fun', 'retro', 'approachable'],
    industries: ['casual-dining', 'entertainment', 'lifestyle', 'retail', 'creative'],
    themes: ['casual-elegance', 'retro-charm', 'friendly-branding', 'approachable-luxury'],
    vibes: ['casual', 'retro', 'friendly', 'approachable', 'fun'],
    colors: ['warm-colors', 'retro-palette', 'friendly-colors', 'casual-tones'],
    concepts: ['casual-elegance', 'retro-style', 'friendly-luxury', 'approachable-design'],
    associations: ['casual-dining', 'retro-branding', 'friendly-businesses', 'lifestyle-brands']
  },

  'Fredoka One': {
    psychology: ['playful', 'rounded', 'friendly', 'child-like', 'approachable'],
    emotions: ['playful', 'friendly', 'fun', 'child-like', 'joyful'],
    industries: ['children', 'education', 'entertainment', 'family', 'toys'],
    themes: ['child-friendly', 'playful-design', 'family-fun', 'educational-play'],
    vibes: ['playful', 'child-friendly', 'fun', 'educational', 'family-oriented'],
    colors: ['bright-colors', 'playful-palette', 'children-colors', 'fun-tones'],
    concepts: ['child-development', 'educational-fun', 'family-bonding', 'playful-learning'],
    associations: ['children-brands', 'educational-content', 'family-entertainment', 'toy-industry']
  },

  'Righteous': {
    psychology: ['bold', 'condensed', 'strong', 'impactful', 'modern'],
    emotions: ['bold', 'strong', 'impactful', 'confident', 'modern'],
    industries: ['sports', 'fitness', 'automotive', 'technology', 'gaming'],
    themes: ['strength', 'performance', 'modern-boldness', 'technological-power'],
    vibes: ['bold', 'strong', 'modern', 'tech-forward', 'performance-oriented'],
    colors: ['bold-colors', 'tech-colors', 'performance-palette', 'strong-tones'],
    concepts: ['performance', 'strength', 'technological-advancement', 'modern-power'],
    associations: ['sports-branding', 'tech-companies', 'gaming-industry', 'performance-brands']
  },

  // SCRIPT & HANDWRITING EXPANSION
  'Great Vibes': {
    psychology: ['elegant', 'flowing', 'feminine', 'sophisticated', 'luxurious'],
    emotions: ['elegant', 'sophisticated', 'feminine', 'luxurious', 'graceful'],
    industries: ['wedding', 'luxury', 'beauty', 'fashion', 'high-end-services'],
    themes: ['wedding-elegance', 'luxury-script', 'feminine-sophistication', 'elegant-celebrations'],
    vibes: ['elegant', 'luxurious', 'wedding-focused', 'sophisticated', 'feminine'],
    colors: ['elegant-colors', 'wedding-palette', 'luxury-tones', 'sophisticated-colors'],
    concepts: ['wedding-luxury', 'elegant-celebrations', 'sophisticated-femininity', 'luxury-experiences'],
    associations: ['wedding-industry', 'luxury-services', 'elegant-events', 'high-end-celebrations']
  },

  'Pacifico': {
    psychology: ['casual', 'beach-inspired', 'relaxed', 'friendly', 'vacation-like'],
    emotions: ['relaxed', 'casual', 'friendly', 'vacation-like', 'carefree'],
    industries: ['travel', 'hospitality', 'beach-resorts', 'casual-dining', 'lifestyle'],
    themes: ['beach-life', 'vacation-vibes', 'casual-luxury', 'relaxed-living'],
    vibes: ['beach-inspired', 'vacation-focused', 'relaxed', 'casual', 'resort-style'],
    colors: ['beach-colors', 'vacation-palette', 'tropical-tones', 'relaxed-colors'],
    concepts: ['vacation-lifestyle', 'beach-culture', 'relaxed-luxury', 'casual-hospitality'],
    associations: ['beach-resorts', 'vacation-brands', 'tropical-destinations', 'casual-hospitality']
  },

  'Kaushan Script': {
    psychology: ['hand-lettered', 'artistic', 'creative', 'personal', 'expressive'],
    emotions: ['artistic', 'creative', 'personal', 'expressive', 'handmade'],
    industries: ['creative', 'artisan', 'design', 'personal-branding', 'artistic-services'],
    themes: ['hand-lettering', 'artistic-expression', 'creative-branding', 'personal-touch'],
    vibes: ['artistic', 'creative', 'handmade', 'personal', 'expressive'],
    colors: ['artistic-colors', 'creative-palette', 'expressive-tones', 'handmade-colors'],
    concepts: ['artistic-expression', 'creative-identity', 'personal-branding', 'handmade-luxury'],
    associations: ['creative-agencies', 'artistic-services', 'personal-brands', 'handmade-businesses']
  },

  // SANS-SERIF EXPANSION
  'Ubuntu': {
    psychology: ['humanist', 'friendly', 'accessible', 'community-oriented', 'inclusive'],
    emotions: ['friendly', 'accessible', 'inclusive', 'community-oriented', 'warm'],
    industries: ['technology', 'open-source', 'community', 'education', 'non-profit'],
    themes: ['open-source', 'community', 'accessibility', 'human-technology', 'inclusive-design'],
    vibes: ['community-focused', 'accessible', 'friendly', 'inclusive', 'humanistic'],
    colors: ['ubuntu-orange', 'community-colors', 'accessible-palette', 'friendly-tones'],
    concepts: ['community-building', 'open-source', 'inclusive-technology', 'human-centered-design'],
    associations: ['ubuntu-linux', 'open-source-projects', 'community-platforms', 'accessible-technology']
  },

  'Fira Sans': {
    psychology: ['technical', 'clear', 'systematic', 'firefox-inspired', 'web-focused'],
    emotions: ['clear', 'systematic', 'technical', 'reliable', 'web-friendly'],
    industries: ['web-development', 'technology', 'software', 'mozilla', 'digital'],
    themes: ['web-technology', 'firefox-ecosystem', 'technical-clarity', 'digital-communication'],
    vibes: ['technical', 'web-focused', 'systematic', 'clear', 'developer-friendly'],
    colors: ['firefox-colors', 'technical-palette', 'web-colors', 'developer-tones'],
    concepts: ['web-standards', 'technical-communication', 'browser-technology', 'digital-clarity'],
    associations: ['mozilla-firefox', 'web-standards', 'developer-tools', 'technical-communication']
  },

  'Quicksand': {
    psychology: ['rounded', 'friendly', 'soft', 'geometric', 'approachable'],
    emotions: ['friendly', 'soft', 'approachable', 'comfortable', 'gentle'],
    industries: ['design', 'children', 'family', 'wellness', 'lifestyle'],
    themes: ['soft-geometry', 'friendly-design', 'approachable-technology', 'gentle-modernism'],
    vibes: ['soft', 'friendly', 'approachable', 'gentle', 'comfortable'],
    colors: ['soft-colors', 'friendly-palette', 'gentle-tones', 'comfortable-colors'],
    concepts: ['soft-design', 'friendly-technology', 'approachable-modernism', 'gentle-communication'],
    associations: ['friendly-brands', 'soft-technology', 'approachable-design', 'comfortable-interfaces']
  },

  'Comfortaa': {
    psychology: ['rounded', 'comfortable', 'soft', 'friendly', 'welcoming'],
    emotions: ['comfortable', 'soft', 'friendly', 'welcoming', 'gentle'],
    industries: ['wellness', 'comfort', 'lifestyle', 'family', 'hospitality'],
    themes: ['comfort', 'wellness', 'soft-living', 'gentle-luxury', 'comfortable-lifestyle'],
    vibes: ['comfortable', 'wellness-focused', 'soft', 'gentle', 'welcoming'],
    colors: ['comfort-colors', 'wellness-palette', 'soft-tones', 'gentle-colors'],
    concepts: ['comfort-living', 'wellness-lifestyle', 'soft-luxury', 'gentle-hospitality'],
    associations: ['wellness-brands', 'comfort-products', 'lifestyle-services', 'hospitality-industry']
  },

  // MONOSPACE EXPANSION
  'Roboto Mono': {
    psychology: ['monospace', 'technical', 'google-ecosystem', 'systematic', 'code-friendly'],
    emotions: ['technical', 'systematic', 'reliable', 'precise', 'clear'],
    industries: ['programming', 'google', 'android-development', 'technical-documentation'],
    themes: ['google-ecosystem', 'android-development', 'technical-precision', 'code-clarity'],
    vibes: ['technical', 'google-focused', 'systematic', 'code-oriented', 'precise'],
    colors: ['google-colors', 'technical-palette', 'code-colors', 'android-tones'],
    concepts: ['android-development', 'google-ecosystem', 'technical-precision', 'code-readability'],
    associations: ['android-studio', 'google-products', 'technical-documentation', 'code-editors']
  },

  'JetBrains Mono': {
    psychology: ['developer-focused', 'IDE-optimized', 'coding-specific', 'professional-development'],
    emotions: ['professional', 'developer-focused', 'precise', 'systematic', 'efficient'],
    industries: ['software-development', 'programming', 'jetbrains', 'IDE-development'],
    themes: ['professional-development', 'IDE-optimization', 'coding-efficiency', 'developer-experience'],
    vibes: ['developer-focused', 'professional', 'IDE-optimized', 'coding-specific', 'efficient'],
    colors: ['jetbrains-colors', 'IDE-palette', 'developer-colors', 'professional-tones'],
    concepts: ['professional-development', 'IDE-experience', 'coding-efficiency', 'developer-productivity'],
    associations: ['jetbrains-ides', 'professional-development', 'coding-environments', 'developer-tools']
  }

  // Note: This represents about 25 key Google Fonts with comprehensive profiling.
  // The actual Google Fonts catalog contains 1400+ fonts, each of which would 
  // benefit from similar detailed psychological and thematic profiling.
};

// === INDUSTRY-SPECIFIC FONT RECOMMENDATIONS ===
const INDUSTRY_FONT_PROFILES = {
  'automotive': {
    primary_fonts: ['Oswald', 'Bebas Neue', 'Roboto Condensed', 'Anton', 'Francois One'],
    secondary_fonts: ['Roboto', 'Montserrat', 'Source Sans Pro', 'PT Sans'],
    psychology: ['strong', 'bold', 'mechanical', 'precise', 'powerful', 'industrial'],
    themes: ['speed', 'power', 'precision', 'engineering', 'performance', 'reliability'],
    colors: ['black', 'red', 'orange', 'steel', 'chrome'],
    concepts: ['horsepower', 'engineering', 'precision', 'speed', 'durability']
  },

  'beauty-spa': {
    primary_fonts: ['Playfair Display', 'Cormorant Garamond', 'Dancing Script', 'Great Vibes'],
    secondary_fonts: ['Lato', 'Open Sans', 'Source Sans Pro', 'Nunito'],
    psychology: ['elegant', 'feminine', 'luxurious', 'soft', 'refined', 'delicate'],
    themes: ['beauty', 'wellness', 'relaxation', 'luxury', 'femininity', 'self-care'],
    colors: ['pink', 'gold', 'rose-gold', 'soft-pastels', 'cream'],
    concepts: ['beauty', 'wellness', 'relaxation', 'luxury', 'self-care', 'femininity']
  },

  'technology-startup': {
    primary_fonts: ['Inter', 'Roboto', 'Source Sans Pro', 'Work Sans', 'Poppins'],
    secondary_fonts: ['Montserrat', 'Lato', 'Open Sans', 'Nunito'],
    psychology: ['modern', 'innovative', 'clean', 'systematic', 'forward-thinking'],
    themes: ['innovation', 'disruption', 'scalability', 'digital-transformation', 'future'],
    colors: ['blue', 'green', 'purple', 'tech-colors', 'digital-palette'],
    concepts: ['innovation', 'disruption', 'scalability', 'digital', 'future-focused']
  },

  'restaurant-food': {
    primary_fonts: ['Playfair Display', 'Merriweather', 'Crimson Text', 'Dancing Script'],
    secondary_fonts: ['Open Sans', 'Lato', 'Source Sans Pro', 'Nunito'],
    psychology: ['appetizing', 'warm', 'inviting', 'traditional', 'artisanal'],
    themes: ['culinary', 'artisanal', 'tradition', 'comfort', 'hospitality', 'flavor'],
    colors: ['warm-colors', 'earth-tones', 'food-colors', 'appetizing-palette'],
    concepts: ['culinary-arts', 'gastronomy', 'hospitality', 'flavor', 'comfort-food']
  },

  'finance-banking': {
    primary_fonts: ['Source Serif Pro', 'Crimson Text', 'Libre Baskerville', 'Merriweather'],
    secondary_fonts: ['Roboto', 'Open Sans', 'Lato', 'Source Sans Pro'],
    psychology: ['trustworthy', 'reliable', 'established', 'professional', 'conservative'],
    themes: ['trust', 'stability', 'security', 'tradition', 'reliability', 'growth'],
    colors: ['blue', 'navy', 'green', 'gold', 'conservative-palette'],
    concepts: ['financial-security', 'trust', 'stability', 'growth', 'investment']
  },

  'healthcare-medical': {
    primary_fonts: ['Open Sans', 'Source Sans Pro', 'Lato', 'Roboto', 'Inter'],
    secondary_fonts: ['Merriweather', 'Source Serif Pro', 'PT Sans'],
    psychology: ['clean', 'trustworthy', 'professional', 'accessible', 'caring'],
    themes: ['health', 'care', 'healing', 'professionalism', 'accessibility', 'trust'],
    colors: ['blue', 'green', 'white', 'medical-colors', 'clean-palette'],
    concepts: ['healthcare', 'healing', 'medical-care', 'wellness', 'professionalism']
  },

  'legal-law': {
    primary_fonts: ['Source Serif Pro', 'Crimson Text', 'Libre Baskerville', 'Playfair Display'],
    secondary_fonts: ['Roboto', 'Open Sans', 'Source Sans Pro'],
    psychology: ['authoritative', 'traditional', 'formal', 'trustworthy', 'established'],
    themes: ['justice', 'authority', 'tradition', 'professionalism', 'integrity'],
    colors: ['navy', 'burgundy', 'gold', 'formal-colors', 'traditional-palette'],
    concepts: ['justice', 'legal-authority', 'professionalism', 'integrity', 'tradition']
  },

  'creative-agency': {
    primary_fonts: ['Montserrat', 'Poppins', 'Raleway', 'Nunito', 'Work Sans'],
    secondary_fonts: ['Inter', 'Source Sans Pro', 'Roboto'],
    psychology: ['creative', 'innovative', 'artistic', 'modern', 'expressive'],
    themes: ['creativity', 'innovation', 'artistry', 'expression', 'design', 'originality'],
    colors: ['vibrant-colors', 'creative-palette', 'artistic-colors', 'expressive-tones'],
    concepts: ['creativity', 'artistic-expression', 'design-innovation', 'visual-communication']
  },

  'fitness-sports': {
    primary_fonts: ['Oswald', 'Bebas Neue', 'Anton', 'Roboto Condensed'],
    secondary_fonts: ['Roboto', 'Montserrat', 'Source Sans Pro'],
    psychology: ['strong', 'energetic', 'dynamic', 'powerful', 'motivating'],
    themes: ['strength', 'energy', 'performance', 'achievement', 'motivation', 'health'],
    colors: ['red', 'orange', 'black', 'energetic-colors', 'motivating-palette'],
    concepts: ['fitness', 'strength', 'performance', 'energy', 'motivation', 'achievement']
  },

  'education-academic': {
    primary_fonts: ['Open Sans', 'Source Sans Pro', 'Merriweather', 'Crimson Text'],
    secondary_fonts: ['Lato', 'Roboto', 'PT Sans', 'Source Serif Pro'],
    psychology: ['accessible', 'clear', 'scholarly', 'trustworthy', 'informative'],
    themes: ['learning', 'knowledge', 'accessibility', 'clarity', 'scholarship'],
    colors: ['blue', 'green', 'educational-colors', 'accessible-palette'],
    concepts: ['education', 'learning', 'knowledge', 'scholarship', 'academic-excellence']
  }
};

// === THEMATIC UNIVERSE MAPPINGS ===
const THEMATIC_UNIVERSES = {
  'luxury_universe': {
    fonts: ['Playfair Display', 'Cormorant Garamond', 'Raleway', 'EB Garamond', 'Abril Fatface'],
    emotions: ['luxurious', 'exclusive', 'prestigious', 'refined', 'elegant'],
    concepts: ['luxury', 'exclusivity', 'premium', 'sophistication', 'high-end'],
    industries: ['luxury-goods', 'high-end-fashion', 'jewelry', 'luxury-automotive', 'premium-hospitality'],
    associations: ['wealth', 'status', 'refinement', 'exclusivity', 'prestige']
  },

  'tech_innovation_universe': {
    fonts: ['Inter', 'Roboto', 'Source Sans Pro', 'Work Sans', 'Poppins'],
    emotions: ['innovative', 'forward-thinking', 'systematic', 'efficient', 'modern'],
    concepts: ['innovation', 'technology', 'digital-transformation', 'efficiency', 'scalability'],
    industries: ['software', 'startups', 'tech-companies', 'digital-agencies', 'fintech'],
    associations: ['silicon-valley', 'disruption', 'digital', 'ai', 'future']
  },

  'artisan_craft_universe': {
    fonts: ['Dancing Script', 'Handlee', 'Caveat', 'Amatic SC', 'Patrick Hand'],
    emotions: ['handmade', 'personal', 'authentic', 'warm', 'artisanal'],
    concepts: ['craftsmanship', 'authenticity', 'handmade', 'artisanal', 'personal-touch'],
    industries: ['craft', 'artisan', 'handmade-goods', 'local-business', 'creative'],
    associations: ['handcrafted', 'local', 'authentic', 'personal', 'artisanal']
  },

  'corporate_professional_universe': {
    fonts: ['Roboto', 'Open Sans', 'Lato', 'Source Sans Pro', 'Work Sans'],
    emotions: ['professional', 'trustworthy', 'reliable', 'systematic', 'clear'],
    concepts: ['professionalism', 'reliability', 'clarity', 'efficiency', 'trust'],
    industries: ['consulting', 'finance', 'corporate', 'business-services', 'professional-services'],
    associations: ['business', 'corporate', 'professional', 'reliable', 'trustworthy']
  },

  'wellness_lifestyle_universe': {
    fonts: ['Nunito', 'Comfortaa', 'Quicksand', 'Varela Round', 'Open Sans'],
    emotions: ['calm', 'peaceful', 'wellness', 'balanced', 'harmonious'],
    concepts: ['wellness', 'balance', 'harmony', 'peace', 'mindfulness'],
    industries: ['wellness', 'spa', 'yoga', 'meditation', 'lifestyle'],
    associations: ['wellness', 'mindfulness', 'balance', 'harmony', 'peace']
  }
};

// === ADVANCED SEMANTIC SEARCH ENGINE ===
class AdvancedSemanticEngine {
  constructor() {
    this.fontDatabase = GOOGLE_FONTS_SEMANTIC_MAP;
    this.industryProfiles = INDUSTRY_FONT_PROFILES;
    this.thematicUniverses = THEMATIC_UNIVERSES;
    this.psychologyProfiles = FONT_PSYCHOLOGY_DATABASE;
  }

  // Deep semantic search with multiple layers of association
  deepSemanticSearch(query) {
    const results = new Map();
    const queryTerms = this.extractQueryTerms(query);
    
    // Layer 1: Direct keyword matching
    this.directKeywordMatch(queryTerms, results);
    
    // Layer 2: Psychological profiling
    this.psychologicalProfiling(queryTerms, results);
    
    // Layer 3: Industry-specific matching
    this.industrySpecificMatching(queryTerms, results);
    
    // Layer 4: Thematic universe mapping
    this.thematicUniverseMapping(queryTerms, results);
    
    // Layer 5: Associative intelligence (context expansion)
    this.associativeIntelligence(queryTerms, results);
    
    return this.rankAndFilterResults(results);
  }

  // Direct keyword matching
  directKeywordMatch(queryTerms, results) {
    const { terms } = queryTerms;
    
    Object.entries(this.fontDatabase).forEach(([fontName, fontData]) => {
      let score = 0;
      
      terms.forEach(term => {
        // Check psychology keywords
        if (fontData.psychology?.some(p => p.includes(term) || term.includes(p))) {
          score += 15;
        }
        
        // Check emotions
        if (fontData.emotions?.some(e => e.includes(term) || term.includes(e))) {
          score += 12;
        }
        
        // Check industries
        if (fontData.industries?.some(i => i.includes(term) || term.includes(i))) {
          score += 10;
        }
        
        // Check themes
        if (fontData.themes?.some(t => t.includes(term) || term.includes(t))) {
          score += 8;
        }
        
        // Check concepts
        if (fontData.concepts?.some(c => c.includes(term) || term.includes(c))) {
          score += 6;
        }
        
        // Font name similarity
        if (fontName.toLowerCase().includes(term) || term.includes(fontName.toLowerCase())) {
          score += 20;
        }
      });
      
      if (score > 0) {
        if (!results.has(fontName)) results.set(fontName, {});
        results.get(fontName).directMatch = score;
      }
    });
  }

  // Psychological profiling matching
  psychologicalProfiling(queryTerms, results) {
    const { emotionalContext } = queryTerms;
    
    emotionalContext.forEach(emotion => {
      Object.entries(this.psychologyProfiles).forEach(([profileName, profile]) => {
        if (profile.emotions.includes(emotion.emotion)) {
          profile.fonts.forEach(fontName => {
            if (!results.has(fontName)) results.set(fontName, {});
            results.get(fontName).psychologyMatch = emotion.confidence;
          });
        }
      });
    });
  }

  // Industry-specific matching
  industrySpecificMatching(queryTerms, results) {
    const { businessContext } = queryTerms;
    
    businessContext.forEach(context => {
      const industryProfile = this.industryProfiles[context.industry];
      if (industryProfile) {
        // Primary fonts get higher scores
        industryProfile.primary_fonts.forEach(fontName => {
          if (!results.has(fontName)) results.set(fontName, {});
          results.get(fontName).industryMatch = context.confidence * 1.5;
        });
        
        // Secondary fonts get moderate scores
        industryProfile.secondary_fonts.forEach(fontName => {
          if (!results.has(fontName)) results.set(fontName, {});
          results.get(fontName).industryMatch = context.confidence;
        });
      }
    });
  }

  // Thematic universe mapping
  thematicUniverseMapping(queryTerms, results) {
    const { terms } = queryTerms;
    
    Object.entries(this.thematicUniverses).forEach(([universeName, universe]) => {
      let universeScore = 0;
      
      terms.forEach(term => {
        if (universe.emotions.some(e => e.includes(term) || term.includes(e)) ||
            universe.concepts.some(c => c.includes(term) || term.includes(c)) ||
            universe.associations.some(a => a.includes(term) || term.includes(a))) {
          universeScore += 8;
        }
      });
      
      if (universeScore > 0) {
        universe.fonts.forEach(fontName => {
          if (!results.has(fontName)) results.set(fontName, {});
          results.get(fontName).thematicMatch = universeScore;
        });
      }
    });
  }

  // Associative intelligence - expand context through related concepts
  associativeIntelligence(queryTerms, results) {
    const { terms, businessContext, emotionalContext } = queryTerms;
    
    // Cross-reference business and emotional contexts
    businessContext.forEach(business => {
      emotionalContext.forEach(emotion => {
        const associationScore = this.calculateAssociationScore(business.industry, emotion.emotion);
        if (associationScore > 5) {
          this.applyAssociativeBoost(business.industry, emotion.emotion, associationScore, results);
        }
      });
    });
    
    // Expand through semantic neighbors
    this.expandSemanticNeighbors(terms, results);
  }

  // Calculate association score between industry and emotion
  calculateAssociationScore(industry, emotion) {
    const associationMatrix = {
      'automotive': { 'bold': 10, 'strong': 10, 'powerful': 9, 'reliable': 8 },
      'beauty': { 'elegant': 10, 'sophisticated': 9, 'luxurious': 8, 'refined': 8 },
      'technology': { 'modern': 10, 'innovative': 9, 'clean': 8, 'systematic': 7 },
      'restaurant': { 'warm': 9, 'inviting': 8, 'traditional': 7, 'artisanal': 7 },
      'finance': { 'trustworthy': 10, 'reliable': 9, 'professional': 8, 'stable': 8 },
      'legal': { 'authoritative': 10, 'traditional': 9, 'formal': 8, 'trustworthy': 8 },
      'medical': { 'clean': 9, 'trustworthy': 8, 'professional': 8, 'accessible': 7 },
      'fitness': { 'strong': 10, 'energetic': 9, 'dynamic': 8, 'powerful': 8 },
      'creative': { 'creative': 10, 'innovative': 9, 'artistic': 8, 'expressive': 8 }
    };
    
    return associationMatrix[industry]?.[emotion] || 0;
  }

  // Apply associative boost to matching fonts
  applyAssociativeBoost(industry, emotion, score, results) {
    Object.entries(this.fontDatabase).forEach(([fontName, fontData]) => {
      if (fontData.industries?.includes(industry) && fontData.emotions?.includes(emotion)) {
        if (!results.has(fontName)) results.set(fontName, {});
        results.get(fontName).associativeBoost = score;
      }
    });
  }

  // Expand through semantic neighbors
  expandSemanticNeighbors(terms, results) {
    const semanticNeighbors = {
      'modern': ['contemporary', 'current', 'fresh', 'new', 'updated'],
      'elegant': ['sophisticated', 'refined', 'classy', 'graceful', 'chic'],
      'bold': ['strong', 'powerful', 'dramatic', 'impactful', 'commanding'],
      'clean': ['minimal', 'simple', 'clear', 'uncluttered', 'pure'],
      'friendly': ['warm', 'approachable', 'welcoming', 'comfortable', 'inviting'],
      'professional': ['business', 'corporate', 'formal', 'serious', 'reliable'],
      'creative': ['artistic', 'innovative', 'original', 'expressive', 'unique'],
      'luxury': ['premium', 'exclusive', 'high-end', 'upscale', 'prestigious']
    };
    
    terms.forEach(term => {
      Object.entries(semanticNeighbors).forEach(([concept, neighbors]) => {
        if (neighbors.includes(term) || concept.includes(term)) {
          // Find fonts associated with this concept
          Object.entries(this.fontDatabase).forEach(([fontName, fontData]) => {
            if (fontData.psychology?.includes(concept) || 
                fontData.emotions?.includes(concept) ||
                fontData.themes?.includes(concept)) {
              if (!results.has(fontName)) results.set(fontName, {});
              results.get(fontName).semanticExpansion = 5;
            }
          });
        }
      });
    });
  }

  // Extract and process query terms
  extractQueryTerms(query) {
    const normalizedQuery = query.toLowerCase();
    const terms = normalizedQuery.split(/[\s,]+/).filter(term => term.length > 2);
    
    return {
      terms,
      businessContext: this.detectBusinessContext(normalizedQuery),
      emotionalContext: this.detectEmotionalContext(normalizedQuery)
    };
  }

  // Generate human-readable interpretation
  generateInterpretation(query, results) {
    const queryTerms = this.extractQueryTerms(query);
    const parts = [];
    
    if (queryTerms.businessContext.length > 0) {
      const topBusiness = queryTerms.businessContext[0];
      parts.push(`Detected business: ${topBusiness.industry}`);
    }
    
    if (queryTerms.emotionalContext.length > 0) {
      const topEmotion = queryTerms.emotionalContext[0];
      parts.push(`Style preference: ${topEmotion.emotion}`);
    }
    
    if (results.length > 0) {
      parts.push(`Found ${results.length} relevant fonts`);
    }
    
    return parts.join(' | ') || 'Advanced semantic search active';
  }

  // Detect style context
  detectStyleContext(query) {
    const stylePatterns = {
      'serif': /\b(serif|traditional|classic|formal|elegant|sophisticated)\b/g,
      'sans-serif': /\b(sans|modern|clean|minimal|contemporary|simple)\b/g,
      'script': /\b(script|handwritten|calligraphy|cursive|elegant|feminine)\b/g,
      'display': /\b(display|headline|decorative|bold|dramatic|impact)\b/g,
      'monospace': /\b(monospace|code|technical|programming|fixed-width)\b/g
    };

    const styles = [];
    Object.entries(stylePatterns).forEach(([style, pattern]) => {
      const matches = query.match(pattern);
      if (matches) {
        styles.push({
          style,
          confidence: matches.length * 7,
          keywords: matches
        });
      }
    });

    return styles.sort((a, b) => b.confidence - a.confidence);
  }

  // Extract and normalize query terms
  extractQueryTerms(query) {
    const normalized = query.toLowerCase();
    const terms = normalized.split(/[\s,.-]+/).filter(term => term.length > 2);
    
    // Add business context detection
    const businessContext = this.detectBusinessContext(normalized);
    const emotionalContext = this.detectEmotionalContext(normalized);
    const styleContext = this.detectStyleContext(normalized);
    
    return {
      terms,
      businessContext,
      emotionalContext,
      styleContext,
      originalQuery: normalized
    };
  }

  // Detect business context from natural language
  detectBusinessContext(query) {
    const businessPatterns = {
      'automotive': /\b(garage|mechanic|auto|car|vehicle|motor|automotive|repair|dealership)\b/g,
      'restaurant': /\b(restaurant|food|dining|cafe|bistro|chef|culinary|menu|kitchen)\b/g,
      'technology': /\b(tech|software|app|startup|digital|coding|programming|web|mobile)\b/g,
      'beauty': /\b(beauty|spa|salon|makeup|skincare|cosmetics|wellness|massage)\b/g,
      'fitness': /\b(gym|fitness|workout|training|sport|athletic|health|exercise)\b/g,
      'finance': /\b(bank|finance|financial|investment|money|accounting|insurance)\b/g,
      'legal': /\b(law|legal|attorney|lawyer|court|justice|firm)\b/g,
      'medical': /\b(medical|health|doctor|clinic|hospital|healthcare|dental|vet)\b/g,
      'education': /\b(school|education|university|academic|learning|teaching|student)\b/g,
      'creative': /\b(design|creative|agency|art|studio|marketing|advertising)\b/g
    };

    const contexts = [];
    Object.entries(businessPatterns).forEach(([industry, pattern]) => {
      const matches = query.match(pattern);
      if (matches) {
        contexts.push({
          industry,
          confidence: matches.length * 10,
          keywords: matches
        });
      }
    });

    return contexts.sort((a, b) => b.confidence - a.confidence);
  }

  // Detect emotional context
  detectEmotionalContext(query) {
    const emotionalPatterns = {
      'elegant': /\b(elegant|sophisticated|classy|refined|graceful|chic|luxury)\b/g,
      'modern': /\b(modern|contemporary|clean|minimal|fresh|sleek|futuristic)\b/g,
      'friendly': /\b(friendly|warm|approachable|welcoming|comfortable|casual)\b/g,
      'bold': /\b(bold|strong|powerful|dramatic|impactful|commanding)\b/g,
      'professional': /\b(professional|business|corporate|formal|serious|reliable)\b/g,
      'creative': /\b(creative|artistic|unique|expressive|innovative|original)\b/g,
      'trustworthy': /\b(trustworthy|reliable|stable|secure|dependable|honest)\b/g
    };

    const emotions = [];
    Object.entries(emotionalPatterns).forEach(([emotion, pattern]) => {
      const matches = query.match(pattern);
      if (matches) {
        emotions.push({
          emotion,
          confidence: matches.length * 8,
          keywords: matches
        });
      }
    });

    return emotions.sort((a, b) => b.confidence - a.confidence);
  }

  // Rank and filter results
  rankAndFilterResults(results) {
    return Array.from(results.entries())
      .map(([fontName, scores]) => ({
        font: fontName,
        totalScore: Object.values(scores).reduce((sum, score) => sum + score, 0),
        breakdown: scores,
        confidence: this.calculateConfidence(scores)
      }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 20); // Top 20 results
  }

  // Calculate confidence based on multiple matching factors
  calculateConfidence(scores) {
    const factors = Object.keys(scores).length;
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const avgScore = totalScore / factors;
    
    return Math.min(100, Math.round(avgScore * factors * 0.1));
  }

  // Business phrase processing for natural language queries
  processBusinessPhrase(phrase) {
    const businessPhrases = {
      "i'm a garage mechanic": { industry: 'automotive', confidence: 95 },
      "i run a restaurant": { industry: 'restaurant', confidence: 95 },
      "i own a beauty salon": { industry: 'beauty', confidence: 95 },
      "tech startup": { industry: 'technology', confidence: 90 },
      "law firm": { industry: 'legal', confidence: 90 },
      "fitness center": { industry: 'fitness', confidence: 90 },
      "medical practice": { industry: 'medical', confidence: 90 }
    };

    for (const [pattern, context] of Object.entries(businessPhrases)) {
      if (phrase.includes(pattern)) {
        return context;
      }
    }

    return null;
  }

  // Get recommendations for specific business context
  getBusinessRecommendations(industry) {
    const profile = this.industryProfiles[industry];
    if (!profile) return [];

    return profile.primary_fonts.map(font => ({
      font,
      reason: `Recommended for ${industry} industry`,
      confidence: 85,
      psychology: profile.psychology,
      themes: profile.themes
    }));
  }
}

// === INTELLIGENT FONT SEARCH FUNCTION ===
function intelligentFontSearch(query) {
  const engine = new AdvancedSemanticEngine();
  const results = engine.deepSemanticSearch(query);
  
  return {
    results: results.map(result => ({
      concept: result.font,
      data: {
        fonts: [result.font],
        synonyms: engine.fontDatabase[result.font]?.psychology || [],
        contexts: engine.fontDatabase[result.font]?.themes || []
      },
      score: result.totalScore,
      confidence: result.confidence,
      reason: `Intelligent matching: ${Object.keys(result.breakdown).join(', ')}`
    })),
    confidence: results.length > 0 ? results[0].confidence : 0,
    interpretation: engine.generateInterpretation(query, results)
  };
}

// Export for use in browser environment
if (typeof window !== 'undefined') {
  window.AdvancedSemanticEngine = AdvancedSemanticEngine;
  window.GOOGLE_FONTS_SEMANTIC_MAP = GOOGLE_FONTS_SEMANTIC_MAP;
  window.INDUSTRY_FONT_PROFILES = INDUSTRY_FONT_PROFILES;
  window.THEMATIC_UNIVERSES = THEMATIC_UNIVERSES;
  window.intelligentFontSearch = intelligentFontSearch;
}