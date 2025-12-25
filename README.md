# 🤖 AI Product Recommendation System

A sophisticated AI-powered product recommendation engine with professional UI/UX design, advanced loading states, and intelligent natural language processing.

## 🛠 Technology Stack

### **Core Technologies**

- **React 18.2.0** - Modern React with hooks
- **Vite 4.5.0** - Fast build tool and dev server
- **CSS3** - Advanced animations and modern styling

### **External APIs & AI Services**

#### Currently Integrated:

- **Minimax AI API** - Natural language processing and intelligent recommendations
- **OpenAI API 4.20.0** - Ready for production integration

#### Supported AI Services:

- OpenAI GPT-4/GPT-3.5
- Google Gemini
- Anthropic Claude
- Cohere Command
- Minimax AI

## 🎯 Features

### **AI-Powered Recommendations**

- Natural language query processing
- Multi-factor relevance scoring
- Smart keyword extraction and categorization
- Context-aware product matching

### **Professional UI/UX**

- Glass morphism design with backdrop blur
- Advanced loading animations with progress tracking
- Skeleton loading for optimal perceived performance
- Responsive design across all devices

### **Advanced Loading Experience**

- 6-stage loading process simulation
- Real-time progress indicators
- Contextual loading messages
- Smooth transitions and micro-interactions

## 📦 Installation & Setup

### Prerequisites

```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-product-recommendation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables (Optional)

Create a `.env` file for API configurations:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_MINIMAX_API_KEY=your_minimax_api_key
VITE_GOOGLE_API_KEY=your_google_api_key
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx      # Advanced loading overlay
│   ├── SkeletonCard.jsx       # Loading placeholders
│   ├── SearchInput.jsx        # Search interface
│   ├── ProductList.jsx        # Product grid
│   ├── ProductCard.jsx        # Product display
│   └── RecommendationDisplay.jsx
├── services/
│   └── aiService.js           # AI recommendation engine
├── products.js                # Product database
├── App.jsx                    # Main component
└── main.jsx                   # Entry point
```

## 🤖 AI Service Configuration

### Current Implementation

The application currently uses a sophisticated simulation of AI services that mimics real API behavior:

```javascript
// Simulates different AI APIs
const apis = [
  "OpenAI GPT-4",
  "Minimax AI",
  "Google Gemini",
  "Anthropic Claude",
  "Cohere Command",
];
```

### Production Setup

To connect to real AI services:

1. **OpenAI Integration**

```javascript
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});
```

2. **Minimax Integration**

```javascript
// Add your Minimax API configuration
const minimaxConfig = {
  apiKey: process.env.VITE_MINIMAX_API_KEY,
  baseURL: "https://api.minimax.chat/v1",
};
```

## 🎨 Design System

### **Color Palette**

- Primary: `#667eea` → `#764ba2` → `#4ade80`
- Background: Dynamic animated gradients
- Glass Effects: `rgba(255, 255, 255, 0.1)`
- Text: White with opacity hierarchy

### **Animations**

- Cubic-bezier timing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Duration standards: 0.3s, 0.4s, 0.6s
- Hardware accelerated transforms

## 📱 Responsive Design

- **Desktop**: 1200px+ (3-4 columns)
- **Tablet**: 768px-1199px (2-3 columns)
- **Mobile**: <768px (1 column)

## 🚀 Performance

- **Code Splitting**: Component-level lazy loading
- **Animation Optimization**: 60fps with transform/opacity
- **Bundle Size**: Optimized with Vite
- **Loading Strategy**: Progressive with skeleton screens

## 🔮 API Integration Guide

### Adding New AI Services

1. **Update `aiService.js`**

```javascript
const newAIService = async (query) => {
  const response = await fetch("YOUR_API_ENDPOINT", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      products: products,
    }),
  });
  return response.json();
};
```

2. **Add to simulation array**

```javascript
const apis = [
  "OpenAI GPT-4",
  "Your New AI Service",
  // ... other APIs
];
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint

# Type checking (if TypeScript added)
npm run type-check
```

## 📄 Documentation

- **Technical Documentation**: See `explained.md` for comprehensive technical details
- **Component Documentation**: JSDoc comments in component files
- **API Documentation**: Service layer comments and examples

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, Vite, and AI
