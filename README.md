# Building Effective AI Agents

An interactive guide that began as an adaptation of Anthropic's "Building Effective AI Agents" and is now expanding toward a synthesized experience across Anthropic and OpenAI guidance on building agents.

## Live site

- Public site: [better-software-foundation.com](https://better-software-foundation.com)

## Routes

- `/` Home page
- `/summary` Executive summary
- `/patterns` Architecture patterns
- `/decision` Decision framework
- `/foundations` Foundations & Guardrails roadmap preview
- `/compare` Comparative Guide roadmap preview

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

This project currently presents the source material through three live experiences and two planned synthesis routes:

- `Executive Summary`: a compressed, high-signal walkthrough of the main argument
- `Architecture Patterns`: an interactive comparison of agent design options
- `Decision Framework`: a guided chooser for selecting an architecture approach
- `Foundations & Guardrails`: planned implementation-focused route drawing more heavily from OpenAI
- `Comparative Guide`: planned crosswalk route comparing Anthropic and OpenAI directly

`vercel.json` includes a rewrite so direct visits to routes like `/summary` or `/decision` load correctly.
