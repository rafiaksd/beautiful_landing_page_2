# Beautiful blog

A clean and simple blog with a lime green theme and a white background. It’s designed to look fresh and modern.

[Inspiration video](https://www.youtube.com/watch?v=UP-o-gxbJLQ)

`npm install`

`npm run dev`


### install tailwind v4

`npm install -D tailwindcss@latest @tailwindcss/vite@latest`

in `vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});
```

in `src/index.css`

```css
@import "tailwindcss";
```

make <span style="color:#89F336; font-weight:bold; text-decoration:underline; font-style:italic;">lime green</span> primary color

in `src/index.css`

```css
@import "tailwindcss";

@theme {
  --color-primary: #89F336;
}
```
