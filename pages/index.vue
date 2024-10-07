<template>
	<TopBar class="xl:mb-[160px] mb-10" />
	<main class="flex flex-col items-center min-h-screen gap-10">
		<SectionHero class="xl:mb-[180px] mb-14" />
		<SectionAbout />
		<SectionSkills />
		<SectionWork />
		<SectionProjects />
		<SectionServices />
		<SectionContacts />
		<SectionFooter />
	</main>
</template>
<script setup>
useHead({
	title: 'Diego Imbriani - Fractional CTO',
	meta: [
		{ name: 'description', content: 'Website of Diego Imbriani, with my work experience, skills and contact details.' },
	],
})

if (import.meta.client) {
	const sections = document.querySelectorAll('section');
	let latestSectionIndex = -1;

	window.addEventListener('scroll', function () {

		// detect the "section" element that is currently in view		
		let currentSection = sections[0];
		let currentSectionIndex = -1;
		for (let i = 0; i < sections.length; i++) {
			if (window.scrollY >= (sections[i].offsetTop - 400)) {
				currentSection = sections[i];
				currentSectionIndex = i;
			}
		}

		if (currentSectionIndex === latestSectionIndex) return;

		console.log(currentSectionIndex, latestSectionIndex);

		latestSectionIndex = currentSectionIndex;
		// remove thee "section--active" class from all sections
		sections.forEach(section => section.classList.remove('section--active'));

		// add the "active" class to the current section
		currentSection.classList.add('section--active');
	});
}
</script>