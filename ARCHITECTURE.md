# Architecture Overview

## Component Flow

```
┌─────────────────────────────────────────────────────┐
│                     App.tsx                         │
│                                                     │
│  ┌──────────────────┐    ┌──────────────────┐    │
│  │ QuizSelection    │    │     Footer       │    │
│  └──────────────────┘    └──────────────────┘    │
└─────────────────────────────────────────────────────┘
                │
                │ uses config from
                ↓
      ┌─────────────────────┐
      │ quizzes.config.ts   │
      │  - Quiz metadata    │
      │  - Data imports     │
      └─────────────────────┘
                │
                │ loads data & renders
                ↓
      ┌─────────────────────┐
      │  QuizContainer.tsx  │
      │  - Single reusable  │
      │  - Handles state    │
      │  - Shuffles Q&A     │
      └─────────────────────┘
                │
                │ uses utilities
                ↓
      ┌─────────────────────┐
      │    helpers.ts       │
      │  - shuffleArray()   │
      │  - normalizeString()│
      └─────────────────────┘
```

## Data Flow

```
User clicks quiz
       ↓
QuizSelection reads config
       ↓
Lazy loads question data
       ↓
Passes to QuizContainer
       ↓
QuizContainer shuffles questions/options
       ↓
User answers questions
       ↓
Validates answer (normalized)
       ↓
Shows next question or completion
```

## File Dependencies

```
App.tsx
 ├── QuizSelection.tsx
 │    ├── quizzes.config.ts
 │    │    └── data/*.ts (lazy loaded)
 │    ├── QuizContainer.tsx
 │    │    ├── types/quiz.types.ts
 │    │    └── utils/helpers.ts
 │    └── types/quiz.types.ts
 └── Footer.tsx
```

## Adding a New Quiz

```
Step 1: Create data file
src/data/NewQuiz.ts
  ↓
  export const questionData = [...]

Step 2: Add to config
src/config/quizzes.config.ts
  ↓
  {
    id: "new-quiz",
    title: "New Quiz",
    dataImport: () => import("../data/NewQuiz")
  }

Done! ✅
```

## Benefits of This Architecture

### 🎯 Separation of Concerns
- **Data**: All quiz questions in `/data`
- **Logic**: Quiz behavior in `/components`
- **Config**: Quiz metadata in `/config`
- **Types**: TypeScript definitions in `/types`
- **Utils**: Shared functions in `/utils`

### 🚀 Scalability
- Add unlimited quizzes without touching component code
- Each quiz is lazy-loaded (performance)
- Config-driven means less manual coding

### 🛡️ Type Safety
- All props are typed
- Questions have defined structure
- No runtime type errors

### ♻️ Reusability
- Single Quiz component for all quizzes
- Shared utilities (shuffle, normalize)
- Consistent UX across all quizzes

### 🧪 Testability
- Pure utility functions easy to test
- Component logic separated from data
- Mock configs for testing different scenarios
