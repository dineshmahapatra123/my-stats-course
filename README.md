# 60 Days of Data Science

A premium, interactive learning application for mastering Data and Statistics in 60 days.

## Features
- **Curriculum**: 60-day structured path from Foundations to Mastery.
- **Interactive**: Visualizations and progress tracking.
- **AI-Integrated**: Daily prompts to enhance learning with AI assistants.
- **Responsive**: Beautiful glassmorphic design that works on mobile and desktop.

## Stack
- React + Vite
- Framer Motion (Animations)
- Recharts (Data Visualization)
- Lucide React (Icons)
- Vanilla CSS + Variables (Styling)

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173`

## How to Deploy to GitHub Pages

This repository is configured with a GitHub Action for automatic deployment.

1. Create a new repository on GitHub.
2. Push this code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Go to your Repository Settings -> **Pages**.
4. In "Build and deployment", select **GitHub Actions** as the source.
5. The Action will trigger automatically on push.
6. **Important**: In `vite.config.js`, update the `base` property to match your repository name:
   ```js
   base: '/YOUR_REPO_NAME/',
   ```
