<script lang="ts">
  import DecorativeIcon from "$lib/components/common/DecorativeIcon.svelte";
</script>

<div class="rounded-card bg-primary p-4 md:p-6 relative overflow-hidden min-h-[320px] md:min-h-[429px] flex flex-col justify-end">
    <!-- Decorative flower icon -->
    <div class="absolute top-6 md:top-8 right-6 md:right-8">
        <DecorativeIcon size="medium" opacity={0.5} />
    </div>
    <h1 class="text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[100%] max-w-[475px]">
        <span class="font-bold">Software Developer</span>
        <span class="font-light italic text-2xl md:text-3xl lg:text-[44px]"> with</span>
        <span class="font-light italic"> AI-Driven Mindset</span>
    </h1>
</div>