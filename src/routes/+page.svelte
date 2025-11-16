<script lang="ts">
	import About from "$lib/components/about.svelte";
	import Contact from "$lib/components/contact.svelte";
import Header from "$lib/components/header.svelte";
	import Intro from "$lib/components/intro.svelte";
	import Portrait from "$lib/components/portrait.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Social from "$lib/components/social.svelte";

	// Portfolio homepage for Julia Huang
</script>

<div class="min-h-screen bg-background p-4 md:p-6">
	<div class="max-w-[1440px] mx-auto">
		<!-- Top Header - Full Width -->
		<Header />

		<!-- Main Content - Two Columns -->
		<div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-4">
			<!-- First Column (Left) - Intro, Image, About, Contact -->
			<div class="md:col-span-4 xl:col-span-2 space-y-4">
				<!-- First Section: Intro and Image -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<!-- Intro (2/3 width) -->
					<div class="md:col-span-2">
						<Intro/>
					</div>

					<!-- Image (1/3 width) -->
					<div class="md:col-span-1">
						<Portrait/>
					</div>
				</div>

				<!-- Second Section: About and Contact -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<!-- About -->
					<div class="md:col-span-1">
						<About/>
					</div>

					<!-- Contact -->
					<div class="md:col-span-1">
						<Contact/>
					</div>
				</div>
			</div>

			<!-- Second Column (Right) - Projects and Socials -->
			<div class="md:col-span-4 xl:col-span-1 space-y-4">
				<!-- Projects -->
				<Projects/>

				<!-- Socials -->
				<div class="md:col-span-1">
					<Social/>
				</div>
			</div>
		</div>
	</div>
</div>
