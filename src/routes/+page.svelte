<script lang="ts">
	import About from '$lib/components/sections/about.svelte';
	import Contact from '$lib/components/sections/contact.svelte';
	import Header from '$lib/components/sections/header.svelte';
	import Intro from '$lib/components/sections/intro.svelte';
	import Portrait from '$lib/components/sections/portrait.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import Social from '$lib/components/sections/social.svelte';

	// Portfolio homepage for Ravi Chopra
</script>

<div class="min-h-screen bg-background p-4 md:p-6">
	<div class="mx-auto max-w-[1440px]">
		<!-- Top Header - Full Width -->
		<Header />

		<!-- Main Content - Two Columns -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-3">
			<!-- First Column (Left) - Intro, Image, About, Contact -->
			<div class="space-y-4 md:col-span-4 xl:col-span-2">
				<!-- First Section: Intro and Image -->
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<!-- Intro (2/3 width) -->
					<div class="md:col-span-2">
						<Intro />
					</div>

					<!-- Image (1/3 width) -->
					<div class="md:col-span-1">
						<Portrait />
					</div>
				</div>

				<!-- Second Section: About and Contact -->
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<!-- About -->
					<div class="md:col-span-1">
						<About />
					</div>

					<!-- Contact -->
					<div class="md:col-span-1">
						<Contact />
					</div>
				</div>
			</div>

			<!-- Second Column (Right) - Projects and Socials -->
			<div class="space-y-4 md:col-span-4 xl:col-span-1">
				<!-- Projects -->
				<Projects />

				<!-- Socials -->
				<div class="md:col-span-1">
					<Social />
				</div>
			</div>
		</div>
	</div>
</div>
