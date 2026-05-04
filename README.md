# Building Effective AI Agents

An interactive view of Anthropic's "Building Effective AI Agents" eBook, packaged as three React experiences.

## Live site

- Public site: [better-software-foundation.com](https://better-software-foundation.com)

## Routes

- `/` Home page
- `/summary` Executive summary
- `/patterns` Architecture patterns
- `/decision` Decision framework

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project overview

This project presents the source material through three public-facing experiences:

- `Executive Summary`: a compressed, high-signal walkthrough of the main argument
- `Architecture Patterns`: an interactive comparison of agent design options
- `Decision Framework`: a guided chooser for selecting an architecture approach

`vercel.json` includes a rewrite so direct visits to routes like `/summary` or `/decision` load correctly.
