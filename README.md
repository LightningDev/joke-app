# Joke Generator

This is a simple Next.js web application that generates random jokes. It fetches jokes from an API and displays them on an ok UI. 

## Why Next.js?

Next.js enhances React with features such as:

- **Server-Side Rendering (SSR)**: SSR allows your app to render HTML pages on the server before sending them to the client. This results in faster initial page loads and better SEO, as search engine crawlers can more effectively index server-rendered content.

- **Static Site Generation (SSG)**: Similar to SSR, SSG allows you to generate HTML pages at build time, which can then be served by a CDN. This is great for pages that don't change often.

- **API Routes**: Next.js allows you to easily create API endpoints within the same project. This means you don't need to set up a separate API server.

- **Built-in Routing**: Unlike vanilla React, Next.js comes with built-in routing, no additional libraries like `react-router` are required.

- **Automatic Code Splitting**: This ensures that each page only loads the JavaScript that it needs, resulting in faster page loads.

Compared to a client-side only React app, a Next.js app can deliver a better user experience due to faster page loads (thanks to SSR and automatic code splitting), as well as improved SEO. For more information, visit here: https://nextjs.org/docs/getting-started/react-essentials

## SSR vs Client-Side Rendering (CSR)

- **Performance and User Experience**: With SSR, the server sends a fully rendered page to the client, so the user can start viewing the page while the JavaScript bundle is still loading. With CSR, the user has to wait for the entire JavaScript bundle to load and the app to initialize before they can view and interact with the page.

- **SEO**: Server-rendered pages are more SEO-friendly because search engine crawlers can more easily parse the fully rendered HTML sent by the server. Some crawlers struggle to accurately index client-rendered content.

## Technologies

- Next.js
- Tailwind CSS

## Features

- Display a random joke
- Option to show/hide punchline
- Regenerate joke button

## How to use

1. Clone this repository: `git clone https://github.ss.australiacloud.com.au/nt0001/nextjs-joke`
2. Install dependencies: `npm install` or `yarn install`
3. Run the application: `npm run dev` or `yarn dev`

## License

MIT
