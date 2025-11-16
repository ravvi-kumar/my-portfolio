<script lang="ts">
  import ArrowIcon from "$lib/components/common/ArrowIcon.svelte";
  import { portfolioData } from '$lib/data/portfolio';

  $: email = portfolioData.personal.email;
</script>

<div id="contact" class="rounded-card bg-primary p-4 md:p-6 relative min-h-[280px] md:min-h-[351px] flex flex-col justify-between">
    <div class="flex items-start justify-between">
        <p class="text-sm md:text-base font-light">Have some<br />questions?</p>
        <a href="mailto:{email}" class="group contact-email" aria-label="Contact via email">
            <ArrowIcon size="medium" />
        </a>
    </div>
    
    <h2 class="text-4xl md:text-[55px] font-medium leading-tight">Contact me</h2>
</div>