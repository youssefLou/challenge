// svelte.config.js
import { defineConfig } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-static';

export default defineConfig({
  // Other SvelteKit options...
  kit: {
    adapter: adapter(),
  },
});
