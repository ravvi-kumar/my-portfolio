<script lang="ts">
	import { Mail, Github, Linkedin, Twitter, User, Briefcase, Code } from 'lucide-svelte';

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<svelte:head>
	<title>Ravi Kumar - Software Developer</title>
	<meta name="description" content="Software Developer portfolio" />
</svelte:head>

<!-- Navigation Header -->
<header class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
	<nav class="container mx-auto px-6 py-4">
		<div class="flex justify-between items-center">
			<div class="text-white text-xl font-semibold">Ravi Kumar</div>
			<div class="hidden md:flex space-x-8">
				<button
					on:click={() => scrollToSection('about')}
					class="text-gray-300 hover:text-white transition-colors duration-200"
				>
					About Me
				</button>
				<button
					on:click={() => scrollToSection('projects')}
					class="text-gray-300 hover:text-white transition-colors duration-200"
				>
					Projects
				</button>
				<button
					on:click={() => scrollToSection('skills')}
					class="text-gray-300 hover:text-white transition-colors duration-200"
				>
					Skills
				</button>
				<button
					on:click={() => scrollToSection('contact')}
					class="text-gray-300 hover:text-white transition-colors duration-200"
				>
					Contact
				</button>
			</div>
		</div>
	</nav>
</header>

<!-- Hero Section -->
<section class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center pt-20">
	<div class="text-center">
		<h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
			Hi, I'm <span class="text-blue-400">Ravi Kumar</span>
		</h1>
		<p class="text-2xl md:text-3xl text-gray-300 mb-8">Software Developer</p>
		<div class="flex justify-center space-x-4">
			<button
				on:click={() => scrollToSection('contact')}
				class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
			>
				Get In Touch
			</button>
			<button
				on:click={() => scrollToSection('projects')}
				class="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-lg transition-all duration-200"
			>
				View Projects
			</button>
		</div>
	</div>
</section>

<!-- Feature Cards Section -->
<section class="py-20 bg-gray-800">
	<div class="container mx-auto px-6">
		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			<!-- About Me Card -->
			<div id="about" class="bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300 border border-gray-700">
				<div class="flex justify-center mb-6">
					<div class="bg-blue-600 p-4 rounded-full">
						<User class="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 class="text-2xl font-semibold text-white text-center mb-4">About Me</h3>
				<p class="text-gray-400 text-center leading-relaxed">
					Passionate software developer with expertise in building scalable web applications.
					I love turning ideas into reality through clean, efficient code.
				</p>
			</div>

			<!-- Projects Card -->
			<div id="projects" class="bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300 border border-gray-700">
				<div class="flex justify-center mb-6">
					<div class="bg-green-600 p-4 rounded-full">
						<Briefcase class="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 class="text-2xl font-semibold text-white text-center mb-4">Projects</h3>
				<p class="text-gray-400 text-center leading-relaxed">
					Explore my portfolio of projects showcasing various technologies and solutions.
					From web apps to mobile applications, see what I've built.
				</p>
			</div>

			<!-- Skills Card -->
			<div id="skills" class="bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300 border border-gray-700">
				<div class="flex justify-center mb-6">
					<div class="bg-purple-600 p-4 rounded-full">
						<Code class="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 class="text-2xl font-semibold text-white text-center mb-4">Skills</h3>
				<p class="text-gray-400 text-center leading-relaxed">
					Proficient in modern web technologies including React, Node.js, TypeScript,
					and cloud platforms. Always learning and adapting to new technologies.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-900">
	<div class="container mx-auto px-6 text-center">
		<h2 class="text-4xl font-bold text-white mb-8">Let's Connect</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
			I'm always interested in hearing about new opportunities and exciting projects.
			Feel free to reach out!
		</p>

		<div class="flex justify-center space-x-6 mb-12">
			<a
				href="mailto:ravi@example.com"
				class="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors duration-200"
				aria-label="Email"
			>
				<Mail class="w-6 h-6 text-white" />
			</a>
			<a
				href="https://github.com"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors duration-200"
				aria-label="GitHub"
			>
				<Github class="w-6 h-6 text-white" />
			</a>
			<a
				href="https://linkedin.com"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors duration-200"
				aria-label="LinkedIn"
			>
				<Linkedin class="w-6 h-6 text-white" />
			</a>
			<a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors duration-200"
				aria-label="Twitter"
			>
				<Twitter class="w-6 h-6 text-white" />
			</a>
		</div>

		<p class="text-gray-500">© 2024 Ravi Kumar. All rights reserved.</p>
	</div>
</section>
