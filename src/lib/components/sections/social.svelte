<script lang="ts">
	import { portfolioData } from '$lib/data/portfolio';

	$: socialLinks = portfolioData.social;
</script>

<div class="flex min-h-[120px] flex-col gap-6 rounded-card bg-primary p-4 md:gap-8 md:p-6">
	<!-- Social Links -->
	<div class="mt-auto flex flex-wrap gap-6 text-sm font-light uppercase md:gap-12 md:text-base">
		{#each socialLinks as link}
			<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
				{link.displayText || link.platform}
			</a>
		{/each}
	</div>
</div>
