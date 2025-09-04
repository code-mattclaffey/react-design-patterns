# 🎮 React Design Patterns

A comprehensive interactive course teaching React design patterns through Pokemon-themed examples. Learn advanced React patterns with hands-on exercises and real-world applications.

## 🚀 What's Inside

This repository contains a complete React design patterns course built with:
- **React 19** with TypeScript
- **Storybook** for interactive lessons and exercises
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Pokemon theme** to make learning engaging

## 📚 Course Structure

### 🥉 Bronze Level (Fundamentals)
- **Conditional Rendering** - Dynamic UI based on state
- **Props Combination** - Grouping related props for cleaner APIs
- **React Hooks** - Modern state management and side effects
- **Presentational & Container** - Separating UI from business logic
- **Slots Pattern** - Flexible component composition

### 🥈 Silver Level (Intermediate)
- **Compound Components** - Building flexible, composable APIs
- **Controlled Components** - Managing form state externally
- **Uncontrolled Components** - Letting components manage their own state
- **FACC Pattern** - Function as Child Components
- **Render Children** - Advanced component composition
- **Render Props** - Sharing logic between components
- **Provider Pattern** - Global state management with Context
- **State Reducer** - Complex state logic management
- **Portals** - Rendering outside component hierarchy
- **Polymorphic Components** - Flexible component APIs

### 🥇 Gold Level (Advanced)
- **Higher Order Components** - Component enhancement and reuse
- **Suspense & Lazy Loading** - Code splitting and async components
- **Headless Components** - Logic without UI for maximum flexibility

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/code-mattclaffey/react-design-patterns.git

# Navigate to project
cd react-design-patterns

# Install dependencies
npm install

# Start Storybook (recommended)
npm run storybook

# Or start development server
npm run dev
```

### Using Storybook (Recommended)

The course is designed to be experienced through Storybook:

```bash
npm run storybook
```

Navigate through the lessons in the sidebar:
1. **Introduction** - Course overview and setup
2. **Lessons** - Interactive exercises organized by difficulty
3. **Each lesson includes:**
   - Theory and examples
   - Exercise files with guided tasks
   - Final implementations
   - When to use each pattern

## 📁 Project Structure

```
src/
├── course/
│   ├── 01-introduction/          # Course welcome and overview
│   └── 02-lessons/
│       ├── 01-Bronze/            # Fundamental patterns
│       ├── 02-Silver/            # Intermediate patterns
│       └── 03-Gold/              # Advanced patterns
├── shared/
│   ├── components/               # Reusable UI components
│   ├── hooks/                    # Custom React hooks
│   └── modules/                  # Business logic modules
config/                           # Build and linting configuration
```

## 🎯 Learning Approach

Each lesson follows a consistent structure:
1. **Problem Introduction** - Real-world scenario
2. **Pattern Explanation** - Theory with code examples
3. **Hands-on Exercise** - Guided implementation
4. **Final Solution** - Complete working example
5. **When to Use** - Practical guidance for real projects

## 🧪 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook (recommended)

# Building
npm run build            # Build for production
npm run build-storybook  # Build Storybook for deployment

# Quality
npm run lint             # Run ESLint
npm run test             # Run Storybook tests
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Add tests for new patterns
5. Submit a pull request

## 📝 Feedback

Found an issue or have suggestions? Please [open an issue](https://github.com/code-mattclaffey/react-design-patterns/issues/new) on GitHub.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy learning! 🚀** Start your React design patterns journey with `npm run storybook`
