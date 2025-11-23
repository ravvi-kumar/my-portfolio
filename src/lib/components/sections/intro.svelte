<script lang="ts">
	import DecorativeIcon from '$lib/components/common/DecorativeIcon.svelte';
</script>

<div
	class="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-card bg-primary p-4 md:min-h-[429px] md:p-6"
>
	<!-- Decorative flower icon -->
	<div class="absolute top-6 right-6 md:top-8 md:right-8">
		<DecorativeIcon size="medium" opacity={0.5} />
	</div>
	<h1 class="max-w-[475px] text-3xl leading-tight md:text-5xl md:leading-[100%] lg:text-[56px]">
		<span class="font-bold">Software Developer</span>
		<span class="text-2xl font-light italic md:text-3xl lg:text-[44px]"> with</span>
		<span class="font-light italic"> AI-Driven Mindset</span>
	</h1>
</div>
