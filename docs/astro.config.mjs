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
			logo: {
				src: './src/assets/logo.png',
				alt: 'Provider Protocol',
			},
			description: 'Unified Provider Protocol - A standard for multi-provider AI interoperability',
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ProviderProtocol' },
				{ icon: 'rocket', label: 'AI SDK', href: 'https://www.npmjs.com/package/@providerprotocol/ai' },
				{ icon: 'puzzle', label: 'Agents SDK', href: 'https://www.npmjs.com/package/@providerprotocol/agents' },
			],
			customCss: [
				'@fontsource/inter/400.css',
				'@fontsource/inter/500.css',
				'@fontsource/inter/600.css',
				'@fontsource/inter/700.css',
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/500.css',
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						href: '/apple-touch-icon.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'UPP-1.2 - Unified Provider Protocol',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'A first-generation standard for simplifying AI inference and enabling multi-provider interoperability.',
					},
				},
			],
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
				{ label: 'UPP Specification', slug: 'upp/full' },
				{ label: 'UAP Specification', slug: 'uap/full' },
			],
		}),
	],
});
