// AI Service for Product Recommendations
// This service simulates AI-powered recommendations using intelligent keyword matching and logic
// In production, this would connect to OpenAI API, Minimax API, or other AI services

const getAIRecommendations = async (userQuery, products) => {
    // Simulate realistic API delay with variation
    const delay = 1500 + Math.random() * 2000;
    await new Promise(resolve => setTimeout(resolve, delay));

    // Simulate occasional API failures for demo purposes (5% chance)
    if (Math.random() < 0.05) {
        throw new Error('AI service temporarily unavailable. Please try again.');
    }

    const query = userQuery.toLowerCase();
    const recommendations = [];

    // Extract keywords from user query
    const keywords = extractKeywords(query);

    // Score each product based on relevance
    const scoredProducts = products.map(product => ({
        product,
        score: calculateRelevanceScore(product, keywords, query)
    }));

    // Filter products with score > 0 and sort by score
    const filteredProducts = scoredProducts
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6); // Return top 6 recommendations

    return filteredProducts.map(item => item.product);
};

const extractKeywords = (query) => {
    const keywords = {
        categories: ['phone', 'smartphone', 'laptop', 'tablet', 'headphones', 'headset'],
        brands: ['apple', 'samsung', 'google', 'dell', 'sony', 'bose'],
        features: ['noise', 'canceling', 'wireless', 'ai', 'gaming', 'professional', 'budget'],
        price: ['cheap', 'expensive', 'budget', 'affordable', 'premium', 'under', 'over'],
        use: ['programming', 'work', 'gaming', 'creative', 'productivity', 'entertainment']
    };

    const extracted = {};
    Object.keys(keywords).forEach(category => {
        extracted[category] = keywords[category].filter(keyword =>
            query.includes(keyword)
        );
    });

    return extracted;
};

const calculateRelevanceScore = (product, keywords, query) => {
    let score = 0;

    // Category matching
    if (keywords.categories.length > 0) {
        if (keywords.categories.includes(product.category)) {
            score += 10;
        }
        // Fuzzy category matching
        if ((keywords.categories.includes('phone') && product.category === 'smartphone') ||
            (keywords.categories.includes('smartphone') && product.category === 'phone')) {
            score += 8;
        }
    }

    // Brand matching
    if (keywords.brands.length > 0) {
        if (keywords.brands.includes(product.brand.toLowerCase())) {
            score += 8;
        }
    }

    // Feature matching
    const productFeatures = product.features.join(' ').toLowerCase() + ' ' + product.description.toLowerCase();
    keywords.features.forEach(feature => {
        if (productFeatures.includes(feature)) {
            score += 3;
        }
    });

    // Price matching
    const priceMatch = query.match(/under\s*\$?(\d+)/);
    if (priceMatch) {
        const maxPrice = parseInt(priceMatch[1]);
        if (product.price <= maxPrice) {
            score += 5;
        } else {
            score -= 3; // Penalize if over budget
        }
    }

    const overMatch = query.match(/over\s*\$?(\d+)/);
    if (overMatch) {
        const minPrice = parseInt(overMatch[1]);
        if (product.price >= minPrice) {
            score += 5;
        }
    }

    // Use case matching
    if (keywords.use.length > 0) {
        if (keywords.use.includes('programming') && product.category === 'laptop') {
            score += 6;
        }
        if (keywords.use.includes('gaming') && product.category === 'laptop') {
            score += 4;
        }
        if (keywords.use.includes('creative') && (product.category === 'tablet' || product.category === 'laptop')) {
            score += 5;
        }
        if (keywords.use.includes('work') && product.category === 'laptop') {
            score += 3;
        }
        if (keywords.use.includes('entertainment') && (product.category === 'tablet' || product.category === 'headphones')) {
            score += 3;
        }
    }

    // Budget vs premium matching
    if (keywords.price.includes('budget') || keywords.price.includes('cheap') || keywords.price.includes('affordable')) {
        if (product.price < 800) {
            score += 4;
        }
    }

    if (keywords.price.includes('premium') || keywords.price.includes('expensive')) {
        if (product.price > 1000) {
            score += 4;
        }
    }

    // Description relevance
    const descWords = product.description.toLowerCase().split(' ');
    keywords.categories.forEach(word => {
        if (descWords.includes(word)) {
            score += 2;
        }
    });

    // Boost for highly rated products
    if (product.rating >= 4.7) {
        score += 1;
    }

    return score;
};

// Simulate different AI API responses
const simulateAPIResponse = async (query) => {
    const apis = [
        'OpenAI GPT-4',
        'Minimax AI',
        'Google Gemini',
        'Anthropic Claude',
        'Cohere Command'
    ];

    const selectedAPI = apis[Math.floor(Math.random() * apis.length)];
    console.log(`🤖 Processing with ${selectedAPI}...`);

    // Simulate API call with network latency
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    return {
        api: selectedAPI,
        confidence: 0.85 + Math.random() * 0.15,
        processingTime: 1500 + Math.random() * 2000
    };
};

// Enhanced error handling with retry logic
const getAIRecommendationsWithRetry = async (userQuery, products, maxRetries = 3) => {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const apiResponse = await simulateAPIResponse(userQuery);
            console.log(`✅ ${apiResponse.api} processed query with ${Math.round(apiResponse.confidence * 100)}% confidence`);

            return await getAIRecommendations(userQuery, products);
        } catch (error) {
            lastError = error;
            console.warn(`⚠️ Attempt ${attempt} failed:`, error.message);

            if (attempt < maxRetries) {
                // Exponential backoff
                const delay = Math.pow(2, attempt) * 500;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError;
};

export { getAIRecommendations, getAIRecommendationsWithRetry };