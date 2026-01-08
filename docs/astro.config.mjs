// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightPageActions from 'starlight-page-actions';

// https://astro.build/config
export default defineConfig({
	site: 'https://providerprotocol.org',
	integrations: [
		starlight({
			plugins: [
				starlightPageActions({
					baseUrl: 'https://providerprotocol.org/',
				}),
			],
			title: 'Provider Protocol',
			description: 'Unified Provider Protocol - A standard for multi-provider AI interoperability',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ProviderProtocol' },
				{ icon: 'rocket', label: 'AI SDK', href: 'https://www.npmjs.com/package/@providerprotocol/ai' },
				{ icon: 'puzzle', label: 'Agents SDK', href: 'https://www.npmjs.com/package/@providerprotocol/agents' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				// Terminal theme meta
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#0a0a0a',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'color-scheme',
						content: 'dark',
					},
				},
				// Open Graph
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'Provider Protocol - Terminal Docs',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'A first-generation standard for simplifying AI inference and enabling multi-provider interoperability.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				// Preconnect to Google Fonts
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
			],
			components: {
				// Override components for terminal styling
				Head: './src/components/Head.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{ label: 'Introduction', slug: 'introduction' },
				{
					label: 'Guide',
					items: [
						{ label: 'Quick Start', slug: 'guide/quick-start' },
						{ label: 'Chat Application', slug: 'guide/chat-application' },
						{ label: 'Configuration', slug: 'guide/configuration' },
						{ label: 'Providers', slug: 'guide/core-providers' },
						{ label: 'Turns & History', slug: 'guide/turns' },
						{ label: 'Threads', slug: 'guide/threads' },
						{ label: 'Implementing Providers', slug: 'guide/providers' },
					],
				},
				{
					label: '@providerprotocol/ai',
					collapsed: false,
					autogenerate: { directory: 'ai' },
				},
				{
					label: '@providerprotocol/agents',
					collapsed: false,
					autogenerate: { directory: 'agents' },
				},
				{
					label: 'UPP Specification',
					collapsed: true,
					autogenerate: { directory: 'upp' },
				},
				{
					label: 'UAP Specification',
					collapsed: true,
					autogenerate: { directory: 'uap' },
				},
			],
			// Disable default favicon to use terminal-themed one
			favicon: '/favicon.svg',
			// Disable theme toggle UI but keep dark mode
			// (terminal is always dark - switching to light gives amber theme)
		}),
	],
});
