<script lang="ts">
	import { portfolioData, navLinks } from '$lib/data/portfolio';

	$: name = portfolioData.personal.name;
</script>

<header class="mb-4 flex items-center justify-between rounded-card bg-primary p-6 md:p-8">
    <div class="text-xl md:text-2xl uppercase">
        {#each name.split(' ') as word, i}
            <span class="font-medium">{word}</span>
            {#if i < name.split(' ').length - 1}&nbsp;{/if}
        {/each}
    </div>
    <nav class="flex gap-4 md:gap-8 text-xs md:text-base">
        {#each navLinks as link}
            <a href={link.href} class="nav-link">{link.text}</a>
        {/each}
    </nav>
</header>