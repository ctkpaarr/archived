import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: 'https://archive.md',
	integrations: [mdx(), sitemap()],
	output: "server",
	adapter: nodejs({
		mode: "standalone",
	}),
	server: {
		port: 8080
	},
	vite: {
    	ssr: {
      		noExternal: ['path-to-regexp'],
    	},
  	},
	host: true
});
