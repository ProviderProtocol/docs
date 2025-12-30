// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightPageActions from 'starlight-page-actions';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightPageActions({
					baseUrl: 'https://providerprotocol.org/',
				}),
			],
			title: 'UPP-1.1',
			description: 'Unified Provider Protocol - A standard for multi-provider AI interoperability',
			social: [
				{ icon: 'github', label: 'Library', href: 'https://github.com/ProviderProtocol/ai' },
				{ icon: 'github', label: 'Spec', href: 'https://github.com/ProviderProtocol/Unified-Provider-Protocol' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'UPP-1.1 - Unified Provider Protocol',
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
					label: 'Specification',
					items: [
						{ label: 'Overview', slug: 'spec/overview' },
						{ label: 'Design Principles', slug: 'spec/design-principles' },
						{ label: 'Architecture', slug: 'spec/architecture' },
						{
							label: 'LLM',
							collapsed: true,
							items: [
								{ label: 'Interface', slug: 'spec/llm/interface' },
								{ label: 'Messages', slug: 'spec/llm/messages' },
								{ label: 'Streaming', slug: 'spec/llm/streaming' },
								{ label: 'Tools', slug: 'spec/llm/tools' },
								{ label: 'Structured Output', slug: 'spec/llm/structured' },
							],
						},
						{ label: 'Embedding', slug: 'spec/embedding/interface' },
						{ label: 'Image', slug: 'spec/image/interface' },
						{ label: 'Errors', slug: 'spec/errors' },
						{ label: 'Conformance', slug: 'spec/providers/conformance' },
					],
				},
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
					label: 'API Reference',
					items: [
						{ label: 'Overview', slug: 'api/overview' },
						{
							label: 'Core',
							collapsed: true,
							items: [
								{ label: 'llm()', slug: 'api/core/llm' },
								{ label: 'createProvider()', slug: 'api/core/provider' },
								{ label: 'Image', slug: 'api/core/image' },
							],
						},
						{
							label: 'Types',
							collapsed: true,
							items: [
								{ label: 'Messages', slug: 'api/types/messages' },
								{ label: 'Turn', slug: 'api/types/turn' },
								{ label: 'Thread', slug: 'api/types/thread' },
								{ label: 'Streaming', slug: 'api/types/stream' },
								{ label: 'Tool', slug: 'api/types/tool' },
							],
						},
						{
							label: 'Providers',
							collapsed: true,
							items: [
								{ label: 'Anthropic', slug: 'api/providers/anthropic' },
								{ label: 'OpenAI', slug: 'api/providers/openai' },
								{ label: 'OpenRouter', slug: 'api/providers/openrouter' },
								{ label: 'Google', slug: 'api/providers/google' },
								{ label: 'Ollama', slug: 'api/providers/ollama' },
							],
						},
						{ label: 'Errors', slug: 'api/errors' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Types', slug: 'reference/types' },
						{ label: 'Spec Compliance', slug: 'reference/spec-compliance' },
						{ label: 'Changelog', slug: 'reference/changelog' },
					],
				},
			],
		}),
	],
});
