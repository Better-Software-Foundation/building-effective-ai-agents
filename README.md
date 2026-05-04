# Building Effective AI Agents

Interactive React experiences inspired by Anthropic's "Building Effective AI Agents" guide.

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

## Deploying to Vercel

1. Push this project to `Better-Software-Foundation/building-effective-ai-agents`.
2. In Vercel, create a new project from that GitHub repository.
3. Accept the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

`vercel.json` includes a rewrite so direct visits to routes like `/summary` or `/decision` load correctly.
