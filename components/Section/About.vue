<template>
	<SectionRow>
		<template #section-title>{{ $t('about.title') }}</template>
		<template #title>Senior Full Stack Developer | Cloud & System Design</template>
		<template #content v-if="locale === 'en'">
			As a Senior Full Stack Developer with extensive experience in <strong>Cloud & System Design</strong>, I specialize in building scalable, high-performance applications.
			<br />
			I have deep expertise in <strong>designing and implementing end-to-end solutions</strong>, from backend architecture to frontend development, with a strong focus on cloud infrastructure, microservices, and distributed systems.
		</template>
		<template #content v-if="locale === 'it'">
			Come Senior Full Stack Developer con ampia esperienza in <strong>Cloud & System Design</strong>, mi specializzo nella realizzazione di applicazioni scalabili e ad alte prestazioni.
			<br />
			Ho una profonda esperienza nella <strong>progettazione e implementazione di soluzioni end-to-end</strong>, dall'architettura backend allo sviluppo frontend, con particolare focus su infrastrutture cloud, microservizi e sistemi distribuiti.
		</template>
	</SectionRow>
</template>
<script setup>
const { locale } = useI18n()
</script>
