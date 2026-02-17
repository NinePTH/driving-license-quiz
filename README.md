# Quiz Application

A clean and maintainable quiz application built with React, TypeScript, and Vite.

## Project Structure

```
src/
├── components/          # React components
│   ├── QuizContainer.tsx    # Reusable quiz component
│   ├── QuizSelection.tsx    # Quiz selection screen
│   ├── Quiz.tsx             # Legacy quiz component
│   └── Footer.tsx           # Footer component
├── config/              # Configuration files
│   └── quizzes.config.ts    # Quiz configurations
├── data/                # Quiz data files
│   ├── BigData-M2-JJ.ts
│   ├── BigData-M2-jtm.ts
│   ├── OS-M1.ts
│   ├── OS-M3.ts
│   ├── MIC-M1.ts
│   ├── MIC-M2.ts
│   ├── MIC-M3.ts
│   ├── MIC-M3-ChatGPT.ts
│   └── MIC-M3-MIX.ts
├── types/               # TypeScript type definitions
│   └── quiz.types.ts
├── utils/               # Utility functions
│   └── helpers.ts
└── App.tsx              # Main application component
```

## Features

- **Config-driven architecture**: Add new quizzes by simply updating the config file
- **Reusable components**: Single Quiz component handles all quiz types
- **Type safety**: Full TypeScript support with proper interfaces
- **Lazy loading**: Quiz data is loaded on-demand for better performance
- **Shuffled questions**: Questions and options are randomized each session
- **Clean code**: Separated concerns with utilities, types, and config

## Adding a New Quiz

1. Add your question data file in `src/data/`:
```typescript
export const questionData = [
  {
    question: "Your question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: "Option 1",
    image: "/images/optional-image.png" // optional
  }
];
```

2. Add the quiz configuration in `src/config/quizzes.config.ts`:
```typescript
{
  id: "your-quiz-id",
  title: "Your Quiz Title",
  dataImport: () => import("../data/YourQuizData"),
}
```

That's it! The quiz will automatically appear in the selection screen.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **ESLint** - Code linting
