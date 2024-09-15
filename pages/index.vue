<template>
	<TopBar class="xl:mb-[160px] mb-10" />
	<main class="flex flex-col items-center min-h-screen gap-10">
		<SectionHero class="xl:mb-[180px] mb-14" />
		<SectionAbout />
		<SectionSkills />
		<SectionWork />
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
</script>