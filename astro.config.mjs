// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeObsidian from 'starlight-theme-obsidian';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian()],
			title: 'WAGMI playbook',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Roadmap',
					autogenerate: { directory: 'roadmap' },
				},
			],
		}),
	],
});
