<template>
	<SectionRow>
		<template #section-title>{{ $t('skills.title') }}</template>
		<template #content v-if="locale === 'en'">
			With extensive experience in full-stack development and cloud architecture, I have honed a diverse set of skills essential for
			building robust and scalable solutions. Below are some of my key competencies:

			<ul class="list-disc mt-6 pl-8">
				<li>
					<strong>Full-Stack Programming</strong>: Proficient in back-end and front-end development using
					technologies like Node.js, Java, Laravel, Vue, React, and TypeScript, enabling me to build complete,
					end-to-end solutions.
				</li>
				<li>
					<strong>Cloud Deployment, Kubernetes, CI/CD</strong>: Skilled in deploying cloud-native
					applications on AWS, orchestrating Kubernetes clusters, and setting up CI/CD pipelines for automated workflows.
				</li>
				<li>
					<strong>System Architecture & Design Patterns</strong>: Expertise in designing scalable architectures
					and applying design patterns such as MVC, microservices, event-driven architecture, and domain-driven design.
				</li>
				<li>
					<strong>Database & Data Management</strong>: Proficient in SQL (MySQL, PostgreSQL, TimescaleDB) and NoSQL
					(MongoDB, Redis) databases, with experience in data modeling and optimization for high-performance systems.
				</li>
				<li>
					<strong>Technical Leadership</strong>: Experience in guiding development teams, conducting code reviews,
					and ensuring the delivery of high-quality solutions through best practices and mentoring.
				</li>
			</ul>
		</template>
		<template #content v-if="locale === 'it'">
			Ho una grande esperienza nello sviluppo full-stack e nell'architettura cloud, ho affinato un insieme diversificato
			di competenze per costruire soluzioni robuste e scalabili:

			<ul class="list-disc mt-6 pl-8">
				<li>
					<strong>Programmazione Full-Stack</strong>: Competenza nello sviluppo back-end e front-end
					utilizzando tecnologie come Node.js, Java, Laravel, Vue, React e TypeScript, che mi consente di costruire
					soluzioni complete e end-to-end.
				</li>
				<li>
					<strong>Deploy su Cloud, Kubernetes, CI/CD</strong>: Abilità nel deployment di applicazioni
					cloud-native su AWS, orchestrazione di cluster Kubernetes e configurazione di pipeline CI/CD per flussi di
					lavoro automatizzati.
				</li>
				<li>
					<strong>Architettura di Sistema & Design Pattern</strong>: Esperienza nella progettazione di architetture
					scalabili e nell'applicazione di design pattern come MVC, microservizi, architettura event-driven e domain-driven design.
				</li>
				<li>
					<strong>Database & Gestione Dati</strong>: Competenza in database SQL (MySQL, PostgreSQL, TimescaleDB) e NoSQL
					(MongoDB, Redis), con esperienza in modellazione dei dati e ottimizzazione per sistemi ad alte prestazioni.
				</li>
				<li>
					<strong>Leadership Tecnica</strong>: Esperienza nella guida di team di sviluppo, code review,
					e nel garantire la consegna di soluzioni di alta qualità attraverso best practices e mentoring.
				</li>
			</ul>
		</template>

	</SectionRow>
</template>
<script setup>
const { locale } = useI18n()
</script>
<style scoped>
li {
	@apply mb-6;
}
</style>
