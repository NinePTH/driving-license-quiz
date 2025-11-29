# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-11-29

### Added
- TypeScript type definitions in `src/types/quiz.types.ts`
- Utility functions in `src/utils/helpers.ts` (shuffleArray, normalizeString)
- Centralized quiz configuration in `src/config/quizzes.config.ts`
- New reusable `QuizContainer` component
- Comprehensive project documentation in README.md
- REFACTORING_SUMMARY.md documenting all changes

### Changed
- Refactored `QuizSelection` to use config-driven approach
- Standardized all data file exports to use `export const questionData`
- Cleaned up `App.tsx` by removing commented code
- Updated README with new project structure and usage instructions

### Removed
- 8 duplicate quiz component files (replaced with single reusable component):
  - `BigData-M2-JJ.tsx`
  - `BigData-M2-Jtm.tsx`
  - `OS-Exam-M1.tsx`
  - `OS-Exam-M3.tsx`
  - `MIC-Quize-M3.tsx`
  - `MIC-Quize-M3-ChatGPT.tsx`
  - `MIC-Quiz-M3-Mix.tsx`

### Fixed
- Export statements in `MIC-M3.ts` (was missing `export`)
- Consistent naming and structure across all components

### Performance
- Implemented lazy loading for quiz data
- Reduced bundle size by removing duplicate code
- Enabled automatic code splitting via Vite

## [1.0.0] - Previous Version

### Features
- Multiple quiz support (Big Data, OS, MIC)
- Question shuffling
- Option shuffling
- Quiz navigation
- Basic UI with footer
