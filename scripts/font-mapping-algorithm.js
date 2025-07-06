// INTELLIGENT FONT MAPPING ALGORITHM
// Auto-assigns Google Fonts to semantic concepts based on name analysis, category, and style patterns

class FontMappingAlgorithm {
  constructor(semanticDictionary) {
    this.dictionary = semanticDictionary;
    this.fontAnalysisCache = new Map();
    
    // Pattern mapping for font name analysis
    this.namePatterns = {
      // Style indicators in font names
      'elegant': /\b(elegant|playfair|cormorant|garamond|didot|libre|crimson|lora|sorts)\b/i,
      'modern': /\b(inter|roboto|work|source|fira|ubuntu|nunito|system|ui|interface)\b/i,
      'tech': /\b(code|mono|jetbrains|fira|source|system|roboto|droid|noto)\b/i,
      'vintage': /\b(old|vintage|retro|antique|typewriter|courier|americana|rustic)\b/i,
      'script': /\b(script|dancing|pacifico|lobster|satisfy|tangerine|handlee)\b/i,
      'bold': /\b(bold|black|heavy|impact|oswald|bebas|anton|francois|alfa)\b/i,
      'light': /\b(light|thin|hairline|ultra|extra|quicksand|raleway)\b/i,
      'condensed': /\b(condensed|compressed|narrow|squeeze|fjalla|pathway)\b/i,
      'display': /\b(display|decorative|headline|poster|banner|abril|bungee)\b/i,
      'handwriting': /\b(hand|handwritten|handlee|kalam|caveat|architect|indie)\b/i,
      'geometric': /\b(geometric|circular|round|rounded|varela|quicksand|comfortaa)\b/i,
      'serif': /\b(serif|times|georgia|minion|caslon|garamond|baskerville)\b/i,
      'sans': /\b(sans|helvetica|arial|open|lato|montserrat|poppins)\b/i,
      
      // Business/sector indicators
      'restaurant': /\b(chef|kitchen|menu|food|restaurant|bistro|cafe)\b/i,
      'tech': /\b(tech|digital|cyber|quantum|matrix|pixel|binary)\b/i,
      'law': /\b(law|legal|justice|court|formal|professional)\b/i,
      'creative': /\b(creative|design|art|studio|brush|sketch|draw)\b/i,
      'kids': /\b(kids|child|comic|fun|bubbly|cartoon|fredoka|schoolbell)\b/i,
      'luxury': /\b(luxury|premium|gold|diamond|royal|imperial|prestige)\b/i,
      'industrial': /\b(industrial|metal|steel|iron|factory|workshop|mechanic)\b/i,
      
      // Geographic/cultural
      'latin': /\b(latin|spanish|mexican|portuguese|brazil)\b/i,
      'asian': /\b(chinese|japanese|korean|asian|noto|source|han)\b/i,
      'arabic': /\b(arabic|persian|urdu|farsi|amiri|scheherazade)\b/i,
      'indian': /\b(devanagari|hindi|sanskrit|bengali|tamil|gujarati)\b/i,
      'russian': /\b(cyrillic|russian|slavic|bulgarian|serbian)\b/i
    };
    
    // Category-to-concept mapping
    this.categoryMapping = {
      'serif': ['elegant', 'traditional', 'formal', 'readable', 'classic', 'restaurant', 'law', 'academic'],
      'sans-serif': ['modern', 'clean', 'tech', 'professional', 'minimal', 'universal', 'startup'],
      'display': ['bold', 'dramatic', 'headline', 'impact', 'creative', 'poster'],
      'handwriting': ['personal', 'artisan', 'handmade', 'casual', 'script', 'organic'],
      'monospace': ['tech', 'code', 'programming', 'technical', 'digital', 'minimal']
    };
    
    // Weight-to-concept mapping
    this.weightMapping = {
      '100-300': ['light', 'elegant', 'delicate', 'minimal', 'feminine'],
      '400-500': ['universal', 'readable', 'professional', 'neutral'],
      '600-900': ['bold', 'strong', 'impact', 'masculine', 'industrial']
    };
  }

  // Main function to analyze and map a Google Font
  analyzeAndMapFont(googleFont) {
    const fontFamily = googleFont.family;
    const fontCategory = googleFont.category;
    const fontVariants = googleFont.variants || ['400'];
    
    // Check cache first
    const cacheKey = `${fontFamily}-${fontCategory}`;
    if (this.fontAnalysisCache.has(cacheKey)) {
      return this.fontAnalysisCache.get(cacheKey);
    }
    
    const mappedConcepts = new Set();
    const scores = {};
    
    // 1. Analyze font name patterns
    const nameAnalysis = this.analyzeNamePatterns(fontFamily);
    nameAnalysis.forEach(concept => {
      mappedConcepts.add(concept);
      scores[concept] = (scores[concept] || 0) + 10; // High score for name matches
    });
    
    // 2. Map based on category
    const categoryAnalysis = this.analyzeCategoryMapping(fontCategory);
    categoryAnalysis.forEach(concept => {
      mappedConcepts.add(concept);
      scores[concept] = (scores[concept] || 0) + 7; // Medium-high score
    });
    
    // 3. Analyze available weights
    const weightAnalysis = this.analyzeWeightMapping(fontVariants);
    weightAnalysis.forEach(concept => {
      mappedConcepts.add(concept);
      scores[concept] = (scores[concept] || 0) + 3; // Lower score for weight inference
    });
    
    // 4. Cross-reference with existing dictionary concepts
    const dictionaryMatches = this.findDictionaryMatches(fontFamily, fontCategory);
    dictionaryMatches.forEach(concept => {
      mappedConcepts.add(concept);
      scores[concept] = (scores[concept] || 0) + 15; // Highest score for existing matches
    });
    
    // 5. Apply semantic expansion
    const expandedConcepts = this.applySemanticExpansion(Array.from(mappedConcepts));
    expandedConcepts.forEach(concept => {
      mappedConcepts.add(concept);
      scores[concept] = (scores[concept] || 0) + 2; // Low score for expanded concepts
    });
    
    // Sort concepts by score
    const sortedConcepts = Array.from(mappedConcepts)
      .sort((a, b) => (scores[b] || 0) - (scores[a] || 0))
      .slice(0, 8); // Limit to top 8 most relevant concepts
    
    const result = {
      fontFamily,
      fontCategory,
      concepts: sortedConcepts,
      scores,
      confidence: this.calculateConfidence(scores, sortedConcepts),
      reasoning: this.generateReasoning(fontFamily, sortedConcepts, scores)
    };
    
    // Cache result
    this.fontAnalysisCache.set(cacheKey, result);
    
    return result;
  }
  
  // Analyze font name against predefined patterns
  analyzeNamePatterns(fontFamily) {
    const matchedConcepts = [];
    const normalizedName = fontFamily.toLowerCase();
    
    Object.entries(this.namePatterns).forEach(([concept, pattern]) => {
      if (pattern.test(normalizedName)) {
        matchedConcepts.push(concept);
      }
    });
    
    return matchedConcepts;
  }
  
  // Map font category to concepts
  analyzeCategoryMapping(category) {
    return this.categoryMapping[category] || [];
  }
  
  // Analyze font weights to infer style concepts
  analyzeWeightMapping(variants) {
    const concepts = [];
    const numericWeights = variants
      .filter(v => /^\d+$/.test(v))
      .map(v => parseInt(v));
    
    if (numericWeights.length === 0) return concepts;
    
    const minWeight = Math.min(...numericWeights);
    const maxWeight = Math.max(...numericWeights);
    
    if (minWeight <= 300) concepts.push(...this.weightMapping['100-300']);
    if (numericWeights.some(w => w >= 400 && w <= 500)) concepts.push(...this.weightMapping['400-500']);
    if (maxWeight >= 600) concepts.push(...this.weightMapping['600-900']);
    
    return [...new Set(concepts)]; // Remove duplicates
  }
  
  // Find existing matches in semantic dictionary
  findDictionaryMatches(fontFamily, category) {
    const matches = [];
    const normalizedName = fontFamily.toLowerCase();
    
    Object.entries(this.dictionary).forEach(([conceptKey, conceptData]) => {
      // Check if font is explicitly listed
      if (conceptData.fonts && conceptData.fonts.some(font => 
        font.toLowerCase().includes(normalizedName) || normalizedName.includes(font.toLowerCase())
      )) {
        matches.push(conceptKey);
      }
      
      // Check synonyms for partial matches
      if (conceptData.synonyms && conceptData.synonyms.some(synonym =>
        normalizedName.includes(synonym.toLowerCase()) || synonym.toLowerCase().includes(normalizedName)
      )) {
        matches.push(conceptKey);
      }
    });
    
    return [...new Set(matches)];
  }
  
  // Apply semantic expansion based on concept relationships
  applySemanticExpansion(concepts) {
    const expanded = new Set();
    
    concepts.forEach(concept => {
      // Add related concepts based on common contexts
      Object.entries(this.dictionary).forEach(([key, data]) => {
        if (data.contexts && concepts.some(c => 
          this.dictionary[c] && this.dictionary[c].contexts && 
          this.dictionary[c].contexts.some(ctx => data.contexts.includes(ctx))
        )) {
          expanded.add(key);
        }
      });
    });
    
    return Array.from(expanded);
  }
  
  // Calculate confidence score (0-100)
  calculateConfidence(scores, concepts) {
    if (concepts.length === 0) return 0;
    
    const maxScore = Math.max(...Object.values(scores));
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const avgScore = totalScore / concepts.length;
    
    // Confidence based on score strength and consistency
    return Math.min(100, Math.round((maxScore + avgScore) / 2 * 4));
  }
  
  // Generate human-readable reasoning
  generateReasoning(fontFamily, concepts, scores) {
    const reasons = [];
    const topConcept = concepts[0];
    const topScore = scores[topConcept] || 0;
    
    if (topScore >= 15) {
      reasons.push(`Explicitly listed in ${topConcept} category`);
    } else if (topScore >= 10) {
      reasons.push(`Font name suggests ${topConcept} style`);
    } else if (topScore >= 7) {
      reasons.push(`Category indicates ${topConcept} usage`);
    }
    
    if (concepts.length > 3) {
      reasons.push(`Also suitable for ${concepts.slice(1, 3).join(', ')} contexts`);
    }
    
    return reasons.join('. ');
  }
  
  // Batch process multiple Google Fonts
  batchAnalyzeFonts(googleFonts) {
    const results = [];
    const progressCallback = (processed, total) => {
      console.log(`🔍 Analyzing fonts: ${processed}/${total} (${Math.round(processed/total*100)}%)`);
    };
    
    googleFonts.forEach((font, index) => {
      const analysis = this.analyzeAndMapFont(font);
      results.push(analysis);
      
      if (index % 50 === 0) {
        progressCallback(index + 1, googleFonts.length);
      }
    });
    
    progressCallback(googleFonts.length, googleFonts.length);
    console.log(`✅ Font analysis complete! Processed ${results.length} fonts.`);
    
    return results;
  }
  
  // Generate enhanced semantic dictionary with all mapped fonts
  generateEnhancedDictionary(fontAnalyses) {
    const enhancedDict = { ...this.dictionary };
    
    // Group fonts by concepts
    const conceptToFonts = {};
    
    fontAnalyses.forEach(analysis => {
      analysis.concepts.forEach(concept => {
        if (!conceptToFonts[concept]) {
          conceptToFonts[concept] = [];
        }
        
        // Add font with confidence score
        conceptToFonts[concept].push({
          font: analysis.fontFamily,
          confidence: analysis.confidence,
          score: analysis.scores[concept] || 0
        });
      });
    });
    
    // Update dictionary with new font mappings
    Object.entries(conceptToFonts).forEach(([concept, fonts]) => {
      // Sort fonts by score/confidence
      const sortedFonts = fonts
        .sort((a, b) => b.score - a.score)
        .map(f => f.font);
      
      if (enhancedDict[concept]) {
        // Merge with existing fonts, prioritizing explicit mappings
        const existingFonts = enhancedDict[concept].fonts || [];
        const allFonts = [...existingFonts, ...sortedFonts];
        enhancedDict[concept].fonts = [...new Set(allFonts)]; // Remove duplicates
      } else {
        // Create new concept entry
        enhancedDict[concept] = {
          synonyms: [concept],
          contexts: [],
          fonts: sortedFonts
        };
      }
    });
    
    return enhancedDict;
  }
  
  // Export results for integration
  exportResults(analyses, format = 'json') {
    if (format === 'dictionary') {
      return this.generateEnhancedDictionary(analyses);
    }
    
    if (format === 'mapping') {
      const mapping = {};
      analyses.forEach(analysis => {
        mapping[analysis.fontFamily] = {
          category: analysis.fontCategory,
          concepts: analysis.concepts,
          confidence: analysis.confidence
        };
      });
      return mapping;
    }
    
    return analyses; // Default JSON format
  }
}

// Usage example:
// const algorithm = new FontMappingAlgorithm(SEMANTIC_DICTIONARY);
// const googleFonts = await fetchGoogleFonts(); // Your Google Fonts API call
// const analyses = algorithm.batchAnalyzeFonts(googleFonts);
// const enhancedDict = algorithm.exportResults(analyses, 'dictionary');

export { FontMappingAlgorithm };