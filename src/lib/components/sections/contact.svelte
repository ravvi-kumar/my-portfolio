<script lang="ts">
	import ArrowIcon from '$lib/components/common/ArrowIcon.svelte';
	import { portfolioData } from '$lib/data/portfolio';

	$: email = portfolioData.personal.email;
</script>

<div
	id="contact"
	class="relative flex min-h-[280px] flex-col justify-between rounded-card bg-primary p-4 md:min-h-[351px] md:p-6"
>
	<div class="flex items-start justify-between">
		<p class="text-sm font-light md:text-base">Have some<br />questions?</p>
		<a href="mailto:{email}" class="group contact-email" aria-label="Contact via email">
			<ArrowIcon size="medium" />
		</a>
	</div>

	<h2 class="text-4xl leading-tight font-medium md:text-[55px]">Contact me</h2>
</div>
