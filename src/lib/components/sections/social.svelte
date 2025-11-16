<script lang="ts">
	import { portfolioData } from '$lib/data/portfolio';

	$: socialLinks = portfolioData.social;
</script>

<div class="rounded-card bg-primary p-4 md:p-6 flex flex-col gap-6 md:gap-8 min-h-[120px]">
    <!-- Social Links -->
    <div class="flex gap-6 md:gap-12 flex-wrap text-sm md:text-base font-light uppercase mt-auto">
        {#each socialLinks as link}
            <a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="social-link"
			>
				{link.displayText || link.platform}
			</a>
		{/each}
    </div>
</div>