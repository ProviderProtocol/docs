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
					label: 'SDK Reference',
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'sdk' },
						{
							label: '@providerprotocol/ai',
							collapsed: true,
							items: [
								{ label: 'llm()', slug: 'sdk/core/functions/llm' },
								{ label: 'createProvider()', slug: 'sdk/core/functions/createprovider' },
								{
									label: 'Classes',
									collapsed: true,
									items: [
										{ label: 'Thread', slug: 'sdk/core/classes/thread' },
										{ label: 'Message', slug: 'sdk/core/classes/message' },
										{ label: 'UserMessage', slug: 'sdk/core/classes/usermessage' },
										{ label: 'AssistantMessage', slug: 'sdk/core/classes/assistantmessage' },
										{ label: 'ToolResultMessage', slug: 'sdk/core/classes/toolresultmessage' },
										{ label: 'Image', slug: 'sdk/core/classes/image' },
										{ label: 'UPPError', slug: 'sdk/core/classes/upperror' },
									],
								},
								{
									label: 'Interfaces',
									collapsed: true,
									autogenerate: { directory: 'sdk/core/interfaces' },
								},
								{
									label: 'Types',
									collapsed: true,
									autogenerate: { directory: 'sdk/core/type-aliases' },
								},
							],
						},
						{
							label: '/anthropic',
							collapsed: true,
							autogenerate: { directory: 'sdk/anthropic' },
						},
						{
							label: '/openai',
							collapsed: true,
							autogenerate: { directory: 'sdk/openai' },
						},
						{
							label: '/google',
							collapsed: true,
							autogenerate: { directory: 'sdk/google' },
						},
						{
							label: '/ollama',
							collapsed: true,
							autogenerate: { directory: 'sdk/ollama' },
						},
						{
							label: '/openrouter',
							collapsed: true,
							autogenerate: { directory: 'sdk/openrouter' },
						},
						{
							label: '/xai',
							collapsed: true,
							autogenerate: { directory: 'sdk/xai' },
						},
						{
							label: '/http',
							collapsed: true,
							autogenerate: { directory: 'sdk/http' },
						},
					],
				},
				{
					label: 'Agents Reference',
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'agents' },
						{
							label: '@providerprotocol/agents',
							collapsed: true,
							items: [
								{ label: 'agent()', slug: 'agents/core/functions/agent' },
								{ label: 'AgentState', slug: 'agents/core/classes/agentstate' },
								{
									label: 'Interfaces',
									collapsed: true,
									autogenerate: { directory: 'agents/core/interfaces' },
								},
								{
									label: 'Types',
									collapsed: true,
									autogenerate: { directory: 'agents/core/type-aliases' },
								},
							],
						},
						{
							label: '/execution',
							collapsed: true,
							autogenerate: { directory: 'agents/execution' },
						},
						{
							label: '/middleware',
							collapsed: true,
							autogenerate: { directory: 'agents/middleware' },
						},
						{
							label: '/thread-tree',
							collapsed: true,
							autogenerate: { directory: 'agents/thread-tree' },
						},
						{
							label: '/checkpoint',
							collapsed: true,
							autogenerate: { directory: 'agents/checkpoint' },
						},
					],
				},
				{
					label: 'Specification',
					collapsed: true,
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
								{ label: 'Turns', slug: 'spec/llm/turns' },
								{ label: 'Threads', slug: 'spec/llm/threads' },
								{ label: 'Streaming', slug: 'spec/llm/streaming' },
								{ label: 'Tools', slug: 'spec/llm/tools' },
								{ label: 'Structured Output', slug: 'spec/llm/structured' },
							],
						},
						{ label: 'Embedding', slug: 'spec/embedding/interface' },
						{ label: 'Image', slug: 'spec/image/interface' },
						{ label: 'Errors', slug: 'spec/errors' },
						{
							label: 'Providers',
							collapsed: true,
							items: [
								{ label: 'Conformance', slug: 'spec/providers/conformance' },
								{ label: 'Implementation Guide', slug: 'spec/providers/implementation' },
							],
						},
						{ label: 'Security', slug: 'spec/security' },
						{ label: 'Types', slug: 'spec/types' },
						{ label: 'Changelog', slug: 'spec/changelog' },
					],
				},
			],
		}),
	],
});
