<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { portfolioData } from '$lib/data/portfolio';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{`${portfolioData.personal.name} - ${portfolioData.personal.title}`}</title>
	<meta name="description" content={portfolioData.personal.description} />
	<meta name="author" content={portfolioData.personal.name} />
	<meta
		name="keywords"
		content="software developer, web development, AI, JavaScript, TypeScript, Svelte, portfolio, {portfolioData
			.personal.name}"
	/>

	<!-- Favicon -->
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
